import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { PERFIS_MOCK } from "@/data/mock/perfis";
import type { Papel, Usuario } from "@/data/types";

interface PerfilCtx {
  usuario: Usuario;
  setPapel: (papel: Papel) => void;
  perfis: Usuario[];
}

const STORAGE_KEY = "evergreen-papel";
const Ctx = createContext<PerfilCtx | null>(null);

export function PerfilProvider({ children }: { children: ReactNode }) {
  const [papel, setPapelState] = useState<Papel>("operador");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Papel | null;
      if (saved && ["operador", "instrutor", "lider", "admin"].includes(saved)) {
        setPapelState(saved);
      }
    } catch {
      /* no-op */
    }
  }, []);

  const setPapel = (p: Papel) => {
    setPapelState(p);
    try {
      localStorage.setItem(STORAGE_KEY, p);
    } catch {
      /* no-op */
    }
  };

  const usuario = useMemo(
    () => PERFIS_MOCK.find((u) => u.papel === papel) ?? PERFIS_MOCK[0],
    [papel],
  );

  return (
    <Ctx.Provider value={{ usuario, setPapel, perfis: PERFIS_MOCK }}>{children}</Ctx.Provider>
  );
}

export function usePerfil() {
  const v = useContext(Ctx);
  if (!v) throw new Error("usePerfil deve estar dentro de <PerfilProvider>");
  return v;
}

export function podeVer(papel: Papel, permitidos: Papel[]) {
  return permitidos.includes(papel);
}
