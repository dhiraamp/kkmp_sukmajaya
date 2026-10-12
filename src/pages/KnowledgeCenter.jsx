import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Search, X, CalendarDays, FileText } from "lucide-react";
import HomeHeader from "@/components/marketplace/HomeHeader";
import FooterStats from "@/components/marketplace/FooterStats";

const CATEGORIES = [
  { key: "Semua", label: "Semua" },
  { key: "pengembangan", label: "Pengembangan", color: "bg-emerald-600 text-white" },
  { key: "panduan", label: "Panduan", color: "bg-blue-600 text-white" },
  { key: "regulasi", label: "Regulasi", color: "bg-amber-600 text-white" },
  { key: "sumberdaya", label: "Sumber Daya", color: "bg-purple-600 text-white" },
];

const catLabel = (key) => CATEGORIES.find((c) => c.key === key)?.label || key;
const catColor = (key) => CATEGORIES.find((c) => c.key === key)?.color || "bg-gray-500 text-white";

const DATA = [
  {
    id: "pinbas-1",
    category: "pengembangan",
    title: "PINBAS MUI Perkuat Sinergi Pengembangan Koperasi Syariah Berkelanjutan",
    excerpt: "Rapat Kerja Forum Koperasi Syariah 2026 menegaskan komitmen menghadirkan ekosistem inkubasi bisnis syariah yang terintegrasi.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
    date: "2026-01-07",
    author: "Sekretariat PINBAS MUI",
    body: "Pusat Inkubasi Bisnis Syariah (PINBAS) Majelis Ulama Indonesia terus memperkuat perannya dalam pengembangan ekonomi umat berbasis syariah. Melalui sinergi bersama 93 koperasi syariah (BMT, BTM, Kopsyah, Kopontren, KJKS), PINBAS berkomitmen menghadirkan ekosistem inkubasi bisnis syariah yang terintegrasi, mulai dari peningkatan kapasitas sumber daya manusia, pendampingan usaha, hingga penguatan kelembagaan agar mandiri, profesional, dan berdaya saing.",
  },
  {
    id: "pinbas-2",
    category: "pengembangan",
    title: "Pemberdayaan Produk UMKM & Inkubasi Bisnis Syariah Berkeadilan",
    excerpt: "PINBAS mendorong penguatan UMKM binaan melalui sertifikasi halal, standarisasi kemasan, dan perluasan akses pasar.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
    date: "2026-01-06",
    author: "Deputi Pelayanan PINBAS",
    body: "Pelaksanaan mandat organisasi PINBAS diwujudkan melalui pendampingan komprehensif bagi pelaku UMKM. Melalui kurasi mutu dan fasilitasi legalitas halal, produk lokal dapat diserap secara optimal oleh jaringan pos cabang dan marketplace syariah.",
  },
  {
    id: "pinbas-3",
    category: "pengembangan",
    title: "Digitalisasi Rantai Pasok Syariah & Fasilitasi Teknologi Terpadu",
    excerpt: "Sistem digital PINBAS mengintegrasikan supplier halal, gudang pusat, logistik distribusi, dan pos cabang kelurahan secara transparan.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
    date: "2026-01-05",
    author: "Deputi Fasilitasi Teknologi PINBAS",
    body: "Penerapan sistem digital terpadu mempermudah monitoring stok komoditas pangan halal, pemrosesan pesanan otomatis, pelacakan pengiriman logistik, dan akuntabilitas transaksi ekonomi umat.",
  },
  {
    id: "panduan-1",
    category: "panduan",
    title: "Panduan Sinergi & Kemitraan Forum Koperasi Syariah",
    excerpt: "Mekanisme pengajuan kemitraan bagi BMT, BTM, Kopsyah, Kopontren, dan KJKS ke dalam jaringan PINBAS.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    date: "2026-01-04",
    author: "Deputi Pelayanan PINBAS",
    body: "1) Daftarkan kelembagaan koperasi melalui portal peran. 2) Ikuti asesmen tata kelola dan kurasi produk binaan. 3) Hubungkan operasional pos cabang dengan platform distribusi PINBAS. 4) Salurkan kebutuhan pokok berharga hemat kepada anggota.",
  },
  {
    id: "panduan-2",
    category: "panduan",
    title: "Panduan Standardisasi Mutu Halal & Higienitas Komoditas",
    excerpt: "Prosedur penjaminan mutu beras, minyak goreng, telur, dan daging di jaringan rantai pasok PINBAS.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
    date: "2026-01-03",
    author: "Tim Mutu Syariah PINBAS",
    body: "Setiap komoditas yang disalurkan melalui PINBAS wajib memenuhi kriteria halal dan thayyib. Pemeriksaan berkala dilakukan pada asal-usul pasokan, tanggal kedaluwarsa, dan higienitas penyimpanan gudang.",
  },
  {
    id: "panduan-3",
    category: "panduan",
    title: "Panduan Keanggotaan & Manfaat Belanja Hemat Komunitas",
    excerpt: "Manfaat menjadi anggota terdaftar PINBAS MUI untuk belanja sembako dan komoditas bermutu.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800",
    date: "2026-01-02",
    author: "Sekretariat PINBAS",
    body: "Anggota resmi PINBAS menikmati harga hemat di bawah harga pasar, kepastian ketersediaan komoditas halal, serta prioritas mengikuti pelatihan kewirausahaan dan inkubasi usaha mandiri.",
  },
  {
    id: "regulasi-1",
    category: "regulasi",
    title: "Mandat Kelembagaan Majelis Ulama Indonesia dalam Ekonomi Umat",
    excerpt: "Landasan amanat PINBAS sebagai badan inkubasi ekonomi syariah yang berkeadilan dan inklusif.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    date: "2026-01-01",
    author: "Dewan Pengawas PINBAS",
    body: "PINBAS menjalankan mandat MUI untuk mewujudkan kemandirian ekonomi umat melalui sinergi kelembagaan, perlindungan konsumen syariah, serta pemberdayaan usaha mikro berbasis nilai-nilai Islam.",
  },
  {
    id: "regulasi-2",
    category: "regulasi",
    title: "Prinsip Akad Muamalah & Keadilan Transaksi Bebas Riba",
    excerpt: "Ketentuan fikih muamalah yang melandasi transaksi rantai pasok dan pembiayaan koperasi syariah.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    date: "2025-12-28",
    author: "Dewan Syariah PINBAS",
    body: "Seluruh alur perdagangan diatur dengan akad jual beli yang transparan (murabahah, salam) tanpa unsur maisir, gharar, riba, dan tadlis, guna menjaga kemurnian rezeki dan keberkahan usaha.",
  },
  {
    id: "regulasi-3",
    category: "regulasi",
    title: "Tata Kelola Kelembagaan Koperasi Syariah yang Akuntabel (GCG)",
    excerpt: "Pedoman profesionalisme bagi pengurus BMT, Kopsyah, dan Kopontren dalam mengelola amanah anggota.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
    date: "2025-12-20",
    author: "Sekretariat PINBAS",
    body: "Penerapan Good Cooperative Governance mencakup transparansi pelaporan keuangan, audit syariah berkala, serta kepatuhan pada regulasi perkoperasian nasional demi ketahanan usaha jangka panjang.",
  },
  {
    id: "sumber-1",
    category: "sumberdaya",
    title: "Modul Peningkatan Kapasitas SDM & Pengelola Koperasi",
    excerpt: "Bahan ajar pelatihan literasi keuangan syariah, pembukuan digital, dan pelayanan konsumen prima.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800",
    date: "2025-12-15",
    author: "Divisi Diklat PINBAS",
    body: "Modul digital tersedia bagi pengelola pos cabang untuk mengasah kecakapan manajerial, pencatatan stok barang, dan pemanfaatan sistem POS kasir secara efektif.",
  },
  {
    id: "sumber-2",
    category: "sumberdaya",
    title: "Pusat Layanan Konsultasi & Sekretariat PINBAS Depok",
    excerpt: "Akses kontak pendampingan UMKM, kemitraan pos cabang, dan layanan informasi publik.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    date: "2025-12-10",
    author: "Customer Service PINBAS",
    body: "Layanan konsultasi PINBAS terbuka di Gedung MUI Kota Depok, Jl. Nusantara Raya No. 1, serta melalui email sekretariat@pinbas-depok.id untuk seluruh pegiat usaha dan koperasi syariah.",
  },
  {
    id: "sumber-3",
    category: "sumberdaya",
    title: "Kalender Temu Bisnis & Sosialisasi Forum Koperasi Syariah",
    excerpt: "Jadwal temu usaha supplier-pos cabang, bazar komoditas halal, dan workshop inkubasi tahunan.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
    date: "2025-12-05",
    author: "Sekretariat PINBAS",
    body: "Agenda berkala temu bisnis menghubungkan produsen komoditas halal dengan pengurus pos cabang kelurahan demi menjamin kelancaran pasokan dan stabilitas harga sembako masyarakat.",
  },
];

export default function KnowledgeCenter() {
  const [category, setCategory] = useState("Semua");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DATA.filter((d) => {
      const matchCat = category === "Semua" || d.category === category;
      const matchQ =
        !q ||
        d.title.toLowerCase().includes(q) ||
        d.excerpt.toLowerCase().includes(q) ||
        d.body.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [category, query]);

  return (
    <div className="min-h-screen bg-gray-50">
      <HomeHeader />

      <section className="relative border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/90 to-teal-900/85" />
        </div>
        <div className="relative max-w-full mx-auto px-4 py-12">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-100 bg-emerald-500/20 border border-emerald-400/30 px-3 py-1.5 rounded-full w-fit">
            <BookOpen className="w-3.5 h-3.5" /> Pusat Edukasi &amp; Inkubasi Bisnis Syariah
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mt-3">Pusat Pengetahuan PINBAS</h1>
          <p className="text-sm text-white/80 mt-1.5 max-w-2xl">
            Panduan syariah, regulasi, pengembangan usaha, dan materi pembinaan UMKM
            Pusat Inkubasi Bisnis Syariah (PINBAS) MUI Kota Depok.
          </p>

          <div className="mt-6 flex items-stretch bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden max-w-2xl">
            <div className="flex items-center pl-4">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari panduan, regulasi, atau artikel..."
              className="flex-1 px-3 py-3 text-sm outline-none"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                  category === c.key
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white/10 text-white/85 border-white/30 hover:bg-white/20"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-full mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">
            {category === "Semua" ? "Semua Materi" : catLabel(category)}
          </h2>
          <span className="text-xs text-gray-500">{filtered.length} materi</span>
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
            <BookOpen className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">Belum ada materi yang cocok dengan pencarian.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((d) => (
              <motion.button
                key={d.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(d)}
                className="bg-white rounded-2xl border border-gray-200 p-0 text-left hover:border-emerald-400 hover:shadow-md transition-all overflow-hidden flex flex-col"
              >
                <div className="relative h-36 overflow-hidden">
                  <img src={d.image} alt={d.title} className="w-full h-full object-cover" />
                  <span className={`absolute top-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded ${catColor(d.category)}`}>
                    {catLabel(d.category)}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2">{d.title}</h3>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">{d.excerpt}</p>
                  <span className="mt-auto pt-3 flex items-center gap-1 text-[11px] text-gray-400">
                    <CalendarDays className="w-3 h-3" /> {new Date(d.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                    <span className="mx-1">·</span>
                    <span className="truncate">{d.author}</span>
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </main>

      <FooterStats />

      {/* Modal detail */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40" onClick={() => setSelected(null)}>
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
            >
              <div className="relative h-44 overflow-hidden rounded-t-2xl">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <button onClick={() => setSelected(null)} className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white hover:bg-black/60">
                  <X className="w-4 h-4" />
                </button>
                <span className={`absolute top-3 left-3 text-[10px] font-semibold px-2 py-0.5 rounded ${catColor(selected.category)}`}>
                  {catLabel(selected.category)}
                </span>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-gray-900 leading-snug">{selected.title}</h2>
                <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1 flex-wrap">
                  <FileText className="w-3 h-3" /> {selected.author}
                  <span className="mx-1">·</span>
                  <CalendarDays className="w-3 h-3" /> {new Date(selected.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mt-3">{selected.body}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
