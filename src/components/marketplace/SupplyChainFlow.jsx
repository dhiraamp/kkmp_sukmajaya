import React, { useState } from "react";
import { ArrowRight, Truck, Store, Users, Building2, Handshake, Network, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function SupplyChainFlow() {
  const [showArchModal, setShowArchModal] = useState(false);

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
      title: "Koperasi Induk Sukmajaya",
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="text-base sm:text-lg font-black text-gray-900 tracking-tight">
                Alur Rantai Pasok Terintegrasi KKMP Kota Depok
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Distribusi terstruktur dari supplier hingga ke tangan anggota koperasi melalui 8 pos cabang
              </p>
            </div>

            <button
              onClick={() => setShowArchModal(true)}
              className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold border border-red-200 transition-colors shadow-2xs"
            >
              <Network className="w-3.5 h-3.5" />
              <span>Lihat Mind Map Arsitektur</span>
              <Eye className="w-3 h-3 text-red-500" />
            </button>
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

      {/* Modal Mind Map Arsitektur Rantai Pasok */}
      <Dialog open={showArchModal} onOpenChange={setShowArchModal}>
        <DialogContent className="max-w-4xl w-[95vw] p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Network className="w-5 h-5 text-red-600" />
              Mind Mapping Architecture Sistem Marketplace KKMP Kota Depok
            </DialogTitle>
            <DialogDescription className="text-xs text-gray-500">
              Skema menyeluruh integrasi supplier, koperasi induk Sukmajaya, zonasi logistik, 8 cabang kelurahan, dan transaksi anggota.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-3 rounded-xl border border-gray-200 overflow-hidden bg-slate-50 flex items-center justify-center">
            <img
              src="/images/alur.jpeg"
              alt="Mind Mapping Architecture Sistem Marketplace Koperasi Merah Putih Kota Depok"
              className="w-full h-auto object-contain rounded-lg"
              loading="lazy"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
