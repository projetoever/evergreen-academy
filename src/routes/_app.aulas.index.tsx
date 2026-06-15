import { createFileRoute, Link } from "@tanstack/react-router";
import { AULAS_MOCK } from "@/data/mock/aulas";
import { PageHeader } from "@/components/common/PageHeader";
import { IconLucide } from "@/components/common/IconLucide";
import { Sparkles, Clock } from "lucide-react";

export const Route = createFileRoute("/_app/aulas/")({
  component: AulasPage,
});

const nivelBadge = {
  basico: "bg-success/20 text-success",
  intermediario: "bg-warning/30 text-foreground",
  avancado: "bg-danger/15 text-danger",
} as const;

const nivelLabel = {
  basico: "Básico",
  intermediario: "Intermediário",
  avancado: "Avançado",
} as const;

function AulasPage() {
  return (
    <div>
      <PageHeader title="Conceitos básicos" subtitle="Aulas curtas, visuais e simples" />

      <div className="mx-4 mt-2 flex items-start gap-2 rounded-2xl border border-accent/30 bg-accent/10 p-3">
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />
        <p className="text-xs leading-relaxed text-foreground">
          Aulas pensadas para <b>operadores iniciantes</b>: linguagem simples, exemplos do dia a dia
          e muita imagem.
        </p>
      </div>

      <div className="space-y-3 px-4 py-4">
        {AULAS_MOCK.map((aula) => (
          <Link
            key={aula.id}
            to="/aulas/$aulaId"
            params={{ aulaId: aula.id }}
            className="flex items-start gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm transition active:scale-[0.99]"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <IconLucide name={aula.icone} className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold">{aula.titulo}</p>
              <p className="line-clamp-2 text-xs text-muted-foreground">{aula.descricao}</p>
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${nivelBadge[aula.nivel]}`}>
                  {nivelLabel[aula.nivel]}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {aula.tempoMin} min
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
