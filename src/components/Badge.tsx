import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "sage" | "lime" | "surface" | "peach";

export function Badge({
  className,
  tone = "surface",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        tone === "sage" && "bg-primary/10 text-primary",
        tone === "lime" && "bg-secondary text-secondary-foreground",
        tone === "surface" && "bg-surface text-surface-foreground",
        tone === "peach" && "bg-peach/60 text-peach-foreground",
        className,
      )}
      {...props}
    />
  );
}
