import { createFileRoute, Navigate } from "@tanstack/react-router";
import { MAQUINAS_MOCK } from "@/data/mock/maquinas";

export const Route = createFileRoute("/m/$codigo")({
  component: QrResolver,
});

function QrResolver() {
  const { codigo } = Route.useParams();
  const maquina = MAQUINAS_MOCK.find((m) => m.qrCode.toLowerCase() === codigo.toLowerCase());
  if (!maquina) {
    return (
      <div className="grid min-h-screen place-items-center bg-background px-6 text-center">
        <div>
          <p className="text-lg font-bold">QR não reconhecido</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Código <code>{codigo}</code> não corresponde a nenhuma máquina.
          </p>
        </div>
      </div>
    );
  }
  return <Navigate to="/maquinas/$maquinaId" params={{ maquinaId: maquina.id }} replace />;
}
