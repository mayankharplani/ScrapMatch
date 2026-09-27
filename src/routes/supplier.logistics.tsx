import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/Badge";
import { Card, CardLabel, CardTitle } from "@/components/Card";
import { StatusTimeline } from "@/components/StatusTimeline";
import { ORDER_ID } from "@/data/mockData";
import { useDemo } from "@/lib/demo-store";

export const Route = createFileRoute("/supplier/logistics")({
  head: () => ({
    meta: [
      { title: "Supplier logistics — SCRAPMATCH" },
      { name: "description", content: "Track pickup status for reserved textile scrap lots." },
      { property: "og:title", content: "Supplier logistics — SCRAPMATCH" },
      {
        property: "og:description",
        content: "Track pickup status for reserved textile scrap lots.",
      },
    ],
  }),
  component: SupplierLogistics,
});

function SupplierLogistics() {
  const { orderConfirmed, timeline, buyerCompany, supplierCompany } = useDemo();

  if (!orderConfirmed) {
    return (
      <Card tone="surface" className="mx-auto max-w-lg text-center">
        <CardTitle>No active pickups</CardTitle>
        <p className="mt-2 text-sm text-muted-foreground">
          Once a buyer confirms an aggregated order, your pickup schedule appears here.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-semibold">Logistics</h2>
        <p className="mt-1 text-muted-foreground">Active pickup for reserved lots.</p>
      </div>

      <Card className="space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardLabel>Order</CardLabel>
            <CardTitle className="mt-1">{ORDER_ID}</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              {supplierCompany} → {buyerCompany}
            </p>
          </div>
          <Badge tone="lime">Pickup Scheduled</Badge>
        </div>
        <StatusTimeline steps={timeline} />
      </Card>
    </div>
  );
}
