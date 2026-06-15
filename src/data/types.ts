export type Papel = "operador" | "instrutor" | "lider" | "admin";

export interface Usuario {
  id: string;
  nome: string;
  cargo: string;
  setor: string;
  papel: Papel;
  iniciais: string;
  maquinasLiberadas: string[]; // ids de máquinas
}

export type Nivel = "basico" | "intermediario" | "avancado";

export interface Aula {
  id: string;
  titulo: string;
  descricao: string;
  exemplo: string;
  nivel: Nivel;
  tempoMin: number;
  icone: string; // nome de ícone lucide
  analogia: string;
  comoApareceNaMaquina: string[];
  cuidado: string;
}

export type CategoriaProcesso = "fraldas" | "absorventes" | "lencos";

export interface EtapaProcesso {
  numero: number;
  titulo: string;
  descricao: string;
  icone: string;
}

export interface Processo {
  categoria: CategoriaProcesso;
  titulo: string;
  descricao: string;
  etapas: EtapaProcesso[];
}

export interface PontoSeguranca {
  titulo: string;
  risco: string;
  epi: string[];
  procedimento: string;
  nivel: "alto" | "medio" | "baixo";
}

export interface ItemChecklist {
  id: string;
  texto: string;
}

export interface Alarme {
  codigo: string;
  descricao: string;
  acao: string;
}

export interface DocumentoTecnico {
  id: string;
  titulo: string;
  tipo: "pdf" | "manual" | "ihm" | "foto" | "video" | "procedimento" | "checklist";
}

export interface Maquina {
  id: string;
  nome: string;
  marca: string;
  produto: string;
  setor: string;
  foto: string;
  qrCode: string; // ex: "MQ-001"
  statusTreinamento: "disponivel" | "em-desenvolvimento" | "indisponivel";
  operadoresHabilitados: number;
  modulos: string[];
  checklist: ItemChecklist[];
  alarmes: Alarme[];
  pontosSeguranca: PontoSeguranca[];
  documentos: DocumentoTecnico[];
}

export type TipoTrilhaEtapa = "teorica" | "checklist" | "quiz" | "pratica" | "liberacao";

export type StatusTrilhaEtapa = "bloqueada" | "disponivel" | "concluida";

export interface TrilhaEtapa {
  id: string;
  titulo: string;
  tipo: TipoTrilhaEtapa;
  status: StatusTrilhaEtapa;
  ordem: number;
  obrigatoria: boolean;
  referenciaId: string;
}

export type StatusTrilha =
  | "nao-iniciado"
  | "em-andamento"
  | "aguardando-avaliacao"
  | "aprovado"
  | "reciclagem";

export interface Trilha {
  id: string;
  maquinaId: string;
  status: StatusTrilha;
  progresso: number; // 0-100
  ultimaAtualizacao: string;
  titulo: string;
  etapas: TrilhaEtapa[];
}

export interface QuizPergunta {
  id: string;
  pergunta: string;
  alternativas: string[];
  correta: number;
}

export interface FuncionarioEmTreino {
  id: string;
  nome: string;
  iniciais: string;
  maquinaId: string;
  status: StatusTrilha;
  observacao?: string;
}

export interface ItemBiblioteca {
  id: string;
  titulo: string;
  tipo: DocumentoTecnico["tipo"];
}
