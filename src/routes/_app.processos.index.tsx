import { createFileRoute, Link } from "@tanstack/react-router";
import { PROCESSOS_MOCK } from "@/data/mock/processos";
import { PageHeader } from "@/components/common/PageHeader";
import { Baby, Heart, Sparkles, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/_app/processos/")({
  component: ProcessosPage,
});

const visuais = {
  fraldas: { icon: Baby, cor: "from-primary to-primary/70" },
  absorventes: { icon: Heart, cor: "from-accent to-success" },
  lencos: { icon: Sparkles, cor: "from-chart-3 to-primary" },
} as const;

function ProcessosPage() {
  return (
    <div>
      <PageHeader title="Processos de fabricação" subtitle="Escolha uma categoria" />
      <div className="space-y-3 px-4 py-3">
        {PROCESSOS_MOCK.map((p) => {
          const v = visuais[p.categoria];
          const Icon = v.icon;
          return (
            <Link
              key={p.categoria}
              to="/processos/$categoria"
              params={{ categoria: p.categoria }}
              className={`flex items-center gap-3 rounded-2xl bg-gradient-to-br p-4 text-primary-foreground shadow-sm transition active:scale-[0.99] ${v.cor}`}
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15">
                <Icon className="h-7 w-7" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-base font-bold">{p.titulo}</p>
                <p className="text-xs opacity-90">{p.etapas.length} etapas</p>
              </div>
              <ChevronRight className="h-5 w-5 opacity-90" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
