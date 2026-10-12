import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, UserPlus } from "lucide-react";

import SupplierRegForm from "@/components/register/SupplierRegForm";
import MitraRegForm from "@/components/register/MitraRegForm";
import LogistikRegForm from "@/components/register/LogistikRegForm";
import WargaRegForm from "@/components/register/WargaRegForm";

const roleTitles = {
  supplier: "Pendaftaran Supplier / Pemasok",
  mitra: "Pendaftaran Koperasi Cabang / Pos KKMP",
  logistik: "Pendaftaran Logistik & Armada",
  penerima: "Pendaftaran Anggota Koperasi",
  warga: "Pendaftaran Anggota Koperasi",
  anggota: "Pendaftaran Anggota Koperasi",
};

export default function Register() {
  const { role } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-rose-700 to-slate-900" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-400/25 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-rose-400/25 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <img
              src="/images/logo_pinbas.png"
              alt="PINBAS MUI Kota Depok"
              className="h-16 w-auto object-contain bg-white rounded-2xl p-2 shadow-xl border border-white/40"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm">
            PINBAS MUI KOTA DEPOK
          </h1>
          <p className="text-white/90 mt-1 text-xs sm:text-sm font-semibold tracking-wide">
            PUSAT INKUBASI BISNIS SYARIAH
          </p>
          <p className="text-white/75 text-xs italic mt-0.5">
            Empowering People and Connecting
          </p>
        </div>

        <Card className="border-0 shadow-2xl bg-white/98 backdrop-blur-xl rounded-2xl">
          <CardHeader className="pb-3">
            <button
              onClick={() => navigate("/portal")}
              className="flex items-center text-xs font-semibold text-gray-500 hover:text-red-600 transition-colors mb-2 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Kembali ke Portal
            </button>
            <CardTitle className="flex items-center gap-2 text-gray-900 text-base">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shrink-0">
                <UserPlus className="w-4 h-4 text-white" />
              </div>
              {roleTitles[role] || "Pendaftaran Anggota"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {role === "supplier" && <SupplierRegForm onSuccess={() => navigate("/supplier/dashboard")} />}
            {role === "mitra" && <MitraRegForm onSuccess={() => navigate("/mitra/dashboard")} />}
            {role === "logistik" && <LogistikRegForm onSuccess={() => navigate("/logistik/dashboard")} />}
            {(role === "penerima" || role === "warga" || role === "anggota") && (
              <WargaRegForm onSuccess={() => navigate("/warga/profil")} />
            )}
          </CardContent>
        </Card>
        <p className="text-center text-white/80 text-xs mt-4">
          &copy; 2026 PINBAS MUI Kota Depok &bull; Pusat Inkubasi Bisnis Syariah
        </p>
      </motion.div>
    </div>
  );
}