import { createFileRoute, notFound } from "@tanstack/react-router";
import { PROCESSOS_MOCK } from "@/data/mock/processos";
import { PageHeader } from "@/components/common/PageHeader";
import { IconLucide } from "@/components/common/IconLucide";
import type { CategoriaProcesso } from "@/data/types";

export const Route = createFileRoute("/_app/processos/$categoria")({
  loader: ({ params }) => {
    const cat = params.categoria as CategoriaProcesso;
    const processo = PROCESSOS_MOCK.find((p) => p.categoria === cat);
    if (!processo) throw notFound();
    return { processo };
  },
  component: ProcessoDetalhe,
  notFoundComponent: () => (
    <div className="p-6 text-center text-sm text-muted-foreground">Categoria não encontrada.</div>
  ),
});

function ProcessoDetalhe() {
  const { processo } = Route.useLoaderData();

  return (
    <div className="pb-6">
      <PageHeader title={processo.titulo} subtitle={processo.descricao} back="/processos" />

      <div className="relative px-4 pt-3">
        {/* Linha vertical */}
        <div className="absolute left-[2.25rem] top-3 bottom-0 w-0.5 bg-border" />

        <ol className="space-y-3">
          {processo.etapas.map((etapa: import("@/data/types").EtapaProcesso) => (
            <li key={etapa.numero} className="relative flex items-start gap-3">
              <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-sm">
                <IconLucide name={etapa.icone} className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1 rounded-2xl border border-border bg-card p-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent-foreground">
                    Etapa {etapa.numero}
                  </span>
                </div>
                <p className="mt-1 text-sm font-bold leading-tight">{etapa.titulo}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{etapa.descricao}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
