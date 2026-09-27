import { Check } from "lucide-react";
import type { TimelineStep } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function StatusTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="relative space-y-6">
      {steps.map((step, i) => (
        <li key={step.label} className="relative flex items-start gap-4 pl-0">
          <span className="relative flex flex-col items-center">
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold",
                step.state === "completed" && "border-transparent bg-primary text-primary-foreground",
                step.state === "active" && "border-transparent bg-secondary text-secondary-foreground",
                step.state === "upcoming" && "border-border bg-card text-muted-foreground",
              )}
            >
              {step.state === "completed" ? <Check className="h-4 w-4" strokeWidth={3} /> : i + 1}
            </span>
            {i < steps.length - 1 && (
              <span
                className={cn(
                  "mt-1 h-10 w-px",
                  step.state === "upcoming" ? "bg-border" : "bg-primary/40",
                )}
                aria-hidden="true"
              />
            )}
          </span>
          <span className="pt-1.5">
            <span className="block font-medium">{step.label}</span>
            <span className="block text-sm capitalize text-muted-foreground">{step.state}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}
