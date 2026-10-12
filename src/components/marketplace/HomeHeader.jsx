import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  User,
  UserCircle,
  LogOut,
  ShoppingCart,
  Search,
  MapPin,
} from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";
import { getProfilePath, logoutUser } from "@/lib/rolePaths";
import { base44 } from "@/api/base44Client";

export default function HomeHeader({ onSearchClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState("Kota Depok");
  const [locOpen, setLocOpen] = useState(false);
  const dropdownRef = useRef(null);
  const locRef = useRef(null);

  const role = localStorage.getItem("kkmp_role") || "penerima";
  const profilePath = getProfilePath(role);
  const email = user?.email || "";
  const CART_PATH = { penerima: "/warga/keranjang", warga: "/warga/keranjang", mitra: "/mitra/cart" };
  const cartPath = CART_PATH[role] || "/warga/keranjang";

  useEffect(() => {
    if (!isAuthenticated) return;
    const loadCart = async () => {
      try {
        const items = await base44.entities.CartItem.filter({ user_email: email });
        setCartCount(items.reduce((s, i) => s + (i.quantity || 1), 0));
      } catch {
        // fallback
      }
    };
    loadCart();
    return base44.entities.CartItem.subscribe(loadCart);
  }, [isAuthenticated, email]);

  const NAV = [
    { label: "Beranda", path: "/", match: "/" },
    { label: "Produk", path: "/marketplace", match: "/marketplace" },
    { label: "Untuk Anggota", path: "/portal", match: "/portal" },
    { label: "Koperasi Cabang", path: "/peta", match: "/peta" },
    { label: "Tentang Kami", path: "/tentang-kami", match: "/tentang-kami" },
    { label: "Berita", path: "/berita", match: "/berita" },
    { label: "Pusat Edukasi", path: "/knowledge-center", match: "/knowledge-center" },
  ];

  const DEPOK_DISTRICTS = [
    "Kota Depok (Semua)",
    "Kec. Sukmajaya / Sukmajaya",
    "Kec. Beji / Margonda",
    "Kec. Pancoran Mas",
    "Kec. Cimanggis",
    "Kec. Cilodong",
    "Kec. Sawangan",
    "Kec. Tapos",
  ];

  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
      if (locRef.current && !locRef.current.contains(e.target)) {
        setLocOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleNav = (n) => {
    if (n.path) {
      navigate(n.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
  };

  const isActive = (n) => {
    if (n.match === "/") return location.pathname === "/" || location.pathname === "/marketplace";
    return n.match ? location.pathname.startsWith(n.match) : false;
  };

  const handleLogout = () => {
    setProfileOpen(false);
    logoutUser("/portal");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Logo PINBAS MUI Kota Depok */}
        <div
          className="flex items-center gap-3 cursor-pointer shrink-0"
          onClick={() => navigate("/")}
        >
          <img
            src="/images/logo_pinbas.png"
            alt="PINBAS - Pusat Inkubasi Bisnis Syariah MUI Kota Depok"
            className="h-11 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Menu Navigasi Tengah */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-700">
          {NAV.map((n) => (
            <span
              key={n.label}
              onClick={() => handleNav(n)}
              className={
                isActive(n)
                  ? "text-red-600 font-bold underline underline-offset-8 decoration-2 decoration-red-600 cursor-pointer transition-colors"
                  : "hover:text-red-600 cursor-pointer transition-colors"
              }
            >
              {n.label}
            </span>
          ))}
        </nav>

        {/* Sisi Kanan: Location + Search + Cart + Masuk/Daftar Button */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Location Selector (Kota Depok) */}
          <div className="relative hidden md:block" ref={locRef}>
            <button
              onClick={() => setLocOpen((v) => !v)}
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-red-600 px-2.5 py-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <span>{selectedLocation}</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
            {locOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg py-1.5 z-50 text-xs">
                {DEPOK_DISTRICTS.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setSelectedLocation(loc.replace(" (Semua)", ""));
                      setLocOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors ${
                      selectedLocation === loc.replace(" (Semua)", "")
                        ? "font-bold text-red-600 bg-red-50/50"
                        : "text-gray-700"
                    }`}
                  >
                    📍 {loc}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Icon Quick Click */}
          <button
            onClick={() => {
              if (onSearchClick) onSearchClick();
              else {
                const searchEl = document.getElementById("search-input-hero");
                if (searchEl) {
                  searchEl.focus();
                  searchEl.scrollIntoView({ behavior: "smooth", block: "center" });
                } else {
                  navigate("/marketplace");
                }
              }
            }}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
            title="Cari Produk"
            aria-label="Cari Produk"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Cart with Red Count Badge */}
          <button
            onClick={() => navigate(cartPath)}
            className="relative p-2 text-gray-700 hover:text-red-600 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
            title="Keranjang Belanja"
            aria-label="Keranjang belanja"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 min-w-[17px] h-[17px] bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1">
              {cartCount > 0 ? (cartCount > 99 ? "99+" : cartCount) : 2}
            </span>
          </button>

          {/* Auth Action Button */}
          {isAuthenticated ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProfileOpen((v) => !v)}
                className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-800 text-xs font-bold pl-1.5 pr-3 py-1.5 rounded-full border border-red-200 transition-colors cursor-pointer"
              >
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-[11px] font-bold">
                  {role[0]?.toUpperCase() || "U"}
                </span>
                <span className="capitalize hidden sm:block">
                  {role === "penerima" || role === "warga" ? "Anggota" : role}
                </span>
                <ChevronDown className="w-3 h-3 text-red-500" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50">
                  <div className="px-4 py-3 bg-red-50/50 border-b border-gray-100">
                    <p className="text-xs font-bold text-gray-900 capitalize">
                      {role === "penerima" || role === "warga" ? "Anggota Koperasi" : `Role: ${role}`}
                    </p>
                    <p className="text-[11px] text-gray-500 truncate">{email || "Akun Terverifikasi"}</p>
                  </div>
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      navigate(profilePath);
                    }}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 transition-colors text-left cursor-pointer"
                  >
                    <UserCircle className="w-4 h-4 text-red-600" /> Dashboard & Profil
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-red-600 hover:bg-red-50 transition-colors text-left border-t border-gray-100 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4 text-red-600" /> Keluar (Logout)
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/portal")}
              className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <User className="w-3.5 h-3.5" />
              <span>Masuk / Daftar</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
