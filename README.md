# 🇮🇩 Koperasi Kelurahan Merah Putih (KKMP) Sukamaja / Mekarjaya — Kota Depok

Platform digital terpadu **Koperasi Kelurahan Merah Putih (KKMP)** Kota Depok yang mengintegrasikan ekosistem rantai pasok pangan, marketplace komoditas sembako & warung kelontong, manajemen 8 Pos Cabang Kelurahan, hingga distribusi logistik rakyat.

---

## 👥 Akun Demo & Kredensial Pengujian (Dummy Accounts)

Semua akun pengujian di bawah ini dapat langsung digunakan untuk masuk melalui **Portal Login** ([http://localhost:5173/portal](http://localhost:5173/portal)).

### 🔑 Sandi Standar untuk Seluruh Akun:
```text
demo1234
```

| No | Role / Peran | Nama Entitas | Email Utama | Email Alternatif | Halaman Utama |
|---|---|---|---|---|---|
| **1** | **Warga / Anggota** | Adhira Maharani | `anggota.depok@kkmp-depok.id` | `warga@demo.local` | `/warga/beranda` & `/marketplace` |
| **2** | **Mitra Pos Cabang** | Mitra Pos Cabang Beji | `cabang.beji@kkmp-depok.id` | `mitra@demo.local` | `/mitra/dashboard` |
| **3** | **Supplier Pangan** | Gapoktan Sawangan Mandiri | `supplier.pangan@kkmp-depok.id` | `supplier@demo.local` | `/supplier/dashboard` |
| **4** | **Logistik & Armada** | Tim Logistik KKMP Kota Depok | `logistik@kkmp-depok.id` | `logistik@demo.local` | `/logistik/dashboard` |
| **5** | **Pengurus Induk (Admin)** | Pengurus KKMP Mekarjaya | `admin.induk@kkmp-depok.id` | `admin@demo.local` | `/admin/dashboard` |

> 💡 *Detail dokumentasi hak akses setiap akun tersedia di [`docs/AKUN_DUMMY_LOGIN.md`](docs/AKUN_DUMMY_LOGIN.md).*

---

## 🚀 Fitur Utama Ekosistem KKMP Depok

1. **Marketplace Sembako & Warung Kelontong**:
   - Belanja beras premium Ramos, shampo Lifebuoy/Pantene, mentega Blue Band, mie instan Indomie, sabun mandi Dettol, deterjen Rinso, Sunlight, minyak goreng, dan sembako berkualitas dengan **harga khusus anggota**.
   - Integrasi keranjang belanja, checkout pos cabang terdekat, dan kupon anggota.
2. **Jaringan Distribusi 8 Pos Cabang Kelurahan**:
   - Pemetaan sebaran wilayah: Mekarjaya, Sukmajaya, Beji, Pancoran Mas, Cimanggis, Sawangan, Cipayung, dan Tapos.
   - Pos cabang dapat memesan stok (restock) langsung ke supplier lokal dan Gudang Induk.
3. **Pusat Logistik & Armada Depok**:
   - Manajemen armada pickup dan kurir distribusi pos kelurahan dengan pelacakan status rute.
4. **Dashboard Supplier Komoditas**:
   - Petani & kelompok tani Depok (Gapoktan) dapat mengelola stok, menerima Purchase Order (PO), dan konfirmasi pengiriman.
5. **GIS & Pemantauan Agregat Admin Induk**:
   - GIS sebaran 8 cabang, pemantauan stabilitas harga pangan (Bapokting), serta monitoring stok terpusat.
6. **Layanan Digital PPOB**:
   - Pembelian pulsa, token listrik, pembayaran BPJS, dan tagihan utilitas bagi anggota koperasi.

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|---|---|
| **Frontend** | React 18, Vite |
| **Styling & Animasi** | Tailwind CSS, Framer Motion, Lucide Icons |
| **State & Cache** | TanStack Query v5, Context API, Local Seed Adapter |
| **Notifikasi** | Sonner |
| **Peta Wilayah** | Leaflet / React-Leaflet GIS |

---

## ⚙️ Cara Menjalankan Project

```bash
# 1. Clone repositori
git clone https://github.com/dhiraamp/smart-mbg.git
cd smart-mbg

# 2. Instal dependensi
npm install

# 3. Jalankan server pengembangan lokal
npm run dev

# 4. Buka di browser
# http://localhost:5173
```

---

## 📁 Struktur Direktori

```
kkmp-sukamaja/
├── docs/                     # Dokumentasi migrasi, alur, dan daftar akun demo
│   ├── AKUN_DUMMY_LOGIN.md
│   └── panduan-rebranding-depok.md
├── public/                   # Aset logo, ikon, gambar ilustrasi
├── src/
│   ├── api/                  # Base44 client adapter & GIS service Depok
│   ├── components/
│   │   ├── marketplace/      # HeroKoperasi, CategoryGrid, FeaturedProducts, HomeHeader
│   │   ├── layout/           # TopNavLayout, Sidebar
│   │   └── shared/           # DigitalServicesHub (Pulsa/BPJS/Tagihan)
│   ├── hooks/                # useCart, useSupplierProducts, useUserProfile
│   ├── lib/                  # marketplace catalog, seed data, role paths, query client
│   └── pages/
│       ├── admin/            # Dashboard Admin & GIS Peta Depok
│       ├── mitra/            # Pos Cabang Dashboard, Restock, Order
│       ├── supplier/         # Supplier Dashboard & PO Management
│       ├── logistik/         # Logistik Dashboard & Armada Tracking
│       └── warga/            # Anggota Warga Dashboard, Checkout, Pesanan
└── vite.config.js
```

---

## 📄 Hak Cipta
Hak cipta © 2026 **Koperasi Kelurahan Merah Putih (KKMP) Mekarjaya — Kota Depok**. Seluruh hak dilindungi undang-undang.
