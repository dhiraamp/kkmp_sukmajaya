import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import {
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Calculator,
  Scale,
  Sparkles,
  Info,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  curatePricePipeline,
  COMMODITY_HET_TABLE,
  PLATFORM_MARGIN_RATE,
} from "@/lib/pricing";

const priceData = [
  { month: "Jan", beras: 14000, ayam: 35000, cabai: 40000, telur: 26000 },
  { month: "Feb", beras: 14200, ayam: 36000, cabai: 55000, telur: 27000 },
  { month: "Mar", beras: 14100, ayam: 37000, cabai: 45000, telur: 27500 },
  { month: "Apr", beras: 14500, ayam: 38000, cabai: 60000, telur: 28000 },
  { month: "Mei", beras: 14300, ayam: 37500, cabai: 50000, telur: 28500 },
  { month: "Jun", beras: 14600, ayam: 39000, cabai: 45000, telur: 28000 },
];

const priceChanges = [
  { name: "Beras Premium", current: 14600, prev: 14300, unit: "kg" },
  { name: "Ayam Potong", current: 39000, prev: 37500, unit: "kg" },
  { name: "Cabai Merah", current: 45000, prev: 50000, unit: "kg" },
  { name: "Telur Ayam", current: 28000, prev: 28500, unit: "kg" },
  { name: "Minyak Goreng", current: 18500, prev: 18000, unit: "liter" },
  { name: "Gula Pasir", current: 15200, prev: 15000, unit: "kg" },
];

const formatRp = (n) => `Rp ${Number(n || 0).toLocaleString("id-ID")}`;

const PRESET_COMMODITIES = [
  { id: "beras", name: "Beras Premium (kg)", defaultPrice: 11500 },
  { id: "minyak", name: "Minyak Goreng Pouch 2L", defaultPrice: 28000 },
  { id: "telur", name: "Telur Ayam Ras (kg)", defaultPrice: 22000 },
  { id: "daging-ayam", name: "Daging Ayam Ras Segar (kg)", defaultPrice: 29000 },
  { id: "gula", name: "Gula Pasir Konsumsi (kg)", defaultPrice: 13000 },
  { id: "cabai", name: "Cabai Merah Keriting (kg)", defaultPrice: 38000 },
  { id: "bawang", name: "Bawang Merah Brebes (kg)", defaultPrice: 30000 },
];

export default function AdminInflation() {
  const [selectedCommodity, setSelectedCommodity] = useState(PRESET_COMMODITIES[0]);
  const [testInputPrice, setTestInputPrice] = useState("10000");

  const curationResult = curatePricePipeline({
    basePrice: Number(testInputPrice) || 0,
    productName: selectedCommodity.name,
    category: "sembako",
  });

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-bold">Laporan Inflasi & Kurasi Harga Pasar Depok</h2>
          <p className="text-muted-foreground">
            Monitoring fluktuasi harga bahan pokok dan kepatuhan plafon HET Badan Pangan Nasional di Kota Depok
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white gap-1 px-3 py-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Modul 3.2 Kurasi Harga Aktif
          </Badge>
          <Badge variant="outline" className="border-emerald-300 text-emerald-800 bg-emerald-50">
            Margin Otomatis: {(PLATFORM_MARGIN_RATE * 100).toFixed(0)}%
          </Badge>
        </div>
      </div>

      {/* ─── SECTION 3.2 MODUL KURASI HARGA & OTOMASI MARGIN ─── */}
      <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30">
        <CardHeader className="pb-3 border-b border-emerald-100">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-600 text-white shadow-sm">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-base text-emerald-950 font-bold">
                  3.2 Modul Kurasi Harga & Otomasi Margin PINBAS
                </CardTitle>
                <p className="text-xs text-emerald-700">
                  Simulasi 5 tahap kurasi: Input Penawaran Awal → Verifikasi Algoritmik → Margin (+25%) → Pemindaian Plafon HET → Publikasi Marketplace
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-medium text-emerald-800">Contoh Cepat:</span>
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs bg-white border-emerald-300 hover:bg-emerald-50 text-emerald-800 font-semibold"
                onClick={() => setTestInputPrice("10000")}
              >
                Rp 10.000
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs bg-white border-emerald-300 hover:bg-emerald-50 text-emerald-800 font-semibold"
                onClick={() => setTestInputPrice("20000")}
              >
                Rp 20.000
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-emerald-950">Pilih Komoditas Referensi</Label>
              <Select
                value={selectedCommodity.id}
                onValueChange={(val) => {
                  const found = PRESET_COMMODITIES.find((c) => c.id === val);
                  if (found) {
                    setSelectedCommodity(found);
                    setTestInputPrice(String(found.defaultPrice));
                  }
                }}
              >
                <SelectTrigger className="bg-white border-emerald-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PRESET_COMMODITIES.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-emerald-950">
                Input Harga Penawaran Awal Supplier (Tahap 1)
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500">Rp</span>
                <Input
                  type="number"
                  value={testInputPrice}
                  onChange={(e) => setTestInputPrice(e.target.value)}
                  placeholder="10000"
                  className="pl-9 bg-white border-emerald-200 font-semibold"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-emerald-950">Plafon Regulasi HET Komoditas</Label>
              <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-100/60 border border-emerald-200 text-xs text-emerald-900 font-semibold h-10">
                <span>{curationResult.stage4_het_scan.commodity_rule}</span>
                <Badge variant="outline" className="bg-white text-emerald-900 border-emerald-300 font-bold">
                  {formatRp(curationResult.stage4_het_scan.het_limit)}
                </Badge>
              </div>
            </div>
          </div>

          {/* 5 Tahapan Pipeline Visual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
            {/* Tahap 1 */}
            <div className="p-3 bg-white border border-emerald-200 rounded-xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Tahap 1</span>
                  <Badge variant="outline" className="text-[10px] bg-slate-50 border-slate-200">Input</Badge>
                </div>
                <h5 className="font-semibold text-xs text-gray-900 mt-1">Penawaran Supplier</h5>
                <p className="text-[11px] text-muted-foreground mt-0.5">Diajukan oleh mitra/supplier</p>
              </div>
              <p className="text-base font-bold text-gray-900 mt-3 pt-2 border-t border-dashed border-gray-200">
                {formatRp(curationResult.stage1_input.base_price)}
              </p>
            </div>

            {/* Tahap 2 */}
            <div className="p-3 bg-white border border-emerald-200 rounded-xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Tahap 2</span>
                  <Badge variant="outline" className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-200">Algoritmik</Badge>
                </div>
                <h5 className="font-semibold text-xs text-gray-900 mt-1">Verifikasi KGN/PINBAS</h5>
                <p className="text-[11px] text-muted-foreground mt-0.5">Pemeriksaan kelayakan harga</p>
              </div>
              <div className="mt-3 pt-2 border-t border-dashed border-gray-200 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Terverifikasi Layak</span>
              </div>
            </div>

            {/* Tahap 3 */}
            <div className="p-3 bg-white border border-emerald-200 rounded-xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Tahap 3</span>
                  <Badge variant="outline" className="text-[10px] bg-blue-50 text-blue-700 border-blue-200">+25% Margin</Badge>
                </div>
                <h5 className="font-semibold text-xs text-gray-900 mt-1">Kalkulasi Margin</h5>
                <p className="text-[11px] text-muted-foreground mt-0.5">Penambahan margin/fee syariah</p>
              </div>
              <div className="mt-3 pt-2 border-t border-dashed border-gray-200">
                <p className="text-xs text-blue-600 font-semibold">+{formatRp(curationResult.stage3_calculation.margin_nominal)}</p>
                <p className="text-sm font-bold text-gray-800">{formatRp(curationResult.stage3_calculation.price_with_margin)}</p>
              </div>
            </div>

            {/* Tahap 4 */}
            <div className={`p-3 bg-white rounded-xl flex flex-col justify-between shadow-sm border ${
              curationResult.stage4_het_scan.is_adjusted
                ? "border-amber-300 bg-amber-50/20"
                : "border-emerald-200"
            }`}>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Tahap 4</span>
                  <Badge
                    variant="outline"
                    className={`text-[10px] ${
                      curationResult.stage4_het_scan.is_adjusted
                        ? "bg-amber-100 text-amber-800 border-amber-300 font-semibold"
                        : "bg-emerald-50 text-emerald-700 border-emerald-200"
                    }`}
                  >
                    {curationResult.stage4_het_scan.is_adjusted ? "Auto-Capped" : "Patuh HET"}
                  </Badge>
                </div>
                <h5 className="font-semibold text-xs text-gray-900 mt-1">Pemindaian HET</h5>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  Batas maks: {formatRp(curationResult.stage4_het_scan.het_limit)}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-dashed border-gray-200">
                <span className={`text-xs font-semibold ${
                  curationResult.stage4_het_scan.is_adjusted ? "text-amber-700" : "text-emerald-700"
                }`}>
                  {curationResult.stage4_het_scan.is_adjusted
                    ? "Dibatasi ke Plafon HET"
                    : "Di Bawah Batas Plafon HET"}
                </span>
              </div>
            </div>

            {/* Tahap 5 */}
            <div className="p-3 bg-emerald-700 text-white rounded-xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider">Tahap 5</span>
                  <Badge className="text-[10px] bg-white text-emerald-800 hover:bg-white font-bold">Terbit</Badge>
                </div>
                <h5 className="font-bold text-xs text-white mt-1">Publikasi Marketplace</h5>
                <p className="text-[11px] text-emerald-100 mt-0.5">Harga final kepada konsumen</p>
              </div>
              <p className="text-lg font-extrabold text-white mt-3 pt-2 border-t border-emerald-600">
                {formatRp(curationResult.stage5_publication.final_price)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ─── TABEL REGULASI HET RESMI KOMODITAS PANGAN DEPOK ─── */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-emerald-700" />
              <CardTitle className="text-base">
                Tabel Referensi HET (Harga Eceran Tertinggi) Komoditas Pangan Kota Depok
              </CardTitle>
            </div>
            <p className="text-xs text-muted-foreground">
              Sumber: Regulasi Badan Pangan Nasional (Bapanas) & Dinas Perdagangan Kota Depok
            </p>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Komoditas Pokok</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Satuan</TableHead>
                <TableHead>Plafon HET Maksimal</TableHead>
                <TableHead>Dasar Hukum / Regulasi</TableHead>
                <TableHead>Status Kebijakan</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMMODITY_HET_TABLE.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-semibold text-gray-900">{row.subItem}</TableCell>
                  <TableCell className="capitalize text-xs text-muted-foreground">{row.category}</TableCell>
                  <TableCell className="text-xs">{row.unit}</TableCell>
                  <TableCell className="font-bold text-emerald-800">{formatRp(row.het)}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{row.source}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-800 border-emerald-300 text-[11px]">
                      <CheckCircle2 className="w-3 h-3 mr-1 inline" /> Wajib Patuh
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* ─── TREND HARGA PASAR & INFLASI ─── */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Trend Harga Bahan Pokok Konsumen Kota Depok</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={(v) => `${(v/1000)}k`} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(v) => `Rp ${Number(v).toLocaleString("id-ID")}`} />
                <Line type="monotone" dataKey="beras" stroke="hsl(217, 91%, 50%)" strokeWidth={2} name="Beras" />
                <Line type="monotone" dataKey="ayam" stroke="hsl(160, 84%, 39%)" strokeWidth={2} name="Ayam" />
                <Line type="monotone" dataKey="cabai" stroke="hsl(0, 84%, 60%)" strokeWidth={2} name="Cabai" />
                <Line type="monotone" dataKey="telur" stroke="hsl(38, 92%, 50%)" strokeWidth={2} name="Telur" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {priceChanges.map((item, i) => {
          const change = ((item.current - item.prev) / item.prev * 100).toFixed(1);
          const isUp = item.current > item.prev;
          return (
            <Card key={i} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{item.name}</p>
                  <p className="text-xl font-bold mt-1">Rp {item.current.toLocaleString("id-ID")}<span className="text-xs font-normal text-muted-foreground">/{item.unit}</span></p>
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${isUp ? "text-red-600" : "text-green-600"}`}>
                  {isUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {isUp ? "+" : ""}{change}%
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}