import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ClipboardCheck, Lock, PlayCircle, Trophy } from "lucide-react";

import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { QUIZ_MOCK } from "@/data/mock/avaliacoes";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import { STATUS_LABEL, TRILHAS_MOCK } from "@/data/mock/treinamentos";
import type { TrilhaEtapa } from "@/data/types";
import {
  areEtapasTeoricasConcluidas,
  getProgressoTrilha,
  getStatusTrilha,
  getTrilhaProgress,
  markEtapaVista,
  saveQuizResultado,
} from "@/lib/trilhasProgress";

export const Route = createFileRoute("/_app/trilhas/$trilhaId")({
  loader: ({ params }) => {
    const trilha = TRILHAS_MOCK.find((item) => item.id === params.trilhaId);
    if (!trilha) throw notFound();
    return { trilha };
  },
  component: TrilhaPage,
});

const etapaCopy: Record<TrilhaEtapa["tipo"], string> = {
  teorica: "Leia o conteúdo, conecte com a rotina da máquina e marque como visto.",
  checklist: "Revise cada item antes de iniciar a operação assistida.",
  quiz: "Responda o quiz. A aprovação mínima é 80%.",
  pratica: "Etapa feita com instrutor após concluir a teoria.",
  liberacao: "Liberação final mockada pelo instrutor.",
};

function TrilhaPage() {
  const { trilha } = Route.useLoaderData();
  const maquina = MAQUINAS_MOCK.find((item) => item.id === trilha.maquinaId);
  const [, setRefreshKey] = useState(0);
  const progress = getTrilhaProgress(trilha.id);
  const progresso = getProgressoTrilha(trilha, trilha.etapas);
  const status = getStatusTrilha(trilha, trilha.etapas);
  const teoricasConcluidas = areEtapasTeoricasConcluidas(trilha.etapas, progress);

  function handleMarcarVisto(etapaId: string) {
    markEtapaVista(trilha.id, etapaId);
    setRefreshKey((key) => key + 1);
  }

  return (
    <div>
      <PageHeader title={trilha.titulo} subtitle={maquina?.nome ?? "Trilha de treinamento"} />
      <div className="space-y-4 px-4 py-3">
        <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                Jornada do operador
              </p>
              <p className="mt-1 text-sm font-semibold">{STATUS_LABEL[status]}</p>
            </div>
            <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
              <Trophy className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary" style={{ width: `${progresso}%` }} />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{progresso}% concluído</p>
          {teoricasConcluidas && (
            <p className="mt-3 rounded-xl bg-warning/20 p-3 text-xs font-semibold text-foreground">
              Funcionário aguardando avaliação prática do instrutor.
            </p>
          )}
        </section>

        <section className="space-y-3">
          {trilha.etapas.map((etapa) => {
            const concluida = progress.etapas[etapa.id] === "concluida";
            const bloqueada = etapa.status === "bloqueada" && !teoricasConcluidas;
            return (
              <article
                key={etapa.id}
                className="rounded-2xl border border-border bg-card p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${concluida ? "bg-success/20 text-success" : bloqueada ? "bg-muted text-muted-foreground" : "bg-accent/20 text-accent-foreground"}`}
                  >
                    {concluida ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : bloqueada ? (
                      <Lock className="h-5 w-5" />
                    ) : (
                      <PlayCircle className="h-5 w-5" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-bold">
                        {etapa.ordem}. {etapa.titulo}
                      </p>
                      {etapa.obrigatoria && (
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                          Obrigatória
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{etapaCopy[etapa.tipo]}</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Referência: {etapa.referenciaId}
                    </p>
                  </div>
                </div>

                {etapa.tipo === "quiz" ? (
                  <TrilhaQuiz
                    trilhaId={trilha.id}
                    onSaved={() => setRefreshKey((key) => key + 1)}
                  />
                ) : (
                  <Button
                    className="mt-3 h-11 w-full rounded-xl font-bold"
                    variant={concluida ? "outline" : "default"}
                    disabled={
                      bloqueada ||
                      concluida ||
                      etapa.tipo === "pratica" ||
                      etapa.tipo === "liberacao"
                    }
                    onClick={() => handleMarcarVisto(etapa.id)}
                  >
                    <ClipboardCheck className="mr-2 h-4 w-4" />
                    {concluida ? "Visto salvo" : "Marcar como visto"}
                  </Button>
                )}
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}

function TrilhaQuiz({ trilhaId, onSaved }: { trilhaId: string; onSaved: () => void }) {
  const [respostas, setRespostas] = useState<Record<string, number>>({});
  const [resultado, setResultado] = useState<{
    acertos: number;
    nota: number;
    aprovado: boolean;
  } | null>(null);

  function finalizarQuiz() {
    const acertos = QUIZ_MOCK.filter((q) => respostas[q.id] === q.correta).length;
    const nota = Math.round((acertos / QUIZ_MOCK.length) * 100);
    const aprovado = nota >= 80;
    const quiz = { acertos, total: QUIZ_MOCK.length, nota, aprovado };
    saveQuizResultado(trilhaId, quiz);
    setResultado({ acertos, nota, aprovado });
    onSaved();
  }

  return (
    <div className="mt-3 rounded-xl bg-muted/40 p-3">
      <div className="space-y-3">
        {QUIZ_MOCK.map((q, index) => (
          <div key={q.id}>
            <p className="text-xs font-bold">
              {index + 1}. {q.pergunta}
            </p>
            <div className="mt-2 space-y-2">
              {q.alternativas.map((alt, altIndex) => (
                <button
                  key={alt}
                  type="button"
                  onClick={() => setRespostas((current) => ({ ...current, [q.id]: altIndex }))}
                  className={`w-full rounded-lg border p-2 text-left text-xs ${respostas[q.id] === altIndex ? "border-primary bg-primary/10" : "border-border bg-background"}`}
                >
                  {alt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button
        className="mt-3 h-11 w-full rounded-xl font-bold"
        disabled={Object.keys(respostas).length < QUIZ_MOCK.length}
        onClick={finalizarQuiz}
      >
        Finalizar quiz
      </Button>
      {resultado && (
        <p
          className={`mt-3 rounded-lg p-3 text-xs font-bold ${resultado.aprovado ? "bg-success/20 text-success" : "bg-danger/15 text-danger"}`}
        >
          Nota final: {resultado.nota}% ({resultado.acertos}/{QUIZ_MOCK.length} acertos).{" "}
          {resultado.aprovado ? "Aprovado" : "Reprovado — mínimo de 80%."}
        </p>
      )}
    </div>
  );
}
