import React from "react";

export default function FooterStats() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="border-t border-white/10 py-6 text-center px-4">
        <p className="text-white text-sm font-semibold tracking-wide">
          KOPERASI KELURAHAN MERAH PUTIH BERSAMA (KKMP) — SUKMAJAYA KOTA DEPOK
        </p>
        <p className="text-xs text-red-400 font-medium mt-1">
          Sistem Integrasi Rantai Pasok Koperasi Induk & 8 Pos Cabang Wilayah
        </p>
        <p className="text-[11px] text-gray-500 mt-1.5">© 2026 KKMP Kota Depok — Koperasi Merah Putih Sukmajaya</p>
      </div>
    </footer>
  );
}