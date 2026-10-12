# Dokumentasi Rebranding Identitas PINBAS & Konfigurasi Port Server

**Tanggal Pelaksanaan:** Rabu, 07 Oktober 2026  
**Versi Dokumen:** 1.0.0  
**Status:** Selesai / Terverifikasi  
**Aset Referensi Logo:** [`public/images/logo_pinbas.png`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/public/images/logo_pinbas.png)

---

## 1. Latar Belakang & Ringkasan

Pembaruan ini dilakukan untuk merefleksikan identitas visual dan kelembagaan baru platform, beralih dari entitas koperasi sebelumnya menuju **Pusat Inkubasi Bisnis Syariah (PINBAS)** di bawah naungan **Majelis Ulama Indonesia (MUI) Kota Depok**.

Bersamaan dengan pembaruan branding, port server pengembangan lokal Vite juga diubah dari default `5173` menjadi **`5174`** guna menghindari bentrok port dengan aplikasi lain dan menyediakan konfigurasi port yang dinamis.

---

## 2. Rincian Identitas Visual Baru

Berdasarkan aset logo resmi pada file [`public/images/logo_pinbas.png`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/public/images/logo_pinbas.png):

| Elemen | Keterangan |
|---|---|
| **Logo Kiri** | Lambang resmi segel melingkar **Majelis Ulama Indonesia (MUI)** dengan teks *"MUI KOTA DEPOK"* |
| **Nama Utama** | **PINBAS** (tipografi hijau tegas dengan ornamen daun hijau dan emas pada huruf 'A') |
| **Sub-Nama / Deskripsi** | **PUSAT INKUBASI BISNIS SYARIAH** |
| **Slogan Resmi (Tagline)** | *"Empowering People and Connecting"* dengan lengkungan garis aksen emas |
| **Warna Dominan** | Hijau Hutan (*Forest Green* `#064e3b`), Hijau Zamrud (*Emerald* `#047857`), Emas (*Gold* `#d97706`), dan Putih |

---

## 3. Daftar Perubahan Berkas & Komponen

### A. Konfigurasi Sistem & Root
1. **[`index.html`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/index.html)**
   - Favicon diperbarui mengarah ke `/images/logo_pinbas.png`.
   - Judul halaman diubah menjadi: `PINBAS MUI Kota Depok — Pusat Inkubasi Bisnis Syariah`.
   - Meta deskripsi diperbarui mencantumkan slogan *"Empowering People and Connecting"*.
2. **[`package.json`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/package.json)**
   - Field `name` diubah menjadi `pinbas-depok`.
3. **[`vite.config.js`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/vite.config.js)**
   - Port server dan preview ditetapkan ke **`5174`**.
   - Opsi `host: true` diaktifkan untuk akses jaringan/LAN.
   - Mendukung penimpaan dinamis via environment variable `VITE_PORT` atau `PORT`.
4. **[`README.md`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/README.md)**
   - Judul dan deskripsi diselaraskan ke PINBAS MUI Kota Depok.
   - Tautan lokal diperbarui menjadi `http://localhost:5174`.

---

### B. Navigasi & Halaman Publik
1. **[`HomeHeader.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/components/marketplace/HomeHeader.jsx)**
   - Mengganti SVG siluet rumah merah dan teks koperasi lama dengan tag `<img>` beresolusi tinggi yang memuat `logo_pinbas.png`.
2. **[`HeroKoperasi.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/components/marketplace/HeroKoperasi.jsx)**
   - Headline utama: **PINBAS MUI Kota Depok**.
   - Deskripsi menyertakan tagline resmi: *"Empowering People and Connecting"*.
   - Badge overlay kanan diperbarui ke *"PINBAS Induk Depok"* dan *"MUI Kota Depok"*.
3. **[`FooterStats.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/components/marketplace/FooterStats.jsx)**
   - Menyematkan logo `logo_pinbas.png` di bagian footer.
   - Hak cipta: `© 2026 PINBAS MUI Kota Depok — Pusat Inkubasi Bisnis Syariah`.
4. **[`Marketplace.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/Marketplace.jsx)**
   - Footer kolom 1 menampilkan logo resmi `logo_pinbas.png` dan pengantar ekosistem syariah.
   - Footer kolom 3 & 4 menyelaraskan peran rantai pasok dan alamat *"Sekretariat PINBAS Depok (Gedung MUI Kota Depok)"*.
5. **[`SupplyChainFlow.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/components/marketplace/SupplyChainFlow.jsx)**
   - Alur langkah rantai pasok diselaraskan: PINBAS Induk (MUI Kota Depok) dan Pos Cabang Mitra.
6. **[`KnowledgeCenter.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/KnowledgeCenter.jsx)**
   - Banner edukasi diperbarui menjadi: *Pusat Pengetahuan PINBAS / MUI Kota Depok*.
7. **[`GisPetaPage.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/GisPetaPage.jsx)**
   - Judul diperbarui menjadi: *Peta Persebaran Jaringan Pos & Cabang PINBAS Depok*.

---

### C. Autentikasi & Portal Akses Peran
1. **[`Portal.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/Portal.jsx)**
   - Header atas menyematkan logo `logo_pinbas.png` dengan kontainer kartu berlatar terang yang kontras.
   - Hero banner menyematkan judul *"Empowering People and Connecting"*.
   - Definisi peran (`ROLES`) diselaraskan:
     * `admin`: **PINBAS Induk (MUI Kota Depok)** — Pengelola Gudang Pusat PINBAS.
     * `mitra`: **Pos Cabang / Mitra Syariah** — Pengelola 8 cabang/pos mitra binaan Depok.
     * `penerima`: **Anggota & Komunitas** — Belanja komoditas hemat syariah.
     * `supplier`: **Supplier & Produsen Syariah** — Pemasok komoditas halal binaan.
     * `logistik`: **Logistik & Armada Halal** — Distribusi internal ke pos cabang.
2. **[`Register.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/Register.jsx)**
   - Header form registrasi menampilkan logo `logo_pinbas.png`, teks **PINBAS MUI KOTA DEPOK**, sub-teks **PUSAT INKUBASI BISNIS SYARIAH**, dan slogan *"Empowering People and Connecting"*.

---

### D. Layout Navigasi & Dashboard Peran
1. **[`TopNavLayout.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/components/layout/TopNavLayout.jsx)**
   - Menampilkan logo `logo_pinbas.png` di sudut kiri atas top bar navigasi internal untuk seluruh peran.
   - Objek `roleTheme` disesuaikan:
     * Admin: `PINBAS INDUK` / `Pusat Inkubasi Bisnis Syariah MUI Depok`
     * Mitra: `PINBAS MITRA` / `Pos Cabang Mitra Usaha Syariah`
     * Supplier: `PINBAS PEMASOK` / `Portal Mitra Pemasok Syariah`
     * Logistik: `PINBAS LOGISTIK` / `Armada Distribusi Halal`
2. **[`WargaLayout.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/warga/WargaLayout.jsx), [`WargaBeranda.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/warga/WargaBeranda.jsx) & [`WargaProfil.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/warga/WargaProfil.jsx)**
   - Logo navbar diganti ke `logo_pinbas.png`.
   - Banner promo belanja dan kartu anggota terverifikasi diperbarui menjadi *Anggota Resmi PINBAS MUI Kota Depok*.
3. **Dashboard & Manajemen Admin**:
   - [`AdminLayout.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminLayout.jsx): Menu dan judul Gudang Pusat PINBAS.
   - [`AdminDashboard.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminDashboard.jsx): Dashboard PINBAS Induk (MUI Kota Depok).
   - [`AdminStock.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminStock.jsx): Manajemen Stok Gudang Pusat PINBAS.
   - [`AdminGis.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminGis.jsx): Peta Geospasial Jaringan Pos Cabang PINBAS Depok.
   - [`AdminMitra.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminMitra.jsx), [`AdminSuppliers.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminSuppliers.jsx), [`AdminLogistik.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminLogistik.jsx), [`AdminWarga.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminWarga.jsx).
   - [`AdminFinancial.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminFinancial.jsx), [`AdminFoodReport.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminFoodReport.jsx), [`AdminSupplyChain.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminSupplyChain.jsx), [`AdminPendaftarBaru.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminPendaftarBaru.jsx).
   - [`AdminChatMitra.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminChatMitra.jsx), [`AdminChatSupplier.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminChatSupplier.jsx), [`AdminChatLogistik.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/admin/AdminChatLogistik.jsx).
4. **Dashboard Mitra & Supplier**:
   - [`MitraLayout.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/mitra/MitraLayout.jsx) & [`MitraDashboard.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/mitra/MitraDashboard.jsx): Dashboard Pos Cabang PINBAS.
   - [`MitraProducts.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/mitra/MitraProducts.jsx), [`MitraKebutuhan.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/mitra/MitraKebutuhan.jsx), [`MitraOrders.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/mitra/MitraOrders.jsx).
   - [`MitraReports.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/mitra/MitraReports.jsx): Generator PDF laporan berganti judul ke *PINBAS MUI KOTA DEPOK* dengan nama file `laporan_pos_cabang_pinbas.pdf`.
   - [`SupplierLayout.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/supplier/SupplierLayout.jsx) & [`SupplierDashboard.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/supplier/SupplierDashboard.jsx): Dashboard Pemasok Komoditas PINBAS.
   - [`LogistikLayout.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/logistik/LogistikLayout.jsx) & [`LogistikDashboard.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/logistik/LogistikDashboard.jsx): Armada Distribusi Halal Gudang Pusat PINBAS.

---

## 4. Konfigurasi Port & Menjalankan Aplikasi

Server pengembangan lokal kini menggunakan port **`5174`** secara baku.

```bash
# 1. Menjalankan dev server pada port default (5174)
npm run dev

# 2. Menjalankan dev server pada port kustom bila diinginkan
npm run dev -- --port 3000

# 3. Atau tentukan via file .env
VITE_PORT=5174
```

Aplikasi dapat diakses melalui peramban web pada alamat:
👉 **[http://localhost:5174](http://localhost:5174)** atau **[http://localhost:5174/portal](http://localhost:5174/portal)**

---

## 5. Ringkasan Status

Seluruh aset, komponen antarmuka, tata letak, modul laporan PDF, dan konfigurasi server Vite telah terintegrasi penuh dan siap digunakan.
