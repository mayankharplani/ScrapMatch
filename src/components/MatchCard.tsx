import { BadgeCheck, Check, MapPin, Navigation } from "lucide-react";
import type { Match } from "@/data/mockData";
import { Badge } from "./Badge";
import { Card, CardTitle } from "./Card";

export function MatchCard({ match }: { match: Match }) {
  return (
    <div className="flex flex-col gap-5 border border-border/70 rounded-2xl p-6 hover:shadow-soft transition-shadow">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold">
            {match.supplier}
            {match.verified && (
              <BadgeCheck className="h-5 w-5 text-primary" strokeWidth={2} aria-label="Verified supplier" />
            )}
          </h3>
          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" /> {match.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Navigation className="h-4 w-4" /> {match.distanceKm} km away
            </span>
          </p>
        </div>
        <div className="text-right">
          <Badge tone="lime" className="px-3">{match.score}% match</Badge>
          <p className="mt-2 font-display text-3xl font-semibold">{match.quantityKg} kg</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge tone="surface">{match.composition}</Badge>
        <Badge tone="surface">{match.condition} condition</Badge>
      </div>

      <div className="pt-4 border-t border-border/70">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground mb-3">
          Why this matched
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {match.reasons.map((reason) => (
            <li key={reason} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-secondary/20">
                <Check className="h-3 w-3 text-secondary-foreground" strokeWidth={3} />
              </span>
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
