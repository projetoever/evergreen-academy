import type { Usuario } from "../types";

export const PERFIS_MOCK: Usuario[] = [
  {
    id: "u-op",
    nome: "João Silva",
    cargo: "Operador de Máquina I",
    setor: "Fraldas",
    papel: "operador",
    iniciais: "JS",
    maquinasLiberadas: ["mq-haina-fralda"],
  },
  {
    id: "u-inst",
    nome: "Marta Ribeiro",
    cargo: "Instrutora de Processos",
    setor: "Treinamento",
    papel: "instrutor",
    iniciais: "MR",
    maquinasLiberadas: ["mq-haina-fralda", "mq-haina-absorvente", "mq-lencos", "mq-italiana-pants"],
  },
  {
    id: "u-lid",
    nome: "Carlos Mendes",
    cargo: "Líder de Produção",
    setor: "Fraldas",
    papel: "lider",
    iniciais: "CM",
    maquinasLiberadas: ["mq-haina-fralda", "mq-italiana-pants"],
  },
  {
    id: "u-adm",
    nome: "Ana Beatriz",
    cargo: "Administradora",
    setor: "Engenharia",
    papel: "admin",
    iniciais: "AB",
    maquinasLiberadas: ["mq-haina-fralda", "mq-haina-absorvente", "mq-lencos", "mq-italiana-pants"],
  },
];

export const PAPEL_LABEL: Record<Usuario["papel"], string> = {
  operador: "Operador",
  instrutor: "Instrutor",
  lider: "Líder",
  admin: "Administrador",
};
