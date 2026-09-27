import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card, CardLabel, CardTitle } from "@/components/Card";
import { StatusTimeline } from "@/components/StatusTimeline";
import { ORDER_ID, smartMatches } from "@/data/mockData";
import { useDemo } from "@/lib/demo-store";
import { formatKg } from "@/utils/format";

export const Route = createFileRoute("/buyer/logistics")({
  head: () => ({
    meta: [
      { title: "Buyer logistics — SCRAPMATCH" },
      {
        name: "description",
        content: "Follow pickup and delivery progress for your aggregated textile scrap order.",
      },
      { property: "og:title", content: "Buyer logistics — SCRAPMATCH" },
      {
        property: "og:description",
        content: "Follow pickup and delivery progress for your aggregated order.",
      },
    ],
  }),
  component: BuyerLogistics,
});

function BuyerLogistics() {
  const { orderConfirmed, requirement, timeline } = useDemo();

  if (!orderConfirmed) {
    return (
      <Card tone="surface" className="mx-auto max-w-lg text-center">
        <CardTitle>No active orders</CardTitle>
        <p className="mt-2 text-sm text-muted-foreground">
          Confirm an aggregated order to start tracking pickup and delivery.
        </p>
        <div className="mt-5">
          <Button variant="primary" asChild>
            <Link to="/buyer/matches">View smart matches</Link>
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-semibold">Logistics</h2>
        <p className="mt-1 text-muted-foreground">One active aggregated order.</p>
      </div>

      <Card className="space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardLabel>Order</CardLabel>
            <CardTitle className="mt-1">
              {ORDER_ID} · {formatKg(requirement.quantityKg)}
            </CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              {smartMatches.map((m) => m.supplier).join(" + ")}
            </p>
          </div>
          <Badge tone="lime">Pickup Scheduled</Badge>
        </div>
        <StatusTimeline steps={timeline} />
      </Card>
    </div>
  );
}
