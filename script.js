const recommendedBasePlan = [
  {
    id: "segunda",
    name: "Segunda - MMII + esteira",
    detail: "Pernas, glÃºteos e quadrÃ­ceps com mÃ¡quinas e baixo impacto.",
    tag: "55 min",
    minutes: 55,
    cardio: "Esteira 25 min pelo protocolo completo.",
    items: [
      ["Leg press 45", "3x10-12", "75-90s", "Sentar e levantar de cadeira alta", "PÃ©s alinhados, joelhos nÃ£o entram para dentro, sem travar a lombar."],
      ["Cadeira extensora", "3x12", "60s", "ExtensÃ£o de joelho sentado sem carga", "Suba controlado e pare se houver dor na frente do joelho."],
      ["Cadeira abdutora", "3x15", "45-60s", "AbduÃ§Ã£o lateral em pÃ© segurando apoio", "Tronco firme, movimento curto e sem jogar o quadril."],
      ["ElevaÃ§Ã£o pÃ©lvica", "3x10-12", "60s", "Ponte de glÃºteos no chÃ£o", "NÃ£o hiperestenda a lombar; suba apertando glÃºteos."]
    ]
  },
  {
    id: "terca",
    name: "TerÃ§a - MMSS + esteira leve",
    detail: "Costas, ombros e braÃ§os para firmeza e gasto calÃ³rico.",
    tag: "45 min",
    minutes: 45,
    cardio: "Esteira leve 10-15 min: inclinaÃ§Ã£o 0-3, velocidade 2-3 km/h.",
    items: [
      ["Puxada frente na polia", "3x12", "60-75s", "Remada com toalha presa com seguranÃ§a", "Peito aberto, ombros longe das orelhas, sem puxar com o pescoÃ§o."],
      ["Remada sentada", "3x12", "60s", "Remada com garrafas ou mochila leve", "Coluna neutra e abdome ativo, sem balanÃ§ar o tronco."],
      ["Desenvolvimento de ombros", "3x10", "60s", "Elevar garrafas leves atÃ© a linha dos ombros", "Evite arquear a lombar; carga leve e controle."],
      ["TrÃ­ceps na polia", "3x12-15", "45-60s", "TrÃ­ceps banco adaptado ou extensÃ£o com garrafa", "Cotovelos prÃ³ximos ao corpo; sem dor no ombro."]
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
      ["Sentar e levantar assistido", "2x8-10", "60s", "Usar cadeira mais alta e apoio das mÃ£os", "Sem cair na cadeira; joelhos acompanham a ponta dos pÃ©s."],
      ["FlexÃ£o na parede", "2x10-12", "45s", "Afastar ou aproximar os pÃ©s da parede", "Corpo alinhado, sem forÃ§ar punhos ou lombar."],
      ["Marcha parada sem impacto", "3x30-45s", "45s", "Marcha sentado em cadeira", "Eleve pouco o joelho se quadril ou lombar incomodar."],
      ["Mobilidade leve", "5-8 min", "Livre", "Alongamentos sentados", "Sem insistir em dor; movimentos lentos."]
    ]
  },
  {
    id: "quinta",
    name: "Quinta - MMII + esteira",
    detail: "Posterior, glÃºteos e estabilidade com baixo impacto.",
    tag: "55 min",
    minutes: 55,
    cardio: "Esteira 25 min pelo protocolo completo.",
    items: [
      ["Mesa ou cadeira flexora", "3x12", "60s", "FlexÃ£o de joelho em pÃ© segurando apoio", "Evite tirar o quadril do lugar; movimento lento."],
      ["Leg press com amplitude curta", "3x10", "90s", "Agachamento parcial em cadeira", "Use amplitude sem dor; lombar apoiada."],
      ["Panturrilha sentada ou em pÃ©", "3x15", "45s", "Panturrilha segurando apoio", "Suba e desÃ§a devagar, sem quicar."],
      ["Ponte de glÃºteos", "3x12", "60s", "Mesmo exercÃ­cio no colchonete", "Se a lombar reclamar, reduza amplitude."]
    ]
  },
  {
    id: "sexta",
    name: "Sexta - MMSS + esteira leve",
    detail: "Peito, costas e braÃ§os com carga moderada.",
    tag: "45 min",
    minutes: 45,
    cardio: "Esteira leve 10-15 min: inclinaÃ§Ã£o 0-3, velocidade 2-3 km/h.",
    items: [
      ["Chest press ou supino mÃ¡quina", "3x10-12", "60-75s", "FlexÃ£o na parede", "Cotovelos confortÃ¡veis, ombros baixos e lombar apoiada."],
      ["Remada baixa", "3x12", "60s", "Remada com mochila leve", "Puxe com costas, nÃ£o com impulso."],
      ["Rosca bÃ­ceps", "3x12-15", "45-60s", "Rosca com garrafas", "Cotovelos parados e punhos neutros."],
      ["ElevaÃ§Ã£o lateral leve", "2-3x12", "45s", "ElevaÃ§Ã£o lateral com garrafas pequenas", "Suba atÃ© onde nÃ£o doer; pÃ©s firmes no chÃ£o."]
    ]
  },
  {
    id: "sabado",
    name: "SÃ¡bado - funcional em casa",
    detail: "Calistenia militar adaptada, sem pular e sem impacto.",
    tag: "35 min",
    minutes: 35,
    cardio: "Opcional: caminhada leve 10 min apÃ³s o circuito.",
    items: [
      ["Circuito: marcha + parede + cadeira", "3 voltas de 30s cada", "60-90s", "Fazer tudo sentado se necessÃ¡rio", "Ritmo moderado, sem prender a respiraÃ§Ã£o."],
      ["Step baixo ou toque no degrau", "2x8 por perna", "60s", "Tocar a ponta do pÃ© em um livro grosso", "Degrau baixo, apoio por perto, sem dor no joelho."],
      ["Prancha inclinada na parede", "3x20-30s", "45s", "Prancha com mÃ£os na bancada", "Corpo reto e abdome ativo, sem afundar a lombar."],
      ["Alongamento leve", "6-8 min", "Livre", "Sentado ou deitado", "Alongar panturrilha, posterior, peitoral e costas sem dor."]
    ]
  },
  {
    id: "domingo",
    name: "Domingo - descanso completo",
    detail: "RecuperaÃ§Ã£o muscular, sono, hidrataÃ§Ã£o e preparo da prÃ³xima semana.",
    tag: "0 min",
    minutes: 0,
    cardio: "Sem cardio obrigatÃ³rio.",
    items: [
      ["Descanso completo", "Dia livre", "Livre", "Caminhada curta apenas se quiser", "Se houver dor persistente, reduza volume na semana seguinte."],
      ["Alongamento leve opcional", "5-10 min", "Livre", "RespiraÃ§Ã£o e mobilidade sentada", "NÃ£o force amplitude; descanso tambÃ©m Ã© treino."]
    ]
  }
];

const weekDays = [
  { id: "segunda", label: "Segunda", defaultFocus: "lowerA" },
  { id: "terca", label: "TerÃ§a", defaultFocus: "upperA" },
  { id: "quarta", label: "Quarta", defaultFocus: "active" },
  { id: "quinta", label: "Quinta", defaultFocus: "lowerB" },
  { id: "sexta", label: "Sexta", defaultFocus: "upperB" },
  { id: "sabado", label: "SÃ¡bado", defaultFocus: "functional" },
  { id: "domingo", label: "Domingo", defaultFocus: "rest" }
];

const focusLabels = {
  lowerA: "MMII: quadrÃ­ceps e glÃºteos",
  lowerB: "MMII: posterior e estabilidade",
  upperA: "MMSS: costas, ombros e trÃ­ceps",
  upperB: "MMSS: peito, costas e bÃ­ceps",
  cardio: "Cardio de baixo impacto",
  active: "Descanso ativo",
  functional: "Funcional adaptado",
  rest: "Descanso completo"
};

const exerciseLibrary = [
  {
    id: "leg-press",
    place: "academia",
    group: "MMII",
    name: "Leg press 45",
    prescription: "3x10-12",
    rest: "75-90s",
    home: "Sentar e levantar de cadeira alta",
    safety: "Use amplitude sem dor, lombar apoiada e joelhos alinhados com os pÃ©s."
  },
  {
    id: "cadeira-extensora",
    place: "academia",
    group: "MMII",
    name: "Cadeira extensora",
    prescription: "2-3x12",
    rest: "60s",
    home: "ExtensÃ£o de joelho sentado sem carga",
    safety: "Suba devagar e pare se houver dor na frente do joelho."
  },
  {
    id: "cadeira-flexora",
    place: "academia",
    group: "MMII",
    name: "Cadeira ou mesa flexora",
    prescription: "3x12",
    rest: "60s",
    home: "FlexÃ£o de joelho em pÃ© segurando apoio",
    safety: "Evite jogar o quadril para frente; movimento curto e controlado."
  },
  {
    id: "abdutora",
    place: "academia",
    group: "MMII",
    name: "Cadeira abdutora",
    prescription: "3x15",
    rest: "45-60s",
    home: "AbduÃ§Ã£o lateral em pÃ© com apoio",
    safety: "Tronco firme e sem inclinar o corpo para compensar."
  },
  {
    id: "puxada-frente",
    place: "academia",
    group: "MMSS",
    name: "Puxada frente na polia",
    prescription: "3x10-12",
    rest: "60-75s",
    home: "Remada com toalha presa com seguranÃ§a",
    safety: "Ombros longe das orelhas e pescoÃ§o relaxado."
  },
  {
    id: "remada-sentada",
    place: "academia",
    group: "MMSS",
    name: "Remada sentada",
    prescription: "3x12",
    rest: "60s",
    home: "Remada com mochila leve",
    safety: "Coluna neutra, peito aberto e sem balancar o tronco."
  },
  {
    id: "chest-press",
    place: "academia",
    group: "MMSS",
    name: "Chest press ou supino mÃ¡quina",
    prescription: "3x10-12",
    rest: "60-75s",
    home: "FlexÃ£o na parede",
    safety: "Cotovelos confortÃ¡veis e lombar apoiada."
  },
  {
    id: "triceps-polia",
    place: "academia",
    group: "MMSS",
    name: "TrÃ­ceps na polia",
    prescription: "3x12-15",
    rest: "45-60s",
    home: "ExtensÃ£o de trÃ­ceps com garrafa",
    safety: "Cotovelos proximos ao corpo, sem dor no ombro."
  },
  {
    id: "sentar-levantar",
    place: "casa",
    group: "MMII",
    name: "Sentar e levantar da cadeira",
    prescription: "2-3x8-12",
    rest: "60-90s",
    home: "Usar cadeira alta e apoio das maos",
    safety: "Sente sem despencar; joelhos acompanham a ponta dos pÃ©s."
  },
  {
    id: "ponte-gluteos",
    place: "casa",
    group: "MMII",
    name: "Ponte de glÃºteos",
    prescription: "3x10-12",
    rest: "60s",
    home: "Mesmo exercÃ­cio no colchonete",
    safety: "Suba contraindo glÃºteos sem hiperestender a lombar."
  },
  {
    id: "flexao-parede",
    place: "casa",
    group: "MMSS",
    name: "FlexÃ£o na parede",
    prescription: "2-3x10-12",
    rest: "45-60s",
    home: "Aproxime ou afaste os pes da parede",
    safety: "Corpo alinhado, punhos confortÃ¡veis e sem prender a respiraÃ§Ã£o."
  },
  {
    id: "rosca-garrafa",
    place: "casa",
    group: "MMSS",
    name: "Rosca bÃ­ceps com garrafas",
    prescription: "3x12-15",
    rest: "45-60s",
    home: "Usar garrafas leves ou mochila pequena",
    safety: "Cotovelos parados e punhos neutros."
  },
  {
    id: "prancha-parede",
    place: "casa",
    group: "Core",
    name: "Prancha inclinada na parede",
    prescription: "3x20-30s",
    rest: "45-60s",
    home: "Fazer na parede ou bancada firme",
    safety: "Abdome ativo e lombar sem afundar."
  },
  {
    id: "dead-bug",
    place: "casa",
    group: "Core",
    name: "Dead bug adaptado",
    prescription: "2x6-8 por lado",
    rest: "45-60s",
    home: "Deitado, mexer um braÃ§o ou uma perna por vez",
    safety: "Mantenha lombar confortÃ¡vel; reduza amplitude se incomodar."
  },
  {
    id: "esteira-inclinada",
    place: "academia",
    group: "Cardio",
    name: "Esteira inclinada sem impacto",
    prescription: "10-25 min",
    rest: "Conforme necessÃ¡rio",
    home: "Caminhada leve em local plano",
    safety: "Sem corrida; reduza inclinaÃ§Ã£o se joelho, quadril ou lombar reclamarem."
  },
  {
    id: "marcha-sentada",
    place: "casa",
    group: "Cardio",
    name: "Marcha sentada ou parada",
    prescription: "3x30-45s",
    rest: "45-60s",
    home: "Fazer sentado se houver dor",
    safety: "Eleve pouco o joelho e mantenha respiraÃ§Ã£o fluida."
  },
  {
    id: "mobilidade-quadril",
    place: "casa",
    group: "Mobilidade",
    name: "Mobilidade leve de quadril",
    prescription: "5-8 min",
    rest: "Livre",
    home: "Movimentos sentados ou deitados",
    safety: "Sem forÃ§ar amplitude; mobilidade nÃ£o deve virar dor."
  },
  {
    id: "alongamento-peitoral",
    place: "casa",
    group: "Mobilidade",
    name: "Alongamento de peitoral e costas",
    prescription: "5-8 min",
    rest: "Livre",
    home: "Usar parede, cadeira ou toalha",
    safety: "Respire devagar e evite puxoes bruscos."
  },
  {
    id: "hack-machine",
    place: "academia",
    group: "MMII",
    name: "Agachamento hack com amplitude curta",
    prescription: "2-3x8-10",
    rest: "90s",
    home: "Sentar e levantar com apoio",
    safety: "Use pouca amplitude, pes firmes e pare se o joelho doer."
  },
  {
    id: "smith-cadeira",
    place: "academia",
    group: "MMII",
    name: "Agachamento no smith para banco",
    prescription: "2-3x8-10",
    rest: "90s",
    home: "Agachamento parcial na cadeira",
    safety: "Banco alto, tronco firme e sem descer alem do conforto."
  },
  {
    id: "gluteo-maquina",
    place: "academia",
    group: "MMII",
    name: "GlÃºteo mÃ¡quina",
    prescription: "3x10-12",
    rest: "60s",
    home: "Coice em pe segurando apoio",
    safety: "Evite arquear a lombar; movimento vem do quadril."
  },
  {
    id: "cabo-abducao",
    place: "academia",
    group: "MMII",
    name: "AbduÃ§Ã£o no cabo",
    prescription: "2-3x12 por lado",
    rest: "45-60s",
    home: "AbduÃ§Ã£o lateral sem carga",
    safety: "Carga leve, apoio firme e movimento curto."
  },
  {
    id: "panturrilha-sentada",
    place: "academia",
    group: "MMII",
    name: "Panturrilha sentada",
    prescription: "3x12-15",
    rest: "45-60s",
    home: "Panturrilha em pe segurando apoio",
    safety: "Suba e desca devagar, sem quicar."
  },
  {
    id: "levantamento-terra-kettlebell",
    place: "academia",
    group: "MMII",
    name: "Levantamento terra com kettlebell leve",
    prescription: "2-3x8-10",
    rest: "75-90s",
    home: "Dobrar quadril segurando mochila leve",
    safety: "Coluna neutra, carga perto do corpo e sem puxar com a lombar."
  },
  {
    id: "puxada-neutra",
    place: "academia",
    group: "MMSS",
    name: "Puxada com pegada neutra",
    prescription: "3x10-12",
    rest: "60-75s",
    home: "Remada com toalha ou elastico",
    safety: "Puxe com costas, sem elevar os ombros."
  },
  {
    id: "remada-cavalinho",
    place: "academia",
    group: "MMSS",
    name: "Remada cavalinho apoiada",
    prescription: "3x10-12",
    rest: "60-75s",
    home: "Remada unilateral com mochila",
    safety: "Prefira apoio no peito quando possÃ­vel para poupar lombar."
  },
  {
    id: "maquina-ombro",
    place: "academia",
    group: "MMSS",
    name: "Desenvolvimento de ombros na mÃ¡quina",
    prescription: "2-3x10",
    rest: "60s",
    home: "Elevar garrafas ate a linha dos ombros",
    safety: "Carga leve e sem arquear a lombar."
  },
  {
    id: "face-pull",
    place: "academia",
    group: "MMSS",
    name: "Face pull na polia",
    prescription: "2-3x12-15",
    rest: "45-60s",
    home: "Remada alta leve com elastico",
    safety: "Movimento controlado, sem dor no ombro ou pescoÃ§o."
  },
  {
    id: "crucifixo-maquina",
    place: "academia",
    group: "MMSS",
    name: "Crucifixo na mÃ¡quina",
    prescription: "2-3x10-12",
    rest: "60s",
    home: "FlexÃ£o na parede com amplitude curta",
    safety: "NÃ£o force abertura mÃ¡xima do ombro."
  },
  {
    id: "rosca-maquina",
    place: "academia",
    group: "MMSS",
    name: "Rosca bÃ­ceps na mÃ¡quina",
    prescription: "2-3x12",
    rest: "45-60s",
    home: "Rosca com garrafas ou mochila",
    safety: "Punhos neutros e cotovelos apoiados se possÃ­vel."
  },
  {
    id: "step-touch",
    place: "casa",
    group: "Cardio",
    name: "Step touch sem salto",
    prescription: "3x30-60s",
    rest: "45-60s",
    home: "Passo lateral curto segurando apoio se precisar",
    safety: "Sem pular; reduza amplitude se quadril ou joelho incomodar."
  },
  {
    id: "boxe-sombra",
    place: "casa",
    group: "Cardio",
    name: "Boxe sombra sentado ou em pe",
    prescription: "3x30-45s",
    rest: "45-60s",
    home: "Socos leves no ar, sentado se necessÃ¡rio",
    safety: "Ombros relaxados e intensidade moderada."
  },
  {
    id: "farmer-carry",
    place: "casa",
    group: "Core",
    name: "Caminhada carregando peso leve",
    prescription: "3x20-40s",
    rest: "60s",
    home: "Usar sacolas leves ou garrafas",
    safety: "Postura alta, passos curtos e sem inclinar o tronco."
  },
  {
    id: "bird-dog",
    place: "casa",
    group: "Core",
    name: "Bird dog adaptado",
    prescription: "2x6-8 por lado",
    rest: "45-60s",
    home: "Em quatro apoios ou apoiado na mesa",
    safety: "NÃ£o gire o quadril e mantenha a lombar neutra."
  },
  {
    id: "elevacao-lateral-sentada",
    place: "casa",
    group: "MMSS",
    name: "Elevacao lateral sentada",
    prescription: "2-3x10-12",
    rest: "45-60s",
    home: "Garrafas pequenas ou sem peso",
    safety: "Suba ate a linha do ombro ou menos se incomodar."
  },
  {
    id: "remada-elastico",
    place: "casa",
    group: "MMSS",
    name: "Remada com elastico",
    prescription: "3x12",
    rest: "60s",
    home: "ElÃ¡stico preso com seguranÃ§a ou mochila",
    safety: "Confira a fixacao antes de puxar."
  },
  {
    id: "cadeira-isometrica-alta",
    place: "casa",
    group: "MMII",
    name: "Isometria sentada parcial",
    prescription: "3x15-25s",
    rest: "60s",
    home: "Segurar meio sentar acima da cadeira",
    safety: "Amplitude pequena, apoio por perto e sem dor no joelho."
  },
  {
    id: "mobilidade-tornozelo",
    place: "casa",
    group: "Mobilidade",
    name: "Mobilidade de tornozelo",
    prescription: "3-5 min",
    rest: "Livre",
    home: "Sentado ou em pe com apoio",
    safety: "Movimento leve; nÃ£o force se houver dor no tendÃ£o ou joelho."
  },
  {
    id: "respiracao-diafragma",
    place: "casa",
    group: "Mobilidade",
    name: "Respiracao diafragmatica",
    prescription: "3-5 min",
    rest: "Livre",
    home: "Sentado ou deitado",
    safety: "Use para recuperar fÃ´lego e reduzir tensÃ£o lombar."
  }
];

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
const nutritionForm = document.querySelector("#nutritionForm");
const nutritionResults = document.querySelector("#nutritionResults");
const nutritionHistory = document.querySelector("#nutritionHistory");
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
const libraryPlace = document.querySelector("#libraryPlace");
const libraryGroup = document.querySelector("#libraryGroup");
const libraryDay = document.querySelector("#libraryDay");
const exerciseLibraryList = document.querySelector("#exerciseLibraryList");
const libraryStatus = document.querySelector("#libraryStatus");
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
const resetCodeHelp = document.querySelector("#resetCodeHelp");
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
let nutrition = createEmptyNutrition();
let workoutPlan = null;
let exercises = recommendedBasePlan;
let customLibraryItems = {};
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

function createEmptyNutrition() {
  return {
    logs: []
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
    throw new Error(payload.message || "NÃ£o foi possÃ­vel concluir a aÃ§Ã£o.");
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
    nutrition,
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
    setAccountMessage(`NÃ£o foi possÃ­vel salvar agora: ${error.message}`, true);
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

function normalizeNutrition(input) {
  const source = input && typeof input === "object" ? input : {};
  const logs = Array.isArray(source.logs) ? source.logs : [];

  return {
    logs: logs
      .filter((item) => item?.date && Number(item.calories) >= 0)
      .map((item) => ({
        date: item.date,
        calories: Number(item.calories),
        protein: item.protein === null || item.protein === undefined || item.protein === "" ? null : Number(item.protein),
        water: item.water === null || item.water === undefined || item.water === "" ? null : Number(item.water),
        hunger: item.hunger === null || item.hunger === undefined || item.hunger === "" ? null : Number(item.hunger),
        notes: String(item.notes || "")
      }))
      .sort((a, b) => a.date.localeCompare(b.date))
  };
}

function hydrateState(data = {}) {
  const source = data && typeof data === "object" ? data : {};
  completed = Array.isArray(source.completed) ? source.completed : [];
  checkins = Array.isArray(source.checkins) ? source.checkins : [];
  assessment = source.assessment || null;
  progress = normalizeProgress(source.progress);
  progressPhotos = normalizePhotos(source.progressPhotos);
  nutrition = normalizeNutrition(source.nutrition);
  workoutPlan = source.workoutPlan?.exercises?.length ? source.workoutPlan : null;
  exercises = workoutPlan?.exercises?.length ? workoutPlan.exercises : recommendedBasePlan;
}

function resetPrivateState() {
  completed = [];
  checkins = [];
  assessment = null;
  progress = createEmptyProgress();
  progressPhotos = createEmptyPhotos();
  nutrition = createEmptyNutrition();
  workoutPlan = null;
  exercises = recommendedBasePlan;
  assessmentForm.reset();
  progressForm.reset();
  nutritionForm.reset();
  document.querySelector("#measurementDate").value = getTodayInputValue();
  document.querySelector("#nutritionDate").value = getTodayInputValue();
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
    return "Preencha a avaliaÃ§Ã£o para liberar esta Ã¡rea.";
  }

  if (section.classList.contains("requires-plan") && !hasActivePlan()) {
    return assessment
      ? "Escolha um treino recomendado ou personalizado para liberar esta Ã¡rea."
      : "Preencha a avaliaÃ§Ã£o e monte seu treino para liberar esta Ã¡rea.";
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
    assessmentResults.innerHTML = `<p>O resultado aparecerÃ¡ aqui apÃ³s o preenchimento.</p>`;
    return;
  }

  const waistText = result.waist
    ? `<small>Cintura informada: ${formatNumber(result.waist, 1)} cm.</small>`
    : "<small>CircunferÃªncia abdominal nÃ£o informada.</small>";
  const goalText = result.targetLoss > 0
    ? `${formatNumber(result.targetLoss, 1)} kg em aproximadamente ${result.weeksFast}-${result.weeksSlow} semanas`
    : "Meta igual ou acima do peso atual";
  const limitationsText = result.limitations.length
    ? result.limitations.map(escapeHtml).join(", ")
    : "Nenhuma limitaÃ§Ã£o marcada";
  const needsClearance = result.limitations.some((item) =>
    /cardÃ­acos|hÃ©rnia|dor no joelho|dor na lombar|dor no quadril/i.test(item)
  );
  const clearanceText = needsClearance
    ? " Antes de aumentar carga ou inclinaÃ§Ã£o, busque liberaÃ§Ã£o profissional e ajuste qualquer exercÃ­cio que cause dor."
    : "";

  assessmentResults.innerHTML = `
    <div class="result-grid">
      <article class="result-card"><span>IMC</span><strong>${formatNumber(result.bmi, 1)}</strong><small>${result.bmiClass}</small></article>
      <article class="result-card"><span>TMB estimada</span><strong>${formatNumber(result.bmr)} kcal</strong><small>Energia basal em repouso.</small></article>
      <article class="result-card"><span>GET/TDEE</span><strong>${formatNumber(result.tdee)} kcal</strong><small>Estimativa diÃ¡ria com atividade.</small></article>
      <article class="result-card"><span>Faixa para emagrecimento</span><strong>${formatNumber(result.caloriesLow)}-${formatNumber(result.caloriesHigh)} kcal</strong><small>DÃ©ficit moderado de 10% a 20%.</small></article>
      <article class="result-card"><span>Perda saudÃ¡vel</span><strong>${formatNumber(result.weeklyLossLow, 1)}-${formatNumber(result.weeklyLossHigh, 1)} kg/sem</strong><small>Estimativa gradual e ajustÃ¡vel.</small></article>
      <article class="result-card"><span>Meta estimada</span><strong>${goalText}</strong>${waistText}</article>
    </div>
    <p class="result-note">Plano liberado para ${escapeHtml(result.name)}. Academia: ${escapeHtml(result.hasGym)}. LimitaÃ§Ãµes: ${limitationsText}.${clearanceText}</p>
  `;
}

function fillAssessmentForm(result) {
  if (!result) return;

  const knownLimitations = new Set([
    "Dor no joelho",
    "Dor na lombar",
    "Dor no quadril",
    "HÃ©rnia de disco",
    "Problemas cardÃ­acos"
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
      detail: "Caminhada confortÃ¡vel e mobilidade, sem corrida ou saltos.",
      tag: "30 min",
      minutes: 30,
      cardio: "Use o protocolo de esteira de 25 minutos ou caminhe em local plano.",
      items: [
        ["Caminhada progressiva", "20-25 min", "Conforme necessÃ¡rio", "Marcha sentada ou caminhada em casa", "Mantenha postura ereta e reduza o ritmo se houver dor."],
        ["Mobilidade leve", "5-8 min", "Livre", "Movimentos sentados", "Sem forÃ§ar joelhos, quadril ou lombar."]
      ]
    };
  }

  return templates[focus] || templates.rest;
}

function adaptPlanToAssessment(plan, result) {
  const adapted = cloneData(plan);
  const limitations = new Set(result?.limitations || []);
  const trainsAtHome = result?.hasGym === "NÃ£o";
  const hasJointPain = ["Dor no joelho", "Dor na lombar", "Dor no quadril", "HÃ©rnia de disco"]
    .some((item) => limitations.has(item));
  const hasCardiacRisk = limitations.has("Problemas cardÃ­acos");

  adapted.forEach((day) => {
    if (trainsAtHome) {
      day.detail = `${day.detail} VersÃ£o adaptada para treino em casa.`;
      day.items = day.items.map((item) => [
        item[3],
        item[1],
        item[2],
        "Use apoio estÃ¡vel e objetos leves disponÃ­veis",
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
      day.cardio = `${day.cardio} Comece sem inclinaÃ§Ã£o e aumente apenas se estiver sem dor.`;
    }

    if (hasCardiacRisk && day.minutes > 0) {
      day.cardio = "Cardio somente apÃ³s liberaÃ§Ã£o mÃ©dica, em intensidade leve e com supervisÃ£o.";
      day.detail = `${day.detail} Evite esforÃ§o intenso atÃ© receber liberaÃ§Ã£o mÃ©dica.`;
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
    const additions = customLibraryItems[day.id] || [];
    if (additions.length && focus !== "rest") {
      template.items = [...template.items, ...cloneData(additions)];
      template.detail = `${template.detail} Inclui exercÃ­cios extras escolhidos na lista.`;
    }
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

  renderLibraryDayOptions();
  renderExerciseLibrary();
}

function renderLibraryDayOptions() {
  if (!libraryDay) return;

  libraryDay.innerHTML = weekDays
    .filter((day) => day.id !== "domingo")
    .map((day) => `<option value="${day.id}">${day.label}</option>`)
    .join("");
}

function getFilteredLibrary() {
  const place = libraryPlace?.value || "all";
  const group = libraryGroup?.value || "all";

  return exerciseLibrary.filter((exercise) => {
    const placeMatch = place === "all" || exercise.place === place;
    const groupMatch = group === "all" || exercise.group === group;
    return placeMatch && groupMatch;
  });
}

function renderExerciseLibrary() {
  if (!exerciseLibraryList) return;

  const items = getFilteredLibrary();
  exerciseLibraryList.innerHTML = items.length
    ? items.map((exercise) => `
      <article class="library-card">
        <div>
          <span>${exercise.place === "academia" ? "Academia" : "Casa"} | ${exercise.group}</span>
          <h4>${exercise.name}</h4>
          <p><strong>${exercise.prescription}</strong> | descanso ${exercise.rest}</p>
          <p>Em casa: ${exercise.home}</p>
          <small>${exercise.safety}</small>
        </div>
        <button class="button button--secondary add-library-exercise" type="button" data-library-id="${exercise.id}">Adicionar</button>
      </article>
    `).join("")
    : `<p>Nenhum exercÃ­cio encontrado para esse filtro.</p>`;

  exerciseLibraryList.querySelectorAll(".add-library-exercise").forEach((button) => {
    button.addEventListener("click", () => addLibraryExercise(button.dataset.libraryId));
  });
}

function addLibraryExercise(id) {
  const exercise = exerciseLibrary.find((item) => item.id === id);
  const dayId = libraryDay?.value || "segunda";
  const day = weekDays.find((item) => item.id === dayId);
  if (!exercise || !day) return;

  if (!customLibraryItems[dayId]) customLibraryItems[dayId] = [];
  const alreadyAdded = customLibraryItems[dayId].some((item) => item[0] === exercise.name);
  if (alreadyAdded) {
    libraryStatus.textContent = `${exercise.name} jÃ¡ estÃ¡ na ficha de ${day.label}.`;
    return;
  }

  customLibraryItems[dayId].push([
    exercise.name,
    exercise.prescription,
    exercise.rest,
    exercise.home,
    exercise.safety
  ]);
  libraryStatus.textContent = `${exercise.name} adicionado na ficha de ${day.label}.`;
}

function renderRecommendationSummary(result) {
  if (!result) {
    recommendationSummary.textContent = "Conclua a avaliaÃ§Ã£o para receber a recomendaÃ§Ã£o.";
    return;
  }

  const location = result.hasGym === "Sim" ? "academia" : "casa";
  const limitations = result.limitations.length
    ? ` com adaptaÃ§Ãµes para ${result.limitations.join(", ")}`
    : " sem limitaÃ§Ãµes fÃ­sicas marcadas";

  recommendationSummary.textContent =
    `Semana alternando MMII, MMSS, cardio e recuperaÃ§Ã£o para treino em ${location}${limitations}.`;
}

function setBuilderMode(mode) {
  const custom = mode === "custom";
  recommendedMode.classList.toggle("active", !custom);
  customMode.classList.toggle("active", custom);
  recommendedBuilder.classList.toggle("is-hidden", custom);
  customWorkoutForm.classList.toggle("is-hidden", !custom);
  builderStatus.textContent = "";
  if (custom) {
    renderLibraryDayOptions();
    renderExerciseLibrary();
  }
}

async function activateWorkoutPlan(mode, plan, focusMap = null) {
  exercises = plan;
  workoutPlan = { mode, exercises: plan, focusMap };
  completed = completed.filter((id) => exercises.some((exercise) => exercise.id === id));
  await saveState();
  renderInterface();
  builderStatus.textContent = mode === "custom"
    ? "Treino personalizado salvo."
    : "Treino recomendado pela avaliaÃ§Ã£o montado.";
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

function clearNutritionFormExtras() {
  ["#nutritionCalories", "#nutritionProtein", "#nutritionWater", "#nutritionHunger", "#nutritionNotes"]
    .forEach((selector) => {
      document.querySelector(selector).value = "";
    });
}

function sortMeasurements(measurements) {
  return [...measurements].sort((a, b) => a.date.localeCompare(b.date));
}

function getNutritionTargets() {
  if (!assessment) return null;

  const low = Number(assessment.caloriesLow || 0);
  const high = Number(assessment.caloriesHigh || 0);
  const targetWeight = Number(assessment.goalWeight || assessment.weight || 0);
  const proteinLow = targetWeight ? Math.round(targetWeight * 1.2) : null;
  const proteinHigh = targetWeight ? Math.round(targetWeight * 1.6) : null;

  return {
    low,
    high,
    proteinLow,
    proteinHigh
  };
}

function classifyNutritionDay(log, targets) {
  if (!targets?.low || !targets?.high) {
    return {
      label: "sem meta",
      note: "Preencha a avaliaÃ§Ã£o para comparar com a faixa calÃ³rica.",
      warning: false
    };
  }

  if (log.calories < targets.low) {
    return {
      label: "abaixo da faixa",
      note: "Calorias abaixo da faixa estimada. Evite cortes agressivos e observe fome, energia e compulsÃ£o.",
      warning: true
    };
  }

  if (log.calories > targets.high) {
    return {
      label: "acima da faixa",
      note: "Calorias acima da faixa estimada. Revise porÃ§Ãµes, beliscos, bebidas calÃ³ricas e refeiÃ§Ãµes fora.",
      warning: true
    };
  }

  return {
    label: "dentro da faixa",
    note: "Registro dentro da faixa estimada para emagrecimento.",
    warning: false
  };
}

function renderNutrition() {
  const targets = getNutritionTargets();
  const logs = normalizeNutrition(nutrition).logs;
  nutrition.logs = logs;

  document.querySelector("#nutritionDate").value ||= getTodayInputValue();

  if (!logs.length) {
    const targetText = targets?.low && targets?.high
      ? `Sua faixa estimada atual: ${formatNumber(targets.low)}-${formatNumber(targets.high)} kcal/dia.`
      : "Preencha a avaliaÃ§Ã£o para gerar sua faixa calÃ³rica.";
    nutritionResults.innerHTML = `<p>${targetText} Salve o primeiro registro alimentar para acompanhar a consistÃªncia.</p>`;
    nutritionHistory.innerHTML = "";
    return;
  }

  const latest = logs.at(-1);
  const last7 = logs.slice(-7);
  const averageCalories = last7.reduce((total, item) => total + item.calories, 0) / last7.length;
  const averageProteinItems = last7.filter((item) => Number(item.protein));
  const averageProtein = averageProteinItems.length
    ? averageProteinItems.reduce((total, item) => total + item.protein, 0) / averageProteinItems.length
    : null;
  const latestStatus = classifyNutritionDay(latest, targets);
  const targetText = targets?.low && targets?.high
    ? `${formatNumber(targets.low)}-${formatNumber(targets.high)} kcal`
    : "AvaliaÃ§Ã£o pendente";
  const proteinTargetText = targets?.proteinLow && targets?.proteinHigh
    ? `${targets.proteinLow}-${targets.proteinHigh} g/dia`
    : "AvaliaÃ§Ã£o pendente";

  nutritionResults.innerHTML = `
    <div class="nutrition-grid">
      <article class="nutrition-card"><span>Faixa calÃ³rica</span><strong>${targetText}</strong><small>Estimativa para emagrecimento seguro.</small></article>
      <article class="nutrition-card"><span>Ãšltimo registro</span><strong>${formatNumber(latest.calories)} kcal</strong><small>${formatDate(latest.date)} | ${latestStatus.label}</small></article>
      <article class="nutrition-card"><span>MÃ©dia 7 registros</span><strong>${formatNumber(averageCalories)} kcal</strong><small>Use a mÃ©dia, nÃ£o apenas um dia isolado.</small></article>
      <article class="nutrition-card"><span>ProteÃ­na referÃªncia</span><strong>${proteinTargetText}</strong><small>MÃ©dia registrada: ${averageProtein ? `${formatNumber(averageProtein)} g` : "sem dados"}.</small></article>
      <article class="nutrition-card"><span>Ãgua</span><strong>${latest.water ? `${formatNumber(latest.water, 1)} L` : "sem dado"}</strong><small>Ãšltimo dia registrado.</small></article>
      <article class="nutrition-card"><span>Fome</span><strong>${latest.hunger ?? "sem dado"}</strong><small>Escala de 0 a 10.</small></article>
    </div>
    <p class="nutrition-note ${latestStatus.warning ? "warning" : ""}">${latestStatus.note}</p>
  `;

  nutritionHistory.innerHTML = logs.slice().reverse().slice(0, 7).map((log) => {
    const status = classifyNutritionDay(log, targets);
    return `
      <article class="nutrition-log">
        <div>
          <strong>${formatDate(log.date)}</strong>
          <span>${formatNumber(log.calories)} kcal | ${status.label}</span>
        </div>
        <small>ProteÃ­na: ${log.protein ? `${formatNumber(log.protein)} g` : "sem dado"} | Ãgua: ${log.water ? `${formatNumber(log.water, 1)} L` : "sem dado"} | Fome: ${log.hunger ?? "sem dado"}</small>
        ${log.notes ? `<p>${escapeHtml(log.notes)}</p>` : ""}
      </article>
    `;
  }).join("");
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

  let trend = "estÃ¡vel";
  let alert = "Continue registrando semanalmente. Pequenas oscilaÃ§Ãµes sÃ£o normais.";
  let warning = false;

  if (pace >= 0.5 && pace <= 1) {
    trend = "perda adequada";
    alert = "Ritmo dentro da faixa segura de 0,5 a 1 kg por semana. Mantenha consistÃªncia.";
  } else if (pace > 1) {
    trend = "perda muito rÃ¡pida";
    alert = "Ritmo acima do recomendado. Considere subir um pouco as calorias, reduzir volume ou buscar orientaÃ§Ã£o profissional.";
    warning = true;
  } else if (pace > 0 && pace < 0.5) {
    trend = "perda lenta";
    alert = "Ritmo abaixo de 0,5 kg por semana. Revise adesÃ£o, sono, ingestÃ£o calÃ³rica e regularidade dos treinos.";
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
    weightChart.innerHTML = `<text x="32" y="135" fill="#5f6f6b" font-size="18" font-weight="700">Sem mediÃ§Ãµes registradas.</text>`;
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
    progressResults.innerHTML = `<p>Registre a primeira mediÃ§Ã£o para visualizar perda semanal, percentual e projeÃ§Ã£o.</p>`;
  } else {
    progressResults.innerHTML = `
      <div class="progress-grid">
        <article class="progress-card"><span>Perda desde o inÃ­cio</span><strong>${formatNumber(stats.lost, 1)} kg</strong><small>${formatNumber(stats.percentLost, 1)}% do peso inicial.</small></article>
        <article class="progress-card"><span>Velocidade atual</span><strong>${formatNumber(stats.pace, 2)} kg/sem</strong><small>${formatNumber(stats.weeksElapsed, 1)} semanas acompanhadas.</small></article>
        <article class="progress-card"><span>TendÃªncia</span><strong>${stats.trend}</strong><small>Faixa segura alvo: 0,5 a 1 kg/sem.</small></article>
        <article class="progress-card"><span>ProjeÃ§Ã£o segura</span><strong>${formatDate(stats.projectedFastDate)} a ${formatDate(stats.projectedSlowDate)}</strong><small>Estimativa usando 1 a 0,5 kg por semana.</small></article>
        <article class="progress-card"><span>Peso atual</span><strong>${formatNumber(stats.latest.weight, 1)} kg</strong><small>MediÃ§Ã£o de ${formatDate(stats.latest.date)}.</small></article>
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
        item.arm ? `BraÃ§o ${formatNumber(item.arm, 1)} cm` : null,
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
    : `<div class="measurement-item"><span>Nenhuma mediÃ§Ã£o</span><span>Comece hoje</span></div>`;
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
    reader.onerror = () => reject(new Error("NÃ£o foi possÃ­vel ler a imagem."));
    reader.readAsDataURL(file);
  });
}

function loadImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("NÃ£o foi possÃ­vel carregar a imagem."));
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
    : `<p>Nenhum treino concluÃ­do ainda.</p>`;

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
        <small>SeguranÃ§a: ${item[4]}</small>
      </li>
    `).join("");

    return `
      <article class="exercise-card day-card ${done ? "done" : ""}">
        <button class="exercise-check" type="button" aria-label="Marcar ${exercise.name}" data-id="${exercise.id}">
          ${done ? "âœ“" : ""}
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
  checkinButton.textContent = checkins.includes(getTodayKey()) ? "MissÃ£o cumprida hoje" : "Check-in da missÃ£o";
  checkinButton.disabled = !currentUser || !hasActivePlan() || checkins.includes(getTodayKey());
  resetWorkout.disabled = !currentUser || !hasActivePlan();
}

function renderHistory() {
  const latest = [...checkins].sort().reverse().slice(0, 7);

  if (!latest.length) {
    historyList.innerHTML = `<div class="history-item"><span>Nenhum check-in ainda</span><span>Comece a missÃ£o hoje</span></div>`;
    return;
  }

  historyList.innerHTML = latest.map((dateKey) => `
    <div class="history-item">
      <span>${formatDate(dateKey)}</span>
      <span>MissÃ£o cumprida</span>
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
    assessmentResults.innerHTML = `<p>O resultado aparecerÃ¡ aqui apÃ³s o preenchimento.</p>`;
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
  renderNutrition();
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
      timerMessage.textContent = "Descanso finalizado. Volte para a prÃ³xima sÃ©rie!";
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
  if (mode !== "reset") resetCodeHelp.textContent = "";
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

  setAccountMessage("Verificando sessÃ£o...");

  try {
    const response = await api("/api/auth/me");
    currentUser = response.user;
    await loadUserData();
    renderInterface();
    setAccountMessage("SessÃ£o ativa. Seus dados estÃ£o carregados.");
  } catch {
    currentUser = null;
    resetPrivateState();
    renderInterface();
    setAccountMessage("Entre ou crie sua conta para liberar avaliaÃ§Ã£o, treino e progresso.");
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
    setAccountMessage("Entre na conta antes de preencher a avaliaÃ§Ã£o.", true);
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
  setAccountMessage("AvaliaÃ§Ã£o salva no seu painel.");
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

nutritionForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!assessment) return;

  const date = document.querySelector("#nutritionDate").value || getTodayInputValue();
  const log = {
    date,
    calories: Number(document.querySelector("#nutritionCalories").value),
    protein: document.querySelector("#nutritionProtein").value ? Number(document.querySelector("#nutritionProtein").value) : null,
    water: document.querySelector("#nutritionWater").value ? Number(document.querySelector("#nutritionWater").value) : null,
    hunger: document.querySelector("#nutritionHunger").value ? Number(document.querySelector("#nutritionHunger").value) : null,
    notes: document.querySelector("#nutritionNotes").value.trim()
  };

  nutrition.logs = normalizeNutrition({
    logs: [
      ...nutrition.logs.filter((item) => item.date !== date),
      log
    ]
  }).logs;

  await saveState();
  renderNutrition();
  document.querySelector("#nutritionDate").value = getTodayInputValue();
  clearNutritionFormExtras();
});

recommendedMode.addEventListener("click", () => setBuilderMode("recommended"));
customMode.addEventListener("click", () => setBuilderMode("custom"));
libraryPlace.addEventListener("change", renderExerciseLibrary);
libraryGroup.addEventListener("change", renderExerciseLibrary);

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
    await enterSession(response.user, "Conta criada. Agora preencha sua avaliaÃ§Ã£o.");
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
      resetCodeHelp.textContent = `Código gerado: ${response.resetToken}. Ele já foi preenchido acima. Digite a nova senha e toque em Redefinir senha.`;
      setAccountMessage("Código gerado. Digite a nova senha para finalizar.");
    } else {
      setAccountMessage("Não foi possível abrir a redefinição. Confira se o e-mail é exatamente o mesmo usado no cadastro. No Render gratuito, contas antigas podem sumir após reiniciar.", true);
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
    // Mesmo com falha de rede, limpamos a tela local para proteger os dados visÃ­veis.
  }

  currentUser = null;
  resetPrivateState();
  renderInterface();
  setAccountMessage("VocÃª saiu da conta. Os dados privados foram ocultados.");
  history.replaceState(null, "", "#conta");
  document.querySelector("#conta").scrollIntoView({ behavior: "smooth", block: "start" });
});

window.addEventListener("hashchange", redirectLockedHash);

document.querySelector('[data-seconds="60"]').classList.add("active");
updateTimerDisplay();
initializeAuth();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // O app continua funcionando mesmo se o navegador bloquear cache offline.
    });
  });
}
