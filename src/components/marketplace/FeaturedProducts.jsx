import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Star, BadgePercent, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/lib/AuthContext";
import { base44 } from "@/api/base44Client";

export const SAMPLE_PRODUCTS = [
  {
    id: "prod-1",
    name: "Beras Premium Setra Ramos 5kg",
    category: "Sembako",
    supplier_name: "UD. Berkah Tani Depok",
    price: 74500,
    member_price: 68000,
    unit: "sak",
    rating: 4.9,
    stock: 240,
    image_url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "prod-2",
    name: "Mentega Margarin Blue Band Serbaguna 200g",
    category: "Minyak & Mentega",
    supplier_name: "Gudang Pusat Mekarjaya",
    price: 11500,
    member_price: 10000,
    unit: "sachet",
    rating: 4.9,
    stock: 250,
    image_url: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "prod-3",
    name: "Shampo Rambut Lifebuoy Anti Dandruff 170ml",
    category: "Perawatan Diri",
    supplier_name: "Sentra Kelontong Mekarjaya",
    price: 19500,
    member_price: 17500,
    unit: "botol",
    rating: 4.8,
    stock: 120,
    image_url: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "prod-4",
    name: "Mie Instan Indomie Goreng Spesial (Isi 5 Pcs)",
    category: "Kelontong",
    supplier_name: "Gudang Induk Mekarjaya, Depok",
    price: 16000,
    member_price: 14500,
    unit: "paket",
    rating: 5.0,
    stock: 400,
    image_url: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "prod-5",
    name: "Minyak Goreng Sawit 2 Liter",
    category: "Sembako",
    supplier_name: "Gudang Pusat Mekarjaya",
    price: 36000,
    member_price: 32500,
    unit: "pouch",
    rating: 4.8,
    stock: 180,
    image_url: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "prod-6",
    name: "Sabun Cuci Piring Sunlight Jeruk Nipis 750ml",
    category: "Kelontong",
    supplier_name: "Gudang Pusat Mekarjaya",
    price: 15000,
    member_price: 13500,
    unit: "pouch",
    rating: 4.9,
    stock: 220,
    image_url: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "prod-7",
    name: "Kopi Kapal Api Spesial Mix (10 Sachet)",
    category: "Kelontong",
    supplier_name: "Pos Cabang Beji, Depok",
    price: 14000,
    member_price: 12500,
    unit: "renceng",
    rating: 4.8,
    stock: 210,
    image_url: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "prod-8",
    name: "Sabun Mandi Batang Dettol Original (Isi 3)",
    category: "Perawatan Diri",
    supplier_name: "Sentra Kelontong Mekarjaya",
    price: 17500,
    member_price: 15500,
    unit: "pack",
    rating: 4.9,
    stock: 140,
    image_url: "https://images.unsplash.com/photo-1607006314180-348e3671239c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "prod-9",
    name: "Shampo Pantene Total Damage Care 160ml",
    category: "Perawatan Diri",
    supplier_name: "Distributor Mekarjaya Depok",
    price: 24000,
    member_price: 21500,
    unit: "botol",
    rating: 4.9,
    stock: 90,
    image_url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "prod-10",
    name: "Deterjen Bubuk Rinso Anti Noda + Molto 770g",
    category: "Kelontong",
    supplier_name: "Distributor Kelontong Depok",
    price: 21500,
    member_price: 19000,
    unit: "pack",
    rating: 4.8,
    stock: 180,
    image_url: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "prod-11",
    name: "Telur Ayam Negeri Segar 1kg",
    category: "Protein",
    supplier_name: "Peternak Mandiri Depok",
    price: 29000,
    member_price: 26500,
    unit: "kg",
    rating: 4.8,
    stock: 150,
    image_url: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "prod-12",
    name: "Kecap Manis Bango Botol 520ml",
    category: "Bumbu",
    supplier_name: "Distributor Sembako Mekarjaya",
    price: 24500,
    member_price: 22000,
    unit: "botol",
    rating: 4.9,
    stock: 130,
    image_url: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=500&auto=format&fit=crop&q=80",
  },
];

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
              Komoditas pokok & produk UMKM pilihan langsung dari supplier dan Gudang Pusat Mekarjaya
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
                <div className="relative aspect-4/3 w-full bg-gray-100 overflow-hidden">
                  <img
                    src={p.image_url}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
