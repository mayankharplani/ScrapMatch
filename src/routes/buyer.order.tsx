import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Truck } from "lucide-react";
import { Button } from "@/components/Button";
import { Card, CardLabel, CardTitle } from "@/components/Card";
import { StatusTimeline } from "@/components/StatusTimeline";
import { ORDER_ID, smartMatches } from "@/data/mockData";
import { useDemo } from "@/lib/demo-store";
import { formatKg } from "@/utils/format";

export const Route = createFileRoute("/buyer/order")({
  head: () => ({
    meta: [
      { title: "Order confirmed — SCRAPMATCH" },
      {
        name: "description",
        content: "Aggregated textile scrap order confirmed and both supplier lots reserved.",
      },
      { property: "og:title", content: "Order confirmed — SCRAPMATCH" },
      {
        property: "og:description",
        content: "Aggregated textile scrap order confirmed and both supplier lots reserved.",
      },
    ],
  }),
  component: OrderConfirmation,
});

function OrderConfirmation() {
  const { requirement, buyerCompany, timeline } = useDemo();

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Card className="text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
          <CheckCircle2 className="h-7 w-7 text-secondary-foreground" strokeWidth={1.75} />
        </span>
        <h2 className="mt-5 font-display text-2xl font-semibold">
          {formatKg(requirement.quantityKg)} secured
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Both supplier lots have been reserved.
        </p>

        <dl className="mt-6 grid gap-4 text-left sm:grid-cols-3">
          <div className="rounded-xl bg-surface px-4 py-3">
            <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Order ID</dt>
            <dd className="mt-1 font-medium">{ORDER_ID}</dd>
          </div>
          <div className="rounded-xl bg-surface px-4 py-3">
            <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Buyer</dt>
            <dd className="mt-1 font-medium">{buyerCompany}</dd>
          </div>
          <div className="rounded-xl bg-surface px-4 py-3">
            <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Suppliers</dt>
            <dd className="mt-1 font-medium">{smartMatches.map((m) => m.supplier).join(" · ")}</dd>
          </div>
        </dl>
      </Card>

      <Card className="space-y-5">
        <div>
          <CardLabel>Logistics</CardLabel>
          <CardTitle className="mt-1">Pickup timeline</CardTitle>
        </div>
        <StatusTimeline steps={timeline} />
        <Button variant="outline" asChild>
          <Link to="/buyer/logistics">
            <Truck className="h-4 w-4" /> Go to logistics
          </Link>
        </Button>
      </Card>
    </div>
  );
}
