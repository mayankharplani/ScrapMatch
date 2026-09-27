import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { CheckCircle2, Plus, Equal } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card, CardLabel, CardTitle } from "@/components/Card";
import { MatchCard } from "@/components/MatchCard";
import { smartMatches } from "@/data/mockData";
import { useDemo } from "@/lib/demo-store";
import { formatKg, fulfillmentPercent } from "@/utils/format";

export const Route = createFileRoute("/buyer/matches")({
  head: () => ({
    meta: [
      { title: "Smart matches — SCRAPMATCH" },
      {
        name: "description",
        content:
          "See how SCRAPMATCH aggregates multiple verified local supplier lots to fully fulfil your requirement.",
      },
      { property: "og:title", content: "Smart matches — SCRAPMATCH" },
      {
        property: "og:description",
        content: "Aggregate verified local supplier lots into one fulfilled order.",
      },
    ],
  }),
  component: SmartMatches,
});

function SmartMatches() {
  const navigate = useNavigate();
  const { requirement, buyerCompany, confirmOrder } = useDemo();
  const secured = smartMatches.reduce((sum, m) => sum + m.quantityKg, 0);
  const percent = fulfillmentPercent(secured, requirement.quantityKg);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-semibold">Smart matches</h2>
        <p className="mt-1 text-muted-foreground">
          Scored on composition, quality, distance, availability and quantity fit.
        </p>
      </div>

      <div className="space-y-6 pt-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <CheckCircle2 className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="text-xl font-semibold">{percent >= 100 ? "Requirement fully fulfilled" : "Partial match"}</h3>
              <p className="mt-1 text-base text-muted-foreground">
                <strong className="font-medium text-foreground">{secured} kg</strong> of {requirement.quantityKg} kg secured · Matched from{" "}
                {smartMatches.length} verified suppliers
              </p>
            </div>
          </div>
          <Badge tone="lime" className="text-sm px-3 py-1">{percent}% fulfilled</Badge>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-surface w-full max-w-2xl">
          <div className="h-full rounded-full bg-secondary" style={{ width: `${percent}%` }} />
        </div>
      </div>

      <div className="space-y-4">
        {smartMatches.map((match) => (
          <MatchCard key={match.supplier} match={match} />
        ))}
      </div>

      <div className="mt-12 border-t border-border/70 pt-8">
        <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground mb-6">
          Aggregation plan
        </h3>
        <div className="flex flex-col items-stretch gap-6 sm:flex-row sm:items-center">
          {smartMatches.map((m, i) => (
            <div key={m.supplier} className="flex flex-1 items-center gap-6">
              <div className="flex-1 text-center">
                <p className="text-sm text-muted-foreground mb-1">{m.supplier}</p>
                <p className="font-display text-2xl font-semibold">{formatKg(m.quantityKg)}</p>
              </div>
              {i < smartMatches.length - 1 && (
                <Plus className="h-5 w-5 shrink-0 text-primary/50" aria-hidden="true" />
              )}
            </div>
          ))}
          <Equal className="mx-auto h-5 w-5 shrink-0 text-primary/50 sm:mx-0" aria-hidden="true" />
          <div className="flex-1 text-center border-l-2 border-primary/20 pl-6 sm:border-t-0 border-t-2 pt-6 sm:pt-0 sm:pl-6">
            <p className="text-sm text-muted-foreground mb-1">{buyerCompany} requirement</p>
            <p className="font-display text-3xl font-semibold text-primary">
              {formatKg(requirement.quantityKg)}
            </p>
          </div>
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        block
        onClick={() => {
          confirmOrder();
          navigate({ to: "/buyer/order" });
        }}
      >
        Confirm Aggregated Order · {formatKg(requirement.quantityKg)}
      </Button>
    </div>
  );
}
