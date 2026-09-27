import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard, PackagePlus, Truck } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import type { NavItem } from "@/components/Sidebar";
import { useDemo } from "@/lib/demo-store";

const items: NavItem[] = [
  { label: "Overview", to: "/supplier", icon: LayoutDashboard, exact: true },
  { label: "List Scrap", to: "/supplier/list-scrap", icon: PackagePlus },
  { label: "Logistics", to: "/supplier/logistics", icon: Truck },
];

export const Route = createFileRoute("/supplier")({
  component: SupplierLayout,
});

function SupplierLayout() {
  const { supplierCompany } = useDemo();
  return (
    <AppShell
      items={items}
      company={supplierCompany}
      roleLabel="Supplier"
      title="Supplier workspace"
      subtitle="Manage surplus textile scrap lots"
    />
  );
}
