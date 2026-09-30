import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Star, ShoppingCart } from "lucide-react";
import { base44 } from "@/api/base44Client";

const supplierProducts = [
  { id: 1, name: "Beras Premium Setra Ramos", supplier: "Gudang Pusat Induk Mekarjaya", category: "beras", price: 14500, unit: "kg", stock: 2500, rating: 4.9, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop" },
  { id: 2, name: "Sayuran Organik Segar", supplier: "Gapoktan Sawangan Mandiri", category: "sayuran", price: 8000, unit: "kg", stock: 350, rating: 4.8, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80" },
  { id: 3, name: "Telur Ayam Negeri Segar", supplier: "Peternakan Unggas Cipayung", category: "telur", price: 28000, unit: "kg", stock: 800, rating: 4.9, image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&h=300&fit=crop" },
  { id: 4, name: "Daging Ayam Broiler Segar", supplier: "Peternakan Unggas Cipayung", category: "daging", price: 35000, unit: "kg", stock: 400, rating: 4.9, image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=300&fit=crop" },
  { id: 5, name: "Ikan Nila Segar Kolam", supplier: "Perikanan Situ Pengasinan", category: "ikan", price: 32000, unit: "kg", stock: 220, rating: 4.7, image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&q=80" },
  { id: 6, name: "Tahu & Tempe Segar", supplier: "Sentra Kedelai Cilodong", category: "olahan", price: 6000, unit: "pack", stock: 600, rating: 4.8, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" },
  { id: 7, name: "Minyak Goreng Sawit 2L", supplier: "Gudang Pusat Induk Mekarjaya", category: "minyak", price: 33500, unit: "pouch", stock: 1200, rating: 4.9, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop" },
  { id: 8, name: "Bumbu Dapur Lengkap", supplier: "Sentra Bumbu Sukmajaya", category: "bumbu", price: 15000, unit: "pack", stock: 300, rating: 4.8, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop" },
];

export default function SmartRecommendations({ userEmail, onAddToCart }) {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    analyzeAndRecommend();
  }, [userEmail]);

  const analyzeAndRecommend = async () => {
    setLoading(true);
    try {
      let history = [];
      if (userEmail) {
        history = await base44.entities.ShoppingHistory.filter({ user_email: userEmail }, "-created_date", 50);
      }
      
      if (!history || history.length === 0) {
        const popular = [...supplierProducts].sort((a, b) => b.rating - a.rating).slice(0, 4);
        setRecommendations(popular.map(p => ({ ...p, reason: "⭐ Produk terlaris di Gudang Pusat" })));
        setLoading(false);
        return;
      }

      const catCount = {};
      history.forEach(h => {
        catCount[h.category] = (catCount[h.category] || 0) + (h.quantity || 1);
      });

      const sortedCats = Object.entries(catCount).sort((a, b) => b[1] - a[1]).map(e => e[0]);
      const boughtNames = new Set(history.map(h => h.product_name));

      const recs = [];
      for (const cat of sortedCats.slice(0, 3)) {
        const catProds = supplierProducts.filter(p => p.category === cat);
        for (const p of catProds) {
          if (!recs.find(r => r.id === p.id)) {
            const reason = boughtNames.has(p.name)
              ? `🔄 Sering dipesan cabang (${cat})`
              : `💡 Rekomendasi stok cepat berputar`;
            recs.push({ ...p, reason });
            if (recs.length >= 4) break;
          }
        }
        if (recs.length >= 4) break;
      }

      if (recs.length < 4) {
        const remaining = supplierProducts
          .filter(p => !recs.find(r => r.id === p.id))
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4 - recs.length)
          .map(p => ({ ...p, reason: "⭐ Rating tertinggi" }));
        recs.push(...remaining);
      }

      setRecommendations(recs.slice(0, 4));
    } catch {
      const popular = [...supplierProducts].sort((a, b) => b.rating - a.rating).slice(0, 4);
      setRecommendations(popular.map(p => ({ ...p, reason: "⭐ Rekomendasi Gudang Pusat" })));
    }
    setLoading(false);
  };

  if (loading) return (
    <Card className="border-orange-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-orange-500" />
          Rekomendasi Restok Cabang
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[1,2,3,4].map(i => <div key={i} className="h-40 bg-muted animate-pulse rounded-xl" />)}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Card className="border-orange-100 shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-600" />
            Rekomendasi Restok Pos Cabang
          </CardTitle>
          <Badge className="bg-orange-50 text-orange-700 border-orange-200 text-xs">
            Gudang Induk Mekarjaya
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {recommendations.map((p) => (
            <div key={p.id} className="border border-orange-100 rounded-xl p-3 flex flex-col justify-between hover:shadow-md transition-shadow bg-white">
              <div>
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-28 object-cover rounded-lg mb-2"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"; }}
                />
                <Badge variant="outline" className="text-[10px] mb-1 text-orange-700 bg-orange-50 border-orange-200">
                  {p.reason}
                </Badge>
                <p className="font-semibold text-sm leading-tight">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.supplier}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{p.rating}</span>
                  <span className="text-xs text-muted-foreground ml-auto">Stok: {p.stock} {p.unit}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                <span className="font-bold text-sm text-orange-700">
                  Rp {p.price.toLocaleString("id-ID")}
                  <span className="text-xs font-normal text-muted-foreground">/{p.unit}</span>
                </span>
                <Button
                  size="sm"
                  className="h-7 text-xs bg-orange-600 hover:bg-orange-700 text-white"
                  onClick={() => onAddToCart && onAddToCart(p)}
                >
                  <ShoppingCart className="w-3 h-3 mr-1" />+ PO
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}