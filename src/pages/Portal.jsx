// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  Store,
  Users,
  ArrowRight,
  Eye,
  EyeOff,
  ShoppingBag,
  Award,
  Sparkles,
  Building2,
  KeyRound,
} from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useAuth } from "@/lib/AuthContext";
import { getDashboardPath } from "@/lib/rolePaths";
import { toast } from "sonner";

export const ROLES = [
  {
    id: "admin",
    label: "Koperasi Induk Mekarjaya",
    shortLabel: "Koperasi Induk",
    icon: Award,
    color: "from-red-700 to-rose-900",
    borderActive: "border-red-700 ring-2 ring-red-700/20 bg-red-50/60",
    desc: "Pengelola Gudang Pusat KKMP (Manajemen produk, stok dan order)",
    defaultEmail: "admin.induk@kkmp-depok.id",
    defaultPassword: "demo 1 2 3 4",
  },
  {
    id: "mitra",
    label: "Koperasi Cabang / Pos KKMP",
    shortLabel: "Koperasi Cabang",
    icon: Store,
    color: "from-orange-600 to-red-600",
    borderActive: "border-orange-600 ring-2 ring-orange-600/20 bg-orange-50/60",
    desc: "Pengelola 8 cabang/pos koperasi lokal Kota Depok (Penerimaan & distribusi produk)",
    defaultEmail: "cabang.beji@kkmp-depok.id",
    defaultPassword: "demo 1 2 3 4",
  },
  {
    id: "penerima",
    label: "Anggota Koperasi",
    shortLabel: "Anggota",
    icon: ShieldCheck,
    color: "from-purple-600 to-indigo-700",
    borderActive: "border-purple-600 ring-2 ring-purple-600/20 bg-purple-50/60",
    desc: "Anggota resmi terdaftar Koperasi Merah Putih untuk belanja hemat",
    defaultEmail: "anggota.depok@kkmp-depok.id",
    defaultPassword: "demo 1 2 3 4",
  },
  {
    id: "supplier",
    label: "Supplier & Produsen",
    shortLabel: "Supplier",
    icon: Users,
    color: "from-emerald-600 to-teal-700",
    borderActive: "border-emerald-600 ring-2 ring-emerald-600/20 bg-emerald-50/60",
    desc: "Pemasok komoditas & produk UMKM anggota/non-anggota ke Gudang Pusat",
    defaultEmail: "supplier.pangan@kkmp-depok.id",
    defaultPassword: "demo 1 2 3 4",
  },
  {
    id: "logistik",
    label: "Logistik & Distribusi",
    shortLabel: "Logistik",
    icon: Truck,
    color: "from-blue-600 to-indigo-700",
    borderActive: "border-blue-600 ring-2 ring-blue-600/20 bg-blue-50/60",
    desc: "Armada internal pengiriman barang dari Gudang Pusat ke 8 Cabang Depok",
    defaultEmail: "logistik@kkmp-depok.id",
    defaultPassword: "demo 1 2 3 4",
  },
];

export default function Portal() {
  const navigate = useNavigate();
  const { user, isAuthenticated, checkUserAuth } = useAuth();
  const [selectedRole, setSelectedRole] = useState("admin");
  const [email, setEmail] = useState("admin.induk@kkmp-depok.id");
  const [password, setPassword] = useState("demo 1 2 3 4");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const currentRole = ROLES.find((r) => r.id === selectedRole) || ROLES[0];

  useEffect(() => {
    if (isAuthenticated && user) {
      const intended = localStorage.getItem("kkmp_intended") || localStorage.getItem("smartmbg_intended");
      if (intended && intended !== "/portal" && intended !== "/") {
        localStorage.removeItem("kkmp_intended");
        localStorage.removeItem("smartmbg_intended");
        navigate(intended, { replace: true });
      }
    }
  }, [isAuthenticated, user, navigate]);

  const handleSelectRole = (r) => {
    setSelectedRole(r.id);
    setEmail(r.defaultEmail);
    setPassword(r.defaultPassword);
    setLoginError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");

    if (!email || !email.trim()) {
      toast.error("Validasi Gagal", { description: "Harap masukkan alamat email akun Anda" });
      setLoginError("Harap masukkan alamat email akun Anda");
      return;
    }
    if (!password || !password.trim()) {
      toast.error("Validasi Gagal", { description: "Harap masukkan kata sandi Anda" });
      setLoginError("Harap masukkan kata sandi Anda");
      return;
    }

    setLoading(true);
    try {
      const loggedUser = await base44.auth.loginViaEmailPassword(email.trim(), password, selectedRole);
      const userRole = loggedUser.role || selectedRole;
      localStorage.setItem("kkmp_role", userRole);
      localStorage.setItem("kkmp_login_email", email.trim());
      // Backwards compatibility
      localStorage.setItem("smartmbg_role", userRole);
      localStorage.setItem("smartmbg_login_email", email.trim());
      await checkUserAuth();

      const intended = localStorage.getItem("kkmp_intended") || localStorage.getItem("smartmbg_intended");
      if (intended && intended !== "/portal" && intended !== "/") {
        localStorage.removeItem("kkmp_intended");
        localStorage.removeItem("smartmbg_intended");
        navigate(intended, { replace: true });
      } else {
        toast.success("Berhasil Masuk!", {
          description: `Selamat datang di Koperasi Merah Putih Mekarjaya, masuk sebagai ${currentRole.label}.`,
        });
        navigate(getDashboardPath(userRole), { replace: true });
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Email atau kata sandi tidak cocok. Silakan coba kembali.";
      setLoginError(msg);
      toast.error("Gagal Masuk", { description: msg, duration: 5000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 text-foreground flex flex-col justify-between relative overflow-hidden">
      {/* Background Decor Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header Navbar */}
      <header className="relative z-20 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shadow-lg border border-white/20">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
              <path d="M20 6L6 17H11V32H29V17H34L20 6Z" fill="white" fillOpacity="0.95" />
              <circle cx="20" cy="20" r="2.8" fill="#dc2626" />
              <path d="M15 28C15 24.5 17 23.5 20 23.5C23 23.5 25 24.5 25 28" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-white">KOPERASI MERAH PUTIH</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                Mekarjaya &bull; Kota Depok
              </span>
            </div>
            <p className="text-[11px] text-white/60 hidden sm:block">
              Sistem Integrasi Rantai Pasok Koperasi Kelurahan Merah Putih (KKMP)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/marketplace"
            className="text-xs font-semibold text-white/90 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <ShoppingBag className="w-4 h-4 text-red-400" />
            <span>Marketplace</span>
          </Link>
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/30 text-[11px] text-red-200">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
            8 Cabang Depok Aktif
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 py-8 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Sisi Kiri: Hero Banner Informasi Depok KKMP */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-red-400" />
                Portal Resmi Koperasi Merah Putih Mekarjaya
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Dari Koperasi, Untuk Anggota, Membangun Depok
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Pusat integrasi rantai pasok antara <strong>Supplier</strong>, <strong>Gudang Pusat Mekarjaya</strong>, 
                <strong>Armada Logistik</strong>, <strong>8 Cabang Depok</strong>, dan <strong>Seluruh Anggota Koperasi</strong>.
              </p>
            </motion.div>

            {/* Quick Metrics Bar 5 Simpul Rantai Pasok */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
            >
              <div className="bg-slate-900/70 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-[11px] text-slate-400 font-medium">Koperasi Induk</p>
                <p className="text-2xl font-black text-red-400 mt-0.5">1</p>
                <p className="text-[10px] text-red-300/80">Pusat Mekarjaya</p>
              </div>

              <div className="bg-slate-900/70 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-[11px] text-slate-400 font-medium">Cabang Depok</p>
                <p className="text-2xl font-black text-orange-400 mt-0.5">8</p>
                <p className="text-[10px] text-orange-300/80">Pos & Gerai Lokal</p>
              </div>

              <div className="bg-slate-900/70 border border-white/10 rounded-xl p-3 backdrop-blur-sm col-span-2 sm:col-span-1">
                <p className="text-[11px] text-slate-400 font-medium">Anggota Terdaftar</p>
                <p className="text-2xl font-black text-purple-400 mt-0.5">10,000+</p>
                <p className="text-[10px] text-purple-300/80">Khusus Anggota</p>
              </div>
            </motion.div>

            {/* Quick Action Links & Demo Info */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 max-w-md mx-auto lg:mx-0 flex items-center gap-2.5">
              <KeyRound className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Kredensial Akses Demo untuk semua role: <strong className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded">demo 1 2 3 4</strong>
              </span>
            </div>
          </div>

          {/* Sisi Kanan: Form Login Peran (Role-Based Form) */}
          <div className="lg:col-span-6 w-full max-w-md mx-auto">
            <Card className="border border-white/15 shadow-2xl bg-white/98 backdrop-blur-xl rounded-2xl overflow-hidden">
              <CardContent className="p-6 sm:p-7 space-y-5">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 tracking-tight">Pilih Peran Akses Sistem</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Pilih salah satu dari 5 peran resmi KKMP Kota Depok di bawah:
                  </p>
                </div>

                {/* Role Selector Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {ROLES.map((r) => {
                    const Icon = r.icon;
                    const isSelected = selectedRole === r.id;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => handleSelectRole(r)}
                        className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? r.borderActive
                            : "border-gray-200 hover:border-gray-300 bg-gray-50/50 hover:bg-gray-100/50"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center mb-1.5 ${
                            isSelected ? "bg-red-600 text-white shadow-xs" : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className={`text-[11px] font-bold leading-tight ${isSelected ? "text-red-700" : "text-gray-700"}`}>
                          {r.shortLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Role Description Card */}
                <div className="p-2.5 bg-red-50/70 border border-red-100 rounded-xl text-xs text-red-900">
                  <p className="font-bold flex items-center justify-between">
                    <span>{currentRole.label}</span>
                    <span className="text-[10px] text-red-600 font-mono">Role: {currentRole.id}</span>
                  </p>
                  <p className="text-[11px] text-red-700/85 mt-0.5">{currentRole.desc}</p>
                </div>

                {/* Form Login */}
                <form onSubmit={handleLogin} className="space-y-3.5">
                  <div className="space-y-1">
                    <Label className="text-xs font-semibold text-gray-700">Email Akun</Label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={currentRole.defaultEmail}
                      className="h-10 rounded-xl bg-white border-gray-300 text-xs focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Label className="text-xs font-semibold text-gray-700">Kata Sandi</Label>
                      <span className="text-[10px] text-slate-400">Demo: demo 1 2 3 4</span>
                    </div>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="demo 1 2 3 4"
                        className="h-10 rounded-xl bg-white border-gray-300 text-xs pr-10 focus:ring-red-500 focus:border-red-500 font-mono"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {loginError && (
                    <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl p-2.5 text-center font-medium">
                      {loginError}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    {loading ? "Memverifikasi Akses..." : `Masuk sebagai ${currentRole.shortLabel}`}
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </form>

                {/* Footer Register Link */}
                {selectedRole !== "admin" && (
                  <div className="text-center pt-2 border-t text-xs text-slate-500">
                    Belum terdaftar sebagai {currentRole.shortLabel}?{" "}
                    <button
                      type="button"
                      onClick={() => navigate(`/register/${selectedRole}`)}
                      className="text-red-700 font-bold hover:underline cursor-pointer"
                    >
                      Daftar Baru
                    </button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer Hak Cipta */}
      <footer className="relative z-10 w-full py-4 px-4 text-center border-t border-white/10 bg-slate-950/50 text-xs text-slate-400">
        <p>
          &copy; 2026 <strong>Koperasi Kelurahan Merah Putih (KKMP) Mekarjaya</strong> &bull; Kota Depok
        </p>
      </footer>
    </div>
  );
}
