// @ts-nocheck
import React, { useState, useMemo } from "react";
import HomeHeader from "@/components/marketplace/HomeHeader";
import HeroKoperasi from "@/components/marketplace/HeroKoperasi";
import CategoryGrid from "@/components/marketplace/CategoryGrid";
import StatsBanner from "@/components/marketplace/StatsBanner";
import SupplyChainFlow from "@/components/marketplace/SupplyChainFlow";
import FeaturedProducts, { SAMPLE_PRODUCTS } from "@/components/marketplace/FeaturedProducts";
import NewsSection from "@/components/marketplace/NewsSection";
import { useProductsQuery } from "@/lib/query-client";
import { Link } from "react-router-dom";
import { ShieldCheck, Truck, Percent, Leaf, Heart, ArrowUp } from "lucide-react";

export default function Marketplace() {
  const { data: dbProducts = [] } = useProductsQuery();
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [searchQuery, setSearchQuery] = useState("");

  // Gabungkan data dari DB dan Sample
  const allProducts = useMemo(() => {
    if (dbProducts && dbProducts.length > 0) {
      return dbProducts.map((p, idx) => ({
        id: p.id || `db-${idx}`,
        name: p.name,
        category: p.category || "Sembako",
        supplier_name: p.supplier_name || "Supplier Gudang Pusat Sukmajaya",
        price: p.price || 15000,
        member_price: p.member_price || Math.round((p.price || 15000) * 0.9),
        unit: p.unit || "kg",
        rating: 4.8,
        stock: p.stock ?? 100,
        image_url: p.image_url || SAMPLE_PRODUCTS[idx % SAMPLE_PRODUCTS.length].image_url,
      }));
    }
    return SAMPLE_PRODUCTS;
  }, [dbProducts]);

  // Filter berdasarkan search query dan kategori yang dipilih
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const pCat = (p.category || "").toLowerCase();
      const pName = (p.name || "").toLowerCase();
      const targetCat = selectedCategory.toLowerCase();

      const matchCat =
        selectedCategory === "Semua Kategori" ||
        pCat === targetCat ||
        (selectedCategory === "Sembako" && (pCat.includes("sembako") || pCat.includes("beras") || pName.includes("beras") || pName.includes("gula") || pName.includes("terigu"))) ||
        (selectedCategory === "Kelontong" && (pCat.includes("kelontong") || pCat.includes("mie") || pCat.includes("kopi") || pCat.includes("teh") || pCat.includes("cuci") || pCat.includes("deterjen") || pCat.includes("umkm") || pName.includes("indomie") || pName.includes("sunlight") || pName.includes("rinso") || pName.includes("kopi"))) ||
        (selectedCategory === "Minyak & Mentega" && (pCat.includes("mentega") || pCat.includes("minyak") || pName.includes("mentega") || pName.includes("blue band") || pName.includes("minyak"))) ||
        (selectedCategory === "Perawatan Diri" && (pCat.includes("perawatan") || pCat.includes("shampo") || pCat.includes("sabun") || pName.includes("shampo") || pName.includes("dettol") || pName.includes("pepsodent") || pName.includes("pantene") || pName.includes("lifebuoy"))) ||
        (selectedCategory === "Bumbu" && (pCat.includes("bumbu") || pName.includes("kecap") || pName.includes("garam") || pName.includes("cabai") || pName.includes("bawang"))) ||
        (selectedCategory === "Sayuran" && (pCat.includes("sayur") || pCat.includes("pertanian") || pName.includes("sayur") || pName.includes("sop") || pName.includes("wortel") || pName.includes("kentang"))) ||
        (selectedCategory === "Protein" && (pCat.includes("protein") || pCat.includes("segar") || pCat.includes("telur") || pCat.includes("daging") || pCat.includes("ikan") || pName.includes("telur") || pName.includes("ayam") || pName.includes("sapi") || pName.includes("ikan")));

      const matchSearch =
        !searchQuery ||
        p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.supplier_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCat && matchSearch;
    });
  }, [allProducts, selectedCategory, searchQuery]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col justify-between">
      {/* 1. Header Koperasi Merah Putih Sukmajaya */}
      <HomeHeader
        onSearchClick={() => {
          const searchEl = document.getElementById("search-input-hero");
          if (searchEl) {
            searchEl.focus();
            searchEl.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }}
      />

      <main className="flex-1">
        {/* 2. Hero Section: Tagline, Headline, 2 CTA, 4 Pills, Floating Search Bar */}
        <HeroKoperasi
          onSearch={(q) => {
            setSearchQuery(q);
            const target = document.getElementById("katalog-produk-unggulan");
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* 3. Grid 8 Kategori Komoditas */}
        <CategoryGrid
          activeCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            const target = document.getElementById("katalog-produk-unggulan");
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* 4. Bar Statistik Koperasi & Ajakan Daftar Anggota */}
        <StatsBanner />

        {/* 5. Diagram Alur Rantai Pasok (Supply Chain Flow) */}
        <SupplyChainFlow />

        {/* 6. Katalog Produk Unggulan */}
        <FeaturedProducts
          products={filteredProducts.length > 0 ? filteredProducts : SAMPLE_PRODUCTS}
        />

        {/* 7. Berita & Informasi Koperasi Depok (Retained as per guideline) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <NewsSection />
        </div>
      </main>

      {/* 8. Footer Koperasi Merah Putih Sukmajaya */}
      <footer className="bg-slate-900 text-white border-t border-slate-800 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
            {/* Col 1: Identity */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center font-bold text-white shadow-sm">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white">
                    <path d="M20 6L6 17H11V32H29V17H34L20 6Z" fill="white" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-black text-red-500 uppercase tracking-wider">KOPERASI MERAH PUTIH</p>
                  <p className="text-xs font-bold text-white uppercase tracking-widest">SUKMAJAYA &bull; DEPOK</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Marketplace resmi Koperasi Kelurahan Merah Putih (KKMP) Kota Depok. Menghubungkan supplier komoditas dengan pos cabang dan seluruh anggota keluarga koperasi.
              </p>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="text-xs font-extrabold uppercase text-slate-300 tracking-wider mb-3">
                Layanan & Menu
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><Link to="/marketplace" className="hover:text-red-400 transition-colors">Marketplace Komoditas</Link></li>
                <li><Link to="/peta" className="hover:text-red-400 transition-colors">Peta 8 Cabang Depok</Link></li>
                <li><Link to="/portal" className="hover:text-red-400 transition-colors">Portal Akses Peran</Link></li>
                <li><Link to="/register/penerima" className="hover:text-red-400 transition-colors">Daftar Anggota Koperasi</Link></li>
                <li><Link to="/berita" className="hover:text-red-400 transition-colors">Berita & Pengumuman</Link></li>
              </ul>
            </div>

            {/* Col 3: 5 Roles */}
            <div>
              <h4 className="text-xs font-extrabold uppercase text-slate-300 tracking-wider mb-3">
                Peran Rantai Pasok
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><span className="text-red-400">&bull;</span> Koperasi Induk (Gudang Pusat)</li>
                <li><span className="text-orange-400">&bull;</span> Koperasi Cabang (8 Pos Depok)</li>
                <li><span className="text-emerald-400">&bull;</span> Supplier & Pemasok Bahan</li>
                <li><span className="text-blue-400">&bull;</span> Logistik & Armada Pengiriman</li>
                <li><span className="text-purple-400">&bull;</span> Anggota Koperasi</li>
              </ul>
            </div>

            {/* Col 4: Contact & Office */}
            <div>
              <h4 className="text-xs font-extrabold uppercase text-slate-300 tracking-wider mb-3">
                Kantor Pusat Sukmajaya
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Jl. Raya Sukmajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16411
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Email: <span className="text-slate-300">sekretariat@kkmp-depok.id</span>
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Jam Operasional: Senin - Sabtu (08:00 - 17:00 WIB)
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <p>&copy; 2026 <strong>Koperasi Kelurahan Merah Putih (KKMP) Sukmajaya</strong> &bull; Kota Depok. Seluruh hak cipta dilindungi.</p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}