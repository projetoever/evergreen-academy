import { createFileRoute } from "@tanstack/react-router";
import { BIBLIOTECA_CATEGORIAS } from "@/data/mock/biblioteca";
import { PageHeader } from "@/components/common/PageHeader";
import { IconLucide } from "@/components/common/IconLucide";
import { Construction } from "lucide-react";

export const Route = createFileRoute("/_app/biblioteca")({
  component: BibliotecaPage,
});

function BibliotecaPage() {
  return (
    <div>
      <PageHeader title="Biblioteca técnica" subtitle="Manuais, fotos, vídeos e procedimentos" />

      <div className="grid grid-cols-2 gap-3 px-4 py-3">
        {BIBLIOTECA_CATEGORIAS.map((c) => (
          <button
            key={c.tipo}
            type="button"
            className="flex h-28 flex-col items-start justify-between rounded-2xl border border-border bg-card p-3 text-left shadow-sm transition active:scale-[0.98]"
          >
            <span className={`grid h-10 w-10 place-items-center rounded-xl ${c.cor}`}>
              <IconLucide name={c.icone === "ImageIcon" ? "Image" : c.icone} className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold leading-tight">{c.titulo}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">Em breve</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mx-4 mt-2 flex items-start gap-2 rounded-2xl border border-dashed border-border bg-muted/40 p-4">
        <Construction className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
        <div className="text-xs leading-relaxed text-muted-foreground">
          Esta área está preparada para receber PDFs, manuais, prints de IHM, fotos de máquina,
          vídeos, procedimentos internos e checklists.
        </div>
      </div>
    </div>
  );
}
