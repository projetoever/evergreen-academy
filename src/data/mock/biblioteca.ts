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
    maquinaId: "mq-haina-fralda",
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
    descricao:
      "Lista de riscos, EPIs e bloqueios físicos relevantes para operadores iniciantes. Vinculado à Haina para reforçar pontos quentes, lâminas e partes móveis.",
    maquinaId: "mq-haina-fralda",
    status: "mock",
  },
  {
    id: "liberacao",
    tipo: "checklist",
    titulo: "Checklist — Liberação de operador iniciante",
    descricao:
      "Modelo de validação final usado pelo instrutor antes da liberação mockada na Haina Fralda Baby.",
    maquinaId: "mq-haina-fralda",
    status: "mock",
  },

  {
    id: "manual-haina-absorvente",
    tipo: "manual",
    titulo: "Manual rápido — Haina Absorvente",
    descricao:
      "Resumo operacional da linha de absorventes, fluxo dos materiais, comandos de consulta e cuidados mínimos por turno.",
    maquinaId: "mq-haina-absorvente",
    status: "mock",
  },
  {
    id: "checklist-partida-absorvente",
    tipo: "checklist",
    titulo: "Checklist de partida — Absorvente",
    descricao:
      "Conferências mockadas antes da primeira partida: materiais, proteções, hotmelt, sensores, ar comprimido e embalagem.",
    maquinaId: "mq-haina-absorvente",
    status: "mock",
  },
  {
    id: "ihm-embalagem-absorvente",
    tipo: "ihm",
    titulo: "Print IHM — Tela de embalagem",
    descricao:
      "Referência visual simulada para velocidade, sincronismo de invólucro, contagem e alarmes da embalagem individual.",
    maquinaId: "mq-haina-absorvente",
    status: "mock",
  },
  {
    id: "troca-bobina-cobertura-absorvente",
    tipo: "procedimento",
    titulo: "Procedimento — Troca de bobina de cobertura",
    descricao:
      "Passo a passo demonstrativo para preparar troca de cobertura superior com linha parada e apoio do instrutor.",
    maquinaId: "mq-haina-absorvente",
    status: "mock",
  },
  {
    id: "parada-segura-absorvente",
    tipo: "procedimento",
    titulo: "Procedimento — Parada segura da linha de absorvente",
    descricao:
      "Orientação mockada para parada segura, comunicação de alarme repetitivo, segregação de produto e liberação de área.",
    maquinaId: "mq-haina-absorvente",
    status: "mock",
  },
  {
    id: "defeitos-absorventes",
    tipo: "pdf",
    titulo: "Documento — Defeitos comuns em absorventes",
    descricao:
      "Guia visual simulado com causas prováveis de corte irregular, cobertura enrugada, cola fora do padrão e embalagem aberta.",
    maquinaId: "mq-haina-absorvente",
    status: "mock",
  },
  {
    id: "liberacao-operador-absorvente",
    tipo: "checklist",
    titulo: "Checklist — Liberação de operador na linha de absorventes",
    descricao:
      "Modelo de validação final para operador iniciante, com observação assistida e critérios de comunicação segura.",
    maquinaId: "mq-haina-absorvente",
    status: "mock",
  },

  {
    id: "manual-lencos-umedecidos",
    tipo: "manual",
    titulo: "Manual rápido — Linha Lenços Umedecidos",
    descricao:
      "Resumo operacional da linha de lenços: fluxo do não tecido, dosagem de solução, corte, contagem, embalagem, selagem e saída segura.",
    maquinaId: "mq-lencos",
    status: "mock",
  },
  {
    id: "checklist-partida-lencos",
    tipo: "checklist",
    titulo: "Checklist de partida — Lenços Umedecidos",
    descricao:
      "Conferências mockadas de EPIs, proteções, bobina, solução, embalagem, selagem, pressão pneumática e chamada do instrutor.",
    maquinaId: "mq-lencos",
    status: "mock",
  },
  {
    id: "ihm-dosagem-solucao-lencos",
    tipo: "ihm",
    titulo: "Print IHM — Dosagem de solução",
    descricao:
      "Referência visual simulada para monitorar nível, bomba, vazão, receita e quantidade de solução aplicada nos lenços.",
    maquinaId: "mq-lencos",
    status: "mock",
  },
  {
    id: "ihm-selagem-lencos",
    tipo: "ihm",
    titulo: "Print IHM — Selagem",
    descricao:
      "Referência visual simulada para temperatura, tempo/pressão de selagem e alarmes de pacote aberto ou vazando.",
    maquinaId: "mq-lencos",
    status: "mock",
  },
  {
    id: "troca-bobina-nao-tecido-lencos",
    tipo: "procedimento",
    titulo: "Procedimento — Troca de bobina de não tecido",
    descricao:
      "Passo a passo demonstrativo para troca assistida de bobina, passagem segura do material e validação antes da partida.",
    maquinaId: "mq-lencos",
    status: "mock",
  },
  {
    id: "abastecimento-seguro-solucao-lencos",
    tipo: "procedimento",
    titulo: "Procedimento — Abastecimento seguro de solução",
    descricao:
      "Orientação mockada para abastecer solução umectante com EPIs, contenção de derramamento e comunicação de desvios.",
    maquinaId: "mq-lencos",
    status: "mock",
  },
  {
    id: "parada-segura-lencos",
    tipo: "procedimento",
    titulo: "Procedimento — Parada segura da linha de lenços",
    descricao:
      "Sequência simulada para parar a linha, proteger área de corte/selagem, segregar produto e acionar apoio.",
    maquinaId: "mq-lencos",
    status: "mock",
  },
  {
    id: "defeitos-lencos-umedecidos",
    tipo: "pdf",
    titulo: "Documento — Defeitos comuns em lenços umedecidos",
    descricao:
      "Guia visual simulado para lenço seco, excesso de solução, pacote vazando, corte desalinhado, dobra irregular e falha de contagem.",
    maquinaId: "mq-lencos",
    status: "mock",
  },
  {
    id: "liberacao-operador-lencos",
    tipo: "checklist",
    titulo: "Checklist — Liberação de operador na linha de lenços",
    descricao:
      "Modelo de validação final para operador iniciante na Linha Lenços Umedecidos, vinculado à liberação mockada da trilha.",
    maquinaId: "mq-lencos",
    status: "mock",
  },
];
