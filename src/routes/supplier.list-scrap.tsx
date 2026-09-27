import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/Button";
import { Card, CardTitle } from "@/components/Card";
import { Field, Input, Select } from "@/components/Field";
import { compositions, conditions, materialTypes } from "@/data/mockData";
import { useDemo } from "@/lib/demo-store";

export const Route = createFileRoute("/supplier/list-scrap")({
  head: () => ({
    meta: [
      { title: "List textile scrap — SCRAPMATCH" },
      {
        name: "description",
        content: "Publish a surplus textile scrap lot with composition, condition, quantity and city.",
      },
      { property: "og:title", content: "List textile scrap — SCRAPMATCH" },
      {
        property: "og:description",
        content: "Publish a surplus textile scrap lot for local buyers to match against.",
      },
    ],
  }),
  component: ListScrap,
});

function ListScrap() {
  const { addListing } = useDemo();
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    materialType: "Textile Scrap",
    composition: "100% Cotton",
    condition: "Clean",
    quantityKg: 320,
    location: "Surat",
    availableFrom: "2026-10-05",
  });

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg text-center py-12">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
          <CheckCircle2 className="h-8 w-8 text-secondary-foreground" strokeWidth={1.5} />
        </span>
        <h3 className="mt-6 text-2xl font-semibold">Listing published</h3>
        <p className="mt-3 text-base text-muted-foreground">
          Your textile scrap has been listed and is awaiting a buyer match.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row border-t border-border/70 pt-8">
          <Button variant="primary" asChild>
            <Link to="/supplier">Back to overview</Link>
          </Button>
          <Button variant="outline" onClick={() => setSubmitted(false)}>
            List another lot
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h2 className="font-display text-2xl font-semibold">List new textile scrap</h2>
        <p className="mt-1 text-muted-foreground">
          Accurate composition and location improve your match score.
        </p>
      </div>

      <div className="border-t border-border/70 pt-8">
        <form
          className="grid gap-x-8 gap-y-6 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            addListing(form);
            toast.success("Your textile scrap has been listed and is awaiting a buyer match.");
            setSubmitted(true);
          }}
        >
          <Field label="Material type">
            <Select
              options={materialTypes}
              value={form.materialType}
              onChange={(e) => setForm({ ...form, materialType: e.target.value })}
            />
          </Field>
          <Field label="Composition">
            <Select
              options={compositions}
              value={form.composition}
              onChange={(e) => setForm({ ...form, composition: e.target.value })}
            />
          </Field>
          <Field label="Condition">
            <Select
              options={conditions}
              value={form.condition}
              onChange={(e) => setForm({ ...form, condition: e.target.value })}
            />
          </Field>
          <Field label="Quantity (kg)">
            <Input
              type="number"
              min={1}
              value={form.quantityKg}
              onChange={(e) => setForm({ ...form, quantityKg: Number(e.target.value) })}
              required
            />
          </Field>
          <Field label="Location / city">
            <Input
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              required
            />
          </Field>
          <Field label="Available from">
            <Input
              type="date"
              value={form.availableFrom}
              onChange={(e) => setForm({ ...form, availableFrom: e.target.value })}
              required
            />
          </Field>

          <div className="sm:col-span-2 mt-4 pt-6 border-t border-border/70">
            <Button type="submit" variant="primary" size="lg" block>
              Publish listing
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
