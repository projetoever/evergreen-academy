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
    id: "t2",
    titulo: "Operador Inicial — Haina Absorvente",
    etapas: [],
    maquinaId: "mq-haina-absorvente",
    status: "nao-iniciado",
    progresso: 0,
    ultimaAtualizacao: "—",
  },
  {
    id: "t3",
    titulo: "Operador Inicial — Lenços",
    etapas: [],
    maquinaId: "mq-lencos",
    status: "aguardando-avaliacao",
    progresso: 100,
    ultimaAtualizacao: "Ontem",
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
