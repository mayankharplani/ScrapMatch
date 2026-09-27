export function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

export function formatKg(kg: number) {
  return `${kg.toLocaleString("en-IN")} kg`;
}

export function fulfillmentPercent(secured: number, required: number) {
  if (required <= 0) return 0;
  return Math.min(100, Math.round((secured / required) * 100));
}
