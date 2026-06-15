import { AlertTriangle } from "lucide-react";
import type { ReactNode } from "react";

export function SafetyCallout({
  title,
  children,
  variant = "danger",
}: {
  title: string;
  children: ReactNode;
  variant?: "danger" | "warning";
}) {
  const styles =
    variant === "danger"
      ? "border-danger/40 bg-danger/5 text-foreground"
      : "border-warning/50 bg-warning/10 text-foreground";
  const iconColor = variant === "danger" ? "text-danger" : "text-warning-foreground";
  return (
    <div className={`flex gap-3 rounded-2xl border p-3 ${styles}`}>
      <AlertTriangle className={`mt-0.5 h-5 w-5 shrink-0 ${iconColor}`} />
      <div className="min-w-0 text-sm">
        <p className="font-semibold leading-tight">{title}</p>
        <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
