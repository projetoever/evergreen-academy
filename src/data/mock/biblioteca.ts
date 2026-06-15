import type { ItemBiblioteca } from "../types";

export const BIBLIOTECA_CATEGORIAS: Array<{
  tipo: ItemBiblioteca["tipo"];
  titulo: string;
  icone: string;
  cor: string;
}> = [
  { tipo: "pdf", titulo: "PDFs", icone: "FileText", cor: "bg-primary/10 text-primary" },
  { tipo: "manual", titulo: "Manuais", icone: "BookOpen", cor: "bg-accent/15 text-accent-foreground" },
  { tipo: "ihm", titulo: "Prints de IHM", icone: "MonitorSmartphone", cor: "bg-chart-3/15 text-foreground" },
  { tipo: "foto", titulo: "Fotos da máquina", icone: "ImageIcon", cor: "bg-muted text-foreground" },
  { tipo: "video", titulo: "Vídeos", icone: "PlayCircle", cor: "bg-danger/10 text-danger" },
  { tipo: "procedimento", titulo: "Procedimentos", icone: "ClipboardList", cor: "bg-warning/20 text-foreground" },
  { tipo: "checklist", titulo: "Checklists", icone: "ClipboardCheck", cor: "bg-success/15 text-success" },
];

export const BIBLIOTECA_MOCK: ItemBiblioteca[] = [];
