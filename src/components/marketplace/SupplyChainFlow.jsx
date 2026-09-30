import React from "react";
import { ArrowRight, Truck, Store, Users, Building2, Handshake } from "lucide-react";

export default function SupplyChainFlow() {
  const STEPS = [
    {
      roleId: "supplier",
      step: 1,
      title: "Supplier",
      desc: "Produk dari anggota maupun non anggota",
      color: "border-emerald-200 bg-emerald-50/60 text-emerald-900",
      badgeColor: "bg-emerald-600 text-white",
      icon: Handshake,
      iconColor: "text-emerald-600",
    },
    {
      roleId: "admin",
      step: 2,
      title: "Koperasi Induk Mekarjaya",
      desc: "Manajemen produk, stok dan order",
      color: "border-red-200 bg-red-50/60 text-red-900",
      badgeColor: "bg-red-600 text-white",
      icon: Building2,
      iconColor: "text-red-600",
    },
    {
      roleId: "logistik",
      step: 3,
      title: "Logistik & Distribusi",
      desc: "Pengiriman ke 8 cabang sesuai zona",
      color: "border-blue-200 bg-blue-50/60 text-blue-900",
      badgeColor: "bg-blue-600 text-white",
      icon: Truck,
      iconColor: "text-blue-600",
    },
    {
      roleId: "mitra",
      step: 4,
      title: "Koperasi Cabang (8 Cabang Depok)",
      desc: "Penerimaan dan distribusi produk",
      color: "border-orange-200 bg-orange-50/60 text-orange-900",
      badgeColor: "bg-orange-600 text-white",
      icon: Store,
      iconColor: "text-orange-600",
    },
    {
      roleId: "penerima",
      step: 5,
      title: "Anggota Koperasi",
      desc: "Menerima produk sesuai pesanan",
      color: "border-purple-200 bg-purple-50/60 text-purple-900",
      badgeColor: "bg-purple-600 text-white",
      icon: Users,
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-6 shadow-xs">
          <div className="mb-4 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-black text-gray-900 tracking-tight">
              Alur Rantai Pasok Terintegrasi KKMP Kota Depok
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Distribusi terstruktur dari supplier hingga ke tangan anggota koperasi melalui 8 pos cabang
            </p>
          </div>

          {/* 5 Step Container */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative items-center">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <React.Fragment key={s.title}>
                  <div
                    className={`relative p-3.5 rounded-2xl border transition-all hover:shadow-md ${s.color} flex flex-col justify-between h-full min-h-[110px]`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-xl bg-white shadow-2xs flex items-center justify-center shrink-0">
                        <Icon className={`w-4 h-4 ${s.iconColor}`} />
                      </div>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${s.badgeColor}`}>
                        Tahap {s.step}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-black leading-tight line-clamp-1">
                        {s.title}
                      </p>
                      <p className="text-[11px] opacity-80 leading-snug mt-1">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Arrow for Desktop between steps */}
                  {idx < STEPS.length - 1 && (
                    <div className="hidden md:flex absolute" style={{ left: `calc(${(idx + 1) * 20}% - 10px)` }}>
                      <span className="w-5 h-5 rounded-full bg-white border border-gray-200 shadow-2xs flex items-center justify-center text-gray-400 z-10">
                        <ArrowRight className="w-3 h-3 text-red-500" />
                      </span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
