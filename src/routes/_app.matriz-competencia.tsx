import { createFileRoute, Navigate } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { MATRIZ_COMPETENCIA_MOCK } from "@/data/mock/matrizCompetencia";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import { STATUS_LABEL } from "@/data/mock/treinamentos";
import { usePerfil } from "@/lib/perfilAtual";

export const Route = createFileRoute("/_app/matriz-competencia")({
  component: MatrizCompetenciaPage,
});
function MatrizCompetenciaPage() {
  const { usuario } = usePerfil();
  if (!["lider", "admin"].includes(usuario.papel)) return <Navigate to="/" replace />;
  return (
    <div>
      <PageHeader
        title="Matriz de competência"
        subtitle="Visão inicial mockada por funcionário e máquina"
      />
      <div className="space-y-3 px-4 py-3">
        {MATRIZ_COMPETENCIA_MOCK.map((item) => (
          <article key={item.id} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-extrabold">{item.funcionario}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {MAQUINAS_MOCK.find((m) => m.id === item.maquinaId)?.nome}
                </p>
              </div>
              <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary">
                {item.nivel}
              </span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-xl bg-muted/50 p-2">
                <p className="text-[10px] text-muted-foreground">Status</p>
                <p className="font-bold">{STATUS_LABEL[item.status]}</p>
              </div>
              <div className="rounded-xl bg-muted/50 p-2">
                <p className="text-[10px] text-muted-foreground">Última atualização</p>
                <p className="font-bold">{item.ultimaAtualizacao}</p>
              </div>
            </div>
            <p className="mt-3 rounded-xl bg-warning/15 p-3 text-xs">
              <strong>Próxima ação:</strong> {item.proximaAcao}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
