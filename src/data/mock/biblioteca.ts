import type { ItemBiblioteca } from "../types";

export const BIBLIOTECA_CATEGORIAS: Array<{
  tipo: ItemBiblioteca["tipo"];
  titulo: string;
  icone: string;
  cor: string;
}> = [
  { tipo: "pdf", titulo: "PDFs", icone: "FileText", cor: "bg-primary/10 text-primary" },
  {
    tipo: "manual",
    titulo: "Manuais",
    icone: "BookOpen",
    cor: "bg-accent/15 text-accent-foreground",
  },
  {
    tipo: "ihm",
    titulo: "Prints de IHM",
    icone: "MonitorSmartphone",
    cor: "bg-chart-3/15 text-foreground",
  },
  { tipo: "foto", titulo: "Fotos da máquina", icone: "ImageIcon", cor: "bg-muted text-foreground" },
  { tipo: "video", titulo: "Vídeos", icone: "PlayCircle", cor: "bg-danger/10 text-danger" },
  {
    tipo: "procedimento",
    titulo: "Procedimentos",
    icone: "ClipboardList",
    cor: "bg-warning/20 text-foreground",
  },
  {
    tipo: "checklist",
    titulo: "Checklists",
    icone: "ClipboardCheck",
    cor: "bg-success/15 text-success",
  },
];

export const BIBLIOTECA_MOCK: ItemBiblioteca[] = [
  {
    id: "manual-haina",
    tipo: "manual",
    titulo: "Manual rápido — Haina Fralda Baby",
    descricao: "Resumo de comandos, zonas da máquina e cuidados mínimos para consulta no turno.",
    maquinaId: "mq-haina-fralda",
    status: "mock",
  },
  {
    id: "checklist-mq001",
    tipo: "checklist",
    titulo: "Checklist de partida — MQ-001",
    descricao: "Sequência simulada de conferências antes da primeira partida assistida.",
    maquinaId: "mq-haina-fralda",
    status: "mock",
  },
  {
    id: "ihm-alarmes",
    tipo: "ihm",
    titulo: "Print IHM — Tela de alarmes",
    descricao: "Exemplo de tela para leitura de alarmes comuns e histórico recente.",
    maquinaId: "mq-haina-fralda",
    status: "mock",
  },
  {
    id: "troca-bobina",
    tipo: "procedimento",
    titulo: "Procedimento — Troca de bobina de não tecido",
    descricao: "Passo a passo demonstrativo para preparação, segurança e comunicação da troca.",
    maquinaId: "mq-haina-fralda",
    status: "mock",
  },
  {
    id: "parada-segura",
    tipo: "procedimento",
    titulo: "Procedimento — Parada segura da linha",
    descricao: "Orientação mockada para parar a linha, proteger área e acionar liderança.",
    status: "mock",
  },
  {
    id: "foto-corte",
    tipo: "foto",
    titulo: "Foto — Região de corte",
    descricao: "Imagem simulada da área crítica de corte e pontos de atenção visual.",
    maquinaId: "mq-haina-fralda",
    status: "mock",
  },
  {
    id: "foto-pneumatica",
    tipo: "foto",
    titulo: "Foto — Painel pneumático",
    descricao: "Referência visual para pressão de ar, válvulas e organização do painel.",
    maquinaId: "mq-haina-fralda",
    status: "mock",
  },
  {
    id: "video-falha-alimentacao",
    tipo: "video",
    titulo: "Vídeo — Identificação de falha de alimentação",
    descricao: "Demonstração curta de sintomas comuns e quando chamar manutenção ou líder.",
    maquinaId: "mq-haina-fralda",
    status: "mock",
  },
  {
    id: "seguranca",
    tipo: "pdf",
    titulo: "Documento — Pontos críticos de segurança",
    descricao: "Lista de riscos, EPIs e bloqueios físicos relevantes para operadores iniciantes.",
    status: "mock",
  },
  {
    id: "liberacao",
    tipo: "checklist",
    titulo: "Checklist — Liberação de operador iniciante",
    descricao: "Modelo de validação final usado pelo instrutor antes da liberação mockada.",
    status: "mock",
  },
];
