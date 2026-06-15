import { createFileRoute, Link } from "@tanstack/react-router";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import { PageHeader } from "@/components/common/PageHeader";
import { QrCode, Users, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/_app/maquinas/")({
  component: MaquinasPage,
});

const statusInfo = {
  disponivel: { label: "Treino disponível", cor: "bg-success/20 text-success" },
  "em-desenvolvimento": { label: "Em desenvolvimento", cor: "bg-warning/30 text-foreground" },
  indisponivel: { label: "Indisponível", cor: "bg-muted text-muted-foreground" },
} as const;

function MaquinasPage() {
  return (
    <div>
      <PageHeader title="Máquinas" subtitle="Treino, checklist, segurança e mais" />
      <div className="space-y-3 px-4 py-3">
        {MAQUINAS_MOCK.map((m) => {
          const s = statusInfo[m.statusTreinamento];
          return (
            <Link
              key={m.id}
              to="/maquinas/$maquinaId"
              params={{ maquinaId: m.id }}
              className="block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition active:scale-[0.99]"
            >
              <div className="relative h-32 w-full overflow-hidden bg-muted">
                <img
                  src={m.foto}
                  alt={m.nome}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-[10px] font-semibold text-foreground backdrop-blur">
                  <QrCode className="h-3 w-3" />
                  {m.qrCode}
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">{m.nome}</p>
                    <p className="truncate text-[11px] text-muted-foreground">
                      {m.marca} • {m.produto}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${s.cor}`}
                  >
                    {s.label}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {m.operadoresHabilitados} habilitados
                  </span>
                  <span>•</span>
                  <span>{m.setor}</span>
                </div>
                <div className="mt-3 grid grid-cols-5 gap-1.5 text-[10px] font-semibold">
                  <Pill>Treino</Pill>
                  <Pill>Checklist</Pill>
                  <Pill>Alarmes</Pill>
                  <Pill highlight>Segurança</Pill>
                  <Pill>Docs</Pill>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Pill({ children, highlight }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <span
      className={`truncate rounded-md px-1.5 py-1 text-center ${
        highlight ? "bg-danger/10 text-danger" : "bg-muted text-muted-foreground"
      }`}
    >
      {children}
    </span>
  );
}

// Keep import to avoid unused, used elsewhere
export const _icon = CheckCircle2;
