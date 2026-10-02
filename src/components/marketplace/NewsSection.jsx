import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Clock, Newspaper, ArrowRight, ExternalLink, RefreshCw } from "lucide-react";
import { fetchAllNews, KEMENAG_DEPOK_NEWS_SEED, KEMENAG_DEPOK_PORTAL_URL } from "@/lib/news";

const BADGE = {
  emerald: "text-emerald-700 bg-emerald-50 border border-emerald-200",
  orange: "text-orange-700 bg-orange-50 border border-orange-200",
  blue: "text-blue-700 bg-blue-50 border border-blue-200",
};

export default function NewsSection() {
  const navigate = useNavigate();
  const [news, setNews] = useState(() => KEMENAG_DEPOK_NEWS_SEED.slice(0, 5));
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    let active = true;
    fetchAllNews()
      .then((items) => {
        if (active && items?.length) setNews(items.slice(0, 5));
      })
      .catch((error) => {
        console.error("Gagal memuat berita Kemenag Depok:", error);
      });
    return () => {
      active = false;
    };
  }, []);

  const handleManualRefresh = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const fresh = await fetchAllNews(true);
      if (fresh?.length) setNews(fresh.slice(0, 5));
    } catch (err) {
      console.warn("Refresh berita manual:", err);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Newspaper className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
              Warta & Berita Resmi Kota Depok
            </h2>
            <p className="text-xs text-gray-500">
              Bersumber langsung dari{" "}
              <a
                href={KEMENAG_DEPOK_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-semibold hover:underline inline-flex items-center gap-0.5"
              >
                depok.kemenag.go.id <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleManualRefresh}
            title="Perbarui Berita Terkini"
            disabled={isUpdating}
            className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:text-emerald-700 hover:border-emerald-300 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isUpdating ? "animate-spin text-emerald-600" : ""}`} />
          </button>
          <button
            onClick={() => navigate("/berita")}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors"
          >
            Semua Berita <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 overflow-hidden shadow-xs"
      >
        {news.map((n, i) => (
          <motion.a
            key={n.id || i}
            href={n.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={{ hidden: { opacity: 0, x: -15 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex items-start gap-3 p-3.5 hover:bg-emerald-50/40 transition-colors cursor-pointer group"
          >
            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100 relative">
              <img
                src={n.img}
                alt={n.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = "https://depok.kemenag.go.id/uploads/branding/logo.webp";
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${BADGE[n.color] || BADGE.emerald}`}>
                  {n.tag}
                </span>
                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {n.time}
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                {n.title}
              </p>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                {n.summary}
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-[11px] font-medium text-emerald-700 group-hover:underline">
                <span>Baca di Kemenag Depok</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
