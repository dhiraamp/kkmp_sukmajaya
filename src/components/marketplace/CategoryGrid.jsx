import React from "react";
import { motion } from "framer-motion";
import { Grid } from "lucide-react";

export const CATEGORIES = [
  {
    name: "Sembako & Pangan",
    imageUrl: encodeURI("/images/Sari Roti Tawar Kupas Jumbo.jpg"),
    slug: "Sembako",
  },
  {
    name: "Warung Kelontong",
    imageUrl: encodeURI("/images/Indomie Goreng Cabe Ijo Mie Instan.png"),
    slug: "Kelontong",
  },
  {
    name: "Minyak & Mentega",
    imageUrl: encodeURI("/images/Blue Band Serbaguna Margarine Cup.jpg"),
    slug: "Minyak & Mentega",
  },
  {
    name: "Perawatan Diri",
    imageUrl: encodeURI("/images/Buy 1 Get 1 Nice Living Facial Tissue Soft Pack 400+100.jpg"),
    slug: "Perawatan Diri",
  },
  {
    name: "Bumbu Dapur",
    imageUrl: encodeURI("/images/Bango Kecap Manis Botol.jpg"),
    slug: "Bumbu",
  },
  {
    name: "Sayuran Segar",
    imageUrl: encodeURI("/images/Kentang - Astro Farm.png"),
    slug: "Sayuran",
  },
  {
    name: "Protein & Telur",
    imageUrl: encodeURI("/images/Telur Ayam Negeri Astro Farm.jpg"),
    slug: "Protein",
  },
  {
    name: "Semua Produk",
    isIcon: true,
    slug: "Semua Kategori",
  },
];

export default function CategoryGrid({ activeCategory = "Semua Kategori", onSelectCategory }) {
  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5 sm:gap-3.5">
          {CATEGORIES.map((cat) => {
            const isSelected =
              activeCategory === cat.slug ||
              (activeCategory === "Semua Kategori" && cat.slug === "Semua Kategori");

            return (
              <motion.button
                key={cat.name}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onSelectCategory && onSelectCategory(cat.slug)}
                className={`flex flex-col items-center p-2 rounded-2xl transition-all cursor-pointer text-center group ${
                  isSelected
                    ? "bg-red-50 ring-2 ring-red-500 shadow-xs"
                    : "bg-white hover:bg-gray-50 border border-gray-100 hover:border-red-200 shadow-2xs"
                }`}
              >
                {/* Image Box */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center p-1 relative shadow-inner">
                  {cat.isIcon ? (
                    <div className="w-full h-full rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                      <Grid className="w-6 h-6" />
                    </div>
                  ) : (
                    <img
                      src={cat.imageUrl}
                      alt={cat.name}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>

                {/* Name */}
                <span
                  className={`mt-2 text-[11px] sm:text-xs font-bold leading-tight line-clamp-2 ${
                    isSelected ? "text-red-700" : "text-gray-800 group-hover:text-red-600"
                  }`}
                >
                  {cat.name}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
