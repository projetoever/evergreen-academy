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
    descricaoOperacional:
      "Linha contínua para fabricação de fralda descartável infantil. A Haina recebe bobinas de não tecido e filme PE, forma o núcleo absorvente com celulose/fluff e SAP, aplica elásticos, cola hotmelt, fitas laterais e frontal tape, realiza corte anatômico, dobra, contagem, empilhamento e entrega o produto para embalagem.",
    objetivoTreinamento:
      "Preparar o operador iniciante para reconhecer o fluxo da linha, acompanhar parâmetros básicos, executar checklist de partida assistido, identificar defeitos comuns e comunicar desvios sem realizar intervenção técnica não autorizada.",
    materiaisEntrada: [
      "Não tecido superior",
      "Não tecido inferior",
      "Celulose/fluff",
      "SAP",
      "Filme PE",
      "Elásticos",
      "Cola hotmelt",
      "Fitas laterais",
      "Frontal tape",
    ],
    produtoSaida: "Fralda descartável infantil",
    componentesPrincipais: [
      "Desbobinadores",
      "Formador de núcleo",
      "Dosagem de SAP",
      "Aplicação de não tecido",
      "Aplicação de elásticos",
      "Unidade de hotmelt",
      "Corte anatômico",
      "Dobra",
      "Contagem",
      "Empilhamento",
      "Embalagem",
    ],
    parametrosBasicos: [
      {
        nome: "Velocidade da linha",
        valorReferencia: "Ajustada pela receita e liberada pelo instrutor",
        cuidado: "Aumentar apenas com linha estável e autorização.",
      },
      {
        nome: "Pressão pneumática",
        valorReferencia: "Faixa operacional indicada na IHM/manômetro",
        cuidado: "Pressão baixa causa falhas de atuadores; não regular válvulas sem autorização.",
      },
      {
        nome: "Temperatura do hotmelt",
        valorReferencia: "Conforme cola e receita em uso",
        cuidado: "Aguardar estabilização e nunca tocar em bicos ou mangueiras aquecidas.",
      },
      {
        nome: "Vácuo",
        valorReferencia: "Suficiente para transportar e posicionar manta/núcleo",
        cuidado: "Queda de vácuo pode deslocar produto; verificar alarmes e chamar apoio.",
      },
      {
        nome: "Tensão de bobina",
        valorReferencia: "Bobina firme, sem rasgar ou enrugar",
        cuidado: "Ajuste incorreto descentraliza material.",
      },
      {
        nome: "Posição de corte",
        valorReferencia: "Corte alinhado ao desenho do produto",
        cuidado: "Desvio recorrente deve ser tratado com instrutor/manutenção.",
      },
      {
        nome: "Sincronismo de ciclo",
        valorReferencia: "Aplicações ocorrendo no tempo correto",
        cuidado: "Não tentar compensar sensores manualmente com máquina em movimento.",
      },
    ],
    defeitosProduto: [
      {
        defeito: "Fralda fora de centro",
        possivelCausa: "Tensão de bobina, guia lateral ou vácuo instável.",
        verificacaoInicial:
          "Comparar amostras recentes, conferir bobina carregada e observar se há alarme de guia/vácuo.",
        quandoChamarInstrutor:
          "Quando o desvio aparecer em sequência ou houver dúvida sobre ajuste operacional permitido.",
        quandoChamarManutencao:
          "Quando houver falha de sensor, atuador, guia automático ou vácuo que não estabiliza.",
      },
      {
        defeito: "Corte desalinhado",
        possivelCausa: "Posição de corte fora de referência ou sincronismo de ciclo instável.",
        verificacaoInicial:
          "Separar produto defeituoso, reduzir ritmo se orientado e conferir receita carregada.",
        quandoChamarInstrutor:
          "Sempre que precisar confirmar padrão de qualidade ou ajuste de receita.",
        quandoChamarManutencao:
          "Se o desalinhamento persistir após parada segura ou houver ruído/vibração anormal.",
      },
      {
        defeito: "Falta de elástico",
        possivelCausa: "Ruptura, bobina vazia ou falha no aplicador.",
        verificacaoInicial:
          "Verificar presença da bobina, trajeto visível e alarmes sem tocar em partes móveis.",
        quandoChamarInstrutor:
          "Quando for necessário refazer passagem de material durante treinamento.",
        quandoChamarManutencao: "Quando houver falha mecânica no aplicador, rolete ou sensor.",
      },
      {
        defeito: "Excesso de cola",
        possivelCausa: "Temperatura/pressão de hotmelt ou bico aplicador fora de condição.",
        verificacaoInicial:
          "Observar padrão de cola no produto e checar alerta de temperatura na IHM.",
        quandoChamarInstrutor:
          "Quando houver dúvida se o produto pode seguir ou deve ser segregado.",
        quandoChamarManutencao:
          "Se houver vazamento, bico pingando ou necessidade de intervenção no hotmelt.",
      },
      {
        defeito: "Pouca cola",
        possivelCausa: "Baixa temperatura, falta de cola ou bico obstruído.",
        verificacaoInicial: "Conferir nível de cola e status de temperatura na IHM.",
        quandoChamarInstrutor: "Quando o produto abrir na inspeção ou o padrão estiver irregular.",
        quandoChamarManutencao: "Se o bico, mangueira ou bomba precisar de limpeza técnica.",
      },
      {
        defeito: "Núcleo deslocado",
        possivelCausa: "Formação do núcleo, vácuo ou sincronismo de alimentação instável.",
        verificacaoInicial:
          "Comparar posição do núcleo em amostras e observar alarmes de vácuo/formação.",
        quandoChamarInstrutor:
          "Quando o deslocamento for leve mas repetitivo e exigir decisão de qualidade.",
        quandoChamarManutencao: "Quando houver falha de vácuo, esteira ou formador.",
      },
      {
        defeito: "Dobra irregular",
        possivelCausa:
          "Guia de dobra desalinhado, produto fora de centro ou velocidade inadequada.",
        verificacaoInicial: "Observar acúmulo na dobra e retirar apenas produto parado/liberado.",
        quandoChamarInstrutor:
          "Quando precisar ajustar procedimento de limpeza/organização da saída.",
        quandoChamarManutencao: "Quando guias, correias ou atuadores estiverem danificados.",
      },
      {
        defeito: "Produto contaminado",
        possivelCausa: "Sujeira na área, contato indevido ou material de entrada contaminado.",
        verificacaoInicial:
          "Parar e segregar o produto conforme orientação, proteger a área e comunicar liderança.",
        quandoChamarInstrutor: "Sempre, para orientar segregação e registro.",
        quandoChamarManutencao:
          "Se a fonte for vazamento de óleo, graxa, cola ou componente da máquina.",
      },
      {
        defeito: "Falha de contagem",
        possivelCausa: "Sensor de contagem sujo/desalinhado ou empilhamento irregular.",
        verificacaoInicial:
          "Conferir quantidade do pacote, verificar tela de alarmes e observar empilhador sem intervir.",
        quandoChamarInstrutor: "Quando a divergência impactar embalagem ou amostragem.",
        quandoChamarManutencao: "Quando sensor, esteira ou empilhador falhar repetidamente.",
      },
    ],
    pontosIHM: [
      {
        titulo: "Tela principal",
        objetivo: "Acompanhar estado da linha, partida/parada e resumo dos principais parâmetros.",
        observacao: "Usar para leitura; comandos somente conforme liberação do instrutor.",
      },
      {
        titulo: "Tela de alarmes",
        objetivo: "Identificar código, descrição e histórico de falhas.",
        observacao:
          "Alarme repetitivo deve ser comunicado; não resetar continuamente sem investigar.",
      },
      {
        titulo: "Tela de receitas",
        objetivo: "Confirmar produto/tamanho e parâmetros carregados.",
        observacao: "Troca de receita é atividade assistida para operador iniciante.",
      },
      {
        titulo: "Tela de velocidade",
        objetivo: "Visualizar velocidade atual e metas de produção.",
        observacao: "Não aumentar velocidade para compensar parada sem autorização.",
      },
      {
        titulo: "Tela de temperatura",
        objetivo: "Monitorar zonas do hotmelt e estabilidade térmica.",
        observacao: "Risco de queimadura; ajustes técnicos são restritos.",
      },
      {
        titulo: "Tela de diagnóstico de sensores",
        objetivo: "Apoiar identificação de sensor bloqueado ou sem sinal.",
        observacao: "Nunca burlar sensor, chave de segurança ou proteção.",
      },
    ],
    perguntasFrequentes: [
      {
        pergunta: "Quando chamar o instrutor?",
        resposta:
          "Sempre que houver dúvida de qualidade, necessidade de ajuste, primeira partida, troca de material durante treinamento ou defeito repetitivo.",
      },
      {
        pergunta: "Quando chamar manutenção?",
        resposta:
          "Quando houver falha mecânica, elétrica, pneumática, sensor com defeito, vazamento, ruído anormal ou necessidade de abrir proteção/intervir tecnicamente.",
      },
      {
        pergunta: "O que fazer em caso de alarme repetitivo?",
        resposta:
          "Parar de resetar em sequência, anotar código, observar condição segura, comunicar instrutor/líder e aguardar orientação.",
      },
      {
        pergunta: "O que verificar antes da primeira partida?",
        resposta:
          "EPI, proteções, área limpa, materiais corretos, pressão de ar, hotmelt estabilizado, receita correta e ausência de pessoas em área de risco.",
      },
      {
        pergunta: "O que nunca fazer com a máquina em movimento?",
        resposta:
          "Nunca colocar a mão em partes móveis, retirar proteção, burlar sensor, limpar rolos, puxar material preso ou fazer ajuste técnico sem autorização.",
      },
    ],
    documentosRelacionados: [
      "manual-haina",
      "checklist-mq001",
      "ihm-alarmes",
      "troca-bobina",
      "parada-segura",
      "foto-corte",
      "foto-pneumatica",
      "video-falha-alimentacao",
      "seguranca",
      "liberacao",
    ],
    nivelComplexidade: "intermediario",
    tempoEstimadoTreinamento: "6 a 8 horas de teoria e prática acompanhada",
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
    descricaoOperacional:
      "Linha destinada à fabricação de absorventes higiênicos, com alimentação de materiais em bobina, formação do núcleo absorvente, aplicação de cobertura superior, filme inferior, adesivo, corte, dobra, inspeção e embalagem.",
    objetivoTreinamento:
      "Preparar o operador iniciante para reconhecer o caminho dos materiais, acompanhar parâmetros básicos, executar checklist de partida assistido, identificar defeitos comuns em absorventes e comunicar desvios sem intervir em partes móveis ou áreas técnicas sem autorização.",
    materiaisEntrada: [
      "Cobertura superior não tecido",
      "Filme inferior PE",
      "Núcleo absorvente / celulose",
      "SAP quando aplicável",
      "Papel release",
      "Adesivo hotmelt",
      "Embalagem individual",
      "Fita ou invólucro",
      "Materiais de embalagem final",
    ],
    produtoSaida: "Absorvente higiênico feminino embalado",
    componentesPrincipais: [
      "Desbobinadores",
      "Unidade de formação do núcleo",
      "Aplicação de cobertura superior",
      "Aplicação de filme inferior",
      "Aplicação de adesivo",
      "Corte anatômico",
      "Sistema de dobra",
      "Embalagem individual",
      "Inspeção por sensores",
      "Esteira de saída",
      "Embalagem final",
    ],
    parametrosBasicos: [
      {
        nome: "Velocidade da linha",
        valorReferencia: "Definida por receita e liberada pelo instrutor",
        cuidado: "Aumentar apenas quando corte, dobra e embalagem estiverem estáveis.",
      },
      {
        nome: "Tensão de bobina",
        valorReferencia: "Material tracionado sem rasgar, enrugar ou oscilar lateralmente",
        cuidado: "Tensão incorreta pode enrugar cobertura e descentralizar o produto.",
      },
      {
        nome: "Temperatura do hotmelt",
        valorReferencia: "Conforme adesivo e receita em uso",
        cuidado: "Nunca tocar em tanque, mangueiras ou bicos; risco de queimadura grave.",
      },
      {
        nome: "Pressão pneumática",
        valorReferencia: "Faixa operacional indicada na IHM/manômetro da linha",
        cuidado: "Queda de pressão afeta corte, dobra, atuadores e embalagem.",
      },
      {
        nome: "Vácuo quando aplicável",
        valorReferencia: "Suficiente para transportar e posicionar núcleo/material",
        cuidado: "Perda de vácuo pode causar produto torto; verificar alarme e chamar apoio.",
      },
      {
        nome: "Posição de corte",
        valorReferencia: "Corte anatômico alinhado ao centro do absorvente",
        cuidado: "Desvio repetitivo deve ser segregado e comunicado ao instrutor.",
      },
      {
        nome: "Alinhamento de cobertura",
        valorReferencia: "Cobertura centralizada, sem dobras e cobrindo o núcleo",
        cuidado: "Não puxar material com a máquina em movimento.",
      },
      {
        nome: "Sincronismo de embalagem",
        valorReferencia: "Produto entra centralizado e sai com invólucro fechado",
        cuidado: "Falha recorrente exige parada segura e apoio técnico.",
      },
      {
        nome: "Quantidade por pacote",
        valorReferencia: "Conforme ordem/receita de embalagem final",
        cuidado: "Conferir contagem inicial e amostras durante o turno.",
      },
    ],
    defeitosProduto: [
      {
        defeito: "Absorvente descentralizado",
        possivelCausa: "Tensão de bobina, guia lateral, vácuo ou sincronismo instável.",
        verificacaoInicial:
          "Comparar amostras, observar alinhamento da cobertura/release e checar alarmes sem tocar em partes móveis.",
        quandoChamarInstrutor: "Quando o desvio aparecer em sequência ou houver dúvida de padrão.",
        quandoChamarManutencao: "Quando guia, sensor, vácuo ou atuador não estabilizar.",
      },
      {
        defeito: "Corte irregular",
        possivelCausa: "Posição de corte, lâmina, pressão ou sincronismo fora de referência.",
        verificacaoInicial: "Segregar amostras e conferir receita/tela de alarmes.",
        quandoChamarInstrutor: "Sempre que precisar decidir liberação ou descarte do produto.",
        quandoChamarManutencao: "Se houver ruído, vibração ou falha persistente no corte.",
      },
      {
        defeito: "Cobertura enrugada",
        possivelCausa: "Tensão incorreta, bobina mal posicionada ou guia desalinhado.",
        verificacaoInicial: "Observar passagem do material e conferir se a bobina oscila.",
        quandoChamarInstrutor: "Quando for necessário refazer passagem de material em treinamento.",
        quandoChamarManutencao: "Se guias, roletes ou desbobinador apresentarem falha.",
      },
      {
        defeito: "Excesso de cola",
        possivelCausa: "Temperatura, pressão ou bico de hotmelt fora de condição.",
        verificacaoInicial: "Observar padrão de cola no produto e status de temperatura na IHM.",
        quandoChamarInstrutor: "Quando houver dúvida de qualidade ou segregação.",
        quandoChamarManutencao: "Se houver vazamento, gotejamento ou necessidade de limpar bico.",
      },
      {
        defeito: "Falta de cola",
        possivelCausa:
          "Baixa temperatura, tanque baixo, mangueira/bico obstruído ou falha de bomba.",
        verificacaoInicial: "Checar nível de cola e telas de temperatura/alarme.",
        quandoChamarInstrutor: "Quando embalagem ou camadas abrirem na inspeção.",
        quandoChamarManutencao: "Se o sistema de hotmelt precisar de intervenção técnica.",
      },
      {
        defeito: "Embalagem individual aberta",
        possivelCausa: "Sincronismo, selagem, cola ou tensão do invólucro fora de padrão.",
        verificacaoInicial: "Separar produto aberto e conferir tela de embalagem.",
        quandoChamarInstrutor: "Quando ocorrer repetição ou dúvida sobre descarte/reprocesso.",
        quandoChamarManutencao: "Se selador, sensor ou transportador não estabilizar.",
      },
      {
        defeito: "Produto dobrado incorretamente",
        possivelCausa: "Guia de dobra desalinhado, velocidade alta ou produto descentralizado.",
        verificacaoInicial: "Observar acúmulo na dobra e retirar somente produto parado/liberado.",
        quandoChamarInstrutor: "Quando precisar confirmar ajuste operacional permitido.",
        quandoChamarManutencao: "Se guias, correias ou atuadores estiverem danificados.",
      },
      {
        defeito: "Falha de contagem",
        possivelCausa: "Sensor sujo/desalinhado, produto sobreposto ou empilhamento irregular.",
        verificacaoInicial: "Conferir quantidade por pacote e tela de diagnóstico de sensores.",
        quandoChamarInstrutor: "Quando impactar embalagem final ou amostragem.",
        quandoChamarManutencao: "Quando sensor ou esteira falhar repetidamente.",
      },
      {
        defeito: "Contaminação visual",
        possivelCausa:
          "Sujeira na área, material contaminado, cola ou óleo em contato com produto.",
        verificacaoInicial: "Parar em condição segura, segregar produto e comunicar liderança.",
        quandoChamarInstrutor: "Sempre, para orientar segregação e registro.",
        quandoChamarManutencao: "Se a fonte for vazamento ou componente da máquina.",
      },
      {
        defeito: "Desalinhamento do release",
        possivelCausa: "Bobina de release, guia lateral ou tensão fora de referência.",
        verificacaoInicial: "Conferir visualmente o posicionamento sem acessar área em movimento.",
        quandoChamarInstrutor: "Quando o desvio for leve mas repetitivo.",
        quandoChamarManutencao: "Se guia automático, sensor ou rolete falhar.",
      },
    ],
    pontosIHM: [
      {
        titulo: "Tela principal",
        objetivo: "Acompanhar estado geral da linha, partida/parada e resumo de parâmetros.",
        observacao: "Operador iniciante usa para consulta e comandos liberados pelo instrutor.",
      },
      {
        titulo: "Tela de alarmes",
        objetivo: "Identificar código, descrição, histórico e área afetada.",
        observacao: "Alarme repetitivo deve ser comunicado; não resetar continuamente.",
      },
      {
        titulo: "Tela de receitas",
        objetivo: "Confirmar produto, quantidade por pacote e parâmetros carregados.",
        observacao: "Troca de receita é atividade assistida.",
      },
      {
        titulo: "Tela de velocidade",
        objetivo: "Visualizar velocidade atual e meta operacional.",
        observacao: "Não aumentar velocidade para compensar parada sem autorização.",
      },
      {
        titulo: "Tela de temperatura da cola",
        objetivo: "Monitorar tanque, mangueiras e bicos de hotmelt.",
        observacao: "Ajustes técnicos e limpeza de bicos são restritos.",
      },
      {
        titulo: "Tela de embalagem",
        objetivo: "Acompanhar invólucro, sincronismo, selagem/fechamento e contagem.",
        observacao: "Produto aberto ou contagem divergente exige segregação e aviso.",
      },
      {
        titulo: "Diagnóstico de sensores",
        objetivo: "Apoiar leitura de sensores de presença, contagem, embalagem e segurança.",
        observacao: "Nunca burlar sensor, chave de segurança ou proteção.",
      },
    ],
    perguntasFrequentes: [
      {
        pergunta: "O que verificar se o produto sair torto?",
        resposta:
          "Verifique amostras, alinhamento visual de cobertura/release, tensão aparente da bobina e alarmes. Não ajuste guias com a máquina em movimento; chame o instrutor se repetir.",
      },
      {
        pergunta: "Quando chamar o instrutor?",
        resposta:
          "Na primeira partida, troca de material durante treinamento, dúvida de qualidade, defeito repetitivo ou necessidade de confirmar ajuste operacional permitido.",
      },
      {
        pergunta: "Quando chamar manutenção?",
        resposta:
          "Quando houver falha mecânica, elétrica, pneumática, sensor defeituoso, alarme repetitivo, vazamento, ruído anormal ou necessidade de abrir proteção.",
      },
      {
        pergunta: "O que fazer se a embalagem individual abrir?",
        resposta:
          "Segregue as amostras, confira tela de embalagem/temperatura, comunique o instrutor e aguarde orientação antes de retomar em velocidade normal.",
      },
      {
        pergunta: "O que observar antes da primeira partida?",
        resposta:
          "EPI, proteções fechadas, área limpa, materiais corretos, pressão pneumática, hotmelt estabilizado, receita correta, sensores sem obstrução e ninguém em área de risco.",
      },
      {
        pergunta: "O que nunca fazer com a máquina em movimento?",
        resposta:
          "Nunca colocar a mão em rolos, corte, dobra ou embalagem; nunca puxar material preso, retirar proteção, burlar sensor ou limpar hotmelt/roletes.",
      },
    ],
    documentosRelacionados: [
      "manual-haina-absorvente",
      "checklist-partida-absorvente",
      "ihm-embalagem-absorvente",
      "troca-bobina-cobertura-absorvente",
      "parada-segura-absorvente",
      "defeitos-absorventes",
      "liberacao-operador-absorvente",
    ],
    nivelComplexidade: "intermediario",
    tempoEstimadoTreinamento: "5 a 7 horas de teoria e prática acompanhada",
    modulos: [
      "Alimentação de bobinas",
      "Formação do núcleo",
      "Cobertura e filme inferior",
      "Adesivo e release",
      "Corte anatômico e dobra",
      "Embalagem individual",
      "Inspeção e embalagem final",
    ],
    checklist: [
      { id: "c1", texto: "Proteções fechadas" },
      { id: "c2", texto: "Pressão pneumática dentro da faixa indicada" },
      { id: "c3", texto: "Bobinas de cobertura, filme e release carregadas" },
      { id: "c4", texto: "EPI completo" },
      { id: "c5", texto: "Hotmelt estabilizado e área sem vazamento" },
      { id: "c6", texto: "Tela de embalagem e contagem conferidas" },
    ],
    alarmes: [
      {
        codigo: "B112",
        descricao: "Falha de fechamento da embalagem",
        acao: "Conferir tela de embalagem e comunicar instrutor.",
      },
      {
        codigo: "B220",
        descricao: "Invólucro desalinhado",
        acao: "Parar em condição segura e solicitar apoio para ajuste de guia.",
      },
      {
        codigo: "B305",
        descricao: "Temperatura hotmelt fora da faixa",
        acao: "Aguardar estabilização e não tocar no sistema de cola.",
      },
      {
        codigo: "B410",
        descricao: "Sensor de contagem sem sinal",
        acao: "Verificar diagnóstico na IHM e chamar manutenção se repetir.",
      },
    ],
    pontosSeguranca: [
      {
        titulo: "Hotmelt e pontos quentes",
        risco: "Tanque, mangueiras e bicos de cola podem causar queimadura grave.",
        epi: ["Luva térmica"],
        procedimento:
          "Não tocar no sistema de cola; chamar instrutor/manutenção para vazamento ou alarme repetitivo.",
        nivel: "alto",
      },
      {
        titulo: "Partes móveis",
        risco: "Correias, rolos de tração e esteiras podem puxar mãos, cabelo ou uniforme.",
        epi: ["Cabelo preso", "Sem adornos"],
        procedimento:
          "Manter proteções fechadas e nunca puxar material com a máquina em movimento.",
        nivel: "alto",
      },
      {
        titulo: "Pontos de corte",
        risco: "Corte anatômico e facas podem causar ferimentos graves.",
        epi: ["Luva anti-corte", "Óculos de segurança"],
        procedimento:
          "Limpeza, retirada de refugo e inspeção somente com parada segura e liberação.",
        nivel: "alto",
      },
      {
        titulo: "Área de embalagem",
        risco: "Dobra, invólucro e contadores possuem roletes e movimentos sincronizados.",
        epi: ["Óculos de segurança", "Cabelo preso"],
        procedimento: "Não acessar a área para corrigir produto aberto; parar e chamar instrutor.",
        nivel: "medio",
      },
      {
        titulo: "Energia pneumática",
        risco: "Atuadores podem movimentar mesmo em baixa velocidade ou durante reset.",
        epi: ["Óculos de segurança"],
        procedimento:
          "Não despressurizar ou regular válvulas sem manutenção; comunicar alarme repetitivo.",
        nivel: "medio",
      },
    ],
    documentos: [
      { id: "manual-haina-absorvente", titulo: "Manual rápido — Haina Absorvente", tipo: "manual" },
      {
        id: "checklist-partida-absorvente",
        titulo: "Checklist de partida — Absorvente",
        tipo: "checklist",
      },
      { id: "ihm-embalagem-absorvente", titulo: "Print IHM — Tela de embalagem", tipo: "ihm" },
      {
        id: "troca-bobina-cobertura-absorvente",
        titulo: "Procedimento — Troca de bobina de cobertura",
        tipo: "procedimento",
      },
      {
        id: "parada-segura-absorvente",
        titulo: "Procedimento — Parada segura da linha de absorvente",
        tipo: "procedimento",
      },
      {
        id: "defeitos-absorventes",
        titulo: "Documento — Defeitos comuns em absorventes",
        tipo: "pdf",
      },
      {
        id: "liberacao-operador-absorvente",
        titulo: "Checklist — Liberação de operador na linha de absorventes",
        tipo: "checklist",
      },
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
    descricaoOperacional:
      "Linha destinada à fabricação de lenços umedecidos, com alimentação de não tecido, controle de tensão da bobina, dobra do material, aplicação ou dosagem de solução, corte, contagem, empilhamento, inserção na embalagem, selagem e saída do pacote final.",
    objetivoTreinamento:
      "Preparar o operador iniciante para reconhecer o fluxo da linha de lenços, conferir materiais e parâmetros básicos, executar checklist de partida assistido, identificar defeitos comuns e comunicar desvios sem intervir em partes móveis, corte, selagem ou dosagem sem autorização.",
    materiaisEntrada: [
      "Bobina de não tecido",
      "Solução umectante",
      "Embalagem plástica",
      "Etiqueta ou tampa quando aplicável",
      "Filme de embalagem",
      "Material de selagem",
      "Caixas ou fardos de embalagem final",
    ],
    produtoSaida: "Pacote de lenços umedecidos",
    componentesPrincipais: [
      "Desbobinador de não tecido",
      "Controle de tensão",
      "Sistema de dobra",
      "Unidade de aplicação de solução",
      "Rolos de tração",
      "Sistema de corte",
      "Contador de folhas",
      "Empilhador",
      "Alimentador de embalagem",
      "Unidade de selagem",
      "Esteira de saída",
      "Sensores de presença e posição",
    ],
    parametrosBasicos: [
      {
        nome: "Velocidade da linha",
        valorReferencia: "Definida por receita e liberada pelo instrutor",
        cuidado: "Aumentar apenas com corte, contagem, empilhamento e selagem estáveis.",
      },
      {
        nome: "Tensão da bobina",
        valorReferencia: "Não tecido tracionado sem rasgar, enrugar ou oscilar",
        cuidado: "Tensão incorreta causa dobra irregular e corte desalinhado.",
      },
      {
        nome: "Quantidade de solução aplicada",
        valorReferencia: "Conforme receita do produto e padrão de umidade",
        cuidado: "Baixa dosagem gera lenço seco; excesso pode causar vazamento do pacote.",
      },
      {
        nome: "Pressão pneumática",
        valorReferencia: "Faixa operacional indicada na IHM/manômetro",
        cuidado: "Pressão baixa afeta atuadores, corte, selagem e alimentação da embalagem.",
      },
      {
        nome: "Temperatura de selagem",
        valorReferencia: "Conforme filme/embalagem e receita em uso",
        cuidado: "Risco de queimadura; ajustes técnicos devem ser feitos por pessoa autorizada.",
      },
      {
        nome: "Posição de corte",
        valorReferencia: "Corte alinhado ao comprimento da folha",
        cuidado: "Desvio repetitivo deve ser segregado e comunicado.",
      },
      {
        nome: "Quantidade de folhas por pacote",
        valorReferencia: "Conforme ordem de produção/receita",
        cuidado: "Conferir amostras iniciais e sempre que houver alarme de contagem.",
      },
      {
        nome: "Sincronismo entre corte e embalagem",
        valorReferencia: "Pilhas entram centralizadas e no tempo correto",
        cuidado: "Não corrigir produto preso com a linha em movimento.",
      },
      {
        nome: "Alinhamento do pacote",
        valorReferencia: "Pacote reto, sem amassar e com selagem uniforme",
        cuidado: "Pacote torto pode indicar falha de alimentação ou empilhamento.",
      },
    ],
    defeitosProduto: [
      {
        defeito: "Lenço seco",
        possivelCausa:
          "Baixo nível de solução, dosagem insuficiente, bico/linha obstruída ou receita incorreta.",
        verificacaoInicial:
          "Conferir nível de solução, tela de dosagem, amostras recentes e alarmes sem acessar a área em movimento.",
        quandoChamarInstrutor:
          "Quando houver dúvida sobre padrão de umidade, segregação ou ajuste operacional permitido.",
        quandoChamarManutencao: "Se bomba, válvula, sensor de nível ou bicos não estabilizarem.",
      },
      {
        defeito: "Excesso de solução",
        possivelCausa:
          "Dosagem alta, falha de válvula, velocidade inadequada ou receita incorreta.",
        verificacaoInicial:
          "Comparar amostras, observar gotejamento e conferir parâmetros de dosagem na IHM.",
        quandoChamarInstrutor: "Quando o pacote ficar encharcado ou houver dúvida de liberação.",
        quandoChamarManutencao: "Se houver vazamento, válvula travada ou bomba sem controle.",
      },
      {
        defeito: "Pacote vazando",
        possivelCausa:
          "Excesso de solução, selagem baixa, embalagem danificada ou sujeira na área de selagem.",
        verificacaoInicial:
          "Segregar pacotes, conferir temperatura de selagem e observar integridade da embalagem.",
        quandoChamarInstrutor:
          "Sempre que houver repetição ou necessidade de decidir descarte/retrabalho.",
        quandoChamarManutencao: "Se o selador, sensor ou controle de temperatura falhar.",
      },
      {
        defeito: "Corte desalinhado",
        possivelCausa: "Posição de corte, tensão da bobina ou sincronismo fora de referência.",
        verificacaoInicial:
          "Separar amostras, conferir receita e observar o corte sem tocar nos mecanismos.",
        quandoChamarInstrutor: "Quando o desvio aparecer em sequência.",
        quandoChamarManutencao: "Se lâmina, encoder, sensor ou atuador apresentar falha.",
      },
      {
        defeito: "Dobra irregular",
        possivelCausa: "Sistema de dobra desalinhado, tensão instável ou material enrugado.",
        verificacaoInicial:
          "Observar passagem do não tecido e presença de acúmulo com a máquina em condição segura.",
        quandoChamarInstrutor:
          "Quando for necessário refazer passagem de material durante treinamento.",
        quandoChamarManutencao: "Se guias, rolos ou atuadores estiverem danificados.",
      },
      {
        defeito: "Quantidade errada de folhas",
        possivelCausa:
          "Sensor de contagem sem sinal, folha sobreposta, corte irregular ou empilhador instável.",
        verificacaoInicial:
          "Conferir contagem manual de amostras e tela de diagnóstico de sensores.",
        quandoChamarInstrutor: "Quando impactar liberação do lote ou ajuste de receita.",
        quandoChamarManutencao: "Se sensor, contador ou empilhador falhar repetidamente.",
      },
      {
        defeito: "Embalagem mal selada",
        possivelCausa:
          "Temperatura/pressão/tempo de selagem incorretos, filme desalinhado ou mordente sujo.",
        verificacaoInicial: "Inspecionar bordas do pacote e conferir tela de selagem.",
        quandoChamarInstrutor: "Quando houver dúvida sobre padrão visual de selagem.",
        quandoChamarManutencao: "Se resistência, termopar, mordente ou controle não estabilizar.",
      },
      {
        defeito: "Pacote amassado",
        possivelCausa:
          "Empilhamento irregular, alimentação fora de sincronismo ou esteira de saída obstruída.",
        verificacaoInicial:
          "Conferir saída, acúmulo e alinhamento do pacote sem intervir em movimento.",
        quandoChamarInstrutor: "Quando a ocorrência se repetir após limpeza/organização segura.",
        quandoChamarManutencao: "Se esteira, guia, atuador ou sensor estiver falhando.",
      },
      {
        defeito: "Falha de alimentação da embalagem",
        possivelCausa:
          "Embalagem plástica fora de posição, magazine vazio, filme desalinhado ou sensor sem leitura.",
        verificacaoInicial: "Conferir presença do material e alarmes da tela de embalagem.",
        quandoChamarInstrutor: "Quando for necessário reposicionar material durante treinamento.",
        quandoChamarManutencao: "Se alimentador, sensor ou atuador não responder.",
      },
      {
        defeito: "Contaminação visual",
        possivelCausa: "Área suja, solução derramada, material contaminado ou contato indevido.",
        verificacaoInicial: "Parar em condição segura, segregar produto e comunicar liderança.",
        quandoChamarInstrutor: "Sempre, para orientação de segregação e registro.",
        quandoChamarManutencao: "Se a fonte for vazamento, óleo, graxa ou componente da máquina.",
      },
    ],
    pontosIHM: [
      {
        titulo: "Tela principal",
        objetivo: "Acompanhar estado da linha, partida/parada, velocidade e resumo de parâmetros.",
        observacao: "Operador iniciante usa para consulta e comandos liberados pelo instrutor.",
      },
      {
        titulo: "Tela de alarmes",
        objetivo: "Identificar código, área afetada, descrição e histórico de falhas.",
        observacao: "Não resetar alarme repetitivo sem investigar e comunicar.",
      },
      {
        titulo: "Tela de receitas",
        objetivo: "Confirmar produto, quantidade de folhas, dosagem e parâmetros de embalagem.",
        observacao: "Troca de receita é atividade assistida.",
      },
      {
        titulo: "Tela de velocidade",
        objetivo: "Visualizar velocidade atual e meta operacional.",
        observacao: "Não aumentar velocidade para compensar parada sem autorização.",
      },
      {
        titulo: "Tela de dosagem de solução",
        objetivo: "Monitorar nível, bomba, vazão e quantidade aplicada.",
        observacao: "Divergência de umidade exige segregação e apoio.",
      },
      {
        titulo: "Tela de selagem",
        objetivo: "Monitorar temperatura, pressão/tempo e estado da unidade de selagem.",
        observacao: "Área quente; ajustes técnicos são restritos.",
      },
      {
        titulo: "Diagnóstico de sensores",
        objetivo: "Apoiar leitura de sensores de presença, posição, embalagem e segurança.",
        observacao: "Nunca burlar sensor, chave de segurança ou proteção.",
      },
      {
        titulo: "Contagem de folhas",
        objetivo: "Acompanhar contagem por pacote e sinais do contador.",
        observacao: "Conferir amostras se houver divergência ou alarme.",
      },
    ],
    perguntasFrequentes: [
      {
        pergunta: "O que verificar se o lenço sair seco?",
        resposta:
          "Confira nível de solução, tela de dosagem, receita carregada, bomba/linha sem alarme e padrão das amostras. Se repetir, pare em condição segura e chame o instrutor.",
      },
      {
        pergunta: "O que verificar se o pacote estiver vazando?",
        resposta:
          "Segregue os pacotes, confira excesso de solução, integridade da embalagem e temperatura de selagem. Não toque na área quente.",
      },
      {
        pergunta: "Quando chamar o instrutor?",
        resposta:
          "Na primeira partida, troca de material em treinamento, dúvida de qualidade, defeito repetitivo ou necessidade de confirmar ajuste operacional permitido.",
      },
      {
        pergunta: "Quando chamar manutenção?",
        resposta:
          "Quando houver falha mecânica, elétrica, pneumática, sensor sem sinal, vazamento, ruído anormal ou necessidade de abrir proteção/intervir tecnicamente.",
      },
      {
        pergunta: "O que observar antes da primeira partida?",
        resposta:
          "EPIs, proteções, área limpa, bobina de não tecido, nível de solução, embalagem, pressão pneumática, temperatura de selagem, receita correta e ausência de ferramentas soltas.",
      },
      {
        pergunta: "O que nunca fazer com a linha em movimento?",
        resposta:
          "Nunca colocar a mão em rolos, corte, selagem ou embalagem; nunca puxar material preso, limpar rolos, burlar proteções ou ajustar sensores.",
      },
      {
        pergunta: "Como identificar falha de selagem?",
        resposta:
          "Observe bordas abertas, vazamento, filme queimado/enrugado, pacote abrindo na inspeção e alarmes/temperaturas fora da faixa.",
      },
      {
        pergunta: "O que pode causar quantidade errada de folhas?",
        resposta:
          "Sensor de contagem sem sinal, folhas sobrepostas, corte desalinhado, empilhador instável ou sincronismo incorreto entre corte e embalagem.",
      },
    ],
    documentosRelacionados: [
      "manual-lencos-umedecidos",
      "checklist-partida-lencos",
      "ihm-dosagem-solucao-lencos",
      "ihm-selagem-lencos",
      "troca-bobina-nao-tecido-lencos",
      "abastecimento-seguro-solucao-lencos",
      "parada-segura-lencos",
      "defeitos-lencos-umedecidos",
      "liberacao-operador-lencos",
    ],
    nivelComplexidade: "intermediario",
    tempoEstimadoTreinamento: "5 a 7 horas de teoria e prática acompanhada",
    modulos: [
      "Alimentação de não tecido",
      "Dobra e dosagem de solução",
      "Corte e contagem",
      "Empilhamento",
      "Embalagem e selagem",
      "Inspeção e saída",
    ],
    checklist: [
      { id: "c1", texto: "Conferir EPIs obrigatórios." },
      { id: "c2", texto: "Verificar proteções e portas de segurança." },
      { id: "c3", texto: "Conferir bobina de não tecido." },
      { id: "c4", texto: "Conferir nível/abastecimento da solução umectante." },
      { id: "c5", texto: "Conferir embalagem plástica." },
      { id: "c6", texto: "Conferir temperatura de selagem." },
      { id: "c7", texto: "Conferir pressão pneumática." },
      { id: "c8", texto: "Verificar ausência de ferramentas soltas." },
      { id: "c9", texto: "Confirmar área limpa e segura." },
      { id: "c10", texto: "Chamar instrutor antes da primeira partida." },
    ],
    alarmes: [
      {
        codigo: "L101",
        descricao: "Falta de não tecido.",
        acao: "Parar em condição segura, conferir bobina e chamar instrutor para troca assistida.",
      },
      {
        codigo: "L102",
        descricao: "Baixo nível de solução.",
        acao: "Conferir abastecimento e seguir procedimento seguro antes de retomar.",
      },
      {
        codigo: "L201",
        descricao: "Falha de selagem.",
        acao: "Segregar pacotes, conferir tela de selagem e comunicar instrutor.",
      },
      {
        codigo: "L301",
        descricao: "Falha de alimentação da embalagem.",
        acao: "Conferir presença/alinhamento do material sem acessar partes móveis.",
      },
      {
        codigo: "L410",
        descricao: "Sensor de contagem sem sinal.",
        acao: "Verificar diagnóstico na IHM e chamar manutenção se repetir.",
      },
      {
        codigo: "L520",
        descricao: "Pressão pneumática baixa.",
        acao: "Comunicar manutenção; não regular válvulas sem autorização.",
      },
      {
        codigo: "L630",
        descricao: "Produto preso na saída.",
        acao: "Parar a linha, aguardar liberação segura e chamar instrutor.",
      },
    ],
    pontosSeguranca: [
      {
        titulo: "Rolos de tração",
        risco: "Podem puxar mãos, cabelo, luvas ou uniforme.",
        epi: ["Cabelo preso", "Sem adornos", "Óculos de segurança"],
        procedimento:
          "Manter proteções fechadas e nunca puxar não tecido com a linha em movimento.",
        nivel: "alto",
      },
      {
        titulo: "Pontos de corte",
        risco: "Facas e corte transversal podem causar ferimentos graves.",
        epi: ["Luva anti-corte", "Óculos de segurança"],
        procedimento: "Limpeza e retirada de refugo somente com parada segura e liberação.",
        nivel: "alto",
      },
      {
        titulo: "Área de selagem quente",
        risco: "Mordentes e resistências podem causar queimaduras.",
        epi: ["Luva térmica"],
        procedimento:
          "Não tocar na unidade de selagem; chamar instrutor/manutenção em falha repetitiva.",
        nivel: "alto",
      },
      {
        titulo: "Partes móveis",
        risco: "Empilhador, esteiras e alimentadores movimentam em ciclo automático.",
        epi: ["Óculos de segurança", "Cabelo preso"],
        procedimento: "Nunca intervir com máquina em movimento ou proteção aberta indevidamente.",
        nivel: "alto",
      },
      {
        titulo: "Energia pneumática",
        risco: "Atuadores podem movimentar durante reset ou queda/retorno de pressão.",
        epi: ["Óculos de segurança"],
        procedimento: "Não regular válvulas; comunicar pressão baixa ou movimento inesperado.",
        nivel: "medio",
      },
      {
        titulo: "Risco de escorregamento por solução",
        risco: "Solução no piso pode causar queda e contaminação visual.",
        epi: ["Calçado antiderrapante", "Luva nitrílica"],
        procedimento: "Sinalizar, conter e limpar derramamento conforme orientação segura.",
        nivel: "medio",
      },
      {
        titulo: "Proibição de intervenção em movimento",
        risco:
          "Acesso a corte, rolos, selagem ou embalagem em movimento pode causar acidente grave.",
        epi: ["EPI completo da área"],
        procedimento:
          "Nunca burlar proteções; chamar instrutor/manutenção em caso de alarme repetitivo.",
        nivel: "alto",
      },
    ],
    documentos: [
      {
        id: "manual-lencos-umedecidos",
        titulo: "Manual rápido — Linha Lenços Umedecidos",
        tipo: "manual",
      },
      {
        id: "checklist-partida-lencos",
        titulo: "Checklist de partida — Lenços Umedecidos",
        tipo: "checklist",
      },
      { id: "ihm-dosagem-solucao-lencos", titulo: "Print IHM — Dosagem de solução", tipo: "ihm" },
      { id: "ihm-selagem-lencos", titulo: "Print IHM — Selagem", tipo: "ihm" },
      {
        id: "troca-bobina-nao-tecido-lencos",
        titulo: "Procedimento — Troca de bobina de não tecido",
        tipo: "procedimento",
      },
      {
        id: "abastecimento-seguro-solucao-lencos",
        titulo: "Procedimento — Abastecimento seguro de solução",
        tipo: "procedimento",
      },
      {
        id: "parada-segura-lencos",
        titulo: "Procedimento — Parada segura da linha de lenços",
        tipo: "procedimento",
      },
      {
        id: "defeitos-lencos-umedecidos",
        titulo: "Documento — Defeitos comuns em lenços umedecidos",
        tipo: "pdf",
      },
      {
        id: "liberacao-operador-lencos",
        titulo: "Checklist — Liberação de operador na linha de lenços",
        tipo: "checklist",
      },
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
