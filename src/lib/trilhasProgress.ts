import { FUNCIONARIOS_EM_TREINO_MOCK, TRILHAS_MOCK } from "@/data/mock/treinamentos";
import type { FuncionarioEmTreino, StatusTrilha, Trilha, TrilhaEtapa } from "@/data/types";

const PROGRESS_KEY = "evergreen.trilhas.progress.v1";
const FUNCIONARIOS_KEY = "evergreen.instrutor.funcionarios.v1";
const CHECKLIST_KEY = "evergreen.trilhas.checklist.v1";
const INSTRUTOR_CHECKLIST_KEY = "evergreen.instrutor.avaliacao.v1";

export const CHECKLIST_PARTIDA_ITEMS_DEFAULT = [
  "Conferir EPIs obrigatórios.",
  "Verificar proteção e portas de segurança.",
  "Conferir bobinas principais.",
  "Conferir pressão de ar.",
  "Conferir temperatura do hotmelt.",
  "Conferir ausência de ferramentas soltas.",
  "Confirmar área limpa e segura.",
  "Chamar instrutor antes da primeira partida.",
];

export const AVALIACAO_PRATICA_ITEMS_DEFAULT = [
  "Identifica EPIs obrigatórios.",
  "Explica parada de emergência.",
  "Reconhece pontos de esmagamento.",
  "Executa checklist de partida.",
  "Interpreta alarme comum.",
  "Sabe quando chamar manutenção/líder.",
];

export const CHECKLIST_PARTIDA_ITEMS_BY_TRILHA: Record<string, string[]> = {
  "operador-inicial-haina-absorvente": [
    "Conferir EPIs obrigatórios.",
    "Verificar proteções e portas de segurança.",
    "Conferir bobina de cobertura superior.",
    "Conferir filme inferior.",
    "Conferir papel release.",
    "Conferir embalagem individual.",
    "Conferir pressão pneumática.",
    "Conferir temperatura do hotmelt.",
    "Verificar ausência de ferramentas soltas.",
    "Confirmar área limpa e segura.",
    "Chamar instrutor antes da primeira partida.",
  ],
  "operador-inicial-lencos-umedecidos": [
    "Conferir EPIs obrigatórios.",
    "Verificar proteções e portas de segurança.",
    "Conferir bobina de não tecido.",
    "Conferir nível/abastecimento da solução umectante.",
    "Conferir embalagem plástica.",
    "Conferir temperatura de selagem.",
    "Conferir pressão pneumática.",
    "Verificar ausência de ferramentas soltas.",
    "Confirmar área limpa e segura.",
    "Chamar instrutor antes da primeira partida.",
  ],
};

export const AVALIACAO_PRATICA_ITEMS_BY_MAQUINA: Record<string, string[]> = {
  "mq-haina-absorvente": [
    "Identifica EPIs obrigatórios.",
    "Reconhece pontos de corte e esmagamento.",
    "Explica função da parada de emergência.",
    "Confere materiais principais.",
    "Executa checklist de partida.",
    "Reconhece defeitos comuns do absorvente.",
    "Sabe interpretar alarme comum.",
    "Sabe quando chamar instrutor.",
    "Sabe quando chamar manutenção.",
    "Não tenta intervir com máquina em movimento.",
  ],
  "mq-lencos": [
    "Identifica EPIs obrigatórios.",
    "Reconhece rolos de tração e pontos de corte.",
    "Explica risco da área de selagem quente.",
    "Confere bobina de não tecido.",
    "Confere solução umectante.",
    "Executa checklist de partida.",
    "Reconhece defeitos comuns do pacote.",
    "Sabe interpretar alarme comum.",
    "Sabe quando chamar instrutor.",
    "Sabe quando chamar manutenção.",
    "Não tenta intervir com linha em movimento.",
  ],
};

export function getChecklistPartidaItems(trilhaId: string) {
  return CHECKLIST_PARTIDA_ITEMS_BY_TRILHA[trilhaId] ?? CHECKLIST_PARTIDA_ITEMS_DEFAULT;
}

export function getAvaliacaoPraticaItems(maquinaId?: string) {
  return maquinaId
    ? (AVALIACAO_PRATICA_ITEMS_BY_MAQUINA[maquinaId] ?? AVALIACAO_PRATICA_ITEMS_DEFAULT)
    : AVALIACAO_PRATICA_ITEMS_DEFAULT;
}

export type EtapaStatusLocal = "pendente" | "concluida";

export interface TrilhaProgressLocal {
  etapas: Record<string, EtapaStatusLocal>;
  quiz?: { acertos: number; total: number; nota: number; aprovado: boolean };
  status?: StatusTrilha;
}

type ProgressMap = Record<string, TrilhaProgressLocal>;
type ChecklistMap = Record<string, Record<string, boolean>>;

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
    etapas: { ...current.etapas, quiz: resultado.aprovado ? "concluida" : "pendente" },
  });
}

export function loadChecklistPartida(trilhaId: string) {
  return readJson<ChecklistMap>(CHECKLIST_KEY, {})[trilhaId] ?? {};
}

export function toggleChecklistPartida(trilhaId: string, item: string) {
  const all = readJson<ChecklistMap>(CHECKLIST_KEY, {});
  const current = all[trilhaId] ?? {};
  all[trilhaId] = { ...current, [item]: !current[item] };
  writeJson(CHECKLIST_KEY, all);
  const done = getChecklistPartidaItems(trilhaId).every((i) => all[trilhaId][i]);
  const progress = getTrilhaProgress(trilhaId);
  saveTrilhaProgress(trilhaId, {
    ...progress,
    etapas: { ...progress.etapas, "checklist-partida": done ? "concluida" : "pendente" },
  });
  return all[trilhaId];
}

export function loadAvaliacaoPratica(funcionarioId: string) {
  return readJson<ChecklistMap>(INSTRUTOR_CHECKLIST_KEY, {})[funcionarioId] ?? {};
}

export function toggleAvaliacaoPratica(funcionarioId: string, item: string) {
  const all = readJson<ChecklistMap>(INSTRUTOR_CHECKLIST_KEY, {});
  const current = all[funcionarioId] ?? {};
  all[funcionarioId] = { ...current, [item]: !current[item] };
  writeJson(INSTRUTOR_CHECKLIST_KEY, all);
  return all[funcionarioId];
}

export function isAvaliacaoPraticaAprovada(items: Record<string, boolean>, maquinaId?: string) {
  return getAvaliacaoPraticaItems(maquinaId).every((item) => items[item]);
}

export function areEtapasTeoricasConcluidas(etapas: TrilhaEtapa[], progress: TrilhaProgressLocal) {
  return etapas
    .filter(
      (etapa) => etapa.tipo === "teorica" || etapa.tipo === "quiz" || etapa.tipo === "checklist",
    )
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

export function resetDemoData() {
  if (!isBrowser()) return;
  [PROGRESS_KEY, FUNCIONARIOS_KEY, CHECKLIST_KEY, INSTRUTOR_CHECKLIST_KEY].forEach((key) =>
    window.localStorage.removeItem(key),
  );
}
