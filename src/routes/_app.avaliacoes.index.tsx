import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { QUIZ_MOCK, HISTORICO_MOCK } from "@/data/mock/avaliacoes";
import { PageHeader } from "@/components/common/PageHeader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, ClipboardCheck, Award, BookOpen, History } from "lucide-react";

export const Route = createFileRoute("/_app/avaliacoes/")({
  component: AvaliacoesPage,
});

function AvaliacoesPage() {
  return (
    <div>
      <PageHeader title="Avaliações" subtitle="Teste seu conhecimento" />
      <Tabs defaultValue="quiz" className="mt-2">
        <div className="px-4">
          <TabsList className="grid w-full grid-cols-4 rounded-xl bg-muted p-1">
            <TabsTrigger value="quiz" className="text-[11px]"><BookOpen className="mr-1 h-3.5 w-3.5" />Quiz</TabsTrigger>
            <TabsTrigger value="pratica" className="text-[11px]"><Award className="mr-1 h-3.5 w-3.5" />Prática</TabsTrigger>
            <TabsTrigger value="checklist" className="text-[11px]"><ClipboardCheck className="mr-1 h-3.5 w-3.5" /></TabsTrigger>
            <TabsTrigger value="historico" className="text-[11px]"><History className="mr-1 h-3.5 w-3.5" /></TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="quiz" className="mt-3 px-4">
          <Quiz />
        </TabsContent>

        <TabsContent value="pratica" className="mt-3 px-4">
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-sm font-bold">Avaliação prática</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Realizada pelo instrutor diretamente na máquina. Acompanhe o status em "Meus treinamentos".
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <PraticaItem texto="Identificar EPIs corretos" />
              <PraticaItem texto="Executar checklist de partida" />
              <PraticaItem texto="Demonstrar troca de receita" />
              <PraticaItem texto="Responder a um alarme simulado" />
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="checklist" className="mt-3 px-4">
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-sm font-bold">Checklist de liberação</p>
            <p className="mt-1 text-xs text-muted-foreground">
              O instrutor confere e libera o operador para trabalhar sozinho.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <PraticaItem texto="Concluiu todos os módulos teóricos" />
              <PraticaItem texto="Passou na avaliação prática" />
              <PraticaItem texto="Assinou termo de liberação" />
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="historico" className="mt-3 px-4">
          <ul className="space-y-2">
            {HISTORICO_MOCK.map((h) => (
              <li key={h.id} className="rounded-2xl border border-border bg-card p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-bold">{h.titulo}</p>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      h.resultado === "Aprovado"
                        ? "bg-success/20 text-success"
                        : "bg-danger/15 text-danger"
                    }`}
                  >
                    {h.resultado}
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  {h.data} • nota {h.nota}
                </p>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function PraticaItem({ texto }: { texto: string }) {
  return (
    <li className="flex items-center gap-2">
      <Check className="h-4 w-4 text-success" />
      <span>{texto}</span>
    </li>
  );
}

function Quiz() {
  const [idx, setIdx] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [respondeu, setRespondeu] = useState(false);
  const q = QUIZ_MOCK[idx];
  const ultimo = idx === QUIZ_MOCK.length - 1;

  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
        Pergunta {idx + 1} de {QUIZ_MOCK.length}
      </p>
      <p className="mt-1 text-base font-bold leading-snug">{q.pergunta}</p>
      <ul className="mt-3 space-y-2">
        {q.alternativas.map((alt, i) => {
          const correta = i === q.correta;
          const selecionada = i === escolha;
          let style = "border-border bg-background";
          if (respondeu) {
            if (correta) style = "border-success bg-success/10";
            else if (selecionada) style = "border-danger bg-danger/10";
          } else if (selecionada) {
            style = "border-primary bg-primary/5";
          }
          return (
            <li key={i}>
              <button
                type="button"
                disabled={respondeu}
                onClick={() => setEscolha(i)}
                className={`flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left text-sm transition ${style}`}
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-muted text-xs font-bold">
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{alt}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-4 flex gap-2">
        {!respondeu ? (
          <Button
            className="h-12 flex-1 rounded-xl font-bold"
            disabled={escolha === null}
            onClick={() => setRespondeu(true)}
          >
            Responder
          </Button>
        ) : (
          <Button
            className="h-12 flex-1 rounded-xl font-bold"
            onClick={() => {
              if (ultimo) {
                setIdx(0);
              } else {
                setIdx(idx + 1);
              }
              setEscolha(null);
              setRespondeu(false);
            }}
          >
            {ultimo ? "Recomeçar" : "Próxima"}
          </Button>
        )}
      </div>
    </div>
  );
}
