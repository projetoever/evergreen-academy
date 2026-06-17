import type { Trilha, FuncionarioEmTreino, TrilhaEtapa } from "../types";

export const TRILHA_OPERADOR_HAINA_ETAPAS: TrilhaEtapa[] = [
  {
    id: "conceitos-basicos",
    titulo: "Conceitos básicos obrigatórios",
    tipo: "teorica",
    status: "disponivel",
    ordem: 1,
    obrigatoria: true,
    referenciaId: "aula-conceitos",
    descricao:
      "Apresenta a rotina da linha, os papéis do operador iniciante e os combinados mínimos para acompanhar a Haina com segurança antes de tocar no equipamento.",
  },
  {
    id: "processo-fraldas",
    titulo: "Processo de fabricação de fraldas",
    tipo: "teorica",
    status: "disponivel",
    ordem: 2,
    obrigatoria: true,
    referenciaId: "processo-fraldas",
    descricao:
      "Mostra o fluxo de fabricação da fralda, da alimentação de materiais ao corte e empacotamento, para o operador entender onde sua atividade impacta qualidade e ritmo.",
  },
  {
    id: "haina-fralda-baby",
    titulo: "Conhecendo a Haina Fralda Baby",
    tipo: "teorica",
    status: "disponivel",
    ordem: 3,
    obrigatoria: true,
    referenciaId: "mq-haina-fralda",
    descricao:
      "Localiza os principais conjuntos da Haina Fralda Baby, pontos de comando, áreas de acesso e referências MQ-001 usadas durante o treinamento.",
  },
  {
    id: "seguranca",
    titulo: "Pontos críticos de segurança",
    tipo: "teorica",
    status: "disponivel",
    ordem: 4,
    obrigatoria: true,
    referenciaId: "seguranca-haina",
    descricao:
      "Ensina a reconhecer proteções, portas, pontos de esmagamento, hotmelt e paradas de emergência antes de qualquer intervenção na máquina.",
  },
  {
    id: "checklist-partida",
    titulo: "Checklist de partida",
    tipo: "checklist",
    status: "disponivel",
    ordem: 5,
    obrigatoria: true,
    referenciaId: "checklist-haina",
    descricao:
      "Guia o operador iniciante por uma verificação assistida de EPIs, proteções, materiais, ar, hotmelt e organização da área antes da primeira partida.",
  },
  {
    id: "alarmes-comuns",
    titulo: "Alarmes comuns",
    tipo: "teorica",
    status: "disponivel",
    ordem: 6,
    obrigatoria: true,
    referenciaId: "alarmes-haina",
    descricao:
      "Explica alarmes frequentes de alimentação, portas, pressão de ar e temperatura para o operador saber estabilizar a linha ou chamar apoio.",
  },
  {
    id: "quiz",
    titulo: "Quiz teórico",
    tipo: "quiz",
    status: "disponivel",
    ordem: 7,
    obrigatoria: true,
    referenciaId: "quiz-haina",
    descricao:
      "Confirma se o operador entendeu ciclo da máquina, segurança, checklist e alarmes antes de avançar para a prática acompanhada.",
  },
  {
    id: "avaliacao-pratica",
    titulo: "Avaliação prática",
    tipo: "pratica",
    status: "bloqueada",
    ordem: 8,
    obrigatoria: true,
    referenciaId: "avaliacao-pratica-haina",
    descricao:
      "Permite ao instrutor observar a execução real do checklist, reação a alarmes e comunicação do operador no chão de fábrica.",
  },
  {
    id: "liberacao-final",
    titulo: "Liberação final",
    tipo: "liberacao",
    status: "bloqueada",
    ordem: 9,
    obrigatoria: true,
    referenciaId: "liberacao-haina",
    descricao:
      "Registra a liberação mockada do operador para atuação assistida/final na Haina Fralda Baby após aprovação prática.",
  },
];

export const TRILHA_OPERADOR_HAINA_ABSORVENTE_ETAPAS: TrilhaEtapa[] = [
  {
    id: "conceitos-basicos",
    titulo: "Conceitos básicos obrigatórios",
    tipo: "teorica",
    status: "disponivel",
    ordem: 1,
    obrigatoria: true,
    referenciaId: "manual-haina-absorvente",
    descricao:
      "Apresenta a rotina do operador iniciante na linha de absorventes, reforçando qualidade, comunicação com o instrutor e limites de atuação segura.",
  },
  {
    id: "processo-absorventes",
    titulo: "Processo de fabricação de absorventes",
    tipo: "teorica",
    status: "disponivel",
    ordem: 2,
    obrigatoria: true,
    referenciaId: "processo-absorventes",
    descricao:
      "Explica o fluxo completo: alimentação de materiais, formação do núcleo absorvente, cobertura superior, filme inferior, adesivo hotmelt, corte anatômico, dobra, embalagem individual, inspeção e contagem/embalagem final.",
  },
  {
    id: "haina-absorvente",
    titulo: "Conhecendo a Haina Absorvente",
    tipo: "teorica",
    status: "disponivel",
    ordem: 3,
    obrigatoria: true,
    referenciaId: "mq-haina-absorvente",
    descricao:
      "Orienta o operador a reconhecer componentes da máquina, materiais de entrada, produto de saída, parâmetros básicos e telas da IHM usadas no acompanhamento da linha.",
  },
  {
    id: "seguranca-absorvente",
    titulo: "Pontos críticos de segurança",
    tipo: "teorica",
    status: "disponivel",
    ordem: 4,
    obrigatoria: true,
    referenciaId: "parada-segura-absorvente",
    descricao:
      "Reforça cuidados com partes móveis, pontos de corte, rolos de tração, área de embalagem, hotmelt e energia pneumática; nunca burlar proteção, nunca intervir com máquina em movimento e chamar instrutor/manutenção quando necessário.",
  },
  {
    id: "checklist-partida",
    titulo: "Checklist de partida",
    tipo: "checklist",
    status: "disponivel",
    ordem: 5,
    obrigatoria: true,
    referenciaId: "checklist-partida-absorvente",
    descricao:
      "Checklist interativo específico da Haina Absorvente para validar EPIs, proteções, bobinas, embalagem, pressão, hotmelt, área limpa e chamada do instrutor antes da primeira partida.",
  },
  {
    id: "alarmes-comuns",
    titulo: "Alarmes comuns",
    tipo: "teorica",
    status: "disponivel",
    ordem: 6,
    obrigatoria: true,
    referenciaId: "defeitos-absorventes",
    descricao:
      "Mostra alarmes e desvios frequentes de material, embalagem, pressão pneumática e hotmelt para o operador comunicar a ocorrência e agir apenas dentro do padrão permitido.",
  },
  {
    id: "quiz",
    titulo: "Quiz teórico",
    tipo: "quiz",
    status: "disponivel",
    ordem: 7,
    obrigatoria: true,
    referenciaId: "quiz-haina-absorvente",
    descricao:
      "Verifica conhecimentos mínimos sobre materiais, defeitos, embalagem, segurança, cola hotmelt, alarmes repetitivos e critérios para chamar manutenção.",
  },
  {
    id: "avaliacao-pratica",
    titulo: "Avaliação prática",
    tipo: "pratica",
    status: "bloqueada",
    ordem: 8,
    obrigatoria: true,
    referenciaId: "liberacao-operador-absorvente",
    descricao:
      "Checklist prático do instrutor para observar EPIs, pontos de corte e esmagamento, parada de emergência, materiais, checklist de partida, defeitos, alarmes e comportamento seguro.",
  },
  {
    id: "liberacao-final",
    titulo: "Liberação final",
    tipo: "liberacao",
    status: "bloqueada",
    ordem: 9,
    obrigatoria: true,
    referenciaId: "liberacao-operador-absorvente",
    descricao:
      "Registra a liberação mockada do operador para atuação assistida/final na Haina Absorvente após aprovação teórica e avaliação prática do instrutor.",
  },
];

export const TRILHA_OPERADOR_LENCOS_ETAPAS: TrilhaEtapa[] = [
  {
    id: "conceitos-basicos",
    titulo: "Conceitos básicos obrigatórios",
    tipo: "teorica",
    status: "disponivel",
    ordem: 1,
    obrigatoria: true,
    referenciaId: "manual-lencos-umedecidos",
    descricao:
      "Apresenta a rotina do operador iniciante na Linha Lenços Umedecidos, reforçando EPIs, comunicação com instrutor, organização da área e limites de atuação segura.",
  },
  {
    id: "processo-lencos-umedecidos",
    titulo: "Processo de fabricação de lenços umedecidos",
    tipo: "teorica",
    status: "disponivel",
    ordem: 2,
    obrigatoria: true,
    referenciaId: "manual-lencos-umedecidos",
    descricao:
      "Explica o fluxo completo: alimentação da bobina de não tecido, controle de tensão, dobra do material, aplicação/dosagem da solução umectante, corte, contagem de folhas, empilhamento, inserção na embalagem, selagem e saída do pacote final.",
  },
  {
    id: "linha-lencos-umedecidos",
    titulo: "Conhecendo a Linha Lenços Umedecidos",
    tipo: "teorica",
    status: "disponivel",
    ordem: 3,
    obrigatoria: true,
    referenciaId: "ihm-dosagem-solucao-lencos",
    descricao:
      "Orienta o operador a reconhecer componentes da máquina, materiais de entrada, produto de saída, parâmetros básicos, telas da IHM e defeitos comuns acompanhados durante a operação.",
  },
  {
    id: "seguranca-lencos",
    titulo: "Pontos críticos de segurança",
    tipo: "teorica",
    status: "disponivel",
    ordem: 4,
    obrigatoria: true,
    referenciaId: "parada-segura-lencos",
    descricao:
      "Reforça cuidados com rolos de tração, pontos de corte, área de selagem quente, partes móveis, energia pneumática e risco de escorregamento por solução; nunca burlar proteção, nunca intervir com máquina em movimento e chamar instrutor/manutenção quando necessário.",
  },
  {
    id: "checklist-partida",
    titulo: "Checklist de partida",
    tipo: "checklist",
    status: "disponivel",
    ordem: 5,
    obrigatoria: true,
    referenciaId: "checklist-partida-lencos",
    descricao:
      "Checklist interativo da Linha Lenços Umedecidos para validar EPIs, proteções, bobina, solução umectante, embalagem, selagem, pressão pneumática, área segura e chamada do instrutor antes da primeira partida.",
  },
  {
    id: "alarmes-comuns",
    titulo: "Alarmes comuns",
    tipo: "teorica",
    status: "disponivel",
    ordem: 6,
    obrigatoria: true,
    referenciaId: "defeitos-lencos-umedecidos",
    descricao:
      "Mostra alarmes e desvios frequentes de tensão da bobina, dosagem de solução, corte, contagem, empilhamento, embalagem e selagem para o operador comunicar e agir dentro do padrão permitido.",
  },
  {
    id: "quiz",
    titulo: "Quiz teórico",
    tipo: "quiz",
    status: "disponivel",
    ordem: 7,
    obrigatoria: true,
    referenciaId: "quiz-lencos-umedecidos",
    descricao:
      "Verifica conhecimentos mínimos sobre lenço seco, pacote vazando, temperatura de selagem, contagem de folhas, alarmes repetitivos, primeira partida e intervenção segura.",
  },
  {
    id: "avaliacao-pratica",
    titulo: "Avaliação prática",
    tipo: "pratica",
    status: "bloqueada",
    ordem: 8,
    obrigatoria: true,
    referenciaId: "liberacao-operador-lencos",
    descricao:
      "Checklist prático do instrutor para observar EPIs, pontos de corte e tração, selagem quente, materiais, checklist de partida, defeitos, alarmes e comportamento seguro.",
  },
  {
    id: "liberacao-final",
    titulo: "Liberação final",
    tipo: "liberacao",
    status: "bloqueada",
    ordem: 9,
    obrigatoria: true,
    referenciaId: "liberacao-operador-lencos",
    descricao:
      "Registra a liberação mockada do operador para atuação assistida/final na Linha Lenços Umedecidos após aprovação teórica e avaliação prática do instrutor.",
  },
];

export const TRILHAS_MOCK: Trilha[] = [
  {
    id: "operador-inicial-haina-fralda-baby",
    titulo: "Operador Inicial — Haina Fralda Baby",
    maquinaId: "mq-haina-fralda",
    status: "em-andamento",
    progresso: 62,
    ultimaAtualizacao: "Hoje",
    etapas: TRILHA_OPERADOR_HAINA_ETAPAS,
  },
  {
    id: "operador-inicial-haina-absorvente",
    titulo: "Operador Inicial — Haina Absorvente",
    etapas: TRILHA_OPERADOR_HAINA_ABSORVENTE_ETAPAS,
    maquinaId: "mq-haina-absorvente",
    status: "nao-iniciado",
    progresso: 0,
    ultimaAtualizacao: "Hoje",
  },
  {
    id: "operador-inicial-lencos-umedecidos",
    titulo: "Operador Inicial — Linha Lenços Umedecidos",
    etapas: TRILHA_OPERADOR_LENCOS_ETAPAS,
    maquinaId: "mq-lencos",
    status: "nao-iniciado",
    progresso: 0,
    ultimaAtualizacao: "Hoje",
  },
  {
    id: "t4",
    titulo: "Operador Inicial — Italiana Pants",
    etapas: [],
    maquinaId: "mq-italiana-pants",
    status: "aprovado",
    progresso: 100,
    ultimaAtualizacao: "10/06/2026",
  },
];

export const FUNCIONARIOS_EM_TREINO_MOCK: FuncionarioEmTreino[] = [
  {
    id: "f1",
    nome: "João Silva",
    iniciais: "JS",
    maquinaId: "mq-haina-fralda",
    status: "em-andamento",
  },
  {
    id: "f2",
    nome: "Beatriz Lima",
    iniciais: "BL",
    maquinaId: "mq-haina-absorvente",
    status: "aguardando-avaliacao",
  },
  {
    id: "f3",
    nome: "Renato Souza",
    iniciais: "RS",
    maquinaId: "mq-italiana-pants",
    status: "em-andamento",
  },
  {
    id: "f4",
    nome: "Patrícia Alves",
    iniciais: "PA",
    maquinaId: "mq-lencos",
    status: "reciclagem",
    observacao: "Refazer módulo de umectação.",
  },
];

export const STATUS_LABEL = {
  "nao-iniciado": "Não iniciado",
  "em-andamento": "Em andamento",
  "aguardando-avaliacao": "Aguardando avaliação",
  aprovado: "Aprovado",
  reciclagem: "Reciclagem",
} as const;
