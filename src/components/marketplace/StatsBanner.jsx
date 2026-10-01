import React from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Store, Users, Package, Handshake, ArrowRight } from "lucide-react";

export default function StatsBanner() {
  const navigate = useNavigate();

  const STATS = [
    {
      icon: Building2,
      count: "1",
      label: "Koperasi Induk",
      sub: "Sukmajaya Depok",
    },
    {
      icon: Store,
      count: "8",
      label: "Koperasi Cabang",
      sub: "di Kota Depok",
    },
    {
      icon: Users,
      count: "10,000+",
      label: "Anggota Koperasi",
      sub: "Mendapat Diskon",
    },
    {
      icon: Package,
      count: "500+",
      label: "Produk Tersedia",
      sub: "Komoditas & UMKM",
    },
    {
      icon: Handshake,
      count: "50+",
      label: "Supplier Terpercaya",
      sub: "Petani & Produsen",
    },
  ];

  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Sisi Kiri: 5 Counter Statistik */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-200/80 p-4 sm:p-5 shadow-xs grid grid-cols-2 sm:grid-cols-5 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {STATS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                    idx > 0 ? "pt-2 sm:pt-0 sm:pl-3" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-1.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                    {s.count}
                  </span>
                  <span className="text-xs font-bold text-gray-800 leading-tight mt-0.5">
                    {s.label}
                  </span>
                  <span className="text-[10px] text-gray-500 leading-tight mt-0.5">
                    {s.sub}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Sisi Kanan: Callout Card Rekrutmen Anggota */}
          <div className="lg:col-span-4 bg-gradient-to-r from-rose-50 to-red-50 border border-red-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-red-600 font-bold text-xs">
                <Users className="w-4 h-4" />
                <span>Belum menjadi anggota?</span>
              </div>
              <p className="text-[11px] text-gray-600 leading-snug">
                Daftar sekarang dan nikmati harga khusus anggota yang lebih hemat!
              </p>
            </div>

            <button
              onClick={() => navigate("/register/penerima")}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
            >
              <span>Daftar Anggota</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
