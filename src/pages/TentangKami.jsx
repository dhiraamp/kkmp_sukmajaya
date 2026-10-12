import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Building2,
  Users,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  HeartHandshake,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Mail,
  Clock,
  Sparkles,
  ArrowRight,
  Store,
} from "lucide-react";
import HomeHeader from "@/components/marketplace/HomeHeader";
import FooterStats from "@/components/marketplace/FooterStats";

export default function TentangKami() {
  const PILARS = [
    {
      icon: Users,
      title: "1. Peningkatan Kapasitas SDM",
      subtitle: "Edukasi & Kompetensi Berkelanjutan",
      desc: "Menyelenggarakan pelatihan manajerial, literasi keuangan syariah, dan pembinaan kompetensi teknis bagi pengelola koperasi, pelaku UMKM, dan santripreneur agar mampu mengelola bisnis secara profesional dan berintegritas.",
      badge: "Kapasitas & Literasi",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
    {
      icon: TrendingUp,
      title: "2. Pendampingan Usaha UMKM",
      subtitle: "Inkubasi & Standardisasi Halal",
      desc: "Melakukan kurasi produk, fasilitasi sertifikasi halal, standarisasi kemasan dan mutu, serta pendampingan langsung agar pelaku usaha mikro dan kecil memiliki daya saing tinggi dan akses pasar yang lebih luas.",
      badge: "Inkubasi & Kurasi",
      badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
    },
    {
      icon: Building2,
      title: "3. Penguatan Kelembagaan",
      subtitle: "Kemandirian Koperasi Syariah",
      desc: "Memperkokoh tata kelola kelembagaan koperasi syariah agar semakin mandiri, akuntabel, dan berdaya saing tinggi dalam menghadapi dinamika pasar dan memajukan kesejahteraan anggota.",
      badge: "Tata Kelola & Legalitas",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    },
    {
      icon: Cpu,
      title: "4. Fasilitasi Teknologi Digital",
      subtitle: "Digitalisasi Rantai Pasok",
      desc: "Menghadirkan platform digital terintegrasi yang menghubungkan supplier produsen halal, pos cabang, armada logistik, dan konsumen anggota dalam satu sistem yang transparan dan efisien.",
      badge: "Digital Rantai Pasok",
      badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
    },
  ];

  const DEPUTIES = [
    {
      role: "Sekretariat PINBAS",
      focus: "Arah Kebijakan & Kemitraan Strategis",
      desc: "Mengoordinasikan perumusan kebijakan, tata kelola organisasi, konsolidasi program nasional & daerah, serta membangun sinergi multipihak bersama pemerintah, forum koperasi, dan akademisi.",
      icon: Award,
    },
    {
      role: "Deputi Pelayanan PINBAS",
      focus: "Pemberdayaan Usaha & Layanan Anggota",
      desc: "Bertanggung jawab atas program pendampingan lapangan UMKM, pelatihan usaha syariah, fasilitasi legalitas halal, dan pelayanan kebutuhan harian anggota melalui pos cabang.",
      icon: HeartHandshake,
    },
    {
      role: "Deputi Fasilitasi Teknologi",
      focus: "Inovasi Sistem & Platform Digital",
      desc: "Mengembangkan arsitektur teknologi informasi, platform marketplace syariah, monitoring pasokan komoditas, dan pelacakan logistik halal secara real-time.",
      icon: Cpu,
    },
  ];

  const COOPERATIVE_TYPES = [
    {
      abbr: "BMT",
      name: "Baitul Maal wat Tamwil",
      desc: "Lembaga keuangan mikro syariah yang menghimpun dana sosial dan menjalankan pembiayaan produktif sektor riil.",
    },
    {
      abbr: "BTM",
      name: "Baitut Tamwil Muhammadiyah",
      desc: "Gerakan ekonomi umat yang memfokuskan pembiayaan syariah bagi wirausahawan kecil dan menengah.",
    },
    {
      abbr: "Kopsyah",
      name: "Koperasi Syariah",
      desc: "Koperasi serba usaha dan simpan pinjam berbasis akad-akad syariah berkeadilan dan bebas riba.",
    },
    {
      abbr: "Kopontren",
      name: "Koperasi Pondok Pesantren",
      desc: "Kemandirian ekonomi pesantren melalui unit usaha santripreneur dan distribusi kebutuhan masyarakat sekitar.",
    },
    {
      abbr: "KJKS",
      name: "Koperasi Jasa Keuangan Syariah",
      desc: "Penyedia intermediasi permodalan dan jasa keuangan syariah yang mengedepankan kemaslahatan bersama.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <HomeHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-bold tracking-wide">
                  <Award className="w-4 h-4 text-emerald-300" />
                  <span>MAJELIS ULAMA INDONESIA (MUI)</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  Pusat Inkubasi Bisnis Syariah <br />
                  <span className="text-emerald-300">(PINBAS)</span>
                </h1>

                <p className="text-base sm:text-lg text-emerald-100 font-medium italic">
                  “Empowering People and Connecting”
                </p>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  Memperkuat peran strategis dalam pengembangan ekonomi umat berbasis syariah. Melalui pelaksanaan mandat organisasi, PINBAS mendorong penguatan UMKM dan koperasi syariah dengan pendekatan berkeadilan, berkelanjutan, dan berdampak luas bagi masyarakat.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="#mandat-organisasi"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-950 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition shadow-md"
                  >
                    <span>Pelajari Mandat &amp; Pilar</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://muijatim.or.id/2026/01/07/pinbas-mui-jatim-perkuat-sinergi-pengembangan-koperasi-syariah-berkelanjutan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-800 border border-emerald-400/30 text-white font-semibold text-xs sm:text-sm transition"
                  >
                    <span>Sumber Rilis Berita MUI</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Logo Card Showcase */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl flex flex-col items-center text-center max-w-sm">
                <div className="bg-white p-4 rounded-2xl shadow-lg mb-4">
                  <img
                    src="/images/logo_pinbas.png"
                    alt="Logo Resmi PINBAS MUI"
                    className="h-28 w-auto object-contain"
                  />
                </div>
                <h3 className="font-bold text-base text-white">PINBAS MUI KOTA DEPOK</h3>
                <p className="text-xs text-emerald-200 mt-1">Pusat Inkubasi Bisnis Syariah</p>
                <div className="mt-4 pt-4 border-t border-white/15 w-full flex items-center justify-between text-xs text-slate-300">
                  <span>Naungan:</span>
                  <span className="font-bold text-white">MUI Kota Depok</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mandat Organisasi & Visi Misi */}
        <section id="mandat-organisasi" className="py-14 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-extrabold uppercase text-emerald-700 tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Mandat Resmi Organisasi
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                  Membangun Ekosistem Bisnis Syariah yang Inklusif &amp; Berkeadilan
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pusat Inkubasi Bisnis Syariah (PINBAS) didirikan dengan mandat khusus untuk menjadi lokomotif kebangkitan ekonomi umat. PINBAS berfokus pada pendampingan pelaku usaha mikro, kecil, dan menengah (UMKM) serta penguatan pilar koperasi syariah di berbagai daerah.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Koperasi dan UMKM diposisikan sebagai pilar penting dalam memperkuat ketahanan ekonomi umat. Dengan memadukan prinsip syariah, integritas kelembagaan, serta adopsi teknologi modern, PINBAS mengawal terwujudnya kemakmuran bersama yang berlandaskan nilai keadilan dan kemaslahatan (*mashlahah*).
                </p>
                
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-gray-900">Nilai Keadilan</div>
                      <div className="text-[11px] text-gray-500">Bebas riba, spekulasi (gharar), dan eksploitasi pasar.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-gray-900">Kemaslahatan Umat</div>
                      <div className="text-[11px] text-gray-500">Membawa dampak nyata bagi kesejahteraan masyarakat luas.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kutipan Resmi Artikel MUI */}
              <div className="lg:col-span-6">
                <div className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white rounded-3xl border border-emerald-200 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    <span className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
                      Amanat Rapat Kerja Forum Koperasi Syariah 2026
                    </span>
                  </div>

                  <blockquote className="text-base sm:text-lg text-emerald-950 font-medium leading-relaxed italic border-l-4 border-emerald-600 pl-4 my-4">
                    “Melalui kolaborasi dengan Forum Koperasi Syariah, PINBAS berkomitmen menghadirkan ekosistem inkubasi bisnis syariah yang terintegrasi, mulai dari peningkatan kapasitas sumber daya manusia, pendampingan usaha, hingga penguatan kelembagaan koperasi syariah agar semakin mandiri, profesional, dan berdaya saing.”
                  </blockquote>

                  <div className="pt-3 border-t border-emerald-200/80 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-emerald-900">Pusat Inkubasi Bisnis Syariah (PINBAS)</div>
                      <div className="text-gray-500">Majelis Ulama Indonesia</div>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-md">
                      Tahun 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pilar Utama Ekosistem */}
        <section className="py-14 bg-slate-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-extrabold uppercase text-emerald-700 tracking-wider">
                Strategi Terintegrasi
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                4 Pilar Ekosistem Inkubasi Bisnis Syariah
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Empat fokus aksi terpadu yang dijalankan PINBAS untuk memperkuat daya saing dan kemandirian usaha umat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PILARS.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${p.badgeColor}`}>
                          {p.badge}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">{p.title}</h3>
                      <p className="text-xs font-semibold text-emerald-700 mt-0.5">{p.subtitle}</p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">{p.desc}</p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Standar Pendampingan Mutu PINBAS MUI</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Struktur Jajaran Pengurus & Deputi */}
        <section className="py-14 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-extrabold uppercase text-emerald-700 tracking-wider">
                Kepengurusan &amp; Peran
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                Jajaran Struktur &amp; Deputi PINBAS
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Sinergi tiga pilar kepengurusan dalam mengawal kebijakan, operasional layanan, dan transformasi digital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DEPUTIES.map((dep, idx) => {
                const Icon = dep.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50/80 rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:bg-white hover:border-emerald-300 transition shadow-2xs"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900">{dep.role}</h3>
                      <div className="text-xs font-semibold text-emerald-700 mt-1">{dep.focus}</div>
                      <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">{dep.desc}</p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-gray-200 text-[11px] text-gray-500 font-medium">
                      Koordinasi PINBAS &bull; Majelis Ulama Indonesia
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Jejaring 93 Koperasi Syariah */}
        <section className="py-14 bg-slate-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-extrabold uppercase text-emerald-700 tracking-wider">
                Jejaring Sinergi Kemitraan
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                Forum Koperasi Syariah (93+ Kemitraan Koperasi)
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Diikuti oleh ratusan pelaku dan pengelola koperasi yang bersinergi dalam membangun ekonomi syariah yang inklusif dan berkelanjutan:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {COOPERATIVE_TYPES.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs hover:border-emerald-300 transition flex flex-col justify-between"
                >
                  <div>
                    <span className="text-sm font-black text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg inline-block">
                      {c.abbr}
                    </span>
                    <h4 className="text-sm font-bold text-gray-900 mt-3 leading-snug">{c.name}</h4>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">{c.desc}</p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-gray-100 text-[10px] text-gray-400 font-medium">
                    Mitra Forum Koperasi Syariah
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-emerald-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-bold text-sm sm:text-base">Ingin Bergabung dalam Ekosistem PINBAS?</h4>
                <p className="text-xs text-emerald-200">
                  Daftarkan koperasi, UMKM, atau komunitas Anda ke jaringan pos cabang dan mitra resmi PINBAS MUI.
                </p>
              </div>
              <Link
                to="/portal"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-950 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition shrink-0 shadow-md"
              >
                <span>Daftar / Akses Portal Peran</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Informasi Sekretariat & Rilis Berita */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Kolom Berita Rilis Resmi */}
              <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-gray-200 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                    Rilis Berita Resmi
                  </span>
                  <span className="text-xs text-gray-400">Rabu, 7 Jan 2026</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  PINBAS MUI Perkuat Sinergi Pengembangan Koperasi Syariah Berkelanjutan
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Rapat Kerja Forum Koperasi Syariah Tahun 2026 yang dihadiri 93 koperasi syariah (BMT, BTM, Kopsyah, Kopontren, KJKS) di Alana Hotel Surabaya menegaskan peran vital koperasi sebagai pilar ketahanan ekonomi umat. Jajaran PINBAS menegaskan komitmen menghadirkan ekosistem inkubasi bisnis syariah yang terintegrasi dari hulu ke hilir.
                </p>

                <div className="pt-2">
                  <a
                    href="https://muijatim.or.id/2026/01/07/pinbas-mui-jatim-perkuat-sinergi-pengembangan-koperasi-syariah-berkelanjutan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    <span>Baca Rilis Asli Selengkapnya di Portal MUI Jatim</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Kolom Sekretariat & Jam Layanan */}
              <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-emerald-400" />
                  <span>Sekretariat PINBAS MUI Kota Depok</span>
                </h3>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Gedung MUI Kota Depok, Jl. Nusantara Raya No. 1, Kota Depok, Jawa Barat</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>sekretariat@pinbas-depok.id</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Senin - Sabtu: 08:00 - 17:00 WIB</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                  Melayani konsultasi kelembagaan koperasi syariah, pendaftaran produk UMKM, dan permohonan kemitraan pos cabang.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterStats />
    </div>
  );
}
