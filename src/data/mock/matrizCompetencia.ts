import type { MatrizCompetenciaItem } from "../types";

export const MATRIZ_COMPETENCIA_MOCK: MatrizCompetenciaItem[] = [
  {
    id: "mc1",
    funcionario: "João Silva",
    maquinaId: "mq-haina-fralda",
    status: "em-andamento",
    nivel: "basico",
    ultimaAtualizacao: "16/06/2026",
    proximaAcao: "Finalizar checklist e quiz teórico",
  },
  {
    id: "mc2",
    funcionario: "Beatriz Lima",
    maquinaId: "mq-haina-absorvente",
    status: "em-andamento",
    nivel: "basico",
    ultimaAtualizacao: "17/06/2026",
    proximaAcao: "Concluir trilha Operador Inicial — Haina Absorvente",
  },
  {
    id: "mc3",
    funcionario: "Renato Souza",
    maquinaId: "mq-italiana-pants",
    status: "nao-iniciado",
    nivel: "basico",
    ultimaAtualizacao: "12/06/2026",
    proximaAcao: "Iniciar trilha de operador inicial",
  },
  {
    id: "mc4",
    funcionario: "Patrícia Alves",
    maquinaId: "mq-lencos",
    status: "em-andamento",
    nivel: "basico",
    ultimaAtualizacao: "17/06/2026",
    proximaAcao: "Concluir trilha Operador Inicial — Linha Lenços Umedecidos",
  },
  {
    id: "mc5",
    funcionario: "Marcos Pereira",
    maquinaId: "mq-haina-fralda",
    status: "aprovado",
    nivel: "avancado",
    ultimaAtualizacao: "08/06/2026",
    proximaAcao: "Acompanhar operador iniciante no turno",
  },
];
