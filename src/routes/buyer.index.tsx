import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, FilePlus2, MapPin, Scale, Sparkles } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card, CardLabel, CardTitle } from "@/components/Card";
import { useDemo } from "@/lib/demo-store";
import { formatDate, formatKg } from "@/utils/format";

export const Route = createFileRoute("/buyer/")({
  head: () => ({
    meta: [
      { title: "Buyer overview — SCRAPMATCH" },
      {
        name: "description",
        content: "Review your open recycled textile material requirement and smart supplier matches.",
      },
      { property: "og:title", content: "Buyer overview — SCRAPMATCH" },
      {
        property: "og:description",
        content: "Review your open recycled textile material requirement and supplier matches.",
      },
    ],
  }),
  component: BuyerOverview,
});

function BuyerOverview() {
  const { buyerCompany, requirement } = useDemo();

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-semibold">Welcome back, {buyerCompany}</h2>
          <p className="mt-1 text-muted-foreground">
            One open requirement is being matched with local suppliers.
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/buyer/requirement">
            <FilePlus2 className="h-4 w-4" /> Post Requirement
          </Link>
        </Button>
      </div>

      <div className="space-y-6 pt-6 border-t border-border/70">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground mb-1">
              Open requirement
            </h3>
            <p className="font-display text-2xl font-semibold">
              {formatKg(requirement.quantityKg)} · {requirement.composition}
            </p>
            <p className="mt-1 text-base text-muted-foreground">
              {requirement.minCondition} textile scrap
            </p>
          </div>
          <Badge tone="lime" className="px-3">Matching active</Badge>
        </div>

        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4 py-4 border-y border-border/70 my-6">
          <div>
            <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Scale className="h-4 w-4" /> Quantity
            </dt>
            <dd className="mt-1 font-display text-xl font-semibold">
              {formatKg(requirement.quantityKg)}
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-4 w-4" /> City
            </dt>
            <dd className="mt-1 font-display text-xl font-semibold">{requirement.city}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-4 w-4" /> Max distance
            </dt>
            <dd className="mt-1 font-display text-xl font-semibold">
              {requirement.maxDistanceKm} km
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <CalendarDays className="h-4 w-4" /> Required by
            </dt>
            <dd className="mt-1 font-display text-xl font-semibold">
              {formatDate(requirement.requiredBy)}
            </dd>
          </div>
        </dl>

        <Button variant="primary" size="lg" asChild>
          <Link to="/buyer/matches">
            <Sparkles className="h-4 w-4" /> View Smart Matches
          </Link>
        </Button>
      </div>

      <div className="mt-12 bg-surface/50 rounded-2xl p-6 border border-border/70">
        <h3 className="text-lg font-semibold">How SCRAPMATCH matches</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Every supplier lot is scored on composition, material quality, distance from your plant,
          availability against your required-by date, and how much of your quantity it can cover.
          Nearby lots are then aggregated so a single order can fulfil the full requirement.
        </p>
      </div>
    </div>
  );
}
