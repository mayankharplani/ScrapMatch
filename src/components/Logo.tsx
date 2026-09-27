import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <img src="/logo.png" alt="SCRAPMATCH Logo" className="h-12 w-12 object-contain" />
      {!compact && (
        <span className="font-display text-2xl font-bold tracking-tight">
          SCRAP<span className="text-primary">MATCH</span>
        </span>
      )}
    </span>
  );
}
