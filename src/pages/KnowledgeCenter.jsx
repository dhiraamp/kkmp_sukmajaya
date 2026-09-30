import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Search, X, CalendarDays, FileText } from "lucide-react";
import HomeHeader from "@/components/marketplace/HomeHeader";
import FooterStats from "@/components/marketplace/FooterStats";

const CATEGORIES = [
  { key: "Semua", label: "Semua" },
  { key: "pengembangan", label: "Pengembangan", color: "bg-red-600 text-white" },
  { key: "panduan", label: "Panduan", color: "bg-blue-600 text-white" },
  { key: "regulasi", label: "Regulasi", color: "bg-amber-600 text-white" },
  { key: "sumberdaya", label: "Sumber Daya", color: "bg-purple-600 text-white" },
];

const catLabel = (key) => CATEGORIES.find((c) => c.key === key)?.label || key;
const catColor = (key) => CATEGORIES.find((c) => c.key === key)?.color || "bg-gray-500 text-white";

const DATA = [
  {
    id: "dev-1",
    category: "pengembangan",
    title: "Perjalanan & Perkembangan Koperasi Merah Putih di Kota Depok",
    excerpt: "Perjalanan dan capaian KKMP sejak diluncurkan di Kota Depok, mulai dari pembentukan Gudang Pusat Mekarjaya hingga 8 pos cabang kelurahan.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
    date: "2026-09-20",
    author: "Koperasi Induk Mekarjaya",
    body: "Koperasi Kelurahan Merah Putih (KKMP) terus berkembang di Kota Depok. Kini pos cabang aktif melayani kebutuhan ribuan anggota dengan sembako dan komoditas bermutu tinggi langsung dari gudang pusat.",
  },
  {
    id: "dev-2",
    category: "pengembangan",
    title: "Pemberdayaan Produk UMKM & Petani Komoditas Lokal Depok",
    excerpt: "KKMP memprioritaskan penyerapan hasil bumi lokal seperti beras, telur ayam, sayuran, dan aneka olahan UMKM warga Depok.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
    date: "2026-09-15",
    author: "Tim Manajemen KKMP",
    body: "Untuk memperkuat ekonomi kerakyatan, KKMP mengintegrasikan pasokan dari kelompok tani dan produsen UMKM lokal ke dalam katalog komoditas resmi.",
  },
  {
    id: "dev-3",
    category: "pengembangan",
    title: "Digitalisasi Rantai Pasok Koperasi Kelurahan Merah Putih",
    excerpt: "Sistem digital KKMP mengintegrasikan alur supplier, gudang pusat, logistik distribusi, dan 8 cabang kelurahan secara transparan.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
    date: "2026-09-10",
    author: "Tim IT KKMP",
    body: "Penerapan sistem terintegrasi mempermudah monitoring stok komoditas di gudang induk, penerbitan delivery order armada logistik, dan pelacakan pesanan anggota.",
  },
  {
    id: "panduan-1",
    category: "panduan",
    title: "Panduan Belanja Komoditas untuk Pos Cabang & Anggota",
    excerpt: "Langkah-langkah memesan kebutuhan sembako dan komoditas pangan dari Gudang Pusat KKMP.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    date: "2026-07-10",
    author: "Tim Layanan KKMP",
    body: "1) Buka menu Belanja Anggota / Pos Cabang. 2) Pilih produk komoditas sembako dan masukkan ke keranjang. 3) Lanjutkan ke checkout dan konfirmasi alamat pos cabang / anggota di Kota Depok. 4) Pantau status pengiriman logistik hingga barang tiba.",
  },
  {
    id: "panduan-2",
    category: "panduan",
    title: "Panduan Melamar Karir & Kemitraan KKMP Depok",
    excerpt: "Cara mencari posisi staf pos cabang, operator gudang, dan kurir logistik KKMP.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
    date: "2026-07-05",
    author: "Tim HRD KKMP",
    body: "Kunjungi menu Peluang Kerja, cari posisi sesuai keahlian (Pos Cabang, Logistik, Gudang Pusat), lalu ajukan pendaftaran dengan akun anggota KKMP Anda.",
  },
  {
    id: "panduan-3",
    category: "panduan",
    title: "Panduan Manajemen Simpanan & Manfaat Anggota",
    excerpt: "Manfaat menjadi anggota resmi Koperasi Merah Putih Mekarjaya - Kota Depok.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800",
    date: "2026-06-28",
    author: "Pengurus Koperasi KKMP",
    body: "Anggota resmi mendapatkan harga sembako lebih murah, dividen SHU akhir tahun, serta akses prioritas pengiriman komoditas kebutuhan harian melalui 8 pos cabang kelurahan.",
  },
  {
    id: "regulasi-1",
    category: "regulasi",
    title: "Anggaran Dasar & Regulasi Koperasi Merah Putih",
    excerpt: "Landasan hukum UU Perkoperasian dan AD/ART Koperasi Kelurahan Merah Putih Kota Depok.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    date: "2026-06-20",
    author: "Pengawas Koperasi",
    body: "KKMP beroperasi berlandaskan UU No. 25 Tahun 1992 tentang Perkoperasian dan regulasi tata kelola pangan daerah Kota Depok demi kesejahteraan anggota.",
  },
  {
    id: "regulasi-2",
    category: "regulasi",
    title: "Standar Mutu Komoditas & Distribusi Rantai Pasok",
    excerpt: "Pedoman standar kualitas beras, telur, minyak goreng, dan daging di Gudang Pusat KKMP.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
    date: "2026-06-12",
    author: "Quality Control KKMP",
    body: "Setiap komoditas yang masuk dari supplier diperiksa kualitas dan masa kedaluwarsanya di Gudang Pusat Mekarjaya sebelum didistribusikan armada logistik ke 8 pos cabang kelurahan.",
  },
  {
    id: "regulasi-3",
    category: "regulasi",
    title: "Kebijakan Kemitraan Supplier Komoditas KKMP",
    excerpt: "Pedoman kerja sama antara petani, peternak, dan distributor rekanan KKMP Depok.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    date: "2026-06-01",
    author: "Divisi Pengadaan KKMP",
    body: "Kemitraan supplier diatur dengan transparansi harga acuan pasar, mekanisme Purchase Order (PO), dan pembayaran terpadu melalui Koperasi Induk Mekarjaya.",
  },
  {
    id: "sumber-1",
    category: "sumberdaya",
    title: "Template Laporan & Form Pengajuan Pos Cabang",
    excerpt: "Format laporan stok komoditas dan pengajuan pengiriman dari pos cabang ke gudang pusat.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800",
    date: "2026-05-25",
    author: "Tim Manajemen KKMP",
    body: "Template digital tersedia bagi pengelola 8 pos cabang untuk memonitor stok lokal dan mengajukan pesanan restock harian secara otomatis.",
  },
  {
    id: "sumber-2",
    category: "sumberdaya",
    title: "Pusat Layanan Bantuan & Kontak Pos Cabang Depok",
    excerpt: "Daftar kontak 8 Pos Cabang KKMP (Beji, Sukmajaya, Cimanggis, dll.) dan Customer Service.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    date: "2026-05-18",
    author: "Customer Care KKMP",
    body: "Layanan informasi dan bantuan operasional KKMP siap melayani anggota dan mitra setiap hari kerja melalui WhatsApp dan pusat bantuan kantor Mekarjaya.",
  },
  {
    id: "sumber-3",
    category: "sumberdaya",
    title: "Jadwal Sosialisasi & Rapat Anggota Tahunan (RAT)",
    excerpt: "Kalender kegiatan pelatihan kewirausahaan dan agenda tahunan Koperasi Merah Putih.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
    date: "2026-05-10",
    author: "Sekretariat KKMP",
    body: "Ikuti kegiatan rutin pelatihan literasi keuangan, bazar sembako murah, dan Rapat Anggota Tahunan (RAT) untuk transparansi pembagian SHU.",
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
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/90 via-red-900/85 to-rose-900/80" />
        </div>
        <div className="relative max-w-full mx-auto px-4 py-12">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-red-100 bg-red-500/20 border border-red-400/30 px-3 py-1.5 rounded-full w-fit">
            <BookOpen className="w-3.5 h-3.5" /> Pusat Edukasi Koperasi Merah Putih Depok
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mt-3">Pusat Pengetahuan Koperasi</h1>
          <p className="text-sm text-white/80 mt-1.5 max-w-2xl">
            Panduan, regulasi, pengembangan program, dan sumber daya untuk mendukung operasional
            Koperasi Kelurahan Merah Putih (KKMP) di Kota Depok.
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
                    ? "bg-red-600 text-white border-red-600"
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
                className="bg-white rounded-2xl border border-gray-200 p-0 text-left hover:border-red-400 hover:shadow-md transition-all overflow-hidden flex flex-col"
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
