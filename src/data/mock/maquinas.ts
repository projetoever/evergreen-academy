import type { Maquina } from "../types";
import fotoHainaFralda from "@/assets/maquina-haina-fralda.jpg";
import fotoHainaAbs from "@/assets/maquina-haina-absorvente.jpg";
import fotoLencos from "@/assets/maquina-lencos.jpg";
import fotoItaliana from "@/assets/maquina-italiana-pants.jpg";

export const MAQUINAS_MOCK: Maquina[] = [
  {
    id: "mq-haina-fralda",
    nome: "Haina Fralda Baby",
    marca: "Haina",
    produto: "Fralda infantil",
    setor: "Fraldas",
    foto: fotoHainaFralda,
    qrCode: "MQ-001",
    statusTreinamento: "disponivel",
    operadoresHabilitados: 8,
    modulos: ["Alimentação", "Núcleo", "Aplicação de elásticos", "Corte e dobra", "Embalagem"],
    checklist: [
      { id: "c1", texto: "Proteções fechadas" },
      { id: "c2", texto: "Pressão de ar ≥ 6 bar" },
      { id: "c3", texto: "Receita correta carregada" },
      { id: "c4", texto: "Materiais carregados" },
      { id: "c5", texto: "EPI completo" },
    ],
    alarmes: [
      { codigo: "A101", descricao: "Falta de não tecido", acao: "Trocar bobina e resetar." },
      { codigo: "A204", descricao: "Vácuo baixo", acao: "Verificar filtro e mangueiras." },
      {
        codigo: "A310",
        descricao: "Temperatura cola fora da faixa",
        acao: "Aguardar estabilizar.",
      },
    ],
    pontosSeguranca: [
      {
        titulo: "Pontos de esmagamento",
        risco: "Rolos e mordentes podem prensar a mão.",
        epi: ["Luva anti-corte", "Óculos de segurança"],
        procedimento: "Parar máquina e travar LOTO antes de qualquer intervenção.",
        nivel: "alto",
      },
      {
        titulo: "Pontos quentes (hotmelt)",
        risco: "Bicos e tubulações a 150°C.",
        epi: ["Luva térmica", "Manga longa"],
        procedimento: "Aguardar esfriar ou usar EPI térmico específico.",
        nivel: "alto",
      },
      {
        titulo: "Lâminas de corte",
        risco: "Risco de corte profundo.",
        epi: ["Luva anti-corte nível 5"],
        procedimento: "Nunca limpar com máquina ligada.",
        nivel: "alto",
      },
    ],
    documentos: [
      { id: "d1", titulo: "Manual do operador", tipo: "manual" },
      { id: "d2", titulo: "Procedimento de setup", tipo: "procedimento" },
      { id: "d3", titulo: "Checklist de partida", tipo: "checklist" },
    ],
  },
  {
    id: "mq-haina-absorvente",
    nome: "Haina Absorvente",
    marca: "Haina",
    produto: "Absorvente íntimo",
    setor: "Absorventes",
    foto: fotoHainaAbs,
    qrCode: "MQ-002",
    statusTreinamento: "disponivel",
    operadoresHabilitados: 5,
    modulos: ["Núcleo", "Cover top", "Selagem", "Envelope individual", "Embalagem"],
    checklist: [
      { id: "c1", texto: "Proteções fechadas" },
      { id: "c2", texto: "Selador aquecido" },
      { id: "c3", texto: "Bobina de cover top ok" },
      { id: "c4", texto: "EPI completo" },
    ],
    alarmes: [
      { codigo: "B112", descricao: "Falha selagem", acao: "Verificar temperatura e pressão." },
      { codigo: "B220", descricao: "Envelope desalinhado", acao: "Reajustar guia." },
    ],
    pontosSeguranca: [
      {
        titulo: "Selador térmico",
        risco: "Superfície a 180°C.",
        epi: ["Luva térmica"],
        procedimento: "Não tocar; aguardar resfriar.",
        nivel: "alto",
      },
      {
        titulo: "Partes móveis",
        risco: "Correias e roletes em alta velocidade.",
        epi: ["Cabelo preso", "Sem adornos"],
        procedimento: "Manter proteções fechadas durante operação.",
        nivel: "medio",
      },
    ],
    documentos: [
      { id: "d1", titulo: "Manual técnico Haina Abs.", tipo: "manual" },
      { id: "d2", titulo: "IHM — telas principais", tipo: "ihm" },
    ],
  },
  {
    id: "mq-lencos",
    nome: "Linha de Lenços Umedecidos",
    marca: "WipesTech",
    produto: "Lenços umedecidos",
    setor: "Lenços",
    foto: fotoLencos,
    qrCode: "MQ-003",
    statusTreinamento: "em-desenvolvimento",
    operadoresHabilitados: 3,
    modulos: ["Desbobinamento", "Umectação", "Corte", "Embalagem", "Aplicação de tampa"],
    checklist: [
      { id: "c1", texto: "Tanque de solução cheio" },
      { id: "c2", texto: "Bicos de umectação limpos" },
      { id: "c3", texto: "Bobina de não tecido carregada" },
    ],
    alarmes: [
      { codigo: "L101", descricao: "Nível baixo de solução", acao: "Reabastecer tanque." },
      { codigo: "L205", descricao: "Tampa não aplicada", acao: "Verificar magazine de tampas." },
    ],
    pontosSeguranca: [
      {
        titulo: "Produto químico",
        risco: "Contato com solução pode irritar.",
        epi: ["Luva nitrílica", "Óculos"],
        procedimento: "Lavar imediatamente em caso de contato.",
        nivel: "medio",
      },
      {
        titulo: "Piso molhado",
        risco: "Risco de queda.",
        epi: ["Calçado antiderrapante"],
        procedimento: "Sinalizar e limpar áreas com solução.",
        nivel: "medio",
      },
    ],
    documentos: [
      { id: "d1", titulo: "Ficha de segurança da solução", tipo: "pdf" },
      { id: "d2", titulo: "Manual da linha", tipo: "manual" },
    ],
  },
  {
    id: "mq-italiana-pants",
    nome: "Máquina Italiana Fralda Pants",
    marca: "GDM Italia",
    produto: "Fralda Pants",
    setor: "Fraldas Pants",
    foto: fotoItaliana,
    qrCode: "MQ-004",
    statusTreinamento: "disponivel",
    operadoresHabilitados: 4,
    modulos: ["Cintura elástica", "Núcleo", "Soldagem lateral", "Corte", "Embalagem"],
    checklist: [
      { id: "c1", texto: "Soldadores ultrassônicos ok" },
      { id: "c2", texto: "Pressão hidráulica ≥ 80 bar" },
      { id: "c3", texto: "Receita Pants carregada" },
      { id: "c4", texto: "Proteções e LOTO conferidos" },
    ],
    alarmes: [
      { codigo: "I112", descricao: "Falha soldagem lateral", acao: "Inspecionar sonotrodo." },
      { codigo: "I305", descricao: "Pressão hidráulica baixa", acao: "Verificar bomba." },
    ],
    pontosSeguranca: [
      {
        titulo: "Soldagem ultrassônica",
        risco: "Energia vibratória e calor pontual.",
        epi: ["Protetor auditivo", "Luva térmica"],
        procedimento: "Nunca aproximar a mão com a máquina energizada.",
        nivel: "alto",
      },
      {
        titulo: "Sistema hidráulico",
        risco: "Vazamento sob pressão pode perfurar a pele.",
        epi: ["Óculos", "Luva"],
        procedimento: "Despressurizar antes de qualquer manutenção.",
        nivel: "alto",
      },
      {
        titulo: "Energia residual",
        risco: "Mesmo desligada, partes podem se mover.",
        epi: ["LOTO obrigatório"],
        procedimento: "Aplicar cadeado e etiqueta antes de intervir.",
        nivel: "alto",
      },
    ],
    documentos: [
      { id: "d1", titulo: "Manual GDM Pants", tipo: "manual" },
      { id: "d2", titulo: "Procedimento LOTO", tipo: "procedimento" },
      { id: "d3", titulo: "Vídeo: setup rápido", tipo: "video" },
    ],
  },
];
