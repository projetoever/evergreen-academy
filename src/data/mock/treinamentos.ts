import type { Trilha, FuncionarioEmTreino } from "../types";

export const TRILHAS_MOCK: Trilha[] = [
  { id: "t1", maquinaId: "mq-haina-fralda", status: "em-andamento", progresso: 62, ultimaAtualizacao: "Hoje" },
  { id: "t2", maquinaId: "mq-haina-absorvente", status: "nao-iniciado", progresso: 0, ultimaAtualizacao: "—" },
  { id: "t3", maquinaId: "mq-lencos", status: "aguardando-avaliacao", progresso: 100, ultimaAtualizacao: "Ontem" },
  { id: "t4", maquinaId: "mq-italiana-pants", status: "aprovado", progresso: 100, ultimaAtualizacao: "10/06/2026" },
];

export const FUNCIONARIOS_EM_TREINO_MOCK: FuncionarioEmTreino[] = [
  { id: "f1", nome: "João Silva", iniciais: "JS", maquinaId: "mq-haina-fralda", status: "em-andamento" },
  { id: "f2", nome: "Beatriz Lima", iniciais: "BL", maquinaId: "mq-haina-absorvente", status: "aguardando-avaliacao" },
  { id: "f3", nome: "Renato Souza", iniciais: "RS", maquinaId: "mq-italiana-pants", status: "em-andamento" },
  { id: "f4", nome: "Patrícia Alves", iniciais: "PA", maquinaId: "mq-lencos", status: "reciclagem", observacao: "Refazer módulo de umectação." },
];

export const STATUS_LABEL = {
  "nao-iniciado": "Não iniciado",
  "em-andamento": "Em andamento",
  "aguardando-avaliacao": "Aguardando avaliação",
  "aprovado": "Aprovado",
  "reciclagem": "Reciclagem",
} as const;
