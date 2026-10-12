import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  UserPlus,
  ShieldCheck,
  Truck,
  Percent,
  Leaf,
  Search,
} from "lucide-react";

export default function HeroKoperasi({ onSearch }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  const PILLS = [
    {
      icon: ShieldCheck,
      title: "Produk Terpercaya",
      subtitle: "Dari Supplier Pilihan",
      iconBg: "bg-red-50 text-red-600",
    },
    {
      icon: Truck,
      title: "Distribusi Cepat",
      subtitle: "ke 8 Cabang Depok",
      iconBg: "bg-red-50 text-red-600",
    },
    {
      icon: Percent,
      title: "Harga Anggota",
      subtitle: "Lebih Hemat",
      iconBg: "bg-red-50 text-red-600",
    },
    {
      icon: Leaf,
      title: "Dukung UMKM",
      subtitle: "Anggota Koperasi",
      iconBg: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-rose-50/50 via-white to-white pt-6 pb-2">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sisi Kiri: Tagline, Title, Dual Button, 4 Pills */}
          <div className="lg:col-span-6 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2.5"
            >
              <p className="text-xs sm:text-sm font-semibold text-emerald-700 tracking-wide">
                Pusat Inkubasi Bisnis Syariah &bull; MUI Kota Depok
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                PINBAS <br className="hidden sm:inline" />
                <span className="text-emerald-700">MUI Kota Depok</span>
              </h1>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                Pusat Inkubasi Bisnis Syariah (PINBAS) MUI Kota Depok. <span className="font-semibold italic text-emerald-800">Empowering People and Connecting</span> — Menyediakan kebutuhan pokok, sembako berkualitas, dan pemberdayaan produk UMKM binaan syariah.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <button
                onClick={() => {
                  const target = document.getElementById("katalog-produk-unggulan");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                  else navigate("/marketplace");
                }}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Mulai Belanja &rarr;</span>
              </button>

              <button
                onClick={() => navigate("/register/penerima")}
                className="flex items-center gap-2 bg-white hover:bg-red-50 text-red-600 border-2 border-red-500 font-bold text-sm px-5 py-3 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <UserPlus className="w-4 h-4" />
                <span>Daftar Anggota</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("tentang-kami");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else navigate("/tentang-kami");
                }}
                className="flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-sm px-4 py-3 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <span>Tentang PINBAS</span>
              </button>
            </motion.div>

            {/* 4 Value Pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2"
            >
              {PILLS.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-xl bg-white border border-gray-100 shadow-2xs"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${p.iconBg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-gray-900 truncate leading-tight">
                        {p.title}
                      </p>
                      <p className="text-[9px] text-gray-500 truncate leading-tight mt-0.5">
                        {p.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Sisi Kanan: Visual Hero Banner (Gedung Koperasi Sukmajaya, Truk, Kurir & Sembako) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-red-600 to-rose-700 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&auto=format&fit=crop&q=80"
                alt="PINBAS Pusat Inkubasi Bisnis Syariah MUI Kota Depok"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-35"
              />

              {/* Overlay Badge & Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-7 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-700 text-white tracking-wider border border-white/30">
                    PINBAS Induk Depok
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/20 text-white backdrop-blur-xs">
                    MUI Kota Depok
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black leading-tight text-white drop-shadow-md">
                  Pusat Inkubasi Bisnis Syariah &amp; Distribusi Komoditas
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 mt-1 max-w-md drop-shadow">
                  Empowering People and Connecting — Menghubungkan produsen halal dengan pos cabang di seluruh Kota Depok.
                </p>
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-lg border border-red-100 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
                  🇮🇩
                </div>
                <div>
                  <p className="text-xs font-black text-gray-900 leading-none">Kota Depok</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">8 Cabang Wilayah</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Search Bar di Bawah Hero - Exactly as in skema_web_kkmp_sukamaja.jpeg */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-7 max-w-3xl mx-auto"
        >
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-white rounded-2xl border-2 border-red-500/30 hover:border-red-500 shadow-md hover:shadow-lg p-1.5 transition-all"
          >
            <div className="pl-3 text-gray-400">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              id="search-input-hero"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari kebutuhan Anda (shampo, beras, mentega, mie instan, sabun, sembako)..."
              className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-hidden bg-transparent"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-colors cursor-pointer shrink-0"
            >
              Cari
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
