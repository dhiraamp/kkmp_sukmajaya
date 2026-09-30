import React from "react";
import HomeHeader from "@/components/marketplace/HomeHeader";
import GisMap from "@/components/marketplace/GisMap";
import { Badge } from "@/components/ui/badge";
import { MapPinned, ShieldCheck, Building2, Store } from "lucide-react";

export default function GisPetaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <HomeHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        {/* Banner Pengantar Jaringan 8 Cabang Kota Depok */}
        <div className="bg-gradient-to-r from-red-800 via-rose-700 to-red-900 rounded-3xl text-white p-6 sm:p-8 mb-8 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge className="bg-red-500/30 text-red-100 border border-red-400/40 px-3 py-1 text-xs font-semibold backdrop-blur-md gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-red-300" />
                Gudang Pusat Mekarjaya
              </Badge>
              <Badge className="bg-rose-500/30 text-rose-100 border border-rose-400/40 px-3 py-1 text-xs font-semibold backdrop-blur-md gap-1.5">
                <Store className="w-3.5 h-3.5 text-rose-200" />
                Tersebar di 8 Cabang Kota Depok
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
              Peta Persebaran Jaringan Pos & Cabang Koperasi
            </h1>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed mb-4">
              Pemetaan geospasial rantai pasok Koperasi Kelurahan Merah Putih (KKMP) Kota Depok. Menghubungkan Gudang Pusat Mekarjaya dengan 8 pos cabang kelurahan (Beji, Margonda, Pancoran Mas, Sukmajaya, Cilodong, Cimanggis, Sawangan, Tapos) dan rute logistik pengantaran komoditas.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-rose-200 pt-2 border-t border-red-600/60">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-rose-300" />
                <span>Status Jaringan: <strong>8 Pos Cabang Aktif Terintegrasi</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Peta GIS Lengkap */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200/80 p-4 sm:p-6">
          <GisMap />
        </div>
      </main>
    </div>
  );
}
