import React from "react";
import TopNavLayout from "@/components/layout/TopNavLayout";
import {
  LayoutDashboard,
  Users,
  Store,
  Truck,
  FileBarChart,
  MessageCircle,
  Bell,
  TrendingUp,
  BarChart3,
  Apple,
  Warehouse,
  UserPlus,
  UserCheck,
  MapPinned,
} from "lucide-react";

const menuItems = [
  { separator: "Menu Utama" },
  { path: "/admin/dashboard", label: "Dashboard Induk", icon: LayoutDashboard },
  { path: "/admin/stock", label: "Gudang Pusat KKMP", icon: Warehouse },
  { path: "/admin/gis", label: "Peta Jaringan 8 Cabang", icon: MapPinned },

  { separator: "Rantai Pasok & Pengguna" },
  { path: "/admin/suppliers", label: "Supplier & Pemasok", icon: Users },
  { path: "/admin/mitra", label: "8 Cabang Koperasi Depok", icon: Store },
  { path: "/admin/logistik", label: "Logistik & Armada Distribusi", icon: Truck },
  { path: "/admin/warga", label: "Data Anggota Koperasi", icon: UserCheck },
  { path: "/admin/pendaftar-baru", label: "Pusat Pendaftar Baru", icon: UserPlus },

  { separator: "Laporan & Analisis" },
  { path: "/admin/financial", label: "Laporan Keuangan", icon: FileBarChart },
  { path: "/admin/supply-chain", label: "Alur Rantai Pasok", icon: BarChart3 },
  { path: "/admin/inflation", label: "Monitoring Harga Komoditas", icon: TrendingUp },
  { path: "/admin/food-report", label: "Laporan Arus Komoditas", icon: Apple },

  { separator: "Komunikasi" },
  { path: "/admin/chat-mitra", label: "Chat Pos Cabang", icon: MessageCircle },
  { path: "/admin/chat-supplier", label: "Chat Supplier", icon: MessageCircle },
  { path: "/admin/chat-logistik", label: "Chat Logistik", icon: MessageCircle },
  { path: "/admin/notifications", label: "Notifikasi Sistem", icon: Bell },
];

export default function AdminLayout() {
  return <TopNavLayout menuItems={menuItems} title="Koperasi Induk Sukmajaya (Gudang Pusat)" />;
}