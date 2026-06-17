import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  Lock,
  PlayCircle,
  RotateCcw,
  Trophy,
} from "lucide-react";

import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { QUIZ_MOCK } from "@/data/mock/avaliacoes";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import { STATUS_LABEL, TRILHAS_MOCK } from "@/data/mock/treinamentos";
import type { StatusTrilhaEtapa, TrilhaEtapa } from "@/data/types";
import {
  CHECKLIST_PARTIDA_ITEMS,
  areEtapasTeoricasConcluidas,
  getProgressoTrilha,
  getStatusTrilha,
  getTrilhaProgress,
  loadChecklistPartida,
  markEtapaVista,
  saveQuizResultado,
  toggleChecklistPartida,
} from "@/lib/trilhasProgress";

export const Route = createFileRoute("/_app/trilhas/$trilhaId")({
  loader: ({ params }) => {
    const trilha = TRILHAS_MOCK.find((item) => item.id === params.trilhaId);
    if (!trilha) throw notFound();
    return { trilha };
  },
  component: TrilhaPage,
});

const statusStyle: Record<StatusTrilhaEtapa, string> = {
  bloqueada: "bg-muted text-muted-foreground",
  disponivel: "bg-primary/10 text-primary",
  "em-andamento": "bg-warning/20 text-foreground",
  concluida: "bg-success/15 text-success",
  "aguardando-avaliacao": "bg-warning/20 text-foreground",
  aprovada: "bg-success/15 text-success",
};

const tipoLabel: Record<TrilhaEtapa["tipo"], string> = {
  teorica: "Teórica",
  checklist: "Checklist",
  quiz: "Quiz",
  pratica: "Prática",
  liberacao: "Liberação",
};

const linksSecoesHaina: Record<string, Array<{ label: string; tab: string }>> = {
  "haina-fralda-baby": [
    { label: "Ver componentes da máquina", tab: "componentes" },
    { label: "Ver parâmetros básicos", tab: "parametros" },
  ],
  "alarmes-comuns": [{ label: "Ver alarmes", tab: "alarmes" }],
  seguranca: [{ label: "Ver pontos de segurança", tab: "seguranca" }],
  "checklist-partida": [{ label: "Ver checklist da máquina", tab: "checklist" }],
  "processo-fraldas": [{ label: "Ver defeitos comuns", tab: "defeitos" }],
};

function TrilhaPage() {
  const { trilha } = Route.useLoaderData();
  const maquina = MAQUINAS_MOCK.find((item) => item.id === trilha.maquinaId);
  const [, setRefreshKey] = useState(0);
  const progress = getTrilhaProgress(trilha.id);
  const progresso = getProgressoTrilha(trilha, trilha.etapas);
  const status = getStatusTrilha(trilha, trilha.etapas);
  const teoricasConcluidas = areEtapasTeoricasConcluidas(trilha.etapas, progress);
  const proxima = trilha.etapas.find((etapa) => progress.etapas[etapa.id] !== "concluida");

  function handleMarcarVisto(etapaId: string) {
    markEtapaVista(trilha.id, etapaId);
    setRefreshKey((key) => key + 1);
  }

  function getEtapaStatus(etapa: TrilhaEtapa): StatusTrilhaEtapa {
    if (progress.etapas[etapa.id] === "concluida")
      return etapa.tipo === "pratica" || etapa.tipo === "liberacao" ? "aprovada" : "concluida";
    if ((etapa.tipo === "pratica" || etapa.tipo === "liberacao") && teoricasConcluidas)
      return "aguardando-avaliacao";
    if (etapa.status === "bloqueada") return "bloqueada";
    if (etapa.id === proxima?.id) return "em-andamento";
    return "disponivel";
  }

  return (
    <div>
      <PageHeader title={trilha.titulo} subtitle={maquina?.nome ?? "Trilha de treinamento"} />
      <div className="space-y-4 px-4 py-3">
        <section className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="bg-primary p-4 text-primary-foreground">
            <p className="text-[11px] font-bold uppercase tracking-wide opacity-80">
              Jornada do operador
            </p>
            <h2 className="mt-1 text-lg font-extrabold leading-tight">{trilha.titulo}</h2>
            <p className="mt-1 text-sm opacity-90">Máquina: {maquina?.nome ?? trilha.maquinaId}</p>
          </div>
          <div className="space-y-3 p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-bold">
                {STATUS_LABEL[status]}
              </span>
              <span className="text-sm font-extrabold text-primary">{progresso}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: `${progresso}%` }} />
            </div>
            <div className="rounded-2xl bg-muted/50 p-3 text-xs leading-relaxed">
              <strong>Próxima ação:</strong>{" "}
              {teoricasConcluidas
                ? "Solicitar avaliação prática ao instrutor."
                : proxima
                  ? `Concluir ${proxima.titulo}.`
                  : "Trilha concluída."}
            </div>
          </div>
        </section>

        <section className="space-y-0 pl-2">
          {trilha.etapas.map((etapa) => {
            const visualStatus = getEtapaStatus(etapa);
            const bloqueada = visualStatus === "bloqueada";
            const concluida = progress.etapas[etapa.id] === "concluida";
            return (
              <article
                key={etapa.id}
                className="relative border-l-2 border-border pb-4 pl-5 last:pb-0"
              >
                <div
                  className={`absolute -left-[17px] grid h-8 w-8 place-items-center rounded-full border-4 border-background text-xs font-extrabold ${statusStyle[visualStatus]}`}
                >
                  {concluida ? <CheckCircle2 className="h-4 w-4" /> : etapa.ordem}
                </div>
                <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${statusStyle[visualStatus]}`}
                    >
                      {visualStatus.replaceAll("-", " ")}
                    </span>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold">
                      {tipoLabel[etapa.tipo]}
                    </span>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                      {etapa.obrigatoria ? "Obrigatória" : "Opcional"}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-extrabold">{etapa.titulo}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {etapa.descricao}
                  </p>
                  {maquina && linksSecoesHaina[etapa.id] && (
                    <div className="mt-3 grid gap-2">
                      {linksSecoesHaina[etapa.id].map((link) => (
                        <Button
                          key={link.tab}
                          asChild
                          variant="outline"
                          className="h-10 rounded-xl text-xs font-bold"
                        >
                          <Link
                            to="/maquinas/$maquinaId"
                            params={{ maquinaId: maquina.id }}
                            hash={link.tab}
                          >
                            {link.label}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  )}
                  {etapa.tipo === "checklist" ? (
                    <ChecklistPartida
                      trilhaId={trilha.id}
                      onChange={() => setRefreshKey((key) => key + 1)}
                    />
                  ) : etapa.tipo === "quiz" ? (
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
                      {bloqueada ? (
                        <Lock className="mr-2 h-4 w-4" />
                      ) : (
                        <PlayCircle className="mr-2 h-4 w-4" />
                      )}
                      {concluida
                        ? "Concluída"
                        : etapa.tipo === "pratica" || etapa.tipo === "liberacao"
                          ? "Ação do instrutor"
                          : "Marcar como visto"}
                    </Button>
                  )}
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}

function ChecklistPartida({ trilhaId, onChange }: { trilhaId: string; onChange: () => void }) {
  const [items, setItems] = useState(() => loadChecklistPartida(trilhaId));
  const done = CHECKLIST_PARTIDA_ITEMS.filter((item) => items[item]).length;
  const pct = Math.round((done / CHECKLIST_PARTIDA_ITEMS.length) * 100);
  return (
    <div className="mt-3 rounded-xl bg-muted/40 p-3">
      <div className="mb-3 flex items-center justify-between text-xs font-bold">
        <span>Checklist concluído</span>
        <span>{pct}%</span>
      </div>
      <div className="space-y-2">
        {CHECKLIST_PARTIDA_ITEMS.map((item) => (
          <label
            key={item}
            className="flex items-start gap-2 rounded-lg border border-border bg-background p-2 text-xs"
          >
            <input
              type="checkbox"
              checked={Boolean(items[item])}
              onChange={() => {
                setItems(toggleChecklistPartida(trilhaId, item));
                onChange();
              }}
              className="mt-0.5"
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}

function TrilhaQuiz({ trilhaId, onSaved }: { trilhaId: string; onSaved: () => void }) {
  const saved = getTrilhaProgress(trilhaId).quiz;
  const [respostas, setRespostas] = useState<Record<string, number>>({});
  const [resultado, setResultado] = useState(saved ?? null);

  function finalizarQuiz() {
    const acertos = QUIZ_MOCK.filter((q) => respostas[q.id] === q.correta).length;
    const nota = Math.round((acertos / QUIZ_MOCK.length) * 100);
    const quiz = { acertos, total: QUIZ_MOCK.length, nota, aprovado: nota >= 80 };
    saveQuizResultado(trilhaId, quiz);
    setResultado(quiz);
    onSaved();
  }

  if (resultado)
    return (
      <div
        className={`mt-3 rounded-2xl p-4 ${resultado.aprovado ? "bg-success/15" : "bg-danger/10"}`}
      >
        <div className="flex items-center gap-2 font-extrabold">
          <Trophy className="h-5 w-5" />
          {resultado.aprovado ? "Aprovado no quiz" : "Reprovado no quiz"}
        </div>
        <p className="mt-2 text-sm font-bold">
          {resultado.acertos}/{resultado.total} acertos · Nota {resultado.nota}%
        </p>
        {!resultado.aprovado && (
          <div className="mt-3 rounded-xl bg-background/70 p-3 text-xs">
            <p className="font-bold">Revise antes de refazer:</p>
            <ul className="mt-1 list-disc pl-4">
              <li>Ciclo da máquina</li>
              <li>Segurança</li>
              <li>Checklist de partida</li>
              <li>Alarmes comuns</li>
            </ul>
          </div>
        )}
        <Button
          className="mt-3 h-10 w-full rounded-xl"
          variant="outline"
          onClick={() => {
            setResultado(null);
            setRespostas({});
          }}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Refazer quiz
        </Button>
      </div>
    );

  return (
    <div className="mt-3 rounded-xl bg-muted/40 p-3">
      <div className="mb-3 flex items-start gap-2 rounded-xl bg-warning/15 p-2 text-xs">
        <AlertTriangle className="h-4 w-4 shrink-0" />
        Aprovação mínima: 80%.
      </div>
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
        <ClipboardCheck className="mr-2 h-4 w-4" />
        Finalizar quiz
      </Button>
    </div>
  );
}
