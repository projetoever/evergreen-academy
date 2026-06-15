import type { Aula, Maquina, Trilha, FuncionarioEmTreino, QuizPergunta, Usuario } from "../types";
import { AULAS_MOCK } from "../mock/aulas";
import { MAQUINAS_MOCK } from "../mock/maquinas";
import { TRILHAS_MOCK, FUNCIONARIOS_EM_TREINO_MOCK } from "../mock/treinamentos";
import { QUIZ_MOCK } from "../mock/avaliacoes";
import { PERFIS_MOCK } from "../mock/perfis";

/**
 * Camada de repositórios.
 * Hoje retorna mocks via Promise.resolve. No futuro, trocar a implementação
 * por chamadas Supabase (PostgREST) sem alterar as telas.
 */

export const aulasRepo = {
  listar: async (): Promise<Aula[]> => Promise.resolve(AULAS_MOCK),
  obter: async (id: string): Promise<Aula | undefined> =>
    Promise.resolve(AULAS_MOCK.find((a) => a.id === id)),
};

export const maquinasRepo = {
  listar: async (): Promise<Maquina[]> => Promise.resolve(MAQUINAS_MOCK),
  obter: async (id: string): Promise<Maquina | undefined> =>
    Promise.resolve(MAQUINAS_MOCK.find((m) => m.id === id)),
  obterPorQr: async (codigo: string): Promise<Maquina | undefined> =>
    Promise.resolve(MAQUINAS_MOCK.find((m) => m.qrCode.toLowerCase() === codigo.toLowerCase())),
};

export const trilhasRepo = {
  listar: async (): Promise<Trilha[]> => Promise.resolve(TRILHAS_MOCK),
};

export const instrutorRepo = {
  listarFuncionarios: async (): Promise<FuncionarioEmTreino[]> =>
    Promise.resolve(FUNCIONARIOS_EM_TREINO_MOCK),
};

export const avaliacoesRepo = {
  listarQuiz: async (): Promise<QuizPergunta[]> => Promise.resolve(QUIZ_MOCK),
};

export const usuariosRepo = {
  listar: async (): Promise<Usuario[]> => Promise.resolve(PERFIS_MOCK),
};
