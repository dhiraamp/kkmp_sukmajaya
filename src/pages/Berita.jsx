import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Clock,
  ArrowLeft,
  ExternalLink,
  Newspaper,
  RefreshCw,
  Search,
  CheckCircle2,
  Calendar,
  Building2,
  Tag,
} from "lucide-react";
import HomeHeader from "@/components/marketplace/HomeHeader";
import FooterStats from "@/components/marketplace/FooterStats";
import {
  fetchAllNews,
  KEMENAG_DEPOK_NEWS_SEED,
  KEMENAG_DEPOK_PORTAL_URL,
} from "@/lib/news";

const BADGE = {
  emerald: "text-emerald-700 bg-emerald-50 border border-emerald-200",
  orange: "text-orange-700 bg-orange-50 border border-orange-200",
  blue: "text-blue-700 bg-blue-50 border border-blue-200",
};

export default function Berita() {
  const navigate = useNavigate();
  const [news, setNews] = useState(() => KEMENAG_DEPOK_NEWS_SEED);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("Semua");
  const [lastUpdated, setLastUpdated] = useState(() => new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }));

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchAllNews()
      .then((items) => {
        if (active && items?.length) {
          setNews(items);
          setLastUpdated(new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }));
        }
      })
      .catch((err) => {
        console.warn("Gagal memuat berita terkini:", err);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const items = await fetchAllNews(true);
      if (items?.length) {
        setNews(items);
        setLastUpdated(new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }));
      }
    } catch (err) {
      console.warn("Refresh gagal:", err);
    } finally {
      setRefreshing(false);
    }
  };

  // Kategori unik untuk tab filter
  const categories = useMemo(() => {
    const set = new Set();
    news.forEach((n) => {
      if (n.tag) set.add(n.tag);
    });
    return ["Semua", ...Array.from(set)];
  }, [news]);

  // Filter berdasarkan teks dan kategori
  const filteredNews = useMemo(() => {
    return news.filter((n) => {
      const matchesSearch =
        n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        n.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag === "Semua" || n.tag === selectedTag;
      return matchesSearch && matchesTag;
    });
  }, [news, searchTerm, selectedTag]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <HomeHeader />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full">
          {/* Top Banner & Breadcrumb Header */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3">
                <button
                  onClick={() => navigate("/")}
                  className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 hover:border-emerald-200 transition-colors shrink-0"
                  aria-label="Kembali ke Beranda"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Portal Berita Resmi Kota Depok
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Update Terakhir: Hari ini, {lastUpdated} WIB
                    </span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 flex items-center gap-2">
                    <Newspaper className="w-6 h-6 text-emerald-600" />
                    Warta & Berita Kementerian Agama Kota Depok
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    Informasi resmi program kerja, kegiatan sosial kemanusiaan, bantuan pangan sembako, dan layanan publik Kota Depok.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 self-start md:self-auto shrink-0 flex-wrap">
                <button
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold transition-all shadow-xs hover:border-emerald-300 disabled:opacity-50"
                  title="Perbarui berita langsung dari server Kemenag"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-emerald-600" : ""}`} />
                  {refreshing ? "Menyinkronkan..." : "Perbarui Berita"}
                </button>
                <a
                  href={KEMENAG_DEPOK_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  Kunjungi depok.kemenag.go.id
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Search & Category Filter */}
            <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Cari judul berita, topik, atau kata kunci..."
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                />
              </div>

              {/* Tag Categories */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedTag(cat)}
                    className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                      selectedTag === cat
                        ? "bg-emerald-700 text-white font-semibold"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* News Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-4 animate-pulse">
                  <div className="w-full h-44 bg-gray-200 rounded-xl" />
                  <div className="h-4 bg-gray-200 rounded mt-3 w-1/3" />
                  <div className="h-5 bg-gray-200 rounded mt-2 w-full" />
                  <div className="h-4 bg-gray-200 rounded mt-2 w-3/4" />
                </div>
              ))}
            </div>
          ) : filteredNews.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center my-6">
              <Newspaper className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-gray-800">Tidak ada berita yang sesuai</h3>
              <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                Coba ubah kata kunci pencarian atau pilih kategori lain untuk menemukan berita yang Anda cari.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTag("Semua");
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-xl hover:bg-emerald-100"
              >
                Reset Pencarian
              </button>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredNews.map((n, i) => (
                <motion.article
                  key={`${n.id || n.url}-${i}`}
                  variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between group"
                >
                  {/* Thumbnail Card */}
                  <div>
                    <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                      <img
                        src={n.img}
                        alt={n.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = "https://depok.kemenag.go.id/uploads/branding/logo.webp";
                        }}
                      />
                      <span className="absolute top-2.5 left-2.5 text-[10px] font-semibold text-white bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Building2 className="w-2.5 h-2.5" /> Kemenag Depok
                      </span>
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${BADGE[n.color] || BADGE.emerald}`}>
                          {n.tag}
                        </span>
                        <span className="text-[11px] text-gray-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {n.time}
                        </span>
                      </div>

                      <h2 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                        {n.title}
                      </h2>

                      <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                        {n.summary}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer with Direct Outbound Link */}
                  <div className="p-4 sm:p-5 pt-0 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[10px] text-gray-400">
                      {n.date || "Warta Resmi Depok"}
                    </span>
                    <a
                      href={n.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
                    >
                      Baca Berita <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </main>
      </div>

      <FooterStats />
    </div>
  );
}
