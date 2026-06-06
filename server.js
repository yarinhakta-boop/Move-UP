const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { DatabaseSync } = require("node:sqlite");

const rootDir = __dirname;
const dataDir = process.env.FITCHECK_DATA_DIR || path.join(rootDir, "data");
const dbPath = process.env.FITCHECK_DB_PATH || path.join(dataDir, "fitcheck.sqlite");
const port = Number(process.env.PORT || 4177);
const sessionMaxAgeSeconds = 60 * 60 * 24 * 14;
const bodyLimitBytes = 8 * 1024 * 1024;

fs.mkdirSync(path.dirname(dbPath), { recursive: true });

const db = new DatabaseSync(dbPath);

db.exec(`
  PRAGMA foreign_keys = ON;

  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS profiles (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    data_criacao TEXT NOT NULL,
    peso_inicial REAL,
    altura REAL,
    idade INTEGER,
    meta_peso REAL,
    FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS weight_logs (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    data TEXT NOT NULL,
    peso REAL NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE (user_id, data)
  );

  CREATE TABLE IF NOT EXISTS workout_logs (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    data TEXT NOT NULL,
    treino_nome TEXT NOT NULL,
    concluido INTEGER NOT NULL DEFAULT 0,
    observacoes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS checkins (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    data TEXT NOT NULL,
    medida_abdominal REAL,
    medida_quadril REAL,
    energia INTEGER,
    dor INTEGER,
    sono REAL,
    observacoes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE (user_id, data)
  );

  CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    created_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS password_resets (
    token TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    used_at TEXT,
    created_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS user_data (
    user_id TEXT PRIMARY KEY,
    data TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE INDEX IF NOT EXISTS idx_weight_logs_user_data ON weight_logs(user_id, data);
  CREATE INDEX IF NOT EXISTS idx_workout_logs_user_data ON workout_logs(user_id, data);
  CREATE INDEX IF NOT EXISTS idx_checkins_user_data ON checkins(user_id, data);

  INSERT OR IGNORE INTO profiles (id, nome, email, data_criacao)
  SELECT id, name, email, created_at FROM users;
`);

function nowIso() {
  return new Date().toISOString();
}

function addSeconds(seconds) {
  return new Date(Date.now() + seconds * 1000).toISOString();
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function publicUser(row) {
  return {
    id: row.id,
    name: row.name,
    email: row.email
  };
}

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password, storedHash) {
  const [salt, hash] = String(storedHash || "").split(":");
  if (!salt || !hash) return false;

  const candidate = crypto.scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "hex");
  return expected.length === candidate.length && crypto.timingSafeEqual(expected, candidate);
}

function parseCookies(req) {
  return String(req.headers.cookie || "")
    .split(";")
    .map((item) => item.trim())
    .filter(Boolean)
    .reduce((cookies, item) => {
      const index = item.indexOf("=");
      if (index === -1) return cookies;
      const key = item.slice(0, index);
      const value = item.slice(index + 1);
      cookies[key] = decodeURIComponent(value);
      return cookies;
    }, {});
}

function buildSessionCookie(value, maxAge = sessionMaxAgeSeconds) {
  const parts = [
    `fitcheck_session=${encodeURIComponent(value)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${maxAge}`
  ];

  if (process.env.NODE_ENV === "production") {
    parts.push("Secure");
  }

  return parts.join("; ");
}

function sendJson(res, status, payload, headers = {}) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...headers
  });
  res.end(JSON.stringify(payload));
}

function sendError(res, status, message) {
  sendJson(res, status, { message });
}

async function readJson(req) {
  let body = "";

  for await (const chunk of req) {
    body += chunk;
    if (Buffer.byteLength(body) > bodyLimitBytes) {
      const error = new Error("O envio passou do limite permitido.");
      error.statusCode = 413;
      throw error;
    }
  }

  if (!body.trim()) return {};

  try {
    return JSON.parse(body);
  } catch {
    const error = new Error("JSON inválido.");
    error.statusCode = 400;
    throw error;
  }
}

function cleanupExpired() {
  const now = nowIso();
  db.prepare("DELETE FROM sessions WHERE expires_at <= ?").run(now);
  db.prepare("DELETE FROM password_resets WHERE expires_at <= ? OR used_at IS NOT NULL").run(now);
}

function getCurrentUser(req) {
  const token = parseCookies(req).fitcheck_session;
  if (!token) return null;

  const row = db.prepare(`
    SELECT users.id, users.name, users.email
    FROM sessions
    INNER JOIN users ON users.id = sessions.user_id
    WHERE sessions.id = ? AND sessions.expires_at > ?
  `).get(token, nowIso());

  return row ? publicUser(row) : null;
}

function requireUser(req, res) {
  const user = getCurrentUser(req);
  if (!user) {
    sendError(res, 401, "Entre na conta para acessar esta área.");
    return null;
  }
  return user;
}

function createSession(res, userId) {
  const token = crypto.randomBytes(32).toString("hex");
  const createdAt = nowIso();
  db.prepare("INSERT INTO sessions (id, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)")
    .run(token, userId, addSeconds(sessionMaxAgeSeconds), createdAt);
  return buildSessionCookie(token);
}

function validatePassword(password) {
  if (String(password || "").length < 8) {
    return "A senha precisa ter pelo menos 8 caracteres.";
  }
  return "";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function safeJsonParse(value, fallback = {}) {
  try {
    return JSON.parse(value) || fallback;
  } catch {
    return fallback;
  }
}

function toNumberOrNull(value) {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function todayDateKey() {
  return new Date().toISOString().slice(0, 10);
}

function normalizeProgressData(progress) {
  const source = progress && typeof progress === "object" ? progress : {};
  const measurements = Array.isArray(source.measurements) ? source.measurements : [];

  return {
    startDate: source.startDate || "",
    initialWeight: toNumberOrNull(source.initialWeight),
    goalWeight: toNumberOrNull(source.goalWeight),
    measurements: measurements
      .filter((item) => item?.date && Number.isFinite(Number(item.weight)))
      .map((item) => ({
        date: item.date,
        weight: Number(item.weight),
        waist: toNumberOrNull(item.waist),
        hip: toNumberOrNull(item.hip),
        arm: toNumberOrNull(item.arm),
        pain: toNumberOrNull(item.pain),
        energy: toNumberOrNull(item.energy),
        sleep: toNumberOrNull(item.sleep),
        notes: String(item.notes || "").trim()
      }))
      .sort((a, b) => a.date.localeCompare(b.date))
  };
}

function getLegacyState(userId) {
  const row = db.prepare("SELECT data FROM user_data WHERE user_id = ?").get(userId);
  return row ? safeJsonParse(row.data, {}) : {};
}

function withTransaction(callback) {
  db.exec("BEGIN IMMEDIATE");

  try {
    const result = callback();
    db.exec("COMMIT");
    return result;
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
}

function upsertProfile(user, body) {
  const existing = db.prepare("SELECT * FROM profiles WHERE id = ?").get(user.id);
  const authRow = db.prepare("SELECT created_at FROM users WHERE id = ?").get(user.id);
  const assessment = body.assessment && typeof body.assessment === "object" ? body.assessment : {};
  const progress = normalizeProgressData(body.progress);

  const nome = String(assessment.name || existing?.nome || user.name || "").trim();
  const dataCriacao = existing?.data_criacao || authRow?.created_at || nowIso();
  const pesoInicial = progress.initialWeight ?? toNumberOrNull(assessment.weight) ?? existing?.peso_inicial ?? null;
  const altura = toNumberOrNull(assessment.height) ?? existing?.altura ?? null;
  const idade = toNumberOrNull(assessment.age) ?? existing?.idade ?? null;
  const metaPeso = progress.goalWeight ?? toNumberOrNull(assessment.goalWeight) ?? existing?.meta_peso ?? null;

  db.prepare(`
    INSERT INTO profiles (id, nome, email, data_criacao, peso_inicial, altura, idade, meta_peso)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      nome = excluded.nome,
      email = excluded.email,
      peso_inicial = excluded.peso_inicial,
      altura = excluded.altura,
      idade = excluded.idade,
      meta_peso = excluded.meta_peso
  `).run(user.id, nome, user.email, dataCriacao, pesoInicial, altura, idade, metaPeso);
}

function replaceWeightLogs(userId, progress) {
  const normalized = normalizeProgressData(progress);
  const insert = db.prepare(`
    INSERT INTO weight_logs (id, user_id, data, peso)
    VALUES (?, ?, ?, ?)
  `);

  db.prepare("DELETE FROM weight_logs WHERE user_id = ?").run(userId);

  normalized.measurements.forEach((measurement) => {
    insert.run(crypto.randomUUID(), userId, measurement.date, measurement.weight);
  });
}

function replaceCheckins(userId, body) {
  const progress = normalizeProgressData(body.progress);
  const checkinDates = Array.isArray(body.checkins) ? body.checkins : [];
  const rowsByDate = new Map();

  checkinDates
    .filter(Boolean)
    .forEach((date) => {
      rowsByDate.set(date, {
        data: date,
        medida_abdominal: null,
        medida_quadril: null,
        energia: null,
        dor: null,
        sono: null,
        observacoes: null
      });
    });

  progress.measurements.forEach((measurement) => {
    const current = rowsByDate.get(measurement.date) || {
      data: measurement.date,
      medida_abdominal: null,
      medida_quadril: null,
      energia: null,
      dor: null,
      sono: null,
      observacoes: null
    };

    current.medida_abdominal = measurement.waist ?? current.medida_abdominal;
    current.medida_quadril = measurement.hip ?? current.medida_quadril;
    current.energia = measurement.energy ?? current.energia;
    current.dor = measurement.pain ?? current.dor;
    current.sono = measurement.sleep ?? current.sono;
    current.observacoes = measurement.notes || current.observacoes;
    rowsByDate.set(measurement.date, current);
  });

  const insert = db.prepare(`
    INSERT INTO checkins (
      id, user_id, data, medida_abdominal, medida_quadril, energia, dor, sono, observacoes
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  db.prepare("DELETE FROM checkins WHERE user_id = ?").run(userId);

  [...rowsByDate.values()]
    .sort((a, b) => a.data.localeCompare(b.data))
    .forEach((row) => {
      insert.run(
        crypto.randomUUID(),
        userId,
        row.data,
        row.medida_abdominal,
        row.medida_quadril,
        row.energia,
        row.dor,
        row.sono,
        row.observacoes
      );
    });
}

function replaceWorkoutLogs(userId, body) {
  const completed = new Set(Array.isArray(body.completed) ? body.completed : []);
  const exercises = Array.isArray(body.workoutPlan?.exercises) ? body.workoutPlan.exercises : [];
  const insert = db.prepare(`
    INSERT INTO workout_logs (id, user_id, data, treino_nome, concluido, observacoes)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  const date = todayDateKey();

  db.prepare("DELETE FROM workout_logs WHERE user_id = ?").run(userId);

  exercises.forEach((exercise) => {
    const observacoes = JSON.stringify({
      day_id: exercise.id || null,
      mode: body.workoutPlan?.mode || null,
      tag: exercise.tag || null,
      minutes: exercise.minutes ?? null,
      detail: exercise.detail || null,
      cardio: exercise.cardio || null
    });

    insert.run(
      crypto.randomUUID(),
      userId,
      date,
      String(exercise.name || exercise.id || "Treino"),
      completed.has(exercise.id) || completed.has(exercise.name) ? 1 : 0,
      observacoes
    );
  });
}

function saveStructuredUserData(user, body) {
  withTransaction(() => {
    upsertProfile(user, body);
    replaceWeightLogs(user.id, body.progress);
    replaceCheckins(user.id, body);
    replaceWorkoutLogs(user.id, body);

    db.prepare(`
      INSERT INTO user_data (user_id, data, updated_at)
      VALUES (?, ?, ?)
      ON CONFLICT(user_id) DO UPDATE SET
        data = excluded.data,
        updated_at = excluded.updated_at
    `).run(user.id, JSON.stringify(body), nowIso());
  });
}

function buildStructuredUserData(user) {
  const legacy = getLegacyState(user.id);
  const profile = db.prepare("SELECT * FROM profiles WHERE id = ?").get(user.id);
  const weightRows = db.prepare("SELECT data, peso FROM weight_logs WHERE user_id = ? ORDER BY data").all(user.id);
  const workoutRows = db.prepare("SELECT data, treino_nome, concluido, observacoes FROM workout_logs WHERE user_id = ? ORDER BY data").all(user.id);
  const checkinRows = db.prepare(`
    SELECT data, medida_abdominal, medida_quadril, energia, dor, sono, observacoes
    FROM checkins
    WHERE user_id = ?
    ORDER BY data
  `).all(user.id);
  const legacyProgress = normalizeProgressData(legacy.progress);
  const checkinsByDate = new Map(checkinRows.map((row) => [row.data, row]));

  const progress = {
    ...legacyProgress,
    initialWeight: profile?.peso_inicial ?? legacyProgress.initialWeight,
    goalWeight: profile?.meta_peso ?? legacyProgress.goalWeight,
    measurements: weightRows.length
      ? weightRows.map((row) => {
        const checkin = checkinsByDate.get(row.data);
        return {
          date: row.data,
          weight: row.peso,
          waist: checkin?.medida_abdominal ?? null,
          hip: checkin?.medida_quadril ?? null,
          arm: legacyProgress.measurements.find((item) => item.date === row.data)?.arm ?? null,
          pain: checkin?.dor ?? null,
          energy: checkin?.energia ?? null,
          sleep: checkin?.sono ?? null,
          notes: checkin?.observacoes || ""
        };
      })
      : legacyProgress.measurements
  };

  let assessment = legacy.assessment || null;
  if (assessment && profile) {
    assessment = {
      ...assessment,
      name: profile.nome || assessment.name,
      age: profile.idade ?? assessment.age,
      height: profile.altura ?? assessment.height,
      weight: profile.peso_inicial ?? assessment.weight,
      goalWeight: profile.meta_peso ?? assessment.goalWeight
    };
  }

  const completed = workoutRows.length
    ? workoutRows
      .filter((row) => Number(row.concluido) === 1)
      .map((row) => {
        const observacoes = safeJsonParse(row.observacoes, {});
        const planMatch = legacy.workoutPlan?.exercises?.find((exercise) => exercise.name === row.treino_nome);
        return observacoes.day_id || planMatch?.id || row.treino_nome;
      })
    : (Array.isArray(legacy.completed) ? legacy.completed : []);

  return {
    ...legacy,
    completed,
    checkins: checkinRows.length ? checkinRows.map((row) => row.data) : (Array.isArray(legacy.checkins) ? legacy.checkins : []),
    assessment,
    progress,
    workoutPlan: legacy.workoutPlan || null
  };
}

function ensureProfilesForExistingUsers() {
  db.exec(`
    INSERT OR IGNORE INTO profiles (id, nome, email, data_criacao)
    SELECT id, name, email, created_at FROM users;
  `);
}

function migrateLegacyUserData() {
  const rows = db.prepare(`
    SELECT user_data.user_id, user_data.data, users.name, users.email
    FROM user_data
    INNER JOIN users ON users.id = user_data.user_id
  `).all();

  rows.forEach((row) => {
    const user = { id: row.user_id, name: row.name, email: row.email };
    const body = safeJsonParse(row.data, {});
    saveStructuredUserData(user, body);
  });
}

ensureProfilesForExistingUsers();
migrateLegacyUserData();

async function handleApi(req, res, pathname) {
  cleanupExpired();

  if (pathname === "/api/auth/me" && req.method === "GET") {
    const user = getCurrentUser(req);
    if (!user) return sendError(res, 401, "Sessão não encontrada.");
    return sendJson(res, 200, { user });
  }

  if (pathname === "/api/auth/register" && req.method === "POST") {
    const body = await readJson(req);
    const name = String(body.name || "").trim();
    const email = normalizeEmail(body.email);
    const password = String(body.password || "");
    const passwordError = validatePassword(password);

    if (!name) return sendError(res, 400, "Informe seu nome.");
    if (!validateEmail(email)) return sendError(res, 400, "Informe um e-mail válido.");
    if (passwordError) return sendError(res, 400, passwordError);

    const exists = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
    if (exists) return sendError(res, 409, "Já existe uma conta com este e-mail.");

    const user = {
      id: crypto.randomUUID(),
      name,
      email
    };

    const createdAt = nowIso();
    db.prepare("INSERT INTO users (id, name, email, password_hash, created_at) VALUES (?, ?, ?, ?, ?)")
      .run(user.id, user.name, user.email, hashPassword(password), createdAt);
    db.prepare("INSERT INTO profiles (id, nome, email, data_criacao) VALUES (?, ?, ?, ?)")
      .run(user.id, user.name, user.email, createdAt);

    const cookie = createSession(res, user.id);
    return sendJson(res, 201, { user }, { "Set-Cookie": cookie });
  }

  if (pathname === "/api/auth/login" && req.method === "POST") {
    const body = await readJson(req);
    const email = normalizeEmail(body.email);
    const password = String(body.password || "");
    const row = db.prepare("SELECT id, name, email, password_hash FROM users WHERE email = ?").get(email);

    if (!row || !verifyPassword(password, row.password_hash)) {
      return sendError(res, 401, "E-mail ou senha incorretos.");
    }

    const cookie = createSession(res, row.id);
    return sendJson(res, 200, { user: publicUser(row) }, { "Set-Cookie": cookie });
  }

  if (pathname === "/api/auth/logout" && req.method === "POST") {
    const token = parseCookies(req).fitcheck_session;
    if (token) {
      db.prepare("DELETE FROM sessions WHERE id = ?").run(token);
    }

    return sendJson(res, 200, { ok: true }, { "Set-Cookie": buildSessionCookie("", 0) });
  }

  if (pathname === "/api/auth/forgot-password" && req.method === "POST") {
    const body = await readJson(req);
    const email = normalizeEmail(body.email);
    const row = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
    let resetToken = null;

    if (row) {
      resetToken = crypto.randomBytes(24).toString("hex");
      db.prepare("INSERT INTO password_resets (token, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)")
        .run(resetToken, row.id, addSeconds(60 * 30), nowIso());
    }

    return sendJson(res, 200, {
      message: "Se o e-mail estiver cadastrado, um código de recuperação foi gerado.",
      resetToken
    });
  }

  if (pathname === "/api/auth/reset-password" && req.method === "POST") {
    const body = await readJson(req);
    const token = String(body.token || "").trim();
    const password = String(body.newPassword || "");
    const passwordError = validatePassword(password);

    if (!token) return sendError(res, 400, "Informe o código de recuperação.");
    if (passwordError) return sendError(res, 400, passwordError);

    const reset = db.prepare(`
      SELECT user_id
      FROM password_resets
      WHERE token = ? AND used_at IS NULL AND expires_at > ?
    `).get(token, nowIso());

    if (!reset) return sendError(res, 400, "Código inválido ou expirado.");

    db.prepare("UPDATE users SET password_hash = ? WHERE id = ?").run(hashPassword(password), reset.user_id);
    db.prepare("UPDATE password_resets SET used_at = ? WHERE token = ?").run(nowIso(), token);
    db.prepare("DELETE FROM sessions WHERE user_id = ?").run(reset.user_id);
    return sendJson(res, 200, { message: "Senha redefinida. Entre novamente com a nova senha." });
  }

  if (pathname === "/api/data" && req.method === "GET") {
    const user = requireUser(req, res);
    if (!user) return;

    return sendJson(res, 200, { data: buildStructuredUserData(user) });
  }

  if (pathname === "/api/data" && req.method === "PUT") {
    const user = requireUser(req, res);
    if (!user) return;

    const body = await readJson(req);
    saveStructuredUserData(user, body);

    return sendJson(res, 200, { ok: true });
  }

  return sendError(res, 404, "Rota não encontrada.");
}

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ico": "image/x-icon"
};

function serveStatic(req, res, pathname) {
  const cleanPath = pathname === "/" ? "index.html" : decodeURIComponent(pathname).replace(/^\/+/, "");
  const filePath = path.resolve(rootDir, cleanPath);
  const rootWithSep = `${rootDir}${path.sep}`;

  if (filePath !== rootDir && !filePath.startsWith(rootWithSep)) {
    res.writeHead(403);
    res.end("Acesso negado.");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      res.writeHead(404);
      res.end("Arquivo não encontrado.");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const type = contentTypes[extension] || "application/octet-stream";
    const cacheControl = [".html", ".css", ".js"].includes(extension)
      ? "no-cache"
      : "public, max-age=3600";
    res.writeHead(200, {
      "Content-Type": type,
      "Cache-Control": cacheControl
    });
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
    if (url.pathname.startsWith("/api/")) {
      await handleApi(req, res, url.pathname);
      return;
    }

    serveStatic(req, res, url.pathname);
  } catch (error) {
    const status = error.statusCode || 500;
    const message = status === 500 ? "Erro interno do servidor." : error.message;
    if (status === 500) console.error(error);
    sendError(res, status, message);
  }
});

server.listen(port, () => {
  console.log(`Move Up rodando em http://localhost:${port}`);
});
