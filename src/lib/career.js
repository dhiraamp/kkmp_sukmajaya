export const CATEGORIES = [
  { key: "pos_cabang", label: "Pos Cabang Koperasi" },
  { key: "logistik", label: "Logistik & Armada" },
  { key: "gudang", label: "Gudang Pusat" },
  { key: "lainnya", label: "Lainnya (KKMP)" },
];

export function categoryLabel(key) {
  if (key === "sppg") return "Pos Cabang Koperasi";
  return CATEGORIES.find((c) => c.key === key)?.label || key || "Lainnya";
}

export function categoryColor(key) {
  switch (key) {
    case "pos_cabang":
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