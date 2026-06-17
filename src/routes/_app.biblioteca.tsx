import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BIBLIOTECA_CATEGORIAS, BIBLIOTECA_MOCK } from "@/data/mock/biblioteca";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import { PageHeader } from "@/components/common/PageHeader";
import { IconLucide } from "@/components/common/IconLucide";
import { Button } from "@/components/ui/button";
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

function BibliotecaPage() {
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const itens = BIBLIOTECA_MOCK.filter((item) => aplicaFiltro(item, filtro));
  return (
    <div>
      <PageHeader
        title="Biblioteca técnica"
        subtitle="Manuais, fotos, vídeos e procedimentos mockados"
      />
      <div className="flex gap-2 overflow-x-auto px-4 py-3">
        {filtros.map((f) => (
          <Button
            key={f.id}
            size="sm"
            variant={filtro === f.id ? "default" : "outline"}
            className="shrink-0 rounded-full"
            onClick={() => setFiltro(f.id)}
          >
            {f.label}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 px-4 pb-3">
        {BIBLIOTECA_CATEGORIAS.map((c) => (
          <div
            key={c.tipo}
            className="flex h-28 flex-col items-start justify-between rounded-2xl border border-border bg-card p-3 shadow-sm"
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
      <div className="space-y-3 px-4 pb-4">
        {itens.map((item) => (
          <article key={item.id} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-primary">
                  {item.tipo} · {item.status}
                </p>
                <h3 className="mt-1 text-sm font-extrabold">{item.titulo}</h3>
              </div>
              <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold">mock</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.descricao}</p>
            {item.maquinaId && (
              <p className="mt-2 text-[11px] font-semibold">
                Máquina: {MAQUINAS_MOCK.find((m) => m.id === item.maquinaId)?.nome}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
