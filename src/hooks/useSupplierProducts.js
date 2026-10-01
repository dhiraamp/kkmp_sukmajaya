import { useState, useEffect, useMemo } from "react";
import { base44 } from "@/api/base44Client";
import { PLATFORM_MARKUP_RATE, estimateBasePrice } from "@/lib/pricing";

const staticProducts = [
  { id: "s1", name: "Beras Premium Setra Ramos 5kg", supplier_name: "UD Berkah Tani Depok", category: "beras", price: 74500, unit: "sak", stock: 240, image_url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80" },
  { id: "s2", name: "Mentega Margarin Blue Band 200g", supplier_name: "Gudang Pusat Sukmajaya", category: "mentega", price: 11500, unit: "sachet", stock: 250, image_url: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80" },
  { id: "s3", name: "Shampo Lifebuoy Anti Dandruff 170ml", supplier_name: "Sentra Kelontong Sukmajaya", category: "perawatan", price: 19500, unit: "botol", stock: 120, image_url: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&q=80" },
  { id: "s4", name: "Shampo Pantene Total Damage Care 160ml", supplier_name: "Distributor Sukmajaya Depok", category: "perawatan", price: 24000, unit: "botol", stock: 90, image_url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80" },
  { id: "s5", name: "Mie Instan Indomie Goreng (Isi 5 Pcs)", supplier_name: "Gudang Induk Sukmajaya", category: "kelontong", price: 16000, unit: "paket", stock: 400, image_url: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&q=80" },
  { id: "s6", name: "Sabun Cuci Piring Sunlight 750ml", supplier_name: "Gudang Pusat Sukmajaya", category: "kelontong", price: 15000, unit: "pouch", stock: 220, image_url: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&q=80" },
  { id: "s7", name: "Deterjen Bubuk Rinso Anti Noda 770g", supplier_name: "Distributor Kelontong Depok", category: "kelontong", price: 21500, unit: "pack", stock: 180, image_url: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80" },
  { id: "s8", name: "Kopi Kapal Api Spesial Mix 10 Sachet", supplier_name: "Pos Cabang Beji", category: "kelontong", price: 14000, unit: "renceng", stock: 210, image_url: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80" },
  { id: "s9", name: "Sabun Mandi Batang Dettol Original", supplier_name: "Sentra Kelontong Sukmajaya", category: "perawatan", price: 17500, unit: "pack", stock: 140, image_url: "https://images.unsplash.com/photo-1607006314180-348e3671239c?w=400&q=80" },
  { id: "s10", name: "Pasta Gigi Pepsodent 190g", supplier_name: "Gudang Pusat Sukmajaya", category: "perawatan", price: 15500, unit: "tube", stock: 160, image_url: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&q=80" },
  { id: "s11", name: "Minyak Goreng Sawit 2 Liter", supplier_name: "Gudang Pusat Sukmajaya", category: "minyak", price: 36000, unit: "pouch", stock: 180, image_url: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80" },
  { id: "s12", name: "Gula Pasir Putih 1kg", supplier_name: "Distributor Sembako Sawangan", category: "sembako", price: 17500, unit: "kg", stock: 200, image_url: "https://images.unsplash.com/photo-1581795669223-09203b83bf61?w=400&q=80" },
  { id: "s13", name: "Kecap Manis Bango 520ml", supplier_name: "Distributor Sembako Sukmajaya", category: "bumbu", price: 24500, unit: "botol", stock: 130, image_url: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80" },
  { id: "s14", name: "Garam Dapur Beryodium 250g", supplier_name: "Pos Cabang Beji", category: "bumbu", price: 4000, unit: "bks", stock: 300, image_url: "https://images.unsplash.com/photo-1626078571935-0eaa4f40c64a?w=400&q=80" },
  { id: "s15", name: "Telur Ayam Negeri Segar", supplier_name: "Peternak Mandiri Depok", category: "telur", price: 29000, unit: "kg", stock: 150, image_url: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80" },
  { id: "s16", name: "Daging Sapi Segar Khas Depok", supplier_name: "RPH Sukmajaya", category: "daging", price: 135000, unit: "kg", stock: 40, image_url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80" },
  { id: "s17", name: "Sayuran Segar Campur (Sop-sopan)", supplier_name: "Kelompok Tani Sukmajaya", category: "sayuran", price: 12000, unit: "paket", stock: 65, image_url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80" },
  { id: "s18", name: "Cabai Merah Keriting Segar", supplier_name: "Petani Sawangan Depok", category: "bumbu", price: 32000, unit: "kg", stock: 60, image_url: "https://images.unsplash.com/photo-1592137403099-624c888e3f4d?w=400&q=80" },
  { id: "s19", name: "Bawang Merah Brebes", supplier_name: "Distributor Bumbu Sukmajaya", category: "bumbu", price: 30000, unit: "kg", stock: 90, image_url: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&q=80" },
  { id: "s20", name: "Bawang Putih Honan", supplier_name: "Distributor Bumbu Sukmajaya", category: "bumbu", price: 36000, unit: "kg", stock: 85, image_url: "https://images.unsplash.com/photo-1540151812223-b30b3fab58e6?w=400&q=80" },
  { id: "s21", name: "Daging Ayam Broiler Segar", supplier_name: "Peternak Unggas Sawangan", category: "daging", price: 35000, unit: "kg", stock: 200, image_url: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80" },
  { id: "s22", name: "Tahu Putih Segar Kotak", supplier_name: "Sentra Kedelai Beji", category: "lainnya", price: 8000, unit: "pack", stock: 150, image_url: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb2c?w=400&q=80" },
  { id: "s23", name: "Tempe Segar Daun Pisang", supplier_name: "Sentra Kedelai Beji", category: "lainnya", price: 7000, unit: "papan", stock: 120, image_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" },
  { id: "s24", name: "Susu Kental Manis Frisian Flag", supplier_name: "Gudang Pusat Sukmajaya", category: "sembako", price: 13500, unit: "kaleng", stock: 190, image_url: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80" },
];

export function useSupplierProducts() {
  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await base44.entities.Product.filter({ status: "active" }, "-created_date");
      setDbProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.warn("Gagal memuat produk aktif dari database:", err);
      setDbProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    const unsub = base44.entities.Product.subscribe((event) => {
      if (event.type === "create") {
        if (event.data?.status === "active") {
          setDbProducts(prev => [event.data, ...prev]);
        }
      } else if (event.type === "update") {
        setDbProducts(prev =>
          event.data?.status === "active"
            ? prev.map(p => p.id === event.id ? event.data : p)
            : prev.filter(p => p.id !== event.id)
        );
      } else if (event.type === "delete") {
        setDbProducts(prev => prev.filter(p => p.id !== event.id));
      }
    });
    return unsub;
  }, []);

  const products = useMemo(() => {
    const dbNames = new Set(dbProducts.map(p => p.name.toLowerCase()));
    const dbWithBase = dbProducts.map(p => ({
      ...p,
      base_price: p.base_price ?? estimateBasePrice(p.price),
    }));
    const uniqueStatic = staticProducts
      .filter(p => !dbNames.has(p.name.toLowerCase()))
      .map(p => {
        const basePrice = p.base_price ?? p.price;
        return { ...p, base_price: basePrice, price: Math.round(basePrice * (1 + PLATFORM_MARKUP_RATE)) };
      });
    return [...dbWithBase, ...uniqueStatic];
  }, [dbProducts]);

  return { products, loading, refetch: fetchProducts };
}