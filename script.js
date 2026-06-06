const recommendedBasePlan = [
  {
    id: "segunda",
    name: "Segunda - MMII + esteira",
    detail: "Pernas, glúteos e quadríceps com máquinas e baixo impacto.",
    tag: "55 min",
    minutes: 55,
    cardio: "Esteira 25 min pelo protocolo completo.",
    items: [
      ["Leg press 45", "3x10-12", "75-90s", "Sentar e levantar de cadeira alta", "Pés alinhados, joelhos não entram para dentro, sem travar a lombar."],
      ["Cadeira extensora", "3x12", "60s", "Extensão de joelho sentado sem carga", "Suba controlado e pare se houver dor na frente do joelho."],
      ["Cadeira abdutora", "3x15", "45-60s", "Abdução lateral em pé segurando apoio", "Tronco firme, movimento curto e sem jogar o quadril."],
      ["Elevação pélvica", "3x10-12", "60s", "Ponte de glúteos no chão", "Não hiperestenda a lombar; suba apertando glúteos."]
    ]
  },
  {
    id: "terca",
    name: "Terça - MMSS + esteira leve",
    detail: "Costas, ombros e braços para firmeza e gasto calórico.",
    tag: "45 min",
    minutes: 45,
    cardio: "Esteira leve 10-15 min: inclinação 0-3, velocidade 2-3 km/h.",
    items: [
      ["Puxada frente na polia", "3x12", "60-75s", "Remada com toalha presa com segurança", "Peito aberto, ombros longe das orelhas, sem puxar com o pescoço."],
      ["Remada sentada", "3x12", "60s", "Remada com garrafas ou mochila leve", "Coluna neutra e abdome ativo, sem balançar o tronco."],
      ["Desenvolvimento de ombros", "3x10", "60s", "Elevar garrafas leves até a linha dos ombros", "Evite arquear a lombar; carga leve e controle."],
      ["Tríceps na polia", "3x12-15", "45-60s", "Tríceps banco adaptado ou extensão com garrafa", "Cotovelos próximos ao corpo; sem dor no ombro."]
    ]
  },
  {
    id: "quarta",
    name: "Quarta - descanso ativo",
    detail: "Calistenia adaptada, mobilidade e caminhada leve.",
    tag: "25 min",
    minutes: 25,
    cardio: "Caminhada leve 10-20 min se estiver sem dor.",
    items: [
      ["Sentar e levantar assistido", "2x8-10", "60s", "Usar cadeira mais alta e apoio das mãos", "Sem cair na cadeira; joelhos acompanham a ponta dos pés."],
      ["Flexão na parede", "2x10-12", "45s", "Afastar ou aproximar os pés da parede", "Corpo alinhado, sem forçar punhos ou lombar."],
      ["Marcha parada sem impacto", "3x30-45s", "45s", "Marcha sentado em cadeira", "Eleve pouco o joelho se quadril ou lombar incomodar."],
      ["Mobilidade leve", "5-8 min", "Livre", "Alongamentos sentados", "Sem insistir em dor; movimentos lentos."]
    ]
  },
  {
    id: "quinta",
    name: "Quinta - MMII + esteira",
    detail: "Posterior, glúteos e estabilidade com baixo impacto.",
    tag: "55 min",
    minutes: 55,
    cardio: "Esteira 25 min pelo protocolo completo.",
    items: [
      ["Mesa ou cadeira flexora", "3x12", "60s", "Flexão de joelho em pé segurando apoio", "Evite tirar o quadril do lugar; movimento lento."],
      ["Leg press com amplitude curta", "3x10", "90s", "Agachamento parcial em cadeira", "Use amplitude sem dor; lombar apoiada."],
      ["Panturrilha sentada ou em pé", "3x15", "45s", "Panturrilha segurando apoio", "Suba e desça devagar, sem quicar."],
      ["Ponte de glúteos", "3x12", "60s", "Mesmo exercício no colchonete", "Se a lombar reclamar, reduza amplitude."]
    ]
  },
  {
    id: "sexta",
    name: "Sexta - MMSS + esteira leve",
    detail: "Peito, costas e braços com carga moderada.",
    tag: "45 min",
    minutes: 45,
    cardio: "Esteira leve 10-15 min: inclinação 0-3, velocidade 2-3 km/h.",
    items: [
      ["Chest press ou supino máquina", "3x10-12", "60-75s", "Flexão na parede", "Cotovelos confortáveis, ombros baixos e lombar apoiada."],
      ["Remada baixa", "3x12", "60s", "Remada com mochila leve", "Puxe com costas, não com impulso."],
      ["Rosca bíceps", "3x12-15", "45-60s", "Rosca com garrafas", "Cotovelos parados e punhos neutros."],
      ["Elevação lateral leve", "2-3x12", "45s", "Elevação lateral com garrafas pequenas", "Suba até onde não doer; pés firmes no chão."]
    ]
  },
  {
    id: "sabado",
    name: "Sábado - funcional em casa",
    detail: "Calistenia militar adaptada, sem pular e sem impacto.",
    tag: "35 min",
    minutes: 35,
    cardio: "Opcional: caminhada leve 10 min após o circuito.",
    items: [
      ["Circuito: marcha + parede + cadeira", "3 voltas de 30s cada", "60-90s", "Fazer tudo sentado se necessário", "Ritmo moderado, sem prender a respiração."],
      ["Step baixo ou toque no degrau", "2x8 por perna", "60s", "Tocar a ponta do pé em um livro grosso", "Degrau baixo, apoio por perto, sem dor no joelho."],
      ["Prancha inclinada na parede", "3x20-30s", "45s", "Prancha com mãos na bancada", "Corpo reto e abdome ativo, sem afundar a lombar."],
      ["Alongamento leve", "6-8 min", "Livre", "Sentado ou deitado", "Alongar panturrilha, posterior, peitoral e costas sem dor."]
    ]
  },
  {
    id: "domingo",
    name: "Domingo - descanso completo",
    detail: "Recuperação muscular, sono, hidratação e preparo da próxima semana.",
    tag: "0 min",
    minutes: 0,
    cardio: "Sem cardio obrigatório.",
    items: [
      ["Descanso completo", "Dia livre", "Livre", "Caminhada curta apenas se quiser", "Se houver dor persistente, reduza volume na semana seguinte."],
      ["Alongamento leve opcional", "5-10 min", "Livre", "Respiração e mobilidade sentada", "Não force amplitude; descanso também é treino."]
    ]
  }
];

const weekDays = [
  { id: "segunda", label: "Segunda", defaultFocus: "lowerA" },
  { id: "terca", label: "Terça", defaultFocus: "upperA" },
  { id: "quarta", label: "Quarta", defaultFocus: "active" },
  { id: "quinta", label: "Quinta", defaultFocus: "lowerB" },
  { id: "sexta", label: "Sexta", defaultFocus: "upperB" },
  { id: "sabado", label: "Sábado", defaultFocus: "functional" },
  { id: "domingo", label: "Domingo", defaultFocus: "rest" }
];

const focusLabels = {
  lowerA: "MMII: quadríceps e glúteos",
  lowerB: "MMII: posterior e estabilidade",
  upperA: "MMSS: costas, ombros e tríceps",
  upperB: "MMSS: peito, costas e bíceps",
  cardio: "Cardio de baixo impacto",
  active: "Descanso ativo",
  functional: "Funcional adaptado",
  rest: "Descanso completo"
};

const exerciseList = document.querySelector("#exerciseList");
const completedCount = document.querySelector("#completedCount");
const activeMinutes = document.querySelector("#activeMinutes");
const streakCount = document.querySelector("#streakCount");
const todayStatus = document.querySelector("#todayStatus");
const resetWorkout = document.querySelector("#resetWorkout");
const checkinButton = document.querySelector("#checkinButton");
const historyList = document.querySelector("#historyList");
const timerDisplay = document.querySelector("#timerDisplay");
const timerProgress = document.querySelector("#timerProgress");
const customSeconds = document.querySelector("#customSeconds");
const startTimer = document.querySelector("#startTimer");
const pauseTimer = document.querySelector("#pauseTimer");
const resetTimer = document.querySelector("#resetTimer");
const timerMessage = document.querySelector("#timerMessage");
const quickTimeButtons = document.querySelectorAll("[data-seconds]");
const assessmentForm = document.querySelector("#assessmentForm");
const assessmentResults = document.querySelector("#assessmentResults");
const authGatedSections = document.querySelectorAll(".requires-auth");
const assessmentGatedSections = document.querySelectorAll(".requires-assessment");
const planGatedSections = document.querySelectorAll(".requires-plan");
const allGatedSections = [...new Set([...authGatedSections, ...assessmentGatedSections, ...planGatedSections])];
const progressForm = document.querySelector("#progressForm");
const progressResults = document.querySelector("#progressResults");
const weightChart = document.querySelector("#weightChart");
const measurementList = document.querySelector("#measurementList");
const completedWorkoutList = document.querySelector("#completedWorkoutList");
const checkinHistoryList = document.querySelector("#checkinHistoryList");
const beforePhotoPreview = document.querySelector("#beforePhotoPreview");
const afterPhotoPreview = document.querySelector("#afterPhotoPreview");
const beforePhotoInput = document.querySelector("#beforePhotoInput");
const afterPhotoInput = document.querySelector("#afterPhotoInput");
const beforePhotoDate = document.querySelector("#beforePhotoDate");
const afterPhotoDate = document.querySelector("#afterPhotoDate");
const beforePhotoNote = document.querySelector("#beforePhotoNote");
const afterPhotoNote = document.querySelector("#afterPhotoNote");
const saveBeforePhoto = document.querySelector("#saveBeforePhoto");
const saveAfterPhoto = document.querySelector("#saveAfterPhoto");
const removeBeforePhoto = document.querySelector("#removeBeforePhoto");
const removeAfterPhoto = document.querySelector("#removeAfterPhoto");
const photoMessage = document.querySelector("#photoMessage");
const recommendedMode = document.querySelector("#recommendedMode");
const customMode = document.querySelector("#customMode");
const recommendedBuilder = document.querySelector("#recommendedBuilder");
const customWorkoutForm = document.querySelector("#customWorkoutForm");
const customWeek = document.querySelector("#customWeek");
const recommendationSummary = document.querySelector("#recommendationSummary");
const generateRecommendedPlan = document.querySelector("#generateRecommendedPlan");
const builderStatus = document.querySelector("#builderStatus");
const accountTabs = document.querySelector(".account-tabs");
const showLogin = document.querySelector("#showLogin");
const showRegister = document.querySelector("#showRegister");
const showRecover = document.querySelector("#showRecover");
const loginForm = document.querySelector("#loginForm");
const registerForm = document.querySelector("#registerForm");
const recoverForm = document.querySelector("#recoverForm");
const resetForm = document.querySelector("#resetForm");
const accountSession = document.querySelector("#accountSession");
const accountName = document.querySelector("#accountName");
const accountEmail = document.querySelector("#accountEmail");
const accountMessage = document.querySelector("#accountMessage");
const logoutButton = document.querySelector("#logoutButton");

let currentUser = null;
let completed = [];
let checkins = [];
let assessment = null;
let progress = createEmptyProgress();
let progressPhotos = createEmptyPhotos();
let workoutPlan = null;
let exercises = recommendedBasePlan;
let totalSeconds = 60;
let remainingSeconds = 60;
let timerId = null;
let activeAccountMode = "login";

function createEmptyProgress() {
  return {
    startDate: "",
    initialWeight: null,
    goalWeight: null,
    measurements: []
  };
}

function createEmptyPhotos() {
  return {
    before: null,
    after: null
  };
}

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  };

  return String(value ?? "").replace(/[&<>"']/g, (char) => map[char]);
}

async function api(path, options = {}) {
  const headers = options.body ? { "Content-Type": "application/json" } : {};
  const response = await fetch(path, {
    method: options.method || "GET",
    credentials: "same-origin",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  const text = await response.text();
  const payload = text ? JSON.parse(text) : {};

  if (!response.ok) {
    throw new Error(payload.message || "Não foi possível concluir a ação.");
  }

  return payload;
}

function getStatePayload() {
  return {
    completed,
    checkins,
    assessment,
    progress,
    progressPhotos,
    workoutPlan
  };
}

async function saveState() {
  if (!currentUser) return;

  try {
    await api("/api/data", {
      method: "PUT",
      body: getStatePayload()
    });
  } catch (error) {
    setAccountMessage(`Não foi possível salvar agora: ${error.message}`, true);
  }
}

function normalizeProgress(input) {
  const source = input && typeof input === "object" ? input : {};
  const measurements = Array.isArray(source.measurements) ? source.measurements : [];

  return {
    startDate: source.startDate || "",
    initialWeight: source.initialWeight ? Number(source.initialWeight) : null,
    goalWeight: source.goalWeight ? Number(source.goalWeight) : null,
    measurements: measurements
      .filter((item) => item?.date && Number(item.weight))
      .map((item) => ({
        date: item.date,
        weight: Number(item.weight),
        waist: item.waist === null || item.waist === undefined ? null : Number(item.waist),
        hip: item.hip === null || item.hip === undefined ? null : Number(item.hip),
        arm: item.arm === null || item.arm === undefined ? null : Number(item.arm),
        pain: item.pain === null || item.pain === undefined ? null : Number(item.pain),
        energy: item.energy === null || item.energy === undefined ? null : Number(item.energy),
        sleep: item.sleep === null || item.sleep === undefined ? null : Number(item.sleep),
        notes: String(item.notes || "")
      }))
  };
}

function normalizePhotos(input) {
  const source = input && typeof input === "object" ? input : {};
  const normalizePhoto = (photo) => {
    if (!photo?.dataUrl) return null;
    return {
      dataUrl: String(photo.dataUrl),
      date: photo.date || "",
      note: String(photo.note || "")
    };
  };

  return {
    before: normalizePhoto(source.before),
    after: normalizePhoto(source.after)
  };
}

function hydrateState(data = {}) {
  const source = data && typeof data === "object" ? data : {};
  completed = Array.isArray(source.completed) ? source.completed : [];
  checkins = Array.isArray(source.checkins) ? source.checkins : [];
  assessment = source.assessment || null;
  progress = normalizeProgress(source.progress);
  progressPhotos = normalizePhotos(source.progressPhotos);
  workoutPlan = source.workoutPlan?.exercises?.length ? source.workoutPlan : null;
  exercises = workoutPlan?.exercises?.length ? workoutPlan.exercises : recommendedBasePlan;
}

function resetPrivateState() {
  completed = [];
  checkins = [];
  assessment = null;
  progress = createEmptyProgress();
  progressPhotos = createEmptyPhotos();
  workoutPlan = null;
  exercises = recommendedBasePlan;
  assessmentForm.reset();
  progressForm.reset();
  document.querySelector("#measurementDate").value = getTodayInputValue();
}

function round(value) {
  return Math.round(value);
}

function formatNumber(value, decimals = 0) {
  return Number(value).toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

function classifyBmi(bmi) {
  if (bmi < 18.5) return "Baixo peso";
  if (bmi < 25) return "Peso adequado";
  if (bmi < 30) return "Sobrepeso";
  if (bmi < 35) return "Obesidade grau I";
  if (bmi < 40) return "Obesidade grau II";
  return "Obesidade grau III";
}

function getLimitations() {
  const checked = [...document.querySelectorAll('input[name="limitations"]:checked')]
    .map((input) => input.value);
  const other = document.querySelector("#otherLimitations").value.trim();
  return other ? [...checked, other] : checked;
}

function calculateAssessment(data) {
  const heightMeters = data.height / 100;
  const bmi = data.weight / (heightMeters * heightMeters);
  const bmr = data.sex === "male"
    ? (10 * data.weight) + (6.25 * data.height) - (5 * data.age) + 5
    : (10 * data.weight) + (6.25 * data.height) - (5 * data.age) - 161;
  const tdee = bmr * data.activityFactor;
  const caloriesHigh = tdee * 0.9;
  const caloriesLow = tdee * 0.8;
  const weeklyLossLow = data.weight * 0.005;
  const weeklyLossHigh = data.weight * 0.01;
  const targetLoss = Math.max(0, data.weight - data.goalWeight);
  const weeksFast = weeklyLossHigh ? Math.ceil(targetLoss / weeklyLossHigh) : 0;
  const weeksSlow = weeklyLossLow ? Math.ceil(targetLoss / weeklyLossLow) : 0;

  return {
    ...data,
    bmi,
    bmiClass: classifyBmi(bmi),
    bmr,
    tdee,
    caloriesLow,
    caloriesHigh,
    weeklyLossLow,
    weeklyLossHigh,
    targetLoss,
    weeksFast,
    weeksSlow
  };
}

function hasActivePlan() {
  return Boolean(workoutPlan?.exercises?.length);
}

function getLockReason(section) {
  if (section.classList.contains("requires-auth") && !currentUser) {
    return "Entre ou crie uma conta para acessar seu painel pessoal.";
  }

  if (section.classList.contains("requires-assessment") && !assessment) {
    return "Preencha a avaliação para liberar esta área.";
  }

  if (section.classList.contains("requires-plan") && !hasActivePlan()) {
    return assessment
      ? "Escolha um treino recomendado ou personalizado para liberar esta área."
      : "Preencha a avaliação e monte seu treino para liberar esta área.";
  }

  return "";
}

function updateLocks() {
  allGatedSections.forEach((section) => {
    const reason = getLockReason(section);
    section.classList.toggle("is-locked", Boolean(reason));
    if (reason) section.dataset.lock = reason;
  });
}

function redirectLockedHash() {
  if (!window.location.hash) return;

  if (window.location.hash === "#descanso") {
    const fallback = currentUser ? "#avaliacao" : "#conta";
    history.replaceState(null, "", fallback);
    document.querySelector(fallback)?.scrollIntoView({ block: "start" });
    return;
  }

  const id = decodeURIComponent(window.location.hash.slice(1));
  const target = document.getElementById(id);
  if (!target?.classList.contains("is-locked")) return;

  let fallback = "#conta";
  if (currentUser && target.classList.contains("requires-assessment") && !assessment) {
    fallback = "#avaliacao";
  } else if (currentUser && target.classList.contains("requires-plan")) {
    fallback = assessment ? "#montagem" : "#avaliacao";
  }

  history.replaceState(null, "", fallback);
  document.querySelector(fallback)?.scrollIntoView({ block: "start" });
}

function renderAssessmentResults(result) {
  if (!result) {
    assessmentResults.innerHTML = `<p>O resultado aparecerá aqui após o preenchimento.</p>`;
    return;
  }

  const waistText = result.waist
    ? `<small>Cintura informada: ${formatNumber(result.waist, 1)} cm.</small>`
    : "<small>Circunferência abdominal não informada.</small>";
  const goalText = result.targetLoss > 0
    ? `${formatNumber(result.targetLoss, 1)} kg em aproximadamente ${result.weeksFast}-${result.weeksSlow} semanas`
    : "Meta igual ou acima do peso atual";
  const limitationsText = result.limitations.length
    ? result.limitations.map(escapeHtml).join(", ")
    : "Nenhuma limitação marcada";
  const needsClearance = result.limitations.some((item) =>
    /cardíacos|hérnia|dor no joelho|dor na lombar|dor no quadril/i.test(item)
  );
  const clearanceText = needsClearance
    ? " Antes de aumentar carga ou inclinação, busque liberação profissional e ajuste qualquer exercício que cause dor."
    : "";

  assessmentResults.innerHTML = `
    <div class="result-grid">
      <article class="result-card"><span>IMC</span><strong>${formatNumber(result.bmi, 1)}</strong><small>${result.bmiClass}</small></article>
      <article class="result-card"><span>TMB estimada</span><strong>${formatNumber(result.bmr)} kcal</strong><small>Energia basal em repouso.</small></article>
      <article class="result-card"><span>GET/TDEE</span><strong>${formatNumber(result.tdee)} kcal</strong><small>Estimativa diária com atividade.</small></article>
      <article class="result-card"><span>Faixa para emagrecimento</span><strong>${formatNumber(result.caloriesLow)}-${formatNumber(result.caloriesHigh)} kcal</strong><small>Déficit moderado de 10% a 20%.</small></article>
      <article class="result-card"><span>Perda saudável</span><strong>${formatNumber(result.weeklyLossLow, 1)}-${formatNumber(result.weeklyLossHigh, 1)} kg/sem</strong><small>Estimativa gradual e ajustável.</small></article>
      <article class="result-card"><span>Meta estimada</span><strong>${goalText}</strong>${waistText}</article>
    </div>
    <p class="result-note">Plano liberado para ${escapeHtml(result.name)}. Academia: ${escapeHtml(result.hasGym)}. Limitações: ${limitationsText}.${clearanceText}</p>
  `;
}

function fillAssessmentForm(result) {
  if (!result) return;

  const knownLimitations = new Set([
    "Dor no joelho",
    "Dor na lombar",
    "Dor no quadril",
    "Hérnia de disco",
    "Problemas cardíacos"
  ]);

  document.querySelector("#personName").value = result.name;
  document.querySelector("#age").value = result.age;
  document.querySelector("#sex").value = result.sex;
  document.querySelector("#weight").value = result.weight;
  document.querySelector("#height").value = result.height;
  document.querySelector("#waist").value = result.waist || "";
  document.querySelector("#goalWeight").value = result.goalWeight;
  document.querySelector("#activityLevel").value = result.activityFactor;
  document.querySelector("#hasGym").value = result.hasGym;
  document.querySelectorAll('input[name="limitations"]').forEach((input) => {
    input.checked = result.limitations.includes(input.value);
  });
  document.querySelector("#otherLimitations").value = result.limitations
    .filter((item) => !knownLimitations.has(item))
    .join(", ");
}

function getPlanTemplate(focus) {
  const templates = {
    lowerA: recommendedBasePlan[0],
    upperA: recommendedBasePlan[1],
    active: recommendedBasePlan[2],
    lowerB: recommendedBasePlan[3],
    upperB: recommendedBasePlan[4],
    functional: recommendedBasePlan[5],
    rest: recommendedBasePlan[6]
  };

  if (focus === "cardio") {
    return {
      id: "cardio",
      name: "Cardio de baixo impacto",
      detail: "Caminhada confortável e mobilidade, sem corrida ou saltos.",
      tag: "30 min",
      minutes: 30,
      cardio: "Use o protocolo de esteira de 25 minutos ou caminhe em local plano.",
      items: [
        ["Caminhada progressiva", "20-25 min", "Conforme necessário", "Marcha sentada ou caminhada em casa", "Mantenha postura ereta e reduza o ritmo se houver dor."],
        ["Mobilidade leve", "5-8 min", "Livre", "Movimentos sentados", "Sem forçar joelhos, quadril ou lombar."]
      ]
    };
  }

  return templates[focus] || templates.rest;
}

function adaptPlanToAssessment(plan, result) {
  const adapted = cloneData(plan);
  const limitations = new Set(result?.limitations || []);
  const trainsAtHome = result?.hasGym === "Não";
  const hasJointPain = ["Dor no joelho", "Dor na lombar", "Dor no quadril", "Hérnia de disco"]
    .some((item) => limitations.has(item));
  const hasCardiacRisk = limitations.has("Problemas cardíacos");

  adapted.forEach((day) => {
    if (trainsAtHome) {
      day.detail = `${day.detail} Versão adaptada para treino em casa.`;
      day.items = day.items.map((item) => [
        item[3],
        item[1],
        item[2],
        "Use apoio estável e objetos leves disponíveis",
        item[4]
      ]);
      day.cardio = day.cardio
        .replace(/Esteira[^.]*\./i, "Caminhada leve em local plano ou marcha sentada.")
        .replace(/esteira/gi, "caminhada");
    }

    if (hasJointPain) {
      day.items = day.items.map((item) => {
        const safety = `${item[4]} Use amplitude curta e interrompa se a dor aumentar.`;
        return [item[0], item[1], item[2], item[3], safety];
      });
      day.cardio = `${day.cardio} Comece sem inclinação e aumente apenas se estiver sem dor.`;
    }

    if (hasCardiacRisk && day.minutes > 0) {
      day.cardio = "Cardio somente após liberação médica, em intensidade leve e com supervisão.";
      day.detail = `${day.detail} Evite esforço intenso até receber liberação médica.`;
    }
  });

  return adapted;
}

function buildRecommendedPlan(result) {
  return adaptPlanToAssessment(recommendedBasePlan, result);
}

function buildCustomPlan(result) {
  const focusMap = {};
  const plan = weekDays.map((day) => {
    const select = document.querySelector(`#focus-${day.id}`);
    const focus = select.value;
    focusMap[day.id] = focus;

    const template = cloneData(getPlanTemplate(focus));
    template.id = day.id;
    template.name = `${day.label} - ${focusLabels[focus]}`;
    return template;
  });

  return {
    focusMap,
    exercises: adaptPlanToAssessment(plan, result)
  };
}

function renderCustomWeek(focusMap = {}) {
  customWeek.innerHTML = weekDays.map((day) => {
    const selected = focusMap[day.id] || day.defaultFocus;
    const options = Object.entries(focusLabels)
      .map(([value, label]) => `<option value="${value}" ${value === selected ? "selected" : ""}>${label}</option>`)
      .join("");

    return `
      <div class="custom-day">
        <label for="focus-${day.id}">${day.label}</label>
        <select id="focus-${day.id}">${options}</select>
      </div>
    `;
  }).join("");
}

function renderRecommendationSummary(result) {
  if (!result) {
    recommendationSummary.textContent = "Conclua a avaliação para receber a recomendação.";
    return;
  }

  const location = result.hasGym === "Sim" ? "academia" : "casa";
  const limitations = result.limitations.length
    ? ` com adaptações para ${result.limitations.join(", ")}`
    : " sem limitações físicas marcadas";

  recommendationSummary.textContent =
    `Semana alternando MMII, MMSS, cardio e recuperação para treino em ${location}${limitations}.`;
}

function setBuilderMode(mode) {
  const custom = mode === "custom";
  recommendedMode.classList.toggle("active", !custom);
  customMode.classList.toggle("active", custom);
  recommendedBuilder.classList.toggle("is-hidden", custom);
  customWorkoutForm.classList.toggle("is-hidden", !custom);
  builderStatus.textContent = "";
}

async function activateWorkoutPlan(mode, plan, focusMap = null) {
  exercises = plan;
  workoutPlan = { mode, exercises: plan, focusMap };
  completed = completed.filter((id) => exercises.some((exercise) => exercise.id === id));
  await saveState();
  renderInterface();
  builderStatus.textContent = mode === "custom"
    ? "Treino personalizado salvo."
    : "Treino recomendado pela avaliação montado.";
  document.querySelector("#treino").scrollIntoView({ behavior: "smooth", block: "start" });
}

function syncProgressFromAssessment(result) {
  if (!result) return;

  if (!progress.initialWeight) progress.initialWeight = result.weight;
  if (!progress.goalWeight) progress.goalWeight = result.goalWeight;
  if (!progress.startDate) progress.startDate = getTodayInputValue();
  if (!progress.measurements.length) {
    progress.measurements = [{
      date: progress.startDate,
      weight: result.weight,
      waist: result.waist || null,
      hip: null,
      arm: null,
      pain: null,
      energy: null
    }];
  }

  document.querySelector("#programStartDate").value = progress.startDate;
  document.querySelector("#initialWeight").value = progress.initialWeight || result.weight;
  document.querySelector("#progressGoalWeight").value = progress.goalWeight || result.goalWeight;
  document.querySelector("#measurementDate").value = getTodayInputValue();
  document.querySelector("#currentMeasurementWeight").value = progress.measurements.length
    ? sortMeasurements(progress.measurements).at(-1).weight
    : result.weight;
}

function prepareEmptyProgressForm() {
  document.querySelector("#programStartDate").value = "";
  document.querySelector("#initialWeight").value = "";
  document.querySelector("#progressGoalWeight").value = "";
  document.querySelector("#measurementDate").value = getTodayInputValue();
  document.querySelector("#currentMeasurementWeight").value = "";
  clearMeasurementExtras();
}

function clearMeasurementExtras() {
  ["#measurementWaist", "#measurementHip", "#measurementArm", "#painLevel", "#energyLevel", "#sleepHours", "#checkinNotes"]
    .forEach((selector) => {
      document.querySelector(selector).value = "";
    });
}

function sortMeasurements(measurements) {
  return [...measurements].sort((a, b) => a.date.localeCompare(b.date));
}

function calculateProgressStats() {
  const measurements = sortMeasurements(progress.measurements);
  const latest = measurements[measurements.length - 1] || null;
  const initialWeight = Number(progress.initialWeight);
  const goalWeight = Number(progress.goalWeight);
  const startDate = progress.startDate;

  if (!latest || !initialWeight || !goalWeight || !startDate) {
    return null;
  }

  const lost = Math.max(0, initialWeight - latest.weight);
  const percentLost = initialWeight ? (lost / initialWeight) * 100 : 0;
  const weeksElapsed = Math.max(0.14, getWeekDiff(startDate, latest.date));
  const pace = lost / weeksElapsed;
  const remaining = Math.max(0, latest.weight - goalWeight);
  const safeSlowWeeks = remaining / 0.5;
  const safeFastWeeks = remaining / 1;
  const projectedSlowDate = remaining ? addDays(latest.date, Math.ceil(safeSlowWeeks * 7)) : latest.date;
  const projectedFastDate = remaining ? addDays(latest.date, Math.ceil(safeFastWeeks * 7)) : latest.date;

  let trend = "estável";
  let alert = "Continue registrando semanalmente. Pequenas oscilações são normais.";
  let warning = false;

  if (pace >= 0.5 && pace <= 1) {
    trend = "perda adequada";
    alert = "Ritmo dentro da faixa segura de 0,5 a 1 kg por semana. Mantenha consistência.";
  } else if (pace > 1) {
    trend = "perda muito rápida";
    alert = "Ritmo acima do recomendado. Considere subir um pouco as calorias, reduzir volume ou buscar orientação profissional.";
    warning = true;
  } else if (pace > 0 && pace < 0.5) {
    trend = "perda lenta";
    alert = "Ritmo abaixo de 0,5 kg por semana. Revise adesão, sono, ingestão calórica e regularidade dos treinos.";
  }

  return {
    measurements,
    latest,
    lost,
    percentLost,
    weeksElapsed,
    pace,
    remaining,
    projectedSlowDate,
    projectedFastDate,
    trend,
    alert,
    warning
  };
}

function renderWeightChart(measurements) {
  if (!measurements.length) {
    weightChart.innerHTML = `<text x="32" y="135" fill="#5f6f6b" font-size="18" font-weight="700">Sem medições registradas.</text>`;
    return;
  }

  const width = 640;
  const height = 260;
  const padding = { top: 24, right: 28, bottom: 46, left: 54 };
  const weights = measurements.map((item) => item.weight);
  const minWeight = Math.min(...weights, Number(progress.goalWeight || weights[0])) - 2;
  const maxWeight = Math.max(...weights, Number(progress.initialWeight || weights[0])) + 2;
  const minTime = new Date(`${measurements[0].date}T00:00:00`).getTime();
  const maxTime = new Date(`${measurements[measurements.length - 1].date}T00:00:00`).getTime();
  const timeRange = Math.max(1, maxTime - minTime);
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;

  const xFor = (dateKey) => padding.left + ((new Date(`${dateKey}T00:00:00`).getTime() - minTime) / timeRange) * plotWidth;
  const yFor = (weight) => padding.top + ((maxWeight - weight) / Math.max(1, maxWeight - minWeight)) * plotHeight;
  const points = measurements.map((item) => `${xFor(item.date)},${yFor(item.weight)}`).join(" ");
  const goalY = yFor(Number(progress.goalWeight || weights[weights.length - 1]));

  weightChart.innerHTML = `
    <line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${height - padding.bottom}" stroke="#d9e2dc" stroke-width="2" />
    <line x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}" stroke="#d9e2dc" stroke-width="2" />
    <line x1="${padding.left}" y1="${goalY}" x2="${width - padding.right}" y2="${goalY}" stroke="#ef6a5a" stroke-width="2" stroke-dasharray="6 6" />
    <text x="${width - padding.right - 78}" y="${goalY - 8}" fill="#ef6a5a" font-size="13" font-weight="800">meta</text>
    <polyline points="${points}" fill="none" stroke="#2f7d5a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    ${measurements.map((item) => `<circle cx="${xFor(item.date)}" cy="${yFor(item.weight)}" r="6" fill="#2f7d5a"><title>${formatDate(item.date)} - ${formatNumber(item.weight, 1)} kg</title></circle>`).join("")}
    <text x="${padding.left}" y="${height - 16}" fill="#5f6f6b" font-size="13">${formatDate(measurements[0].date)}</text>
    <text x="${width - padding.right - 86}" y="${height - 16}" fill="#5f6f6b" font-size="13">${formatDate(measurements[measurements.length - 1].date)}</text>
    <text x="8" y="${yFor(maxWeight) + 5}" fill="#5f6f6b" font-size="13">${formatNumber(maxWeight, 1)} kg</text>
    <text x="8" y="${yFor(minWeight) + 5}" fill="#5f6f6b" font-size="13">${formatNumber(minWeight, 1)} kg</text>
  `;
}

function renderProgress() {
  const stats = calculateProgressStats();
  const measurements = sortMeasurements(progress.measurements);
  renderWeightChart(measurements);

  if (!stats) {
    progressResults.innerHTML = `<p>Registre a primeira medição para visualizar perda semanal, percentual e projeção.</p>`;
  } else {
    progressResults.innerHTML = `
      <div class="progress-grid">
        <article class="progress-card"><span>Perda desde o início</span><strong>${formatNumber(stats.lost, 1)} kg</strong><small>${formatNumber(stats.percentLost, 1)}% do peso inicial.</small></article>
        <article class="progress-card"><span>Velocidade atual</span><strong>${formatNumber(stats.pace, 2)} kg/sem</strong><small>${formatNumber(stats.weeksElapsed, 1)} semanas acompanhadas.</small></article>
        <article class="progress-card"><span>Tendência</span><strong>${stats.trend}</strong><small>Faixa segura alvo: 0,5 a 1 kg/sem.</small></article>
        <article class="progress-card"><span>Projeção segura</span><strong>${formatDate(stats.projectedFastDate)} a ${formatDate(stats.projectedSlowDate)}</strong><small>Estimativa usando 1 a 0,5 kg por semana.</small></article>
        <article class="progress-card"><span>Peso atual</span><strong>${formatNumber(stats.latest.weight, 1)} kg</strong><small>Medição de ${formatDate(stats.latest.date)}.</small></article>
        <article class="progress-card"><span>Falta para a meta</span><strong>${formatNumber(stats.remaining, 1)} kg</strong><small>Meta: ${formatNumber(progress.goalWeight, 1)} kg.</small></article>
      </div>
      <p class="progress-note ${stats.warning ? "warning" : ""}">${stats.alert}</p>
    `;
  }

  measurementList.innerHTML = measurements.length
    ? measurements.map((item) => {
      const details = [
        item.waist ? `Cintura ${formatNumber(item.waist, 1)} cm` : null,
        item.hip ? `Quadril ${formatNumber(item.hip, 1)} cm` : null,
        item.arm ? `Braço ${formatNumber(item.arm, 1)} cm` : null,
        item.pain !== null && item.pain !== undefined ? `Dor ${item.pain}/10` : null,
        item.energy !== null && item.energy !== undefined ? `Energia ${item.energy}/10` : null,
        item.sleep !== null && item.sleep !== undefined ? `Sono ${formatNumber(item.sleep, 1)} h` : null,
        item.notes ? `Obs.: ${escapeHtml(item.notes)}` : null
      ].filter(Boolean).join(" | ");

      return `
        <div class="measurement-item">
          <div>
            <span>${formatDate(item.date)}</span>
            <small>${details || "Sem medidas extras registradas."}</small>
          </div>
          <span>${formatNumber(item.weight, 1)} kg</span>
        </div>
      `;
    }).join("")
    : `<div class="measurement-item"><span>Nenhuma medição</span><span>Comece hoje</span></div>`;
}

function renderPhotoSlot(type) {
  const photo = progressPhotos[type];
  const preview = type === "before" ? beforePhotoPreview : afterPhotoPreview;
  const dateInput = type === "before" ? beforePhotoDate : afterPhotoDate;
  const noteInput = type === "before" ? beforePhotoNote : afterPhotoNote;
  const label = type === "before" ? "Antes" : "Depois";

  if (!photo) {
    preview.textContent = label;
    dateInput.value = "";
    noteInput.value = "";
    return;
  }

  preview.innerHTML = `<img src="${photo.dataUrl}" alt="Foto do ${label.toLowerCase()}">`;
  dateInput.value = photo.date || "";
  noteInput.value = photo.note || "";
}

function renderPhotos() {
  renderPhotoSlot("before");
  renderPhotoSlot("after");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Não foi possível ler a imagem."));
    reader.readAsDataURL(file);
  });
}

function loadImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Não foi possível carregar a imagem."));
    image.src = dataUrl;
  });
}

async function compressPhoto(file) {
  if (!file) return null;
  if (!file.type.startsWith("image/")) {
    throw new Error("Escolha um arquivo de imagem.");
  }

  const dataUrl = await readFileAsDataUrl(file);
  const image = await loadImage(dataUrl);
  const maxSize = 900;
  const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
  const width = Math.max(1, Math.round(image.width * scale));
  const height = Math.max(1, Math.round(image.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", 0.72);
}

async function savePhoto(type) {
  if (!currentUser || !assessment) return;

  const input = type === "before" ? beforePhotoInput : afterPhotoInput;
  const dateInput = type === "before" ? beforePhotoDate : afterPhotoDate;
  const noteInput = type === "before" ? beforePhotoNote : afterPhotoNote;
  const existing = progressPhotos[type];
  const file = input.files[0] || null;

  try {
    photoMessage.textContent = "Salvando foto...";
    const dataUrl = file ? await compressPhoto(file) : existing?.dataUrl;
    if (!dataUrl) {
      photoMessage.textContent = "Escolha uma foto antes de salvar.";
      return;
    }

    progressPhotos[type] = {
      dataUrl,
      date: dateInput.value || getTodayInputValue(),
      note: noteInput.value.trim()
    };
    input.value = "";
    await saveState();
    renderPhotos();
    photoMessage.textContent = type === "before" ? "Foto do antes salva." : "Foto do depois salva.";
  } catch (error) {
    photoMessage.textContent = error.message;
  }
}

async function removePhoto(type) {
  if (!currentUser || !assessment) return;

  progressPhotos[type] = null;
  await saveState();
  renderPhotos();
  photoMessage.textContent = type === "before" ? "Foto do antes removida." : "Foto do depois removida.";
}

function renderProgressLogs() {
  const doneWorkouts = exercises.filter((exercise) => completed.includes(exercise.id));
  completedWorkoutList.innerHTML = doneWorkouts.length
    ? doneWorkouts.map((exercise) => `
      <div class="mini-log-item">
        <strong>${exercise.name}</strong>
        <span>${exercise.tag}</span>
      </div>
    `).join("")
    : `<p>Nenhum treino concluído ainda.</p>`;

  const latestCheckins = [...checkins].sort().reverse().slice(0, 6);
  checkinHistoryList.innerHTML = latestCheckins.length
    ? latestCheckins.map((dateKey) => `
      <div class="mini-log-item">
        <strong>${formatDate(dateKey)}</strong>
        <span>check-in salvo</span>
      </div>
    `).join("")
    : `<p>Nenhum check-in semanal salvo.</p>`;
}

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(dateKey) {
  const [year, month, day] = dateKey.split("-");
  return `${day}/${month}/${year}`;
}

function addDays(dateKey, days) {
  const date = new Date(`${dateKey}T00:00:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function getWeekDiff(startDate, endDate) {
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  const diff = Math.max(0, end - start);
  return diff / (1000 * 60 * 60 * 24 * 7);
}

function getTodayInputValue() {
  return getTodayKey();
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = Math.max(0, seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
}

function renderExercises() {
  exerciseList.innerHTML = exercises.map((exercise) => {
    const done = completed.includes(exercise.id);
    const itemList = exercise.items.map((item) => `
      <li>
        <strong>${item[0]}</strong>
        <span>${item[1]} | descanso ${item[2]}</span>
        <em>Casa: ${item[3]}</em>
        <small>Segurança: ${item[4]}</small>
      </li>
    `).join("");

    return `
      <article class="exercise-card day-card ${done ? "done" : ""}">
        <button class="exercise-check" type="button" aria-label="Marcar ${exercise.name}" data-id="${exercise.id}">
          ${done ? "✓" : ""}
        </button>
        <div>
          <h3>${exercise.name}</h3>
          <p>${exercise.detail}</p>
          <p class="cardio-note">${exercise.cardio}</p>
          <ul class="day-exercises">${itemList}</ul>
        </div>
        <span class="exercise-tag">${exercise.tag}</span>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".exercise-check").forEach((button) => {
    button.addEventListener("click", () => toggleExercise(button.dataset.id));
  });
}

async function toggleExercise(id) {
  if (!currentUser || !hasActivePlan()) return;

  completed = completed.includes(id)
    ? completed.filter((item) => item !== id)
    : [...completed, id];

  await saveState();
  renderAll();
}

function renderSummary() {
  completedCount.textContent = `${completed.length}/${exercises.length}`;
  activeMinutes.textContent = exercises
    .filter((exercise) => completed.includes(exercise.id))
    .reduce((total, exercise) => total + exercise.minutes, 0)
    .toString();
  streakCount.textContent = checkins.length.toString();
  todayStatus.textContent = checkins.includes(getTodayKey()) ? "Feito" : "Pendente";
  checkinButton.textContent = checkins.includes(getTodayKey()) ? "Missão cumprida hoje" : "Check-in da missão";
  checkinButton.disabled = !currentUser || !hasActivePlan() || checkins.includes(getTodayKey());
  resetWorkout.disabled = !currentUser || !hasActivePlan();
}

function renderHistory() {
  const latest = [...checkins].sort().reverse().slice(0, 7);

  if (!latest.length) {
    historyList.innerHTML = `<div class="history-item"><span>Nenhum check-in ainda</span><span>Comece a missão hoje</span></div>`;
    return;
  }

  historyList.innerHTML = latest.map((dateKey) => `
    <div class="history-item">
      <span>${formatDate(dateKey)}</span>
      <span>Missão cumprida</span>
    </div>
  `).join("");
}

function renderAll() {
  renderExercises();
  renderSummary();
  renderHistory();
  renderProgressLogs();
}

function renderInterface() {
  renderAccountUi();
  renderCustomWeek(workoutPlan?.focusMap || {});
  renderRecommendationSummary(assessment);

  if (assessment) {
    fillAssessmentForm(assessment);
    renderAssessmentResults(assessment);
    syncProgressFromAssessment(assessment);
  } else {
    assessmentResults.innerHTML = `<p>O resultado aparecerá aqui após o preenchimento.</p>`;
    prepareEmptyProgressForm();
  }

  if (workoutPlan?.exercises?.length) {
    exercises = workoutPlan.exercises;
    setBuilderMode(workoutPlan.mode || "recommended");
  } else {
    exercises = recommendedBasePlan;
    setBuilderMode("recommended");
  }

  renderProgress();
  renderPhotos();
  renderAll();
  updateLocks();
  redirectLockedHash();
}

function setTimer(seconds) {
  totalSeconds = Number(seconds);
  remainingSeconds = totalSeconds;
  customSeconds.value = totalSeconds;
  timerMessage.textContent = "";
  updateTimerDisplay();
}

function updateTimerDisplay() {
  timerDisplay.textContent = formatTime(remainingSeconds);
  const ratio = totalSeconds ? remainingSeconds / totalSeconds : 0;
  timerProgress.style.transform = `scaleX(${ratio})`;
}

function startCountdown() {
  if (timerId) return;
  timerMessage.textContent = "";

  timerId = window.setInterval(() => {
    remainingSeconds -= 1;
    updateTimerDisplay();

    if (remainingSeconds <= 0) {
      window.clearInterval(timerId);
      timerId = null;
      remainingSeconds = 0;
      timerMessage.textContent = "Descanso finalizado. Volte para a próxima série!";
      updateTimerDisplay();
    }
  }, 1000);
}

function pauseCountdown() {
  window.clearInterval(timerId);
  timerId = null;
}

function numberOrNull(selector) {
  const value = document.querySelector(selector).value;
  return value === "" ? null : Number(value);
}

function setAccountMessage(message, warning = false) {
  accountMessage.textContent = message || "";
  accountMessage.classList.toggle("warning", warning);
}

function setAccountMode(mode) {
  activeAccountMode = mode;
  const tabMode = mode === "reset" ? "recover" : mode;
  showLogin.classList.toggle("active", tabMode === "login");
  showRegister.classList.toggle("active", tabMode === "register");
  showRecover.classList.toggle("active", tabMode === "recover");
  loginForm.classList.toggle("is-hidden", mode !== "login");
  registerForm.classList.toggle("is-hidden", mode !== "register");
  recoverForm.classList.toggle("is-hidden", mode !== "recover");
  resetForm.classList.toggle("is-hidden", mode !== "reset");
}

function renderAccountUi() {
  if (currentUser) {
    accountTabs.classList.add("is-hidden");
    loginForm.classList.add("is-hidden");
    registerForm.classList.add("is-hidden");
    recoverForm.classList.add("is-hidden");
    resetForm.classList.add("is-hidden");
    accountSession.classList.remove("is-hidden");
    accountName.textContent = currentUser.name;
    accountEmail.textContent = currentUser.email;
    return;
  }

  accountTabs.classList.remove("is-hidden");
  accountSession.classList.add("is-hidden");
  setAccountMode(activeAccountMode);
}

async function loadUserData() {
  const response = await api("/api/data");
  hydrateState(response.data || {});
}

async function enterSession(user, message) {
  currentUser = user;
  setAccountMessage("Carregando seus dados...");
  await loadUserData();
  renderInterface();
  setAccountMessage(message);
  document.querySelector(assessment ? "#progresso" : "#avaliacao")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function initializeAuth() {
  renderInterface();

  if (window.location.protocol === "file:") {
    setAccountMessage("Para usar conta, abra pelo servidor local: http://localhost:4177", true);
    return;
  }

  setAccountMessage("Verificando sessão...");

  try {
    const response = await api("/api/auth/me");
    currentUser = response.user;
    await loadUserData();
    renderInterface();
    setAccountMessage("Sessão ativa. Seus dados estão carregados.");
  } catch {
    currentUser = null;
    resetPrivateState();
    renderInterface();
    setAccountMessage("Entre ou crie sua conta para liberar avaliação, treino e progresso.");
  }
}

quickTimeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    quickTimeButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    pauseCountdown();
    setTimer(button.dataset.seconds);
  });
});

customSeconds.addEventListener("change", () => {
  const value = Math.min(600, Math.max(10, Number(customSeconds.value) || 60));
  quickTimeButtons.forEach((item) => item.classList.remove("active"));
  pauseCountdown();
  setTimer(value);
});

startTimer.addEventListener("click", startCountdown);
pauseTimer.addEventListener("click", pauseCountdown);
resetTimer.addEventListener("click", () => {
  pauseCountdown();
  setTimer(totalSeconds);
});

resetWorkout.addEventListener("click", async () => {
  completed = [];
  await saveState();
  renderAll();
});

checkinButton.addEventListener("click", async () => {
  const today = getTodayKey();
  if (!checkins.includes(today)) {
    checkins = [...checkins, today];
    await saveState();
    renderAll();
  }
});

saveBeforePhoto.addEventListener("click", () => savePhoto("before"));
saveAfterPhoto.addEventListener("click", () => savePhoto("after"));
removeBeforePhoto.addEventListener("click", () => removePhoto("before"));
removeAfterPhoto.addEventListener("click", () => removePhoto("after"));

assessmentForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!currentUser) {
    setAccountMessage("Entre na conta antes de preencher a avaliação.", true);
    document.querySelector("#conta").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const data = {
    name: document.querySelector("#personName").value.trim(),
    age: Number(document.querySelector("#age").value),
    sex: document.querySelector("#sex").value,
    weight: Number(document.querySelector("#weight").value),
    height: Number(document.querySelector("#height").value),
    waist: Number(document.querySelector("#waist").value) || null,
    goalWeight: Number(document.querySelector("#goalWeight").value),
    activityFactor: Number(document.querySelector("#activityLevel").value),
    hasGym: document.querySelector("#hasGym").value,
    limitations: getLimitations()
  };

  assessment = calculateAssessment(data);
  workoutPlan = null;
  exercises = recommendedBasePlan;
  completed = [];
  syncProgressFromAssessment(assessment);
  await saveState();
  renderInterface();
  setAccountMessage("Avaliação salva no seu painel.");
  document.querySelector("#montagem").scrollIntoView({ behavior: "smooth", block: "start" });
});

progressForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!currentUser || !assessment) return;

  progress.startDate = document.querySelector("#programStartDate").value;
  progress.initialWeight = Number(document.querySelector("#initialWeight").value);
  progress.goalWeight = Number(document.querySelector("#progressGoalWeight").value);

  const date = document.querySelector("#measurementDate").value;
  const measurement = {
    date,
    weight: Number(document.querySelector("#currentMeasurementWeight").value),
    waist: numberOrNull("#measurementWaist"),
    hip: numberOrNull("#measurementHip"),
    arm: numberOrNull("#measurementArm"),
    pain: numberOrNull("#painLevel"),
    energy: numberOrNull("#energyLevel"),
    sleep: numberOrNull("#sleepHours"),
    notes: document.querySelector("#checkinNotes").value.trim()
  };
  const withoutSameDate = progress.measurements.filter((item) => item.date !== date);
  progress.measurements = sortMeasurements([...withoutSameDate, measurement]);

  await saveState();
  renderProgress();
  renderProgressLogs();
  document.querySelector("#measurementDate").value = getTodayInputValue();
  clearMeasurementExtras();
});

recommendedMode.addEventListener("click", () => setBuilderMode("recommended"));
customMode.addEventListener("click", () => setBuilderMode("custom"));

generateRecommendedPlan.addEventListener("click", async () => {
  if (!assessment) return;
  await activateWorkoutPlan("recommended", buildRecommendedPlan(assessment));
});

customWorkoutForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!assessment) return;

  const activeDays = weekDays.filter((day) => document.querySelector(`#focus-${day.id}`).value !== "rest").length;
  if (activeDays < 2) {
    builderStatus.textContent = "Escolha pelo menos dois dias ativos para montar o treino.";
    return;
  }

  const customPlan = buildCustomPlan(assessment);
  await activateWorkoutPlan("custom", customPlan.exercises, customPlan.focusMap);
});

showLogin.addEventListener("click", () => setAccountMode("login"));
showRegister.addEventListener("click", () => setAccountMode("register"));
showRecover.addEventListener("click", () => setAccountMode("recover"));

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setAccountMessage("Criando conta...");

  try {
    const response = await api("/api/auth/register", {
      method: "POST",
      body: {
        name: document.querySelector("#registerName").value.trim(),
        email: document.querySelector("#registerEmail").value.trim(),
        password: document.querySelector("#registerPassword").value
      }
    });
    registerForm.reset();
    await enterSession(response.user, "Conta criada. Agora preencha sua avaliação.");
  } catch (error) {
    setAccountMessage(error.message, true);
  }
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setAccountMessage("Entrando...");

  try {
    const response = await api("/api/auth/login", {
      method: "POST",
      body: {
        email: document.querySelector("#loginEmail").value.trim(),
        password: document.querySelector("#loginPassword").value
      }
    });
    loginForm.reset();
    await enterSession(response.user, "Login realizado. Seu painel foi carregado.");
  } catch (error) {
    setAccountMessage(error.message, true);
  }
});

recoverForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setAccountMessage("Gerando recuperação...");

  try {
    const response = await api("/api/auth/forgot-password", {
      method: "POST",
      body: {
        email: document.querySelector("#recoverEmail").value.trim()
      }
    });

    if (response.resetToken) {
      document.querySelector("#resetToken").value = response.resetToken;
      setAccountMode("reset");
      setAccountMessage("Código gerado. No modo local, ele já aparece preenchido para redefinir a senha.");
    } else {
      setAccountMessage(response.message);
    }
  } catch (error) {
    setAccountMessage(error.message, true);
  }
});

resetForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setAccountMessage("Redefinindo senha...");

  try {
    const response = await api("/api/auth/reset-password", {
      method: "POST",
      body: {
        token: document.querySelector("#resetToken").value.trim(),
        newPassword: document.querySelector("#resetPassword").value
      }
    });
    resetForm.reset();
    setAccountMode("login");
    setAccountMessage(response.message);
  } catch (error) {
    setAccountMessage(error.message, true);
  }
});

logoutButton.addEventListener("click", async () => {
  try {
    await api("/api/auth/logout", { method: "POST" });
  } catch {
    // Mesmo com falha de rede, limpamos a tela local para proteger os dados visíveis.
  }

  currentUser = null;
  resetPrivateState();
  renderInterface();
  setAccountMessage("Você saiu da conta. Os dados privados foram ocultados.");
  history.replaceState(null, "", "#conta");
  document.querySelector("#conta").scrollIntoView({ behavior: "smooth", block: "start" });
});

window.addEventListener("hashchange", redirectLockedHash);

document.querySelector('[data-seconds="60"]').classList.add("active");
updateTimerDisplay();
initializeAuth();
