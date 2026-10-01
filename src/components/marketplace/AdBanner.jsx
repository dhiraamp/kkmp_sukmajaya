import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const ADS = [
  {
    title: "Daftar Jadi Anggota Koperasi Merah Putih",
    desc: "Dapatkan harga khusus sembako dan dividen SHU tahunan untuk seluruh warga Kota Depok.",
    buttonText: "Daftar Anggota",
    gradient: "from-red-600 to-rose-500",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400",
  },
  {
    title: "Jadi Supplier Terverifikasi KKMP Depok",
    desc: "Petani dan UMKM lokal Depok memasok bahan pangan pokok ke 8 Pos Cabang Kelurahan.",
    buttonText: "Daftar Jadi Supplier",
    gradient: "from-rose-600 to-red-500",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
  },
  {
    title: "Jaringan Distribusi Pangan Rakyat Sukamaja & Sukmajaya",
    desc: "Bergabung memperkuat kedaulatan pangan dan koperasi mandiri di Kota Depok.",
    buttonText: "Lihat Jaringan Cabang",
    gradient: "from-red-700 to-rose-600",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400",
  },
  {
    title: "Kemitraan Pos Cabang Koperasi Kelurahan",
    desc: "KKMP menghubungkan Anda dengan rantai pasok komoditas pangan pokok terpercaya.",
    buttonText: "Diskusikan Peluangnya",
    gradient: "from-amber-600 to-orange-500",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400",
  },
];

export default function AdBanner() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % ADS.length), 4500);
    return () => clearInterval(timer);
  }, []);

  const ad = ADS[index];

  return (
    <div className="w-full">
      <div className="relative w-full aspect-[722/116] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
        <div className={`absolute inset-0 bg-gradient-to-br ${ad.gradient}`} />
        <img
          src={ad.imageUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 flex items-center gap-6 px-6"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-semibold text-white bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm">IKLAN</span>
                <span className="text-[10px] text-white/80">{index + 1} / {ADS.length}</span>
              </div>
              <p className="text-white text-lg font-extrabold leading-tight line-clamp-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                {ad.title}
              </p>
              <p className="text-white/90 text-xs leading-snug line-clamp-1 mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                {ad.desc}
              </p>
            </div>
            <button
              onClick={() => navigate("/portal")}
              className="shrink-0 bg-white text-emerald-700 text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-md hover:bg-emerald-50 hover:scale-105 transition-all duration-200"
            >
              {ad.buttonText} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-2">
        {ADS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-200 ${i === index ? "w-5 bg-emerald-600" : "w-1.5 bg-gray-300 hover:bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}
