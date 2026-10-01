import { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { AlertTriangle, X, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StockAlertBanner({ userEmail, posName, sppgName }) {
  const effectivePosName = posName || sppgName;
  const [alerts, setAlerts] = useState([]);
  const [dismissed, setDismissed] = useState({});
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (!userEmail && !effectivePosName) return;

    // Get current week label
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const weekNum = Math.ceil(((now - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7);
    const currentWeekLabel = `${now.getFullYear()}-W${String(weekNum).padStart(2, "0")}`;

    base44.entities.StockAlert.filter({ status: "active", week_label: currentWeekLabel }, "-created_date", 20)
      .then(data => {
        // Filter only alerts that affect this Pos Cabang KKMP
        const relevant = data.filter(a => {
          const list = a.affected_pos || a.affected_sppg;
          if (!Array.isArray(list)) return false;
          return list.some(s =>
            (s.pos_id || s.sppg_id) === userEmail ||
            (effectivePosName && (s.pos_name || s.sppg_name)?.toLowerCase() === effectivePosName?.toLowerCase())
          );
        });
        setAlerts(relevant);
      });
  }, [userEmail, effectivePosName]);

  if (alerts.length === 0) return null;

  const visible = alerts.filter(a => !dismissed[a.id]);
  if (visible.length === 0) return null;

  return (
    <div className="bg-red-50 border border-red-200 rounded-xl overflow-hidden mb-4">
      <div
        className="flex items-center justify-between px-4 py-2.5 bg-red-100 cursor-pointer"
        onClick={() => setExpanded(e => !e)}
      >
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-600 animate-pulse" />
          <span className="font-bold text-red-800 text-sm">
            ⚠️ Alert Kekurangan Stok ({visible.length} item)
          </span>
          <Badge className="bg-red-600 text-white text-xs">{visible.length}</Badge>
        </div>
        {expanded ? <ChevronUp className="w-4 h-4 text-red-600" /> : <ChevronDown className="w-4 h-4 text-red-600" />}
      </div>

      {expanded && (
        <div className="p-3 space-y-2">
          {visible.map(alert => (
            <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-red-100">
              <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-red-800">
                  Stok <span className="underline">{alert.product_name}</span> tidak mencukupi!
                </p>
                <p className="text-xs text-red-600 mt-0.5">
                  Dibutuhkan <strong>{alert.total_needed} {alert.unit}</strong> oleh {alert.pos_count || alert.sppg_count || 1} Pos Cabang KKMP,
                  hanya tersedia <strong>{alert.stock_available} {alert.unit}</strong>
                  {alert.shortage > 0 && ` (kurang ${alert.shortage} ${alert.unit})`}.
                </p>
                <div className="mt-1.5 p-2 rounded bg-amber-50 border border-amber-200">
                  <p className="text-xs text-amber-800 font-medium">
                    💡 Koordinasikan dengan Gudang Pusat Sukmajaya untuk jadwal pasokan ulang <strong>{alert.product_name}</strong>.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setDismissed(d => ({ ...d, [alert.id]: true }))}
                className="text-red-300 hover:text-red-600 shrink-0 mt-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}