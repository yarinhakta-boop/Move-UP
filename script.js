const exercises = [
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

const storageKeys = {
  completed: "fitcheck.completed",
  checkins: "fitcheck.checkins",
  assessment: "fitcheck.assessment",
  progress: "fitcheck.progress"
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
const gatedSections = document.querySelectorAll(".requires-assessment");
const progressForm = document.querySelector("#progressForm");
const progressResults = document.querySelector("#progressResults");
const weightChart = document.querySelector("#weightChart");
const measurementList = document.querySelector("#measurementList");

let completed = loadArray(storageKeys.completed);
let checkins = loadArray(storageKeys.checkins);
let assessment = loadObject(storageKeys.assessment);
let progress = loadObject(storageKeys.progress) || { startDate: "", initialWeight: null, goalWeight: null, measurements: [] };
let totalSeconds = 60;
let remainingSeconds = 60;
let timerId = null;

function loadArray(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function loadObject(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || null;
  } catch {
    return null;
  }
}

function saveState() {
  localStorage.setItem(storageKeys.completed, JSON.stringify(completed));
  localStorage.setItem(storageKeys.checkins, JSON.stringify(checkins));
  if (assessment) {
    localStorage.setItem(storageKeys.assessment, JSON.stringify(assessment));
  }
  localStorage.setItem(storageKeys.progress, JSON.stringify(progress));
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

function unlockPlan() {
  gatedSections.forEach((section) => section.classList.remove("is-locked"));
}

function renderAssessmentResults(result) {
  if (!result) return;

  const waistText = result.waist
    ? `<small>Cintura informada: ${formatNumber(result.waist, 1)} cm.</small>`
    : "<small>Circunferência abdominal não informada.</small>";
  const goalText = result.targetLoss > 0
    ? `${formatNumber(result.targetLoss, 1)} kg em aproximadamente ${result.weeksFast}-${result.weeksSlow} semanas`
    : "Meta igual ou acima do peso atual";
  const limitationsText = result.limitations.length
    ? result.limitations.join(", ")
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
    <p class="result-note">Plano liberado para ${result.name}. Academia: ${result.hasGym}. Limitações: ${limitationsText}.${clearanceText}</p>
  `;
}

function fillAssessmentForm(result) {
  if (!result) return;

  document.querySelector("#personName").value = result.name;
  document.querySelector("#age").value = result.age;
  document.querySelector("#sex").value = result.sex;
  document.querySelector("#weight").value = result.weight;
  document.querySelector("#height").value = result.height;
  document.querySelector("#waist").value = result.waist || "";
  document.querySelector("#goalWeight").value = result.goalWeight;
  document.querySelector("#activityLevel").value = result.activityFactor;
  document.querySelector("#hasGym").value = result.hasGym;
}

function syncProgressFromAssessment(result) {
  if (!result) return;

  if (!progress.initialWeight) progress.initialWeight = result.weight;
  if (!progress.goalWeight) progress.goalWeight = result.goalWeight;
  if (!progress.startDate) progress.startDate = getTodayInputValue();

  document.querySelector("#programStartDate").value = progress.startDate;
  document.querySelector("#initialWeight").value = progress.initialWeight || result.weight;
  document.querySelector("#progressGoalWeight").value = progress.goalWeight || result.goalWeight;
  document.querySelector("#measurementDate").value = getTodayInputValue();
  document.querySelector("#currentMeasurementWeight").value = progress.measurements.length
    ? sortMeasurements(progress.measurements).at(-1).weight
    : result.weight;
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
    ? measurements.map((item) => `<div class="measurement-item"><span>${formatDate(item.date)}</span><span>${formatNumber(item.weight, 1)} kg</span></div>`).join("")
    : `<div class="measurement-item"><span>Nenhuma medição</span><span>Comece hoje</span></div>`;
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

function toggleExercise(id) {
  completed = completed.includes(id)
    ? completed.filter((item) => item !== id)
    : [...completed, id];

  saveState();
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
  checkinButton.disabled = checkins.includes(getTodayKey());
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

resetWorkout.addEventListener("click", () => {
  completed = [];
  saveState();
  renderAll();
});

checkinButton.addEventListener("click", () => {
  const today = getTodayKey();
  if (!checkins.includes(today)) {
    checkins = [...checkins, today];
    saveState();
    renderAll();
  }
});

assessmentForm.addEventListener("submit", (event) => {
  event.preventDefault();

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
  syncProgressFromAssessment(assessment);
  saveState();
  renderAssessmentResults(assessment);
  renderProgress();
  unlockPlan();
  document.querySelector("#progresso").scrollIntoView({ behavior: "smooth", block: "start" });
});

progressForm.addEventListener("submit", (event) => {
  event.preventDefault();

  progress.startDate = document.querySelector("#programStartDate").value;
  progress.initialWeight = Number(document.querySelector("#initialWeight").value);
  progress.goalWeight = Number(document.querySelector("#progressGoalWeight").value);

  const date = document.querySelector("#measurementDate").value;
  const weight = Number(document.querySelector("#currentMeasurementWeight").value);
  const withoutSameDate = progress.measurements.filter((item) => item.date !== date);
  progress.measurements = sortMeasurements([...withoutSameDate, { date, weight }]);

  saveState();
  renderProgress();
});

if (assessment) {
  fillAssessmentForm(assessment);
  renderAssessmentResults(assessment);
  syncProgressFromAssessment(assessment);
  renderProgress();
  unlockPlan();
} else {
  document.querySelector("#measurementDate").value = getTodayInputValue();
  renderProgress();
}

document.querySelector('[data-seconds="60"]').classList.add("active");
renderAll();
updateTimerDisplay();
