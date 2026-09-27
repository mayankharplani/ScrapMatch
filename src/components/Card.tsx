import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  tone = "plain",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { tone?: "plain" | "surface" | "outline" }) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 shadow-soft transition-shadow",
        tone === "plain" && "border border-border/70 bg-card",
        tone === "surface" && "border border-transparent bg-surface",
        tone === "outline" && "border border-primary/25 bg-card",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-semibold", className)} {...props} />;
}

export function CardLabel({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground", className)}
      {...props}
    />
  );
}
