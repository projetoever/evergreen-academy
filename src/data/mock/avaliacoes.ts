import type { QuizPergunta } from "../types";

export const QUIZ_MOCK: QuizPergunta[] = [
  {
    id: "q1",
    pergunta: "O que significa 1 ciclo da máquina?",
    alternativas: ["Uma volta de 0° a 360°", "Um turno de trabalho", "Uma troca de bobina"],
    correta: 0,
  },
  {
    id: "q2",
    pergunta: "Quanto vale, aproximadamente, a pressão de um pneu de carro?",
    alternativas: ["20 bar", "0,2 bar", "2 bar"],
    correta: 2,
  },
  {
    id: "q3",
    pergunta: "Para que serve o vácuo na linha?",
    alternativas: ["Empurrar o material", "Puxar e segurar o material", "Aquecer a cola"],
    correta: 1,
  },
  {
    id: "q4",
    pergunta: "Qual o primeiro passo antes de ligar a máquina?",
    alternativas: ["Aumentar o RPM", "Fazer o checklist de partida", "Trocar a receita"],
    correta: 1,
  },
];

export const HISTORICO_MOCK = [
  {
    id: "h1",
    titulo: "Quiz Conceitos Básicos",
    data: "12/06/2026",
    resultado: "Aprovado",
    nota: 90,
  },
  { id: "h2", titulo: "Prática Haina Fralda", data: "08/06/2026", resultado: "Aprovado", nota: 85 },
  { id: "h3", titulo: "Reciclagem Lenços", data: "02/05/2026", resultado: "Reprovado", nota: 60 },
];
