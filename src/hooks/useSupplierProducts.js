import { useState, useEffect, useMemo } from "react";
import { base44 } from "@/api/base44Client";
import { PLATFORM_MARKUP_RATE, estimateBasePrice } from "@/lib/pricing";

import { PRODUCTS } from "@/lib/marketplace";

const staticProducts = PRODUCTS.map((p, idx) => ({
  id: `s${idx + 1}`,
  name: p.name,
  supplier_name: p.origin || "Gudang Induk Sukmajaya, Depok",
  category: p.category.toLowerCase(),
  price: p.price,
  unit: p.unit,
  stock: p.stock,
  image_url: p.img,
}));


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