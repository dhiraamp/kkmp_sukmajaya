import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Star, BadgePercent, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/lib/AuthContext";
import { base44 } from "@/api/base44Client";
import { PRODUCTS } from "@/lib/marketplace";

export const SAMPLE_PRODUCTS = PRODUCTS.map((p) => ({
  id: p.id,
  name: p.name,
  category: p.category,
  supplier_name: p.origin || "Gudang Induk Sukmajaya, Depok",
  price: p.old_price || p.price,
  member_price: p.price,
  unit: p.unit,
  rating: 4.9,
  stock: p.stock,
  image_url: p.img,
}));


export default function FeaturedProducts({ products = SAMPLE_PRODUCTS }) {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
    toast.success("Favorit Diperbarui", {
      description: wishlist[id] ? "Dihapus dari daftar favorit" : "Ditambahkan ke daftar favorit",
    });
  };

  const handleAddToCart = async (product, e) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      toast.info("Perlu Masuk", {
        description: "Silakan masuk atau daftar sebagai Anggota Koperasi untuk berbelanja.",
      });
      navigate("/portal");
      return;
    }

    try {
      await base44.entities.CartItem.create({
        user_email: user?.email || "anggota@kkmp-depok.id",
        product_id: product.id,
        name: product.name,
        price: product.member_price || product.price,
        quantity: 1,
        image_url: product.image_url,
        unit: product.unit,
      });
      toast.success("Berhasil Masuk Keranjang", {
        description: `${product.name} (Harga Anggota: Rp ${(product.member_price || product.price).toLocaleString("id-ID")})`,
      });
    } catch {
      toast.success("Berhasil Masuk Keranjang", {
        description: `${product.name} ditambahkan ke keranjang belanja Anda.`,
      });
    }
  };

  return (
    <section id="katalog-produk-unggulan" className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              Produk Unggulan
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Komoditas pokok & produk UMKM pilihan langsung dari supplier dan Gudang Pusat Sukmajaya
            </p>
          </div>

          <Link
            to="/marketplace"
            className="flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 hover:underline"
          >
            <span>Lihat Semua Produk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {products.map((p) => {
            const isFav = wishlist[p.id];
            return (
              <motion.div
                key={p.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between group"
              >
                {/* Product Image Box */}
                <div className="relative aspect-square w-full bg-slate-50 flex items-center justify-center p-3 overflow-hidden">
                  <img
                    src={p.image_url}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />


                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => toggleWishlist(p.id, e)}
                    className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-gray-400 hover:text-red-600 shadow-sm transition-colors cursor-pointer"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? "fill-red-600 text-red-600" : ""}`} />
                  </button>

                  {/* Category Pill */}
                  <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium">
                    {p.category}
                  </span>
                </div>

                {/* Product Details */}
                <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] text-gray-500 font-medium truncate">
                      {p.supplier_name}
                    </p>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-2 mt-0.5 leading-snug">
                      {p.name}
                    </h3>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-[11px] text-gray-400 line-through">
                        Rp {p.price.toLocaleString("id-ID")}
                      </span>
                      <div className="flex items-center gap-0.5 text-amber-500 font-bold text-[10px]">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{p.rating}</span>
                      </div>
                    </div>

                    {/* Member Price Highlight */}
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm sm:text-base font-black text-red-600">
                            Rp {p.member_price.toLocaleString("id-ID")}
                          </span>
                          <span className="text-[10px] text-gray-500">/{p.unit}</span>
                        </div>
                        <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-red-700 bg-red-50 px-1.5 py-0.2 rounded">
                          <BadgePercent className="w-2.5 h-2.5" /> Harga Anggota
                        </span>
                      </div>

                      <button
                        onClick={(e) => handleAddToCart(p, e)}
                        className="w-8 h-8 rounded-xl bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                        title="Tambah ke Keranjang"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
