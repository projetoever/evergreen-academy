import { createFileRoute, notFound } from "@tanstack/react-router";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import { PageHeader } from "@/components/common/PageHeader";
import { SafetyCallout } from "@/components/common/SafetyCallout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  QrCode,
  PlayCircle,
  ClipboardCheck,
  AlertOctagon,
  ShieldAlert,
  FileText,
  Users,
  Info,
} from "lucide-react";

export const Route = createFileRoute("/_app/maquinas/$maquinaId")({
  loader: ({ params }) => {
    const maquina = MAQUINAS_MOCK.find((m) => m.id === params.maquinaId);
    if (!maquina) throw notFound();
    return { maquina };
  },
  component: MaquinaDetalhe,
  notFoundComponent: () => (
    <div className="p-6 text-center text-sm text-muted-foreground">Máquina não encontrada.</div>
  ),
});

function MaquinaDetalhe() {
  const { maquina } = Route.useLoaderData() as { maquina: import("@/data/types").Maquina };

  return (
    <div className="pb-8">
      <PageHeader title={maquina.nome} subtitle={`${maquina.marca} • ${maquina.produto}`} back="/maquinas" />

      {/* Foto + QR */}
      <div className="relative mx-4 mt-2 overflow-hidden rounded-2xl">
        <img
          src={maquina.foto}
          alt={maquina.nome}
          width={1024}
          height={640}
          className="h-44 w-full object-cover"
        />
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-background/95 px-3 py-1.5 text-xs font-bold shadow">
          <QrCode className="h-4 w-4 text-primary" />
          {maquina.qrCode}
        </div>
      </div>

      {/* Dados */}
      <div className="mx-4 mt-3 grid grid-cols-3 gap-2">
        <DataPill label="Setor" value={maquina.setor} />
        <DataPill label="Operadores" value={`${maquina.operadoresHabilitados}`} icon={<Users className="h-3.5 w-3.5" />} />
        <DataPill label="Módulos" value={`${maquina.modulos.length}`} />
      </div>

      {/* QR info */}
      <div className="mx-4 mt-3 flex items-start gap-2 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
        <p className="text-[11px] leading-relaxed text-foreground">
          Cada máquina tem um QR fixo. Em breve, escanear <b>{maquina.qrCode}</b> abrirá esta tela direto no celular.
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="treino" className="mt-4">
        <div className="px-4">
          <TabsList className="grid w-full grid-cols-5 rounded-xl bg-muted p-1">
            <TabsTrigger value="treino" className="text-[11px]"><PlayCircle className="mr-1 h-3.5 w-3.5" />Treino</TabsTrigger>
            <TabsTrigger value="checklist" className="text-[11px]"><ClipboardCheck className="mr-1 h-3.5 w-3.5" /></TabsTrigger>
            <TabsTrigger value="alarmes" className="text-[11px]"><AlertOctagon className="mr-1 h-3.5 w-3.5" /></TabsTrigger>
            <TabsTrigger value="seguranca" className="text-[11px] data-[state=active]:text-danger"><ShieldAlert className="mr-1 h-3.5 w-3.5" /></TabsTrigger>
            <TabsTrigger value="docs" className="text-[11px]"><FileText className="mr-1 h-3.5 w-3.5" /></TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="treino" className="mt-3 px-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Módulos</p>
          <ul className="mt-2 space-y-2">
            {maquina.modulos.map((m, i) => (
              <li key={m} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <span className="text-sm font-medium">{m}</span>
              </li>
            ))}
          </ul>
          <Button className="mt-4 h-12 w-full rounded-xl text-sm font-bold">
            <PlayCircle className="mr-2 h-5 w-5" />
            Iniciar treinamento
          </Button>
        </TabsContent>

        <TabsContent value="checklist" className="mt-3 px-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Checklist de partida
          </p>
          <ul className="mt-2 space-y-2">
            {maquina.checklist.map((c) => (
              <li key={c.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                <span className="h-5 w-5 shrink-0 rounded border-2 border-border" />
                <span className="text-sm">{c.texto}</span>
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="alarmes" className="mt-3 px-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Alarmes comuns
          </p>
          <ul className="mt-2 space-y-2">
            {maquina.alarmes.map((a) => (
              <li key={a.codigo} className="rounded-xl border border-border bg-card p-3">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-danger/10 px-2 py-0.5 text-[11px] font-bold text-danger">
                    {a.codigo}
                  </span>
                  <p className="text-sm font-semibold">{a.descricao}</p>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">→ {a.acao}</p>
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="seguranca" className="mt-3 px-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-danger" />
            <p className="text-sm font-bold text-danger">Pontos críticos de segurança</p>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Sempre siga os procedimentos. Em dúvida, pare e chame o líder.
          </p>
          <div className="mt-3 space-y-3">
            {maquina.pontosSeguranca.map((p) => (
              <div key={p.titulo} className="rounded-2xl border border-danger/30 bg-danger/5 p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold text-foreground">{p.titulo}</p>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                      p.nivel === "alto"
                        ? "bg-danger text-danger-foreground"
                        : p.nivel === "medio"
                          ? "bg-warning text-warning-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {p.nivel}
                  </span>
                </div>
                <p className="mt-1 text-xs text-foreground">{p.risco}</p>
                <div className="mt-2">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">EPI</p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {p.epi.map((e) => (
                      <span key={e} className="rounded-md bg-card px-2 py-0.5 text-[11px] font-medium">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
                <SafetyCallout title="Procedimento" variant="danger">
                  {p.procedimento}
                </SafetyCallout>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="docs" className="mt-3 px-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Documentos técnicos
          </p>
          <ul className="mt-2 space-y-2">
            {maquina.documentos.map((d) => (
              <li key={d.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                <FileText className="h-5 w-5 shrink-0 text-primary" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{d.titulo}</p>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{d.tipo}</p>
                </div>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function DataPill({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-2 text-center">
      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-0.5 inline-flex items-center justify-center gap-1 text-sm font-bold">
        {icon}
        {value}
      </p>
    </div>
  );
}
