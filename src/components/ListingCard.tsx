import { MapPin, CalendarDays, Layers } from "lucide-react";
import type { Listing } from "@/data/mockData";
import { Badge } from "./Badge";
import { Card, CardTitle } from "./Card";
import { formatDate } from "@/utils/format";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="flex flex-col gap-4 border-b border-border/70 py-6 last:border-0">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">
            {listing.composition} {listing.materialType}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {listing.condition} condition · Listing {listing.id}
          </p>
        </div>
        <Badge tone={listing.status === "Available" ? "lime" : "peach"}>{listing.status}</Badge>
      </div>

      <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div>
          <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Layers className="h-3.5 w-3.5" /> Quantity
          </dt>
          <dd className="mt-1 font-display text-lg font-semibold">{listing.quantityKg} kg</dd>
        </div>
        <div>
          <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> Location
          </dt>
          <dd className="mt-1 font-display text-lg font-semibold">{listing.location}</dd>
        </div>
        <div>
          <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5" /> Available from
          </dt>
          <dd className="mt-1 font-display text-lg font-semibold">
            {formatDate(listing.availableFrom)}
          </dd>
        </div>
      </dl>
    </div>
  );
}
