import { createFileRoute, Link } from "@tanstack/react-router";
import { usePerfil } from "@/lib/perfilAtual";
import { PAPEL_LABEL } from "@/data/mock/perfis";
import { TRILHAS_MOCK } from "@/data/mock/treinamentos";
import { getProgressoTrilha, getStatusTrilha } from "@/lib/trilhasProgress";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import {
  GraduationCap,
  Factory,
  Workflow,
  ListChecks,
  Library,
  ClipboardCheck,
  ShieldCheck,
  Settings2,
  PlayCircle,
  Table2,
} from "lucide-react";

export const Route = createFileRoute("/_app/")({
  component: HomePage,
});

const cards = [
  {
    to: "/aulas",
    titulo: "Conceitos básicos",
    desc: "Aulas curtas e visuais",
    icon: GraduationCap,
    cor: "bg-primary text-primary-foreground",
  },
  {
    to: "/processos",
    titulo: "Processos",
    desc: "Como o produto é feito",
    icon: Workflow,
    cor: "bg-accent text-accent-foreground",
  },
  {
    to: "/maquinas",
    titulo: "Máquinas",
    desc: "Treino por equipamento",
    icon: Factory,
    cor: "bg-chart-3/20 text-foreground",
  },
  {
    to: "/meus-treinamentos",
    titulo: "Meus treinamentos",
    desc: "Suas trilhas",
    icon: ListChecks,
    cor: "bg-secondary text-secondary-foreground",
  },
  {
    to: "/biblioteca",
    titulo: "Biblioteca técnica",
    desc: "Manuais e vídeos",
    icon: Library,
    cor: "bg-warning/30 text-foreground",
  },
  {
    to: "/avaliacoes",
    titulo: "Avaliações",
    desc: "Quiz e prática",
    icon: ClipboardCheck,
    cor: "bg-success/20 text-foreground",
  },
] as const;

function HomePage() {
  const { usuario } = usePerfil();
  const emAndamento = TRILHAS_MOCK.find((t) => getStatusTrilha(t, t.etapas) === "em-andamento");
  const maquinaEmAndamento = emAndamento
    ? MAQUINAS_MOCK.find((m) => m.id === emAndamento.maquinaId)
    : undefined;
  const trilhasIniciaisDisponiveis = TRILHAS_MOCK.filter(
    (t) =>
      ["operador-inicial-haina-absorvente", "operador-inicial-lencos-umedecidos"].includes(t.id) &&
      usuario.maquinasLiberadas.includes(t.maquinaId) &&
      getStatusTrilha(t, t.etapas) === "nao-iniciado",
  );
  const trilhaParaIniciar = trilhasIniciaisDisponiveis[0];
  const maquinaParaIniciar = trilhaParaIniciar
    ? MAQUINAS_MOCK.find((m) => m.id === trilhaParaIniciar.maquinaId)
    : undefined;

  const isInstrutor = ["instrutor", "lider", "admin"].includes(usuario.papel);
  const isAdmin = usuario.papel === "admin";
  const isLider = ["lider", "admin"].includes(usuario.papel);

  return (
    <div className="pb-4">
      {/* Saudação */}
      <section className="bg-gradient-to-br from-primary to-primary/80 px-5 pt-5 pb-7 text-primary-foreground">
        <p className="text-xs opacity-80">
          {PAPEL_LABEL[usuario.papel]} • {usuario.setor}
        </p>
        <h1 className="mt-1 text-2xl font-bold leading-tight">
          Olá, {usuario.nome.split(" ")[0]} 👋
        </h1>
        <p className="mt-1 text-sm opacity-90">Pronto para aprender hoje?</p>
      </section>

      {/* Continuar treinamento */}
      {maquinaEmAndamento && emAndamento && (
        <div className="-mt-5 px-4">
          <Link
            to="/trilhas/$trilhaId"
            params={{ trilhaId: emAndamento.id }}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm transition active:scale-[0.99]"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/20 text-accent-foreground">
              <PlayCircle className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
                Continuar treinamento
              </p>
              <p className="truncate text-sm font-bold text-foreground">{emAndamento.titulo}</p>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${getProgressoTrilha(emAndamento, emAndamento.etapas)}%` }}
                />
              </div>
            </div>
          </Link>
        </div>
      )}

      {trilhaParaIniciar && !emAndamento && (
        <div className="-mt-5 px-4">
          <Link
            to="/trilhas/$trilhaId"
            params={{ trilhaId: trilhaParaIniciar.id }}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm transition active:scale-[0.99]"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/20 text-accent-foreground">
              <PlayCircle className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
                Iniciar treinamento
              </p>
              <p className="truncate text-sm font-bold text-foreground">
                {trilhaParaIniciar.titulo}
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                {maquinaParaIniciar?.nome ?? "Trilha disponível"}
              </p>
            </div>
          </Link>
        </div>
      )}

      {/* Líder: visão de equipe */}
      {isLider && (
        <div className="mt-4 px-4">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">Equipe</p>
            <div className="mt-1 grid grid-cols-3 gap-2 text-center">
              <Stat label="Em treino" value="3" />
              <Stat label="Aguardando" value="1" />
              <Stat label="Aprovados" value="12" />
            </div>
          </div>
        </div>
      )}

      {/* Grid de cards */}
      <div className="mt-5 grid grid-cols-2 gap-3 px-4">
        {cards.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="group flex h-32 flex-col justify-between rounded-2xl border border-border bg-card p-3 shadow-sm transition active:scale-[0.98]"
          >
            <span className={`grid h-10 w-10 place-items-center rounded-xl ${c.cor}`}>
              <c.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold leading-tight">{c.titulo}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{c.desc}</p>
            </div>
          </Link>
        ))}

        {isInstrutor && (
          <Link
            to="/instrutor"
            className="flex h-32 flex-col justify-between rounded-2xl border border-primary/30 bg-primary/5 p-3 shadow-sm transition active:scale-[0.98]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold leading-tight">Área do instrutor</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">Avaliar e liberar</p>
            </div>
          </Link>
        )}

        {isLider && (
          <Link
            to="/matriz-competencia"
            className="flex h-32 flex-col justify-between rounded-2xl border border-success/30 bg-success/10 p-3 shadow-sm transition active:scale-[0.98]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-success text-success-foreground">
              <Table2 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold leading-tight">Matriz de competência</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">Status por operador</p>
            </div>
          </Link>
        )}

        {isAdmin && (
          <Link
            to="/gestao"
            className="flex h-32 flex-col justify-between rounded-2xl border border-warning/40 bg-warning/10 p-3 shadow-sm transition active:scale-[0.98]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-warning text-warning-foreground">
              <Settings2 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold leading-tight">Gestão</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">Conteúdo e usuários</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-lg font-bold text-primary">{value}</p>
      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p>
    </div>
  );
}
