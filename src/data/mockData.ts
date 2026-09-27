export type Listing = {
  id: string;
  supplier: string;
  materialType: string;
  composition: string;
  condition: string;
  quantityKg: number;
  location: string;
  availableFrom: string;
  status: "Available" | "Reserved";
};

export type Requirement = {
  id: string;
  buyer: string;
  materialType: string;
  composition: string;
  minCondition: string;
  quantityKg: number;
  city: string;
  maxDistanceKm: number;
  requiredBy: string;
};

export type Match = {
  supplier: string;
  quantityKg: number;
  composition: string;
  condition: string;
  location: string;
  distanceKm: number;
  score: number;
  reasons: string[];
  verified: boolean;
};

export type TimelineStep = {
  label: string;
  state: "completed" | "active" | "upcoming";
};

export const SUPPLIER_COMPANY = "ABC Textiles";
export const BUYER_COMPANY = "GreenFiber Industries";

export const landingStats = [
  { label: "demo demand", value: "500 kg" },
  { label: "verified suppliers", value: "2" },
  { label: "supply model", value: "Local-first circular" },
];

export const initialListings: Listing[] = [
  {
    id: "L-2041",
    supplier: SUPPLIER_COMPANY,
    materialType: "Textile Scrap",
    composition: "100% Cotton",
    condition: "Clean",
    quantityKg: 320,
    location: "Surat",
    availableFrom: "2026-10-05",
    status: "Available",
  },
];

export const initialRequirement: Requirement = {
  id: "R-7712",
  buyer: BUYER_COMPANY,
  materialType: "Textile Scrap",
  composition: "100% Cotton",
  minCondition: "Clean",
  quantityKg: 500,
  city: "Surat",
  maxDistanceKm: 50,
  requiredBy: "2026-10-20",
};

export const smartMatches: Match[] = [
  {
    supplier: "ABC Textiles",
    quantityKg: 320,
    composition: "100% Cotton",
    condition: "Clean",
    location: "Surat",
    distanceKm: 12,
    score: 97,
    verified: true,
    reasons: [
      "Exact 100% Cotton match",
      "Clean condition",
      "Available before required date",
      "Nearby supplier",
    ],
  },
  {
    supplier: "XYZ Garments",
    quantityKg: 180,
    composition: "100% Cotton",
    condition: "Clean",
    location: "Surat",
    distanceKm: 20,
    score: 95,
    verified: true,
    reasons: [
      "Exact 100% Cotton match",
      "Clean condition",
      "Available before required date",
      "Nearby supplier",
    ],
  },
];

export const ORDER_ID = "SM-1048";

export const logisticsTimeline: TimelineStep[] = [
  { label: "Order confirmed", state: "completed" },
  { label: "Pickup scheduled", state: "active" },
  { label: "Material collected", state: "upcoming" },
  { label: "Delivered to buyer", state: "upcoming" },
];

export const materialTypes = ["Textile Scrap", "Yarn Waste", "Cut Offs", "Post-industrial Fabric"];
export const compositions = ["100% Cotton", "Cotton / Polyester Blend", "100% Polyester", "Viscose"];
export const conditions = ["Clean", "Sorted", "Mixed", "Unsorted"];
