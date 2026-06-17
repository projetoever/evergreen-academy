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

export const QUIZ_HAINA_ABSORVENTE_MOCK: QuizPergunta[] = [
  {
    id: "abs-q1",
    pergunta: "Qual é a função da cobertura superior?",
    alternativas: [
      "Ficar em contato com a pele e conduzir o líquido para o núcleo",
      "Substituir o filme inferior",
      "Aquecer a cola hotmelt",
    ],
    correta: 0,
  },
  {
    id: "abs-q2",
    pergunta: "O que pode causar produto descentralizado?",
    alternativas: [
      "Baixa iluminação da sala",
      "Desalinhamento de materiais, guias ou corte",
      "Excesso de operadores na linha",
    ],
    correta: 1,
  },
  {
    id: "abs-q3",
    pergunta: "O que verificar se a embalagem individual sair aberta?",
    alternativas: [
      "Vedação/temperatura, posicionamento do filme e sujeira",
      "Somente a cor do produto",
      "A data do treinamento",
    ],
    correta: 0,
  },
  {
    id: "abs-q4",
    pergunta: "O que o operador deve fazer diante de alarme repetitivo?",
    alternativas: [
      "Burlar o sensor",
      "Comunicar instrutor/líder e chamar manutenção se persistir",
      "Aumentar a velocidade",
    ],
    correta: 1,
  },
  {
    id: "abs-q5",
    pergunta: "Por que não se deve intervir com a máquina em movimento?",
    alternativas: [
      "Porque há risco de corte, esmagamento e arraste",
      "Porque reduz a contagem no painel",
      "Porque consome ar comprimido",
    ],
    correta: 0,
  },
  {
    id: "abs-q6",
    pergunta: "Qual parâmetro influencia diretamente a aplicação de cola?",
    alternativas: [
      "Temperatura e pressão/vazão do hotmelt",
      "Cor do uniforme",
      "Quantidade de caixas no estoque",
    ],
    correta: 0,
  },
  {
    id: "abs-q7",
    pergunta: "Quando chamar manutenção?",
    alternativas: [
      "Quando houver falha repetitiva, proteção danificada, vazamento ou ajuste técnico",
      "Somente no fim do mês",
      "Para marcar qualquer item do checklist",
    ],
    correta: 0,
  },
  {
    id: "abs-q8",
    pergunta: "Qual item deve ser conferido antes da primeira partida?",
    alternativas: [
      "EPIs, proteções, materiais, pressão, hotmelt e área segura",
      "Apenas o volume do alarme",
      "Somente a quantidade de produto final",
    ],
    correta: 0,
  },
];

export const QUIZ_LENCOS_UMEDECIDOS_MOCK: QuizPergunta[] = [
  {
    id: "len-q1",
    pergunta: "O que pode causar lenço seco?",
    alternativas: [
      "Baixa dosagem de solução umectante, falha de bomba ou bobina passando sem umectação",
      "Temperatura de selagem acima do padrão",
      "Excesso de caixas na expedição",
    ],
    correta: 0,
  },
  {
    id: "len-q2",
    pergunta: "O que verificar se o pacote estiver vazando?",
    alternativas: [
      "Somente a contagem total do turno",
      "Selagem, filme da embalagem, sujeira na região de solda e excesso de solução",
      "A cor da bobina de não tecido",
    ],
    correta: 1,
  },
  {
    id: "len-q3",
    pergunta: "Por que a temperatura de selagem é importante?",
    alternativas: [
      "Porque define a velocidade da esteira de saída",
      "Porque ajuda a garantir pacote fechado sem queimar ou deformar a embalagem",
      "Porque substitui a pressão pneumática",
    ],
    correta: 1,
  },
  {
    id: "len-q4",
    pergunta: "O que pode causar quantidade errada de folhas?",
    alternativas: [
      "Falha de contagem, corte irregular, escorregamento do material ou ajuste incorreto",
      "Uso correto de EPIs",
      "Área limpa antes da partida",
    ],
    correta: 0,
  },
  {
    id: "len-q5",
    pergunta: "O que fazer diante de alarme repetitivo?",
    alternativas: [
      "Burlar o sensor para manter a linha rodando",
      "Comunicar instrutor/líder e chamar manutenção se o desvio persistir",
      "Aumentar a velocidade da linha",
    ],
    correta: 1,
  },
  {
    id: "len-q6",
    pergunta: "Por que não se deve intervir com a linha em movimento?",
    alternativas: [
      "Porque há risco de arraste, corte, esmagamento e contato com área quente",
      "Porque o pacote pode ficar com etiqueta torta",
      "Porque reduz a leitura da IHM",
    ],
    correta: 0,
  },
  {
    id: "len-q7",
    pergunta: "Quando chamar manutenção?",
    alternativas: [
      "Em falha repetitiva, proteção danificada, vazamento, problema pneumático ou ajuste técnico",
      "Apenas para marcar o checklist",
      "Somente quando acabar a bobina",
    ],
    correta: 0,
  },
  {
    id: "len-q8",
    pergunta: "O que deve ser conferido antes da primeira partida?",
    alternativas: [
      "EPIs, proteções, bobina, solução, embalagem, selagem, pressão, ferramentas soltas, área segura e instrutor",
      "Somente a quantidade de pacotes prontos",
      "Apenas o nome da receita",
    ],
    correta: 0,
  },
];
