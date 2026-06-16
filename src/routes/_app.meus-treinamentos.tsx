import { createFileRoute, Link } from "@tanstack/react-router";
import { TRILHAS_MOCK, STATUS_LABEL } from "@/data/mock/treinamentos";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import { getTrilhasComProgresso } from "@/lib/trilhasProgress";
import { PageHeader } from "@/components/common/PageHeader";
import type { StatusTrilha } from "@/data/types";

export const Route = createFileRoute("/_app/meus-treinamentos")({
  component: MeusTreinamentos,
});

const ordemStatus: StatusTrilha[] = [
  "em-andamento",
  "aguardando-avaliacao",
  "reciclagem",
  "nao-iniciado",
  "aprovado",
];

const corStatus: Record<StatusTrilha, string> = {
  "nao-iniciado": "bg-muted text-muted-foreground",
  "em-andamento": "bg-accent/20 text-accent-foreground",
  "aguardando-avaliacao": "bg-warning/30 text-foreground",
  aprovado: "bg-success/20 text-success",
  reciclagem: "bg-danger/15 text-danger",
};

function MeusTreinamentos() {
  return (
    <div>
      <PageHeader title="Meus treinamentos" subtitle="Acompanhe suas trilhas" />
      <div className="space-y-4 px-4 py-3">
        {ordemStatus.map((status) => {
          const itens = getTrilhasComProgresso().filter((t) => t.status === status);
          if (itens.length === 0) return null;
          return (
            <section key={status}>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  {STATUS_LABEL[status]}
                </h3>
                <span className="text-[11px] text-muted-foreground">{itens.length}</span>
              </div>
              <div className="space-y-2">
                {itens.map((t) => {
                  const maq = MAQUINAS_MOCK.find((m) => m.id === t.maquinaId);
                  if (!maq) return null;
                  return (
                    <Link
                      key={t.id}
                      to="/trilhas/$trilhaId"
                      params={{ trilhaId: t.id }}
                      className="block rounded-2xl border border-border bg-card p-3 shadow-sm transition active:scale-[0.99]"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold">{t.titulo}</p>
                          <p className="truncate text-[11px] text-muted-foreground">
                            {maq.marca} • atualizado: {t.ultimaAtualizacao}
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${corStatus[t.status]}`}
                        >
                          {STATUS_LABEL[t.status]}
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${t.progresso}%` }}
                        />
                      </div>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        {t.progresso}% concluído
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
