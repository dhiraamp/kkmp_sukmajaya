import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  HeartHandshake,
  CheckCircle2,
  ExternalLink,
  Award,
  BookOpen,
} from "lucide-react";

export default function TentangKamiSection() {
  const PILARS = [
    {
      icon: Users,
      title: "Peningkatan Kapasitas SDM",
      desc: "Pelatihan manajerial, peningkatan kompetensi pengelola, dan literasi ekonomi syariah berkelanjutan.",
      color: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      icon: TrendingUp,
      title: "Pendampingan Usaha UMKM",
      desc: "Inkubasi bisnis pelaku usaha mikro, kecil, dan menengah dengan pendekatan berkeadilan dan berdampak luas.",
      color: "from-blue-500 to-indigo-600",
      bgLight: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      icon: Building2,
      title: "Penguatan Kelembagaan",
      desc: "Mendorong koperasi syariah agar semakin mandiri, profesional, dan berdaya saing tinggi di pasar.",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      icon: Cpu,
      title: "Fasilitasi Teknologi Digital",
      desc: "Sistem rantai pasok terpadu, marketplace komoditas syariah, dan integrasi data antarpos cabang.",
      color: "from-purple-500 to-rose-600",
      bgLight: "bg-purple-50 text-purple-700 border-purple-200",
    },
  ];

  const COOP_NETWORKS = [
    { name: "BMT", label: "Baitul Maal wat Tamwil", desc: "Lembaga keuangan mikro syariah penggerak akar rumput" },
    { name: "BTM", label: "Baitut Tamwil Muhammadiyah", desc: "Jaringan pemberdayaan ekonomi umat terpercaya" },
    { name: "Kopsyah", label: "Koperasi Syariah", desc: "Koperasi berbasis tata kelola syariah berkeadilan" },
    { name: "Kopontren", label: "Koperasi Pondok Pesantren", desc: "Sentra kemandirian ekonomi pesantren & santripreneur" },
    { name: "KJKS", label: "Koperasi Jasa Keuangan Syariah", desc: "Layanan intermediasi permodalan usaha syariah" },
  ];

  return (
    <section id="tentang-kami" className="py-12 bg-white border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Bagian */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>MANDAT RESMI ORGANISASI PINBAS MUI</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
            Tentang Kami: Sinergi Pengembangan Ekonomi Umat Berkelanjutan
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Pusat Inkubasi Bisnis Syariah (PINBAS) Majelis Ulama Indonesia (MUI) terus memperkuat perannya dalam pengembangan ekonomi umat berbasis syariah. Melalui pendekatan yang berkeadilan, berkelanjutan, dan berdampak luas, PINBAS mewujudkan mandat organisasi untuk mendorong penguatan UMKM dan koperasi syariah.
          </p>
        </div>

        {/* Kutipan Resmi Forum Koperasi Syariah */}
        <div className="mt-8 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-300 flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4" /> Komitmen Ekosistem Terintegrasi
              </span>
              <blockquote className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-emerald-50 italic">
                “PINBAS berkomitmen menghadirkan ekosistem inkubasi bisnis syariah yang terintegrasi, mulai dari peningkatan kapasitas sumber daya manusia, pendampingan usaha, hingga penguatan kelembagaan koperasi syariah agar semakin mandiri, profesional, dan berdaya saing.”
              </blockquote>
              <p className="text-xs text-emerald-200 font-semibold pt-1">
                — Amanat Rapat Kerja Forum Koperasi Syariah (93 Koperasi se-Jawa Timur &amp; Sinergi Nasional PINBAS MUI)
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5 sm:flex-row lg:flex-col justify-end">
              <Link
                to="/tentang-kami"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-900 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition shadow-md"
              >
                <BookOpen className="w-4 h-4" />
                <span>Profil Lengkap PINBAS</span>
              </Link>
              <a
                href="https://muijatim.or.id/2026/01/07/pinbas-mui-jatim-perkuat-sinergi-pengembangan-koperasi-syariah-berkelanjutan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700/60 hover:bg-emerald-700 border border-emerald-400/40 text-white font-semibold text-xs sm:text-sm transition"
              >
                <span>Rilis Resmi Portal MUI</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pilar Ekosistem Inkubasi Bisnis Syariah */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">4 Pilar Utama Ekosistem Inkubasi PINBAS</h3>
              <p className="text-xs text-gray-500">Fondasi penguatan UMKM dan jaringan koperasi syariah</p>
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              Terintegrasi &amp; Berkelanjutan
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 hover:bg-white rounded-2xl border border-gray-200/90 p-5 transition-all hover:shadow-md hover:border-emerald-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${p.bgLight}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900">{p.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-200/60 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Standar Pelayanan Syariah</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Jaringan Kolaborasi Koperasi Syariah & Struktur Pengurus */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Kolaborasi 93+ Koperasi */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl border border-gray-200 p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-4 h-4 text-emerald-600" />
                <h4 className="text-sm sm:text-base font-bold text-gray-900">
                  Kolaborasi Jejaring Koperasi Syariah (93+ Kemitraan)
                </h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                PINBAS bersinergi dengan berbagai pemangku kepentingan koperasi sebagai pilar penting ketahanan ekonomi umat yang inklusif:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {COOP_NETWORKS.map((c, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-gray-200 p-3 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-emerald-800">{c.name}</span>
                      <span className="text-[10px] text-gray-400 font-medium">Binaan Syariah</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-800 mt-0.5">{c.label}</p>
                    <p className="text-[11px] text-gray-500 mt-1 leading-snug">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-gray-500 mt-4 pt-3 border-t border-gray-200">
              Membangun ekonomi syariah yang berlandaskan nilai-nilai <strong>keadilan</strong> dan <strong>kemaslahatan</strong> bagi seluruh umat.
            </p>
          </div>

          {/* Jajaran Pengurus & Deputi */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-50 via-white to-teal-50/40 rounded-2xl border border-emerald-200/80 p-5 sm:p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                  Tata Kelola &amp; Representasi
                </span>
                <h4 className="text-sm sm:text-base font-bold text-gray-900 mt-0.5">
                  Jajaran Kepengurusan &amp; Deputi PINBAS
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  Mengoordinasikan perumusan strategi, layanan operasional, serta fasilitasi rantai pasok digital:
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="bg-white rounded-xl border border-emerald-100 p-3 shadow-2xs">
                  <div className="text-xs font-bold text-emerald-900">Sekretaris PINBAS</div>
                  <div className="text-[11px] text-gray-600 mt-0.5">
                    Pengarah kebijakan strategis, konsolidasi kelembagaan, dan sinergi kemitraan regional &amp; daerah.
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-emerald-100 p-3 shadow-2xs">
                  <div className="text-xs font-bold text-emerald-900">Deputi Pelayanan PINBAS</div>
                  <div className="text-[11px] text-gray-600 mt-0.5">
                    Pendampingan usaha mikro, sertifikasi halal, pembinaan anggota, dan pelayanan pos cabang.
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-emerald-100 p-3 shadow-2xs">
                  <div className="text-xs font-bold text-emerald-900">Deputi Fasilitasi Teknologi PINBAS</div>
                  <div className="text-[11px] text-gray-600 mt-0.5">
                    Transformasi digital sistem rantai pasok, marketplace syariah, dan integrasi katalog komoditas.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-emerald-200/60 flex items-center justify-between text-xs">
              <span className="text-gray-500">Slogan Resmi:</span>
              <span className="font-bold text-emerald-800 italic">"Empowering People and Connecting"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
