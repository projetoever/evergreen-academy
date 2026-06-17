import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BIBLIOTECA_CATEGORIAS, BIBLIOTECA_MOCK } from "@/data/mock/biblioteca";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import { PageHeader } from "@/components/common/PageHeader";
import { IconLucide } from "@/components/common/IconLucide";
import type { ItemBiblioteca } from "@/data/types";

export const Route = createFileRoute("/_app/biblioteca")({ component: BibliotecaPage });

type Filtro = "todos" | "maquina" | "tipo" | "seguranca" | "ihm" | "checklist";
const filtros: Array<{ id: Filtro; label: string }> = [
  { id: "todos", label: "Todos" },
  { id: "maquina", label: "Máquina" },
  { id: "tipo", label: "Tipo" },
  { id: "seguranca", label: "Segurança" },
  { id: "ihm", label: "IHM" },
  { id: "checklist", label: "Checklist" },
];

function aplicaFiltro(item: ItemBiblioteca, filtro: Filtro) {
  if (filtro === "todos") return true;
  if (filtro === "maquina") return Boolean(item.maquinaId);
  if (filtro === "tipo")
    return ["manual", "pdf", "procedimento", "video", "foto"].includes(item.tipo);
  if (filtro === "seguranca")
    return (
      item.titulo.toLowerCase().includes("segurança") ||
      item.descricao.toLowerCase().includes("segurança") ||
      item.descricao.toLowerCase().includes("risco")
    );
  return item.tipo === filtro;
}

function getCategoria(tipo: ItemBiblioteca["tipo"]) {
  return BIBLIOTECA_CATEGORIAS.find((c) => c.tipo === tipo);
}

function BibliotecaPage() {
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const itens = BIBLIOTECA_MOCK.filter((item) => aplicaFiltro(item, filtro));
  return (
    <div className="pb-8">
      <PageHeader
        title="Biblioteca técnica"
        subtitle="Manuais, fotos, vídeos e procedimentos mockados"
      />

      {/* Filtros */}
      <div className="flex gap-2 overflow-x-auto px-4 py-3">
        {filtros.map((f) => {
          const ativo = filtro === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFiltro(f.id)}
              className={`inline-flex h-10 shrink-0 items-center rounded-full px-4 text-xs font-semibold transition ${
                ativo
                  ? "bg-primary text-primary-foreground shadow-sm ring-1 ring-primary/30"
                  : "border border-border bg-card text-foreground/80 hover:bg-muted"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Categorias */}
      <div className="grid grid-cols-2 gap-3 px-4 pb-1">
        {BIBLIOTECA_CATEGORIAS.map((c) => (
          <div
            key={c.tipo}
            className="flex h-28 flex-col items-start justify-between rounded-2xl border border-border/70 bg-card p-3 shadow-sm"
          >
            <span className={`grid h-10 w-10 place-items-center rounded-xl ${c.cor}`}>
              <IconLucide name={c.icone === "ImageIcon" ? "Image" : c.icone} className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold leading-tight">{c.titulo}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">
                {BIBLIOTECA_MOCK.filter((i) => i.tipo === c.tipo).length} itens
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Itens */}
      <div className="mt-2 space-y-3 px-4">
        {itens.map((item) => {
          const cat = getCategoria(item.tipo);
          const maquina = item.maquinaId
            ? MAQUINAS_MOCK.find((m) => m.id === item.maquinaId)
            : undefined;
          return (
            <article
              key={item.id}
              className="flex gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-sm"
            >
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${cat?.cor ?? "bg-muted text-foreground"}`}
              >
                <IconLucide
                  name={(cat?.icone === "ImageIcon" ? "Image" : cat?.icone) ?? "FileText"}
                  className="h-5 w-5"
                />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${cat?.cor ?? "bg-muted text-foreground"}`}
                  >
                    {cat?.titulo ?? item.tipo}
                  </span>
                  <span className="text-[10px] font-semibold text-muted-foreground">mock</span>
                </div>
                <h3 className="mt-1.5 text-base font-bold leading-snug text-foreground">
                  {item.titulo}
                </h3>
                <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                  {item.descricao}
                </p>
                {maquina && (
                  <p className="mt-2 text-[11px] font-semibold text-primary">{maquina.nome}</p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
