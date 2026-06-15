import { createFileRoute, Navigate } from "@tanstack/react-router";
import { usePerfil } from "@/lib/perfilAtual";
import { PageHeader } from "@/components/common/PageHeader";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import { AULAS_MOCK } from "@/data/mock/aulas";
import { PERFIS_MOCK, PAPEL_LABEL } from "@/data/mock/perfis";
import { Factory, GraduationCap, Users } from "lucide-react";

export const Route = createFileRoute("/_app/gestao")({
  component: GestaoPage,
});

function GestaoPage() {
  const { usuario } = usePerfil();
  if (usuario.papel !== "admin") return <Navigate to="/" replace />;

  return (
    <div>
      <PageHeader title="Gestão" subtitle="Conteúdo e usuários (mock)" />

      <Stat icon={<Factory className="h-4 w-4" />} titulo="Máquinas" total={MAQUINAS_MOCK.length}>
        <ul className="mt-2 space-y-1 text-sm">
          {MAQUINAS_MOCK.map((m) => (
            <li key={m.id} className="flex items-center justify-between border-b border-border/60 py-1.5 last:border-0">
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
            <li key={p.id} className="flex items-center justify-between border-b border-border/60 py-1.5 last:border-0">
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
