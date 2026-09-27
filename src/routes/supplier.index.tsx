import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Layers, PackagePlus, Boxes } from "lucide-react";
import { Button } from "@/components/Button";
import { Card, CardTitle } from "@/components/Card";
import { ListingCard } from "@/components/ListingCard";
import { StatCard } from "@/components/StatCard";
import { useDemo } from "@/lib/demo-store";
import { formatKg } from "@/utils/format";

export const Route = createFileRoute("/supplier/")({
  head: () => ({
    meta: [
      { title: "Supplier overview — SCRAPMATCH" },
      {
        name: "description",
        content: "Track available textile scrap, verification status and active listings.",
      },
      { property: "og:title", content: "Supplier overview — SCRAPMATCH" },
      {
        property: "og:description",
        content: "Track available textile scrap, verification status and active listings.",
      },
    ],
  }),
  component: SupplierOverview,
});

function SupplierOverview() {
  const { supplierCompany, listings } = useDemo();
  const available = listings
    .filter((l) => l.status === "Available")
    .reduce((sum, l) => sum + l.quantityKg, 0);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-semibold">Welcome back, {supplierCompany}</h2>
          <p className="mt-1 text-muted-foreground">
            Your listed scrap is visible to verified local buyers.
          </p>
        </div>
        <Button variant="primary" asChild>
          <Link to="/supplier/list-scrap">
            <PackagePlus className="h-4 w-4" /> List New Scrap
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Material available" value={formatKg(available)} icon={Layers} />
        <StatCard label="Supplier status" value="Verified" hint="Quality checked" icon={BadgeCheck} />
        <StatCard label="Active listings" value={String(listings.length)} icon={Boxes} />
      </div>

      <section>
        <h3 className="text-xl font-semibold mb-2">Active listings</h3>
        <div className="flex flex-col">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
          {listings.length === 0 && (
            <p className="text-sm text-muted-foreground py-8 text-center border border-dashed border-border/70 rounded-2xl mt-4">
              No listings yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
