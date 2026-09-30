import React from "react";
import TopNavLayout from "@/components/layout/TopNavLayout";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  MessageSquare,
  MapPin,
  FileBarChart,
  Smartphone,
  Receipt,
  ClipboardList,
  Briefcase,
} from "lucide-react";

const menuItems = [
  { separator: "Menu Utama" },
  { path: "/mitra/dashboard", label: "Dashboard Pos Cabang", icon: LayoutDashboard },
  { path: "/mitra/products", label: "Katalog Komoditas Gudang", icon: Package },
  { path: "/mitra/kebutuhan", label: "Pemesanan PO ke Gudang Pusat", icon: ClipboardList },
  { path: "/mitra/cart", label: "Keranjang PO Cabang", icon: ShoppingCart },
  { path: "/mitra/orders", label: "Tracking Pengiriman Logistik", icon: MapPin },
  { path: "/mitra/transactions", label: "Riwayat Transaksi Anggota", icon: Receipt },

  { separator: "Layanan & Laporan" },
  { path: "/mitra/reports", label: "Laporan Distribusi Cabang", icon: FileBarChart },
  { path: "/mitra/career", label: "Lowongan Kerja Pos Cabang", icon: Briefcase },
  { path: "/mitra/complaints", label: "Pusat Bantuan & Pengaduan", icon: MessageSquare },
  { path: "/mitra/digital-services", label: "Layanan PPOB & Digital", icon: Smartphone },
];

export default function MitraLayout() {
  return <TopNavLayout menuItems={menuItems} title="Koperasi Cabang Depok / Pos KKMP" />;
}