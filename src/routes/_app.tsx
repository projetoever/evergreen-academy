import { createFileRoute, Outlet } from "@tanstack/react-router";
import { MobileShell } from "@/components/layout/MobileShell";
import { PerfilProvider } from "@/lib/perfilAtual";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <PerfilProvider>
      <MobileShell>
        <Outlet />
      </MobileShell>
    </PerfilProvider>
  );
}
