import { createFileRoute } from "@tanstack/react-router";
import { usePerfil } from "@/lib/perfilAtual";
import { PAPEL_LABEL } from "@/data/mock/perfis";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import { TRILHAS_MOCK } from "@/data/mock/treinamentos";
import { PageHeader } from "@/components/common/PageHeader";
import { Award, Briefcase, MapPin } from "lucide-react";

export const Route = createFileRoute("/_app/perfil")({
  component: PerfilPage,
});

function PerfilPage() {
  const { usuario } = usePerfil();
  const liberadas = MAQUINAS_MOCK.filter((m) => usuario.maquinasLiberadas.includes(m.id));
  const pendentes = TRILHAS_MOCK.filter((t) => t.status !== "aprovado");
  const totalProgresso = Math.round(
    TRILHAS_MOCK.reduce((acc, t) => acc + t.progresso, 0) / Math.max(TRILHAS_MOCK.length, 1),
  );

  return (
    <div>
      <PageHeader title="Perfil" />

      {/* Cartão de identidade */}
      <div className="mx-4 mt-2 rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-5 text-primary-foreground shadow-sm">
        <div className="flex items-center gap-3">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-primary-foreground/15 text-xl font-bold">
            {usuario.iniciais}
          </div>
          <div className="min-w-0">
            <p className="truncate text-lg font-bold leading-tight">{usuario.nome}</p>
            <p className="truncate text-xs opacity-90">{PAPEL_LABEL[usuario.papel]}</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <Info icon={<Briefcase className="h-3.5 w-3.5" />} label="Cargo" value={usuario.cargo} />
          <Info icon={<MapPin className="h-3.5 w-3.5" />} label="Setor" value={usuario.setor} />
        </div>
      </div>

      {/* Progresso geral */}
      <section className="mx-4 mt-3 rounded-2xl border border-border bg-card p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold">Progresso geral</p>
          <span className="text-lg font-bold text-primary">{totalProgresso}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-primary" style={{ width: `${totalProgresso}%` }} />
        </div>
      </section>

      {/* Máquinas liberadas */}
      <section className="mx-4 mt-3 rounded-2xl border border-border bg-card p-4">
        <p className="text-sm font-bold">Máquinas liberadas</p>
        {liberadas.length === 0 ? (
          <p className="mt-2 text-xs text-muted-foreground">Nenhuma máquina liberada ainda.</p>
        ) : (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {liberadas.map((m) => (
              <span
                key={m.id}
                className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2.5 py-1 text-[11px] font-semibold text-success"
              >
                <Award className="h-3 w-3" />
                {m.nome}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* Treinamentos pendentes */}
      <section className="mx-4 mt-3 rounded-2xl border border-border bg-card p-4">
        <p className="text-sm font-bold">Treinamentos pendentes</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {pendentes.length} em andamento ou aguardando
        </p>
      </section>

      {/* Certificações */}
      <section className="mx-4 mt-3 rounded-2xl border border-border bg-card p-4">
        <p className="text-sm font-bold">Certificações</p>
        <div className="mt-2 space-y-2 text-sm">
          <CertItem titulo="NR-12 — Segurança em máquinas" data="Vigente até 12/2026" />
          <CertItem titulo="NR-6 — EPI" data="Vigente até 03/2027" />
        </div>
      </section>
    </div>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl bg-primary-foreground/10 p-2">
      <p className="flex items-center gap-1 text-[10px] uppercase tracking-wide opacity-80">
        {icon}
        {label}
      </p>
      <p className="mt-0.5 truncate text-xs font-semibold">{value}</p>
    </div>
  );
}

function CertItem({ titulo, data }: { titulo: string; data: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border p-2">
      <Award className="h-4 w-4 shrink-0 text-success" />
      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{titulo}</p>
        <p className="truncate text-[10px] text-muted-foreground">{data}</p>
      </div>
    </div>
  );
}
