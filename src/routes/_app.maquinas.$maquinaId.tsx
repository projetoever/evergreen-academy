import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";
import { PageHeader } from "@/components/common/PageHeader";
import { SafetyCallout } from "@/components/common/SafetyCallout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  AlertOctagon,
  BookOpen,
  Boxes,
  ClipboardCheck,
  FileText,
  Gauge,
  HelpCircle,
  ImagePlus,
  Info,
  MonitorSmartphone,
  PlayCircle,
  QrCode,
  ShieldAlert,
  Users,
  Wrench,
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

const tabs = [
  ["visao", "Visão"],
  ["componentes", "Componentes"],
  ["parametros", "Parâmetros"],
  ["defeitos", "Defeitos"],
  ["ihm", "IHM"],
  ["treino", "Treino"],
  ["checklist", "Checklist"],
  ["alarmes", "Alarmes"],
  ["seguranca", "Segurança"],
  ["docs", "Docs"],
] as const;

function MaquinaDetalhe() {
  const { maquina } = Route.useLoaderData() as { maquina: import("@/data/types").Maquina };

  return (
    <div className="pb-8">
      <PageHeader
        title={maquina.nome}
        subtitle={`${maquina.marca} • ${maquina.produto}`}
        back="/maquinas"
      />

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

      <div className="mx-4 mt-3 grid grid-cols-3 gap-2">
        <DataPill label="Complexidade" value={maquina.nivelComplexidade ?? "básico"} />
        <DataPill
          label="Operadores"
          value={`${maquina.operadoresHabilitados}`}
          icon={<Users className="h-3.5 w-3.5" />}
        />
        <DataPill
          label="Tempo"
          value={maquina.tempoEstimadoTreinamento ?? `${maquina.modulos.length} módulos`}
        />
      </div>

      <div className="mx-4 mt-3 flex items-start gap-2 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
        <p className="text-[11px] leading-relaxed text-foreground">
          Conteúdo mockado para treinamento. Em qualquer dúvida, pare em condição segura e chame
          instrutor ou liderança.
        </p>
      </div>

      <Tabs defaultValue="visao" className="mt-4">
        <div className="overflow-x-auto px-4 pb-1">
          <TabsList className="inline-flex h-auto min-w-max rounded-xl bg-muted p-1">
            {tabs.map(([value, label]) => (
              <TabsTrigger key={value} value={value} className="text-[11px]">
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="visao" className="mt-3 space-y-3 px-4">
          <InfoCard title="Descrição operacional" icon={<BookOpen className="h-4 w-4" />}>
            {maquina.descricaoOperacional}
          </InfoCard>
          <InfoCard title="Objetivo do treinamento" icon={<PlayCircle className="h-4 w-4" />}>
            {maquina.objetivoTreinamento}
          </InfoCard>
          <Section title="Materiais de entrada" items={maquina.materiaisEntrada} />
          <InfoCard title="Produto de saída" icon={<Boxes className="h-4 w-4" />}>
            {maquina.produtoSaida}
          </InfoCard>
        </TabsContent>

        <TabsContent value="componentes" className="mt-3 space-y-3 px-4">
          <MediaPlaceholder texto="Espaço para foto real da máquina e vídeo curto do caminho dos materiais." />
          <Section title="Componentes principais" items={maquina.componentesPrincipais} numbered />
        </TabsContent>

        <TabsContent value="parametros" className="mt-3 space-y-2 px-4">
          {maquina.parametrosBasicos?.map((p) => (
            <article key={p.nome} className="rounded-2xl border border-border bg-card p-3">
              <div className="flex gap-2">
                <Gauge className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-bold">{p.nome}</h3>
              </div>
              <p className="mt-1 text-xs">
                <b>Referência:</b> {p.valorReferencia}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{p.cuidado}</p>
            </article>
          ))}
        </TabsContent>

        <TabsContent value="defeitos" className="mt-3 space-y-3 px-4">
          <SafetyCallout title="Regra de segurança" variant="danger">
            O operador não deve burlar proteções, colocar a mão em partes móveis ou fazer
            intervenção técnica sem autorização.
          </SafetyCallout>
          <MediaPlaceholder texto="Espaço para foto real do defeito, vídeo curto do procedimento e manual técnico PDF." />
          {maquina.defeitosProduto?.map((d) => (
            <article key={d.defeito} className="rounded-2xl border border-border bg-card p-4">
              <h3 className="text-sm font-extrabold text-danger">{d.defeito}</h3>
              <DefeitoLinha label="Possível causa" text={d.possivelCausa} />
              <DefeitoLinha label="Verificar primeiro" text={d.verificacaoInicial} />
              <DefeitoLinha label="Chamar instrutor" text={d.quandoChamarInstrutor} />
              <DefeitoLinha label="Chamar manutenção" text={d.quandoChamarManutencao} />
            </article>
          ))}
        </TabsContent>

        <TabsContent value="ihm" className="mt-3 space-y-3 px-4">
          <MediaPlaceholder texto="Espaço para print da tela da IHM e vídeo curto do procedimento de leitura." />
          {maquina.pontosIHM?.map((p) => (
            <article key={p.titulo} className="rounded-2xl border border-border bg-card p-3">
              <div className="flex gap-2">
                <MonitorSmartphone className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-bold">{p.titulo}</h3>
              </div>
              <p className="mt-1 text-xs">{p.objetivo}</p>
              <p className="mt-1 text-xs font-semibold text-muted-foreground">{p.observacao}</p>
            </article>
          ))}
        </TabsContent>

        <TabsContent value="treino" className="mt-3 space-y-3 px-4">
          <Section title="Módulos" items={maquina.modulos} numbered />
          <TreinoStatus maquina={maquina} />
          {maquina.perguntasFrequentes?.map((f) => (
            <InfoCard key={f.pergunta} title={f.pergunta} icon={<HelpCircle className="h-4 w-4" />}>
              {f.resposta}
            </InfoCard>
          ))}
          {maquina.id !== "mq-lencos" && (
            <Button className="h-12 w-full rounded-xl text-sm font-bold">
              <PlayCircle className="mr-2 h-5 w-5" />
              Iniciar treinamento
            </Button>
          )}
        </TabsContent>

        <TabsContent value="checklist" className="mt-3 px-4">
          <Section title="Checklist de partida" items={maquina.checklist.map((c) => c.texto)} />
        </TabsContent>
        <TabsContent value="alarmes" className="mt-3 space-y-2 px-4">
          {maquina.alarmes.map((a) => (
            <article key={a.codigo} className="rounded-xl border border-border bg-card p-3">
              <div className="flex items-center gap-2">
                <span className="rounded bg-danger/10 px-2 py-0.5 text-[11px] font-bold text-danger">
                  {a.codigo}
                </span>
                <p className="text-sm font-semibold">{a.descricao}</p>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Ação inicial: {a.acao}</p>
            </article>
          ))}
        </TabsContent>
        <TabsContent value="seguranca" className="mt-3 space-y-3 px-4">
          {maquina.pontosSeguranca.map((p) => (
            <article key={p.titulo} className="rounded-2xl border border-danger/30 bg-danger/5 p-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold">{p.titulo}</h3>
                <span className="rounded-full bg-danger px-2 py-0.5 text-[10px] font-bold uppercase text-danger-foreground">
                  {p.nivel}
                </span>
              </div>
              <p className="mt-1 text-xs">{p.risco}</p>
              <p className="mt-2 text-[11px] font-bold">EPI: {p.epi.join(", ")}</p>
              <SafetyCallout title="Procedimento" variant="danger">
                {p.procedimento}
              </SafetyCallout>
            </article>
          ))}
        </TabsContent>
        <TabsContent value="docs" className="mt-3 space-y-2 px-4">
          <MediaPlaceholder texto="Espaço para manual técnico PDF vinculado à máquina." />
          {maquina.documentos.map((d) => (
            <article
              key={d.id}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"
            >
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold">{d.titulo}</p>
                <p className="text-[10px] uppercase text-muted-foreground">{d.tipo}</p>
              </div>
            </article>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function TreinoStatus({ maquina }: { maquina: import("@/data/types").Maquina }) {
  if (maquina.id === "mq-haina-absorvente") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4">
        <p className="text-sm font-extrabold text-primary">
          Trilha disponível — Operador Inicial Haina Absorvente
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          Acesse a trilha mockada com teoria, checklist interativo, quiz com aprovação mínima de 80%
          e avaliação prática do instrutor.
        </p>
        <Button asChild className="mt-3 h-10 w-full rounded-xl text-xs font-bold">
          <Link to="/trilhas/$trilhaId" params={{ trilhaId: "operador-inicial-haina-absorvente" }}>
            Abrir trilha da Haina Absorvente
          </Link>
        </Button>
      </div>
    );
  }

  if (maquina.id === "mq-lencos") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4">
        <p className="text-sm font-extrabold text-primary">
          Trilha disponível — Operador Inicial Linha Lenços Umedecidos
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          Acesse a trilha mockada com teoria, checklist interativo, quiz com aprovação mínima de 80%
          e avaliação prática do instrutor.
        </p>
        <Button asChild className="mt-3 h-10 w-full rounded-xl text-xs font-bold">
          <Link to="/trilhas/$trilhaId" params={{ trilhaId: "operador-inicial-lencos-umedecidos" }}>
            Abrir trilha de Lenços Umedecidos
          </Link>
        </Button>
      </div>
    );
  }

  return null;
}

function DataPill({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-2 text-center">
      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-0.5 inline-flex items-center justify-center gap-1 text-xs font-bold">
        {icon}
        {value}
      </p>
    </div>
  );
}
function InfoCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <h3 className="text-sm font-extrabold text-foreground">{title}</h3>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{children}</p>
    </article>
  );
}
function Section({
  title,
  items = [],
  numbered = false,
}: {
  title: string;
  items?: string[];
  numbered?: boolean;
}) {
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{title}</p>
      <ul className="mt-2 space-y-2">
        {items.map((item, i) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">
              {numbered ? i + 1 : "•"}
            </span>
            <span className="text-sm font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
function MediaPlaceholder({ texto }: { texto: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4">
      <ImagePlus className="h-5 w-5 shrink-0 text-primary" />
      <p className="text-xs font-semibold text-foreground">{texto}</p>
    </div>
  );
}
function DefeitoLinha({ label, text }: { label: string; text: string }) {
  return (
    <p className="mt-2 text-xs leading-relaxed">
      <b>{label}:</b> <span className="text-muted-foreground">{text}</span>
    </p>
  );
}
