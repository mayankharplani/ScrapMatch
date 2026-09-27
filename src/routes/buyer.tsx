import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard, FilePlus2, Sparkles, Truck } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import type { NavItem } from "@/components/Sidebar";
import { useDemo } from "@/lib/demo-store";

const items: NavItem[] = [
  { label: "Overview", to: "/buyer", icon: LayoutDashboard, exact: true },
  { label: "Post Requirement", to: "/buyer/requirement", icon: FilePlus2 },
  { label: "Smart Matches", to: "/buyer/matches", icon: Sparkles },
  { label: "Logistics", to: "/buyer/logistics", icon: Truck },
];

export const Route = createFileRoute("/buyer")({
  component: BuyerLayout,
});

function BuyerLayout() {
  const { buyerCompany } = useDemo();
  return (
    <AppShell
      items={items}
      company={buyerCompany}
      roleLabel="Buyer"
      title="Buyer workspace"
      subtitle="Source recycled textile material locally"
    />
  );
}
