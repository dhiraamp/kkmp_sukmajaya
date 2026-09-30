import React from "react";
import { motion } from "framer-motion";
import { Grid } from "lucide-react";

export const CATEGORIES = [
  {
    name: "Sembako & Beras",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&auto=format&fit=crop&q=80",
    slug: "Sembako",
  },
  {
    name: "Warung Kelontong",
    imageUrl: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=300&auto=format&fit=crop&q=80",
    slug: "Kelontong",
  },
  {
    name: "Minyak & Mentega",
    imageUrl: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&auto=format&fit=crop&q=80",
    slug: "Minyak & Mentega",
  },
  {
    name: "Perawatan Diri",
    imageUrl: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=300&auto=format&fit=crop&q=80",
    slug: "Perawatan Diri",
  },
  {
    name: "Bumbu Dapur",
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&auto=format&fit=crop&q=80",
    slug: "Bumbu",
  },
  {
    name: "Sayuran Segar",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=80",
    slug: "Sayuran",
  },
  {
    name: "Protein & Telur",
    imageUrl: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&auto=format&fit=crop&q=80",
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
