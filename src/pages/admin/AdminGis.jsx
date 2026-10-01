import React, { useState } from "react";
import GisMap from "@/components/marketplace/GisMap";
import GisImportModal from "@/components/admin/GisImportModal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPinned,
  Globe,
  SlidersHorizontal,
  ExternalLink,
  ShieldCheck,
  Download,
  Utensils,
  School,
  Factory,
  Route,
} from "lucide-react";
import { getGisData, exportToGeoJson } from "@/api/gisService";

export default function AdminGis() {
  const [modalOpen, setModalOpen] = useState(false);
  const [gisData, setGisData] = useState(() => getGisData());

  const handleExport = () => {
    const geoJson = exportToGeoJson();
    const blob = new Blob([JSON.stringify(geoJson, null, 2)], { type: "application/geo+json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kkmp-gis-depok-${new Date().toISOString().slice(0, 10)}.geojson`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const dapurCount = (gisData.dapur || []).length;
  const sekolahCount = (gisData.sekolah || []).length;
  const supplierCount = (gisData.supplier || []).length;
  const jalurCount = (gisData.jalur || []).length;

  return (
    <div className="space-y-6">
      {/* Header Admin GIS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Peta Geospasial Jaringan 8 Cabang KKMP Depok</h2>
            <Badge className="bg-red-50 text-red-700 border-red-300 gap-1 text-xs">
              <Globe className="w-3.5 h-3.5 text-red-600" />
              KKMP Kota Depok
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm mt-1">
            Manajemen data spasial Gudang Pusat Sukmajaya, 8 Pos Cabang, dan Rute Logistik se-Kota Depok
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExport}
            className="gap-1.5 text-xs font-medium cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-gray-600" /> Ekspor GeoJSON
          </Button>

          <Button
            size="sm"
            onClick={() => setModalOpen(true)}
            className="gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-sm cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" /> Kelola Titik Cabang
          </Button>
        </div>
      </div>

      {/* Ringkasan Titik Spasial */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Card className="border-red-200/80 bg-red-50/40">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Pos Cabang KKMP</p>
              <p className="text-xl font-bold text-gray-900">{dapurCount || 8} Titik</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200/80 bg-blue-50/40">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              <School className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Titik Distribusi Anggota</p>
              <p className="text-xl font-bold text-gray-900">{sekolahCount} Lokasi</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-200/80 bg-amber-50/40">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold">
              <Factory className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Supplier Komoditas</p>
              <p className="text-xl font-bold text-gray-900">{supplierCount} Sentra</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200/80 bg-purple-50/40">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold">
              <Route className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Jalur Logistik Aktif</p>
              <p className="text-xl font-bold text-gray-900">{jalurCount} Koridor</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Komponen Peta GIS Interaktif */}
      <Card className="border-gray-200 shadow-sm overflow-hidden">
        <CardContent className="p-2 sm:p-4">
          <GisMap />
        </CardContent>
      </Card>

      {/* Modal Sinkronisasi Data */}
      <GisImportModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setGisData(getGisData());
        }}
        onImportSuccess={() => {
          setGisData(getGisData());
        }}
      />
    </div>
  );
}
