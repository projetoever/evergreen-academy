import { Link, createFileRoute, Navigate } from "@tanstack/react-router";
import { usePerfil } from "@/lib/perfilAtual";
import { PageHeader } from "@/components/common/PageHeader";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import { Button } from "@/components/ui/button";
import { resetDemoData } from "@/lib/trilhasProgress";
import { AULAS_MOCK } from "@/data/mock/aulas";
import { PERFIS_MOCK, PAPEL_LABEL } from "@/data/mock/perfis";
import { BIBLIOTECA_MOCK } from "@/data/mock/biblioteca";
import { Factory, GraduationCap, RotateCcw, Table2, Users } from "lucide-react";

export const Route = createFileRoute("/_app/gestao")({
  component: GestaoPage,
});

function GestaoPage() {
  const { usuario } = usePerfil();
  if (usuario.papel !== "admin") return <Navigate to="/" replace />;

  return (
    <div>
      <PageHeader title="Gestão" subtitle="Conteúdo e usuários (mock)" />

      <section className="mx-4 mt-3 rounded-2xl border border-border bg-card p-4">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
            <Table2 className="h-4 w-4" />
          </div>
          <p className="text-sm font-bold">Matriz de competência</p>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Acompanhe status, nível e próxima ação por funcionário.
        </p>
        <Button asChild className="mt-3 h-10 w-full rounded-xl">
          <Link to="/matriz-competencia">Abrir matriz</Link>
        </Button>
      </section>

      <section className="mx-4 mt-3 rounded-2xl border border-danger/30 bg-danger/10 p-4">
        <div className="flex items-center gap-2">
          <RotateCcw className="h-4 w-4" />
          <p className="text-sm font-bold">Resetar progresso de demonstração</p>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Limpa dados locais de trilhas, quiz, checklist e instrutor.
        </p>
        <Button
          variant="destructive"
          className="mt-3 h-10 w-full rounded-xl"
          onClick={() => {
            if (window.confirm("Resetar progresso de demonstração?")) {
              resetDemoData();
              window.location.reload();
            }
          }}
        >
          Resetar progresso de demonstração
        </Button>
      </section>

      <section className="mx-4 mt-3 rounded-2xl border border-border bg-card p-4">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
            <Factory className="h-4 w-4" />
          </div>
          <p className="text-sm font-bold">Conteúdo por máquina</p>
        </div>
        <div className="mt-3 space-y-3">
          {MAQUINAS_MOCK.map((m) => {
            const documentos =
              BIBLIOTECA_MOCK.filter((d) => d.maquinaId === m.id).length || m.documentos.length;
            const checklists = m.checklist.length;
            const statusConteudo =
              m.id === "mq-haina-absorvente"
                ? "técnico disponível · trilha disponível"
                : m.id === "mq-lencos"
                  ? "técnico disponível · trilha disponível"
                  : m.id === "mq-haina-fralda"
                    ? "pendente revisão"
                    : m.statusTreinamento === "disponivel"
                      ? "mockado"
                      : "mockado";
            return (
              <article key={m.id} className="rounded-xl border border-border bg-background p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-extrabold">{m.nome}</p>
                  <span className="rounded-full bg-warning/20 px-2 py-0.5 text-[10px] font-bold uppercase">
                    {statusConteudo}
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-4 gap-2 text-center">
                  <MiniStat label="módulos" value={m.modulos.length} />
                  <MiniStat label="docs" value={documentos} />
                  <MiniStat label="checks" value={checklists} />
                  <MiniStat label="segurança" value={m.pontosSeguranca.length} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Stat icon={<Factory className="h-4 w-4" />} titulo="Máquinas" total={MAQUINAS_MOCK.length}>
        <ul className="mt-2 space-y-1 text-sm">
          {MAQUINAS_MOCK.map((m) => (
            <li
              key={m.id}
              className="flex items-center justify-between border-b border-border/60 py-1.5 last:border-0"
            >
              <span className="truncate">{m.nome}</span>
              <span className="text-[10px] text-muted-foreground">{m.qrCode}</span>
            </li>
          ))}
        </ul>
      </Stat>

      <Stat icon={<GraduationCap className="h-4 w-4" />} titulo="Aulas" total={AULAS_MOCK.length}>
        <p className="mt-1 text-xs text-muted-foreground">
          {AULAS_MOCK.length} aulas de conceitos básicos cadastradas.
        </p>
      </Stat>

      <Stat icon={<Users className="h-4 w-4" />} titulo="Usuários" total={PERFIS_MOCK.length}>
        <ul className="mt-2 space-y-1 text-sm">
          {PERFIS_MOCK.map((p) => (
            <li
              key={p.id}
              className="flex items-center justify-between border-b border-border/60 py-1.5 last:border-0"
            >
              <span className="truncate">{p.nome}</span>
              <span className="text-[10px] text-muted-foreground">{PAPEL_LABEL[p.papel]}</span>
            </li>
          ))}
        </ul>
      </Stat>
    </div>
  );
}

function Stat({
  icon,
  titulo,
  total,
  children,
}: {
  icon: React.ReactNode;
  titulo: string;
  total: number;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-4 mt-3 rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <p className="text-sm font-bold">{titulo}</p>
        </div>
        <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-bold">{total}</span>
      </div>
      {children}
    </section>
  );
}

function MiniStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg bg-muted/60 p-2">
      <p className="text-sm font-extrabold">{value}</p>
      <p className="text-[9px] uppercase text-muted-foreground">{label}</p>
    </div>
  );
}
