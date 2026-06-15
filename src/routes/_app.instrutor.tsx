import { createFileRoute, Navigate } from "@tanstack/react-router";
import { FUNCIONARIOS_EM_TREINO_MOCK, STATUS_LABEL } from "@/data/mock/treinamentos";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { usePerfil } from "@/lib/perfilAtual";
import { Check, X, MessageSquare, KeyRound } from "lucide-react";

export const Route = createFileRoute("/_app/instrutor")({
  component: InstrutorPage,
});

function InstrutorPage() {
  const { usuario } = usePerfil();
  if (!["instrutor", "lider", "admin"].includes(usuario.papel)) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <PageHeader title="Área do instrutor" subtitle="Avalie, aprove e libere operadores" />
      <div className="space-y-3 px-4 py-3">
        {FUNCIONARIOS_EM_TREINO_MOCK.map((f) => {
          const maq = MAQUINAS_MOCK.find((m) => m.id === f.maquinaId);
          return (
            <div key={f.id} className="rounded-2xl border border-border bg-card p-3 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {f.iniciais}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold">{f.nome}</p>
                  <p className="truncate text-[11px] text-muted-foreground">{maq?.nome}</p>
                  <span className="mt-1 inline-block rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold">
                    {STATUS_LABEL[f.status]}
                  </span>
                </div>
              </div>
              {f.observacao && (
                <p className="mt-2 rounded-lg bg-warning/15 p-2 text-[11px] text-foreground">
                  📝 {f.observacao}
                </p>
              )}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button size="sm" variant="default" className="h-10 rounded-lg">
                  <Check className="mr-1 h-4 w-4" /> Aprovar
                </Button>
                <Button size="sm" variant="destructive" className="h-10 rounded-lg">
                  <X className="mr-1 h-4 w-4" /> Reprovar
                </Button>
                <Button size="sm" variant="outline" className="h-10 rounded-lg">
                  <MessageSquare className="mr-1 h-4 w-4" /> Observar
                </Button>
                <Button size="sm" variant="outline" className="h-10 rounded-lg">
                  <KeyRound className="mr-1 h-4 w-4" /> Liberar
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
