import { Link } from "@tanstack/react-router";
import { Leaf, ChevronDown } from "lucide-react";
import { usePerfil } from "@/lib/perfilAtual";
import { PAPEL_LABEL } from "@/data/mock/perfis";
import { PerfilSwitcher } from "./PerfilSwitcher";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

export function AppHeader() {
  const { usuario } = usePerfil();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-border/60 bg-background/95 px-4 py-3 backdrop-blur">
      <Link to="/" className="flex min-w-0 items-center gap-2">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
          <Leaf className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold leading-tight text-foreground">
            Evergreen Academy
          </p>
          <p className="truncate text-[11px] leading-tight text-muted-foreground">
            Formação operacional
          </p>
        </div>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Trocar perfil"
            className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-2.5 py-1.5 text-left transition hover:bg-muted"
          >
            <div className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-foreground text-[11px] font-bold">
              {usuario.iniciais}
            </div>
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-xs font-semibold leading-tight">
                {usuario.nome.split(" ")[0]}
              </p>
              <p className="truncate text-[10px] leading-tight text-muted-foreground">
                {PAPEL_LABEL[usuario.papel]}
              </p>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
        </SheetTrigger>
        <PerfilSwitcher />
      </Sheet>
    </header>
  );
}
