import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useState } from "react";
import { Check, KeyRound, MessageSquare, X } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import { STATUS_LABEL } from "@/data/mock/treinamentos";
import type { StatusTrilha } from "@/data/types";
import {
  getAvaliacaoPraticaItems,
  isAvaliacaoPraticaAprovada,
  loadAvaliacaoPratica,
  loadFuncionariosInstrutor,
  toggleAvaliacaoPratica,
  updateFuncionarioStatus,
} from "@/lib/trilhasProgress";
import { usePerfil } from "@/lib/perfilAtual";

export const Route = createFileRoute("/_app/instrutor")({ component: InstrutorPage });

function InstrutorPage() {
  const { usuario } = usePerfil();
  const [funcionarios, setFuncionarios] = useState(loadFuncionariosInstrutor);
  const [, setRefresh] = useState(0);
  if (!["instrutor", "lider", "admin"].includes(usuario.papel)) return <Navigate to="/" replace />;
  function alterarStatus(funcionarioId: string, status: StatusTrilha, observacao?: string) {
    setFuncionarios(updateFuncionarioStatus(funcionarioId, status, observacao));
  }
  const aguardando = funcionarios.filter((f) => f.status === "aguardando-avaliacao");
  return (
    <div>
      <PageHeader title="Área do instrutor" subtitle="Avalie, aprove e libere operadores" />
      <div className="space-y-3 px-4 py-3">
        <section className="rounded-2xl border border-warning/40 bg-warning/15 p-4">
          <p className="text-sm font-extrabold">Aguardando avaliação prática</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {aguardando.length
              ? `${aguardando.length} operador(es) precisam de validação no chão de fábrica.`
              : "Nenhum operador aguardando no momento."}
          </p>
          {aguardando.map((f) => (
            <p key={f.id} className="mt-2 rounded-lg bg-background/70 px-3 py-2 text-xs font-bold">
              {f.nome} · {MAQUINAS_MOCK.find((m) => m.id === f.maquinaId)?.nome}
            </p>
          ))}
        </section>
        {funcionarios.map((f) => {
          const maq = MAQUINAS_MOCK.find((m) => m.id === f.maquinaId);
          const avaliacao = loadAvaliacaoPratica(f.id);
          const avaliacaoItems = getAvaliacaoPraticaItems(f.maquinaId);
          const aprovada = isAvaliacaoPraticaAprovada(avaliacao, f.maquinaId);
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
              <div className="mt-3 rounded-xl bg-muted/40 p-3">
                <p className="text-xs font-extrabold">Checklist de avaliação prática</p>
                <div className="mt-2 space-y-2">
                  {avaliacaoItems.map((item) => (
                    <label
                      key={item}
                      className="flex items-start gap-2 rounded-lg border border-border bg-background p-2 text-xs"
                    >
                      <input
                        type="checkbox"
                        checked={Boolean(avaliacao[item])}
                        onChange={() => {
                          toggleAvaliacaoPratica(f.id, item);
                          setRefresh((n) => n + 1);
                        }}
                        className="mt-0.5"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button
                  size="sm"
                  variant="default"
                  className="h-10 rounded-lg"
                  onClick={() => alterarStatus(f.id, "aguardando-avaliacao")}
                >
                  <Check className="mr-1 h-4 w-4" /> Avaliar
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  className="h-10 rounded-lg"
                  onClick={() =>
                    alterarStatus(
                      f.id,
                      "reciclagem",
                      "Reprovado na avaliação prática. Refazer pontos observados.",
                    )
                  }
                >
                  <X className="mr-1 h-4 w-4" /> Reprovar
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-10 rounded-lg"
                  onClick={() =>
                    alterarStatus(
                      f.id,
                      f.status,
                      "Instrutor registrou observação para acompanhamento.",
                    )
                  }
                >
                  <MessageSquare className="mr-1 h-4 w-4" /> Observar
                </Button>
                <Button
                  size="sm"
                  variant={aprovada ? "default" : "outline"}
                  className={`h-10 rounded-lg ${aprovada ? "shadow-md ring-2 ring-success/30" : "opacity-70"}`}
                  onClick={() =>
                    aprovada &&
                    alterarStatus(
                      f.id,
                      "aprovado",
                      "Operador liberado para operação assistida/final.",
                    )
                  }
                >
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
