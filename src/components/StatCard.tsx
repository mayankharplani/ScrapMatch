import type { LucideIcon } from "lucide-react";
import { Card } from "./Card";

export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
}: {
  label: string;
  value: string;
  hint?: string | undefined;
  icon?: LucideIcon | undefined;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-l-2 border-primary/20 pl-4 py-2">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-2 font-display text-2xl font-semibold">{value}</p>
        {hint && <p className="mt-1 text-sm text-muted-foreground">{hint}</p>}
      </div>
      {Icon && (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center text-primary/70">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </span>
      )}
    </div>
  );
}
