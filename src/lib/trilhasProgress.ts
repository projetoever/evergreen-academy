import { FUNCIONARIOS_EM_TREINO_MOCK, TRILHAS_MOCK } from "@/data/mock/treinamentos";
import type { FuncionarioEmTreino, StatusTrilha, Trilha, TrilhaEtapa } from "@/data/types";

const PROGRESS_KEY = "evergreen.trilhas.progress.v1";
const FUNCIONARIOS_KEY = "evergreen.instrutor.funcionarios.v1";

export type EtapaStatusLocal = "pendente" | "concluida";

export interface TrilhaProgressLocal {
  etapas: Record<string, EtapaStatusLocal>;
  quiz?: {
    acertos: number;
    total: number;
    nota: number;
    aprovado: boolean;
  };
  status?: StatusTrilha;
}

type ProgressMap = Record<string, TrilhaProgressLocal>;

const isBrowser = () => typeof window !== "undefined";

function readJson<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  if (!isBrowser()) return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getTrilhaProgress(trilhaId: string): TrilhaProgressLocal {
  const progress = readJson<ProgressMap>(PROGRESS_KEY, {});
  return progress[trilhaId] ?? { etapas: {} };
}

export function saveTrilhaProgress(trilhaId: string, value: TrilhaProgressLocal) {
  const progress = readJson<ProgressMap>(PROGRESS_KEY, {});
  progress[trilhaId] = value;
  writeJson(PROGRESS_KEY, progress);
}

export function markEtapaVista(trilhaId: string, etapaId: string) {
  const current = getTrilhaProgress(trilhaId);
  saveTrilhaProgress(trilhaId, {
    ...current,
    etapas: { ...current.etapas, [etapaId]: "concluida" },
  });
}

export function saveQuizResultado(
  trilhaId: string,
  resultado: NonNullable<TrilhaProgressLocal["quiz"]>,
) {
  const current = getTrilhaProgress(trilhaId);
  saveTrilhaProgress(trilhaId, {
    ...current,
    quiz: resultado,
    etapas: { ...current.etapas, quiz: "concluida" },
  });
}

export function areEtapasTeoricasConcluidas(etapas: TrilhaEtapa[], progress: TrilhaProgressLocal) {
  return etapas
    .filter((etapa) => etapa.tipo === "teorica" || etapa.tipo === "quiz")
    .every((etapa) => progress.etapas[etapa.id] === "concluida");
}

export function getStatusTrilha(trilha: Trilha, etapas: TrilhaEtapa[]) {
  const progress = getTrilhaProgress(trilha.id);
  if (progress.status) return progress.status;
  if (areEtapasTeoricasConcluidas(etapas, progress)) return "aguardando-avaliacao";
  return trilha.status;
}

export function getProgressoTrilha(trilha: Trilha, etapas: TrilhaEtapa[]) {
  const progress = getTrilhaProgress(trilha.id);
  const concluidas = etapas.filter((etapa) => progress.etapas[etapa.id] === "concluida").length;
  if (concluidas === 0) return trilha.progresso;
  return Math.round((concluidas / etapas.length) * 100);
}

export function loadFuncionariosInstrutor() {
  return readJson<FuncionarioEmTreino[]>(FUNCIONARIOS_KEY, FUNCIONARIOS_EM_TREINO_MOCK);
}

export function saveFuncionariosInstrutor(funcionarios: FuncionarioEmTreino[]) {
  writeJson(FUNCIONARIOS_KEY, funcionarios);
}

export function updateFuncionarioStatus(
  funcionarioId: string,
  status: StatusTrilha,
  observacao?: string,
) {
  const funcionarios = loadFuncionariosInstrutor().map((funcionario) =>
    funcionario.id === funcionarioId ? { ...funcionario, status, observacao } : funcionario,
  );
  saveFuncionariosInstrutor(funcionarios);
  return funcionarios;
}

export function getTrilhasComProgresso() {
  return TRILHAS_MOCK.map((trilha) => ({
    ...trilha,
    status: getStatusTrilha(trilha, trilha.etapas),
    progresso: getProgressoTrilha(trilha, trilha.etapas),
  }));
}
