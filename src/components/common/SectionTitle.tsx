import type { ReactNode } from "react";

export function SectionTitle({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-3 px-4 pt-5 pb-2">
      <div className="min-w-0">
        <h2 className="truncate text-base font-bold tracking-tight text-foreground">{title}</h2>
        {subtitle && <p className="truncate text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
