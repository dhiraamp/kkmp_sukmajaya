# Rencana Eksekusi Harian: Migrasi & Rebranding KKMP Sukamaja
**Tanggal:** 29 September 2026  
**Fokus Utama Hari Ini:** Pembersihan File Mati (Dead Code), Konfigurasi Identitas, Routing, dan Rebranding Portal & Marketplace.

---

## 🎯 Target Capaian Hari Ini (Objective)
Menghilangkan seluruh ketergantungan dan identitas klien lama (**Smart MBG / Disperindag Garut / BGN**) serta menstabilkan fondasi aplikasi di bawah nama baru **KKMP Sukamaja (Koperasi Konsumen Merah Putih Sukamaja)** sehingga aplikasi dapat di-build tanpa error broken import.

---

## 📋 To-Do List Harian (Checklist Pekerjaan)

### 🔹 Bagian 1: Konfigurasi Identitas & Environment (Est. 15 Menit)
- [ ] **1.1. Perbarui [package.json](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/package.json)**
  - Ganti `"name": "smart-mbg-local"` menjadi `"name": "kkmp-sukamaja"`.
  - Hapus script `"update-sheet": "node scripts/update_sheet.mjs"`.
- [ ] **1.2. Perbarui [index.html](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/index.html)**
  - Ubah `<title>` menjadi `KKMP Sukamaja — Ekosistem Koperasi & Rantai Pasok Terintegrasi`.
  - Ubah `<meta name="description">` menjadi `Sistem manajemen rantai pasok, logistik, dan marketplace komoditas pangan KKMP Sukamaja`.
  - Ganti icon/favicon bila diperlukan.
- [ ] **1.3. Bersihkan [.env](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/.env)**
  - Hapus baris `MISTER_MBG_USERNAME=kadisperindag` dan `MISTER_MBG_PASSWORD=kadisperindag`.
  - Pastikan Supabase URL & Anon Key tetap terpasang dengan benar.
- [ ] **1.4. Bersihkan [vite.config.js](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/vite.config.js) & [vercel.json](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/vercel.json)**
  - Hapus proxy/rewrite rule `/satudata` (target: satudata-api.garutkab.go.id) jika data terbuka pemkab tidak lagi digunakan.

---

### 🔹 Bagian 2: Penghapusan Berkas Mati / MBG Khusus (Est. 20 Menit)
Hapus berkas-berkas berikut yang murni terkait program menu gizi / spreadsheet Disperindag MBG lama:
- [ ] **2.1.** Hapus kredensial: `config/smart-mbg-508408-647620470907.json`
- [ ] **2.2.** Hapus script: `scripts/update_sheet.mjs`
- [ ] **2.3.** Hapus halaman menu SPPG admin: `src/pages/admin/AdminSppgMenus.jsx`
- [ ] **2.4.** Hapus halaman scraping Disperindag: `src/pages/admin/AdminBapokting.jsx`
- [ ] **2.5.** Hapus halaman gizi mitra: `src/pages/mitra/MitraNutrition.jsx`
- [ ] **2.6.** Hapus halaman menu MBG mitra: `src/pages/mitra/MitraMenu.jsx`
- [ ] **2.7.** Hapus komponen hitung gizi: `src/components/mitra/IngredientNutritionCalculator.jsx`
- [ ] **2.8.** Hapus kartu menu harian beranda: `src/components/marketplace/WeeklyMenuCards.jsx`

---

### 🔹 Bagian 3: Pembersihan Routing & Navigasi Layout (Est. 30 Menit)
- [ ] **3.1. Rapikan [src/App.jsx](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/src/App.jsx)**
  - Hapus baris import:
    - `import AdminBapokting from '@/pages/admin/AdminBapokting';`
    - `import AdminSppgMenus from '@/pages/admin/AdminSppgMenus';`
    - `import MitraMenu from '@/pages/mitra/MitraMenu';`
    - `import MitraNutrition from '@/pages/mitra/MitraNutrition';`
  - Hapus rute terkait:
    - `<Route path="/admin/bapokting" element={<AdminBapokting />} />`
    - `<Route path="/admin/sppg-menus" element={<AdminSppgMenus />} />`
    - `<Route path="/mitra/menu" element={<MitraMenu />} />`
    - `<Route path="/mitra/nutrition" element={<MitraNutrition />} />`
- [ ] **3.2. Perbarui [src/pages/admin/AdminLayout.jsx](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/src/pages/admin/AdminLayout.jsx)**
  - Hapus menu `SIHARBATING & MISTER MBG` dan `Menu Harian SPPG`.
  - Ubah label menu `"Manajemen Mitra/SPPG"` &rarr; `"Manajemen Gerai & Mitra KKM"`.
  - Ubah label menu `"Manajemen Warga/Penerima"` &rarr; `"Manajemen Anggota Koperasi"`.
  - Ubah label menu `"Chat Mitra/SPPG"` &rarr; `"Chat Gerai/Mitra"`.
  - Ubah title layout menjadi `"Admin Panel KKMP Sukamaja"`.
- [ ] **3.3. Perbarui [src/pages/mitra/MitraLayout.jsx](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/src/pages/mitra/MitraLayout.jsx)**
  - Ganti title dari `"Portal Mitra / SPPG"` menjadi `"Portal Mitra & Gerai KKMP"`.
  - Hapus item menu `Rekomendasi Menu`, `Nutrition Page`, dan `Penerima Bantuan`.
  - Ganti label menu `"Kebutuhan Bahan & PO"` menjadi `"Pengadaan Barang & PO KKM"`.

---

### 🔹 Bagian 4: Rebranding Autentikasi & Portal Login (Est. 30 Menit)
- [ ] **4.1. Perbarui [src/lib/AuthContext.jsx](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/src/lib/AuthContext.jsx)**
  - Ubah `app_name: "SMART MBG"` &rarr; `app_name: "KKMP Sukamaja"`.
- [ ] **4.2. Perbarui [src/lib/rolePaths.js](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/src/lib/rolePaths.js)**
  - Ubah seluruh prefix kunci `localStorage`:
    - `smartmbg_role` &rarr; `kkmp_role`
    - `smart_mbg_user` &rarr; `kkmp_user`
    - `smartmbg_login_email` &rarr; `kkmp_login_email`
    - `smartmbg_intended` &rarr; `kkmp_intended`
    - `smartmbg_name` &rarr; `kkmp_name`
- [ ] **4.3. Perbarui [src/pages/Portal.jsx](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/src/pages/Portal.jsx)**
  - Perbarui array `ROLES`:
    - `mitra`: `"Mitra Gerai KKMP"` (Pengelola Gerai & Sentra Distribusi Sukamaja), email: `gerai@kkmp.id`.
    - `supplier`: `"Supplier & Petani Binaan"` (Pemasok Hasil Bumi & Komoditas Sukamaja), email: `supplier@kkmp.id`.
    - `logistik`: `"Logistik & Armada KKMP"` (Kurir & Distribusi Armada Komoditas), email: `logistik@kkmp.id`.
    - `penerima`/`warga`: `"Anggota Koperasi & Warga"` (Konsumen & Anggota KKMP Sukamaja), email: `warga@kkmp.id`.
    - `admin`: `"Pengurus & Admin KKMP"` (Pengelola Operasional Koperasi KKMP Sukamaja), email: `admin@kkmp.id`.
  - Ganti teks footer hak cipta:
    - Dari: `© 2026 SMART MBG • Satuan Pelayanan Program Gizi & Disperindag Kabupaten Garut`
    - Menjadi: `© 2026 KKMP Sukamaja • Koperasi Konsumen Merah Putih Sukamaja`.
- [ ] **4.4. Perbarui [src/pages/Register.jsx](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/src/pages/Register.jsx)**
  - Ganti judul header dari `"SMART MBG"` menjadi `"KKMP SUKAMAJA"`.
  - Ganti subjudul menjadi `"Pendaftaran Mitra Gerai, Supplier, dan Anggota Koperasi"`.

---

### 🔹 Bagian 5: Rebranding Tampilan Marketplace & GIS (Est. 30 Menit)
- [ ] **5.1. Perbarui [src/components/marketplace/HomeHeader.jsx](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/src/components/marketplace/HomeHeader.jsx)**
  - Ganti teks judul `"Smart MBG"` &rarr; `"KKMP Sukamaja"`.
  - Ganti subteks `"Integrated Supply Chain Management for MBG Program"` &rarr; `"Pusat Komoditas & Ekosistem Rantai Pasok Koperasi"`.
  - Sesuaikan pembacaan localStorage `smartmbg_role` &rarr; `kkmp_role`.
- [ ] **5.2. Perbarui [src/components/marketplace/HomeSidebar.jsx](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/src/components/marketplace/HomeSidebar.jsx)**
  - Ganti `"Login ke Smart MBG"` &rarr; `"Portal KKMP Sukamaja"`.
  - Ganti deskripsi: `"Akses portal gerai, supplier, armada logistik, dan admin koperasi."`.
  - Ubah menu Knowledge Center jika diperlukan.
- [ ] **5.3. Perbarui [src/pages/Marketplace.jsx](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/src/pages/Marketplace.jsx)**
  - Hapus import dan render `<WeeklyMenuCards />`.
- [ ] **5.4. Perbarui [src/pages/GisPetaPage.jsx](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/src/pages/GisPetaPage.jsx) & [src/pages/admin/AdminGis.jsx](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/src/pages/admin/AdminGis.jsx)**
  - Hapus badge `"Integrasi Resmi Disperindag Garut"`.
  - Hapus referensi link ke `mistermbg.disperindag.garutkab.go.id`.
  - Ubah judul menjadi `"Peta Persebaran Gerai & Jaringan Pasok KKMP Sukamaja"`.

---

### 🔹 Bagian 6: Penyesuaian Data Mock & Seed Database (Est. 20 Menit)
- [ ] **6.1. Perbarui [src/lib/seed.js](file:///G:/WORK/picing/frontend/kkmp-sukamaja/kkmp-sukamaja/src/lib/seed.js)**
  - Ganti versi cache: `const SEED_VERSION = "kkmp_seed_v1";`.
  - Ganti prefix storage: `kkmp_collection_${name}` dan `kkmp_session_user`.
  - Hapus objek `WEEKLY_MENU` dari koleksi data lokal.
  - Ubah data dummy pendaftaran/order:
    - `"Mitra SPPG Cikajang"` &rarr; `"Gerai KKMP Sukamaja 1"`
    - Ganti deskripsi lowongan kerja dari chef SPPG/dapur MBG menjadi staf gerai & gudang KKMP.

---

### 🔹 Bagian 7: Pengujian & Verifikasi Akhir Hari Ini (Est. 15 Menit)
- [ ] **7.1. Uji Build Proyek**
  - Jalankan build (`npm run build`) untuk memastikan tidak ada import error atau broken links.
- [ ] **7.2. Pengujian Alur Navigasi Browser**
  - Bersihkan LocalStorage browser untuk memuat seed data `kkmp_seed_v1`.
  - Buka `/` (Marketplace) &rarr; Periksa nama "KKMP Sukamaja" di header & sidebar.
  - Buka `/portal` &rarr; Coba login sebagai Mitra, Supplier, Logistik, Warga, dan Admin.
  - Pastikan semua dashboard role dapat diakses tanpa ada error menu MBG lama.

---

## ⏱️ Estimasi Total Waktu: ~2.5 - 3 Jam
Semua tugas di atas dirancang untuk diselesaikan hari ini (29 September 2026) agar kode bersih dari sisa Disperindag/Smart MBG sebelum melanjutkan pengembangan fitur khusus KKMP Sukamaja berikutnya.
