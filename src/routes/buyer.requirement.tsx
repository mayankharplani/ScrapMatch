import { createFileRoute, useNavigate } from "@tanstack/react-router";
import * as React from "react";
import { toast } from "sonner";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Field, Input, Select } from "@/components/Field";
import { compositions, conditions, materialTypes } from "@/data/mockData";
import { useDemo } from "@/lib/demo-store";

export const Route = createFileRoute("/buyer/requirement")({
  head: () => ({
    meta: [
      { title: "Post a requirement — SCRAPMATCH" },
      {
        name: "description",
        content: "Describe the recycled textile material you need and let SCRAPMATCH find local lots.",
      },
      { property: "og:title", content: "Post a requirement — SCRAPMATCH" },
      {
        property: "og:description",
        content: "Describe the recycled textile material you need and get smart supplier matches.",
      },
    ],
  }),
  component: RequirementForm,
});

function RequirementForm() {
  const navigate = useNavigate();
  const { requirement, setRequirement } = useDemo();
  const [form, setForm] = React.useState({
    materialType: requirement.materialType,
    composition: requirement.composition,
    minCondition: requirement.minCondition,
    quantityKg: requirement.quantityKg,
    city: requirement.city,
    maxDistanceKm: requirement.maxDistanceKm,
    requiredBy: requirement.requiredBy,
  });

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h2 className="font-display text-2xl font-semibold">Post a material requirement</h2>
        <p className="mt-1 text-muted-foreground">
          We score local supplier lots against these criteria instantly.
        </p>
      </div>

      <div className="border-t border-border/70 pt-8">
        <form
          className="grid gap-x-8 gap-y-6 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            setRequirement(form);
            toast.success("Requirement posted — showing your smart matches.");
            navigate({ to: "/buyer/matches" });
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
          <Field label="Minimum condition">
            <Select
              options={conditions}
              value={form.minCondition}
              onChange={(e) => setForm({ ...form, minCondition: e.target.value })}
            />
          </Field>
          <Field label="Quantity required (kg)">
            <Input
              type="number"
              min={1}
              value={form.quantityKg}
              onChange={(e) => setForm({ ...form, quantityKg: Number(e.target.value) })}
              required
            />
          </Field>
          <Field label="City">
            <Input
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              required
            />
          </Field>
          <Field label="Maximum distance (km)">
            <Input
              type="number"
              min={1}
              value={form.maxDistanceKm}
              onChange={(e) => setForm({ ...form, maxDistanceKm: Number(e.target.value) })}
              required
            />
          </Field>
          <Field label="Required by" className="sm:col-span-2">
            <Input
              type="date"
              value={form.requiredBy}
              onChange={(e) => setForm({ ...form, requiredBy: e.target.value })}
              required
            />
          </Field>

          <div className="sm:col-span-2 mt-4 pt-6 border-t border-border/70">
            <Button type="submit" variant="primary" size="lg" block>
              Find Smart Matches
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
