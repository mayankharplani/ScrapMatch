import * as React from "react";
import {
  BUYER_COMPANY,
  SUPPLIER_COMPANY,
  initialListings,
  initialRequirement,
  logisticsTimeline,
  type Listing,
  type Requirement,
  type TimelineStep,
} from "@/data/mockData";

type DemoState = {
  supplierCompany: string;
  buyerCompany: string;
  listings: Listing[];
  requirement: Requirement;
  orderConfirmed: boolean;
  timeline: TimelineStep[];
  signIn: (role: "supplier" | "buyer", company: string) => void;
  addListing: (listing: Omit<Listing, "id" | "supplier" | "status">) => void;
  setRequirement: (req: Omit<Requirement, "id" | "buyer">) => void;
  confirmOrder: () => void;
  reset: () => void;
};

const DemoContext = React.createContext<DemoState | null>(null);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [supplierCompany, setSupplierCompany] = React.useState(SUPPLIER_COMPANY);
  const [buyerCompany, setBuyerCompany] = React.useState(BUYER_COMPANY);
  const [listings, setListings] = React.useState<Listing[]>(initialListings);
  const [requirement, setRequirementState] = React.useState<Requirement>(initialRequirement);
  const [orderConfirmed, setOrderConfirmed] = React.useState(false);

  const value: DemoState = {
    supplierCompany,
    buyerCompany,
    listings,
    requirement,
    orderConfirmed,
    timeline: logisticsTimeline,
    signIn: (role, company) => {
      if (!company.trim()) return;
      if (role === "supplier") setSupplierCompany(company);
      else setBuyerCompany(company);
    },
    addListing: (listing) =>
      setListings((prev) => [
        {
          ...listing,
          id: `L-${2042 + prev.length}`,
          supplier: supplierCompany,
          status: "Available",
        },
        ...prev,
      ]),
    setRequirement: (req) => setRequirementState({ ...req, id: requirement.id, buyer: buyerCompany }),
    confirmOrder: () => setOrderConfirmed(true),
    reset: () => {
      setListings(initialListings);
      setRequirementState(initialRequirement);
      setOrderConfirmed(false);
    },
  };

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const ctx = React.useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used inside DemoProvider");
  return ctx;
}
