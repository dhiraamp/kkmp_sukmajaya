import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Minus, RefreshCw, ShoppingBasket, MapPinned, Globe, ArrowRight } from "lucide-react";

const bapokting = [
  { name: "Beras Premium (5kg)", current: 74500, prev: 72000, change: 2500, pct: 3.47 },
  { name: "Beras Medium (1kg)", current: 15000, prev: 14800, change: 200, pct: 1.35 },
  { name: "Minyak Goreng Sawit 2L", current: 36000, prev: 35000, change: 1000, pct: 2.86 },
  { name: "Bawang Merah Brebes", current: 38500, prev: 37000, change: 1500, pct: 4.05 },
  { name: "Bawang Putih Honan", current: 42000, prev: 40000, change: 2000, pct: 5.0 },
  { name: "Cabai Merah Keriting", current: 55000, prev: 48000, change: 7000, pct: 14.58 },
  { name: "Cabai Rawit Merah", current: 62000, prev: 58000, change: 4000, pct: 6.9 },
  { name: "Daging Sapi Murni", current: 135000, prev: 132000, change: 3000, pct: 2.27 },
  { name: "Daging Ayam Broiler", current: 35000, prev: 34000, change: 1000, pct: 2.94 },
  { name: "Telur Ayam Ras (1kg)", current: 29000, prev: 28000, change: 1000, pct: 3.57 },
  { name: "Gula Pasir Kristal 1kg", current: 17500, prev: 17500, change: 0, pct: 0 },
  { name: "Tepung Terigu Segitiga", current: 12500, prev: 12500, change: 0, pct: 0 },
  { name: "Mentega Blue Band 200g", current: 11500, prev: 11500, change: 0, pct: 0 },
  { name: "Mie Instan Indomie Goreng", current: 3200, prev: 3100, change: 100, pct: 3.23 },
  { name: "Gas LPG 3kg", current: 22000, prev: 21500, change: 500, pct: 2.33 },
];

const rekapKomoditiDepok = [
  { no: 1, item: "Beras Premium Setra Ramos", cabangTersedia: 8, kurang: 0, tidakTersedia: 0, penyerapan: "4.200 Kg", harga: "Rp 14.900/Kg", total: "Rp 62.580.000" },
  { no: 2, item: "Minyak Goreng Sawit 2L", cabangTersedia: 7, kurang: 1, tidakTersedia: 0, penyerapan: "1.850 Pouch", harga: "Rp 34.000/Pouch", total: "Rp 62.900.000" },
  { no: 3, item: "Mentega Margarin Blue Band", cabangTersedia: 8, kurang: 0, tidakTersedia: 0, penyerapan: "960 Sachet", harga: "Rp 11.500/Sachet", total: "Rp 11.040.000" },
  { no: 4, item: "Telur Ayam Negeri Segar", cabangTersedia: 8, kurang: 0, tidakTersedia: 0, penyerapan: "1.450 Kg", harga: "Rp 29.000/Kg", total: "Rp 42.050.000" },
  { no: 5, item: "Daging Sapi Segar Khas Depok", cabangTersedia: 6, kurang: 2, tidakTersedia: 0, penyerapan: "380 Kg", harga: "Rp 135.000/Kg", total: "Rp 51.300.000" },
];

const formatRp = (n) => `Rp ${Number(n || 0).toLocaleString("id-ID")}`;

export default function AdminBapokting() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("harga");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">Monitoring Harga Bahan Pokok Penting (Bapokting)</h2>
          <p className="text-muted-foreground">Data harga pasar &amp; rekapitulasi komoditas pangan KKMP Kota Depok</p>
        </div>
        <Button
          size="sm"
          onClick={() => navigate("/admin/gis")}
          className="gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold self-start sm:self-auto"
        >
          <MapPinned className="w-3.5 h-3.5" /> Buka Peta Geospasial GIS
        </Button>
      </div>

      <div className="flex gap-2">
        <button onClick={() => setActiveTab("harga")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "harga" ? "bg-red-600 text-white" : "bg-muted hover:bg-muted/80"}`}>
          Harga Pasar Depok
        </button>
        <button onClick={() => setActiveTab("rekap")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "rekap" ? "bg-red-600 text-white" : "bg-muted hover:bg-muted/80"}`}>
          Rekap Komoditas Cabang
        </button>
      </div>

      {activeTab === "harga" && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <RefreshCw className="w-4 h-4" />
            <span>Terakhir diperbarui hari ini — Pasar Sukatani, Pasar Cisalak, dan Pasar Agung Kota Depok</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {bapokting.map((item, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-sm">{item.name}</span>
                    <Badge variant={item.change > 0 ? "destructive" : item.change < 0 ? "default" : "secondary"} className="text-xs">
                      {item.change > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : item.change < 0 ? <TrendingDown className="w-3 h-3 mr-1" /> : <Minus className="w-3 h-3 mr-1" />}
                      {item.pct > 0 ? `+${item.pct}%` : `${item.pct}%`}
                    </Badge>
                  </div>
                  <div className="text-lg font-bold">{formatRp(item.current)}</div>
                  <div className="text-xs text-muted-foreground">Sebelumnya: {formatRp(item.prev)} ({item.change > 0 ? `+${formatRp(item.change)}` : formatRp(item.change)})</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === "rekap" && (
        <div className="space-y-4">
          {/* Banner Komoditas KKMP Depok */}
          <div className="bg-gradient-to-r from-red-50 via-rose-50 to-red-50 border border-red-200/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Globe className="w-4 h-4 text-red-600" />
                <span className="text-xs font-bold text-red-900 uppercase tracking-wider">Jaringan Komoditas KKMP Depok</span>
                <Badge className="bg-red-100 text-red-800 text-[10px] font-semibold border-red-300">Live 8 Cabang</Badge>
              </div>
              <p className="text-xs text-red-800">
                Data komoditas terhubung secara langsung dari Gudang Induk Sukmajaya menuju 8 Pos Cabang Kelurahan di Kota Depok.
              </p>
            </div>
            <Button
              size="sm"
              onClick={() => navigate("/admin/gis")}
              className="gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shrink-0"
            >
              Lihat Peta Sebaran GIS <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <ShoppingBasket className="w-5 h-5 text-red-600" /> Rekap Penyerapan Komoditas — Jaringan KKMP Depok
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="text-left p-3 font-semibold">No</th>
                      <th className="text-left p-3 font-semibold">Komoditi</th>
                      <th className="text-center p-3 font-semibold">Pos Tersedia</th>
                      <th className="text-center p-3 font-semibold">Pos Kurang</th>
                      <th className="text-center p-3 font-semibold">Pos Kosong</th>
                      <th className="text-left p-3 font-semibold">Total Penyerapan</th>
                      <th className="text-left p-3 font-semibold">Harga/Satuan</th>
                      <th className="text-right p-3 font-semibold">Total Nilai</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rekapKomoditiDepok.map((row) => (
                      <tr key={row.no} className="border-b hover:bg-muted/20">
                        <td className="p-3">{row.no}</td>
                        <td className="p-3 font-medium">{row.item}</td>
                        <td className="p-3 text-center"><Badge className="bg-green-100 text-green-700">{row.cabangTersedia}</Badge></td>
                        <td className="p-3 text-center"><Badge className="bg-yellow-100 text-yellow-700">{row.kurang}</Badge></td>
                        <td className="p-3 text-center"><Badge className="bg-red-100 text-red-700">{row.tidakTersedia}</Badge></td>
                        <td className="p-3">{row.penyerapan}</td>
                        <td className="p-3 text-muted-foreground">{row.harga}</td>
                        <td className="p-3 text-right font-semibold text-red-600">{row.total}</td>
                      </tr>
                    ))}
                    <tr className="bg-red-50/50 font-bold">
                      <td colSpan={7} className="p-3 text-right">Total Nilai Perputaran</td>
                      <td className="p-3 text-right text-red-700">Rp 229.870.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}