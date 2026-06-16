import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { usePerfil } from "@/lib/perfilAtual";
import { PAPEL_LABEL } from "@/data/mock/perfis";
import { Check } from "lucide-react";

export function PerfilSwitcher() {
  const { usuario, setPapel, perfis } = usePerfil();

  return (
    <SheetContent side="bottom" className="rounded-t-3xl">
      <SheetHeader className="text-left">
        <SheetTitle>Trocar perfil</SheetTitle>
        <SheetDescription>
          Demonstração: alterne entre Operador, Instrutor, Líder e Administrador.
        </SheetDescription>
      </SheetHeader>
      <div className="mt-4 space-y-2 pb-4">
        {perfis.map((p) => {
          const ativo = p.papel === usuario.papel;
          return (
            <SheetClose asChild key={p.id}>
              <button
                type="button"
                onClick={() => setPapel(p.papel)}
                className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${
                  ativo ? "border-primary bg-primary/5" : "border-border bg-card hover:bg-muted"
                }`}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/20 text-sm font-bold text-primary">
                  {p.iniciais}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{p.nome}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {PAPEL_LABEL[p.papel]} • {p.cargo}
                  </p>
                </div>
                {ativo && <Check className="h-5 w-5 shrink-0 text-primary" />}
              </button>
            </SheetClose>
          );
        })}
      </div>
    </SheetContent>
  );
}
