import React from "react";

export default function FooterStats() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="border-t border-white/10 py-6 text-center px-4 flex flex-col items-center">
        <div className="mb-3">
          <img
            src="/images/logo_pinbas.png"
            alt="PINBAS MUI Kota Depok"
            className="h-10 w-auto object-contain bg-white rounded-lg px-2 py-1"
          />
        </div>
        <p className="text-white text-sm font-semibold tracking-wide">
          PUSAT INKUBASI BISNIS SYARIAH (PINBAS) — MUI KOTA DEPOK
        </p>
        <p className="text-xs text-emerald-400 font-medium mt-1">
          Empowering People and Connecting — Ekosistem Rantai Pasok Syariah & UMKM Kota Depok
        </p>
        <p className="text-[11px] text-gray-500 mt-1.5">© 2026 PINBAS MUI Kota Depok — Pusat Inkubasi Bisnis Syariah</p>
      </div>
    </footer>
  );
}