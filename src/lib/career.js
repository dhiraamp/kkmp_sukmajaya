export const CATEGORIES = [
  { key: "pos_cabang", label: "Pos Cabang KKMP" },
  { key: "logistik", label: "Logistik & Armada" },
  { key: "gudang", label: "Gudang Induk KKMP" },
  { key: "lainnya", label: "Lainnya (KKMP)" },
];

export function categoryLabel(key) {
  if (key === "sppg" || key === "pos_cabang" || key === "mitra") return "Pos Cabang KKMP";
  return CATEGORIES.find((c) => c.key === key)?.label || key || "Lainnya";
}

export function categoryColor(key) {
  switch (key) {
    case "pos_cabang":
    case "mitra":
    case "sppg":
      return "bg-red-600 text-white";
    case "logistik":
      return "bg-blue-600 text-white";
    case "gudang":
      return "bg-amber-600 text-white";
    default:
      return "bg-slate-700 text-white";
  }
}

export function statusLabel(status) {
  return status === "open" ? "Dibuka" : "Ditutup";
}