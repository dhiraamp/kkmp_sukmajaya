import { base44 } from "@/api/base44Client";

export const DASHBOARD_PATHS = {
  admin: "/admin/dashboard",      // Koperasi Induk Sukmajaya
  mitra: "/mitra/dashboard",      // Koperasi Cabang / Pos KKMP
  supplier: "/supplier/dashboard", // Pemasok Komoditas
  logistik: "/logistik/dashboard", // Armada Pengiriman Internal
  penerima: "/warga/beranda",      // Anggota Koperasi
  warga: "/warga/beranda",         // Alias Anggota Koperasi
  anggota: "/warga/beranda",       // Anggota Koperasi
};

export const PROFILE_PATHS = {
  admin: "/admin/dashboard",
  mitra: "/mitra/reports",
  supplier: "/supplier/income",
  logistik: "/logistik/reports",
  penerima: "/warga/profil",
  warga: "/warga/profil",
  anggota: "/warga/profil",
};

export function getRole() {
  return localStorage.getItem("kkmp_role") || "penerima";
}

export function getDashboardPath(role = getRole()) {
  return DASHBOARD_PATHS[role] || "/portal";
}

export function getProfilePath(role = getRole()) {
  return PROFILE_PATHS[role] || "/portal";
}

export function logoutUser(redirectPath = "/portal") {
  localStorage.removeItem("kkmp_role");
  localStorage.removeItem("kkmp_user");
  localStorage.removeItem("kkmp_session_user");
  localStorage.removeItem("kkmp_login_email");
  localStorage.removeItem("kkmp_intended");
  localStorage.removeItem("kkmp_name");
  localStorage.removeItem("kkmp_phone");
  localStorage.removeItem("kkmp_nik");
  base44.auth.logout(redirectPath);
}
