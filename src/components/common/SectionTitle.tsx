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
    <div className="flex items-end justify-between gap-3 px-4 pt-6 pb-2">
      <div className="min-w-0">
        <h2 className="truncate text-[11px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-0.5 truncate text-xs text-muted-foreground/80">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}
