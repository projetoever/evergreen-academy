import { createFileRoute, notFound } from "@tanstack/react-router";
import { AULAS_MOCK } from "@/data/mock/aulas";
import { PageHeader } from "@/components/common/PageHeader";
import { IconLucide } from "@/components/common/IconLucide";
import { SafetyCallout } from "@/components/common/SafetyCallout";
import { Button } from "@/components/ui/button";
import { Lightbulb, Eye, Check } from "lucide-react";

export const Route = createFileRoute("/_app/aulas/$aulaId")({
  loader: ({ params }) => {
    const aula = AULAS_MOCK.find((a) => a.id === params.aulaId);
    if (!aula) throw notFound();
    return { aula };
  },
  component: AulaDetalhe,
  notFoundComponent: () => (
    <div className="p-6 text-center text-sm text-muted-foreground">Aula não encontrada.</div>
  ),
});

function AulaDetalhe() {
  const { aula } = Route.useLoaderData() as { aula: import("@/data/types").Aula };
  return (
    <div className="pb-8">
      <PageHeader title={aula.titulo} back="/aulas" />

      {/* Hero visual */}
      <div className="mx-4 mt-2 rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground">
        <div className="grid h-20 w-20 place-items-center rounded-2xl bg-primary-foreground/15">
          <IconLucide name={aula.icone} className="h-10 w-10" />
        </div>
        <p className="mt-4 text-xs uppercase tracking-wide opacity-80">O que é</p>
        <p className="mt-1 text-base font-semibold leading-snug">{aula.descricao}</p>
      </div>

      {/* Analogia */}
      <Section icon={<Lightbulb className="h-5 w-5 text-warning-foreground" />} title="Pense assim">
        <p>{aula.analogia}</p>
      </Section>

      {/* Exemplo prático */}
      <Section icon={<Eye className="h-5 w-5 text-accent-foreground" />} title="Exemplo prático">
        <p>{aula.exemplo}</p>
      </Section>

      {/* Como aparece */}
      <Section icon={<Eye className="h-5 w-5 text-primary" />} title="Como aparece na máquina">
        <ul className="space-y-1.5">
          {aula.comoApareceNaMaquina.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Cuidado */}
      <div className="mx-4 mt-4">
        <SafetyCallout title="Cuidado" variant="warning">
          {aula.cuidado}
        </SafetyCallout>
      </div>

      <div className="mt-6 px-4">
        <Button className="h-14 w-full rounded-2xl text-base font-bold" size="lg">
          <Check className="mr-2 h-5 w-5" />
          Marcar como visto
        </Button>
      </div>
    </div>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-4 mt-4 rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-muted">{icon}</div>
        <p className="text-sm font-bold">{title}</p>
      </div>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}
