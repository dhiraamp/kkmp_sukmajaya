# Daftar Temuan Audit: Residu Smart MBG, SPPG, Garut, & Disperindag

Dokumen ini memuat inventarisasi lengkap seluruh sisa kata kunci, variabel, komponen, berkas mati (*dead code*), data *mock*, dan konfigurasi yang masih terikat dengan sistem lama (**Smart MBG**, **SPPG/Dapur MBG**, **Garut**, dan **Disperindag**) untuk ditransformasikan sepenuhnya menjadi **Koperasi Kelurahan Merah Putih (KKMP) Sukmajaya — Kota Depok**.

Tanggal Audit: Kamis, 01 Oktober 2026  
Status: Teridentifikasi untuk Pembersihan Total

---

## 📑 Ringkasan Kategori Temuan

| No | Kategori | Jumlah File Terdampak | Status Eksekusi |
|:---:|---|:---:|:---:|
| **1** | Berkas Mati / Dead Code Bekas MBG (Dihapus) | 8 file | ✅ **SELESAI** (Commit `dab1016`) |
| **2** | Peta Geospasial (GIS Map & GIS Service) | 4 file | ✅ **SELESAI** (100% Bersih & Teruji Build) |
| **3** | Dashboard 5 Role (Logistik, Mitra, Supplier, Admin) | 7 file | ⏳ Menunggu Eksekusi (Fase 3) |
| **4** | Helper, Validasi, Store, & Seed Data | 6 file | ⏳ Menunggu Eksekusi (Fase 4) |
| **5** | Konfigurasi Proxy & Scraper Berita Daerah Garut | 2 file | ⏳ Menunggu Eksekusi (Fase 5) |

---

## 1. 🗺️ Peta Geospasial (GIS Map & GIS Service)

### A. `src/components/marketplace/GisMap.jsx`
- **Dropdown & Layer Aktif**:
  - Terdapat pilihan layer: `🏢 Dapur SPPG` (`COLOR.dapur`, `active.dapur`, `rawDapur`).
  - Label filter: `Semua Kapasitas Dapur`, `> 2.500 Porsi`, `1.500 - 2.500`, `< 1.500` (konsep kapasitas porsi MBG).
  - Search placeholder: `"Cari Kode SPPG, Nama Desa, Yayasan..."` dan `"Cari Dapur Tujuan, Rute Distribusi..."`.
- **Badge & Legenda**:
  - `Data Aktif Disperindag Garut` pada bagian footer legenda.
  - Header: tombol `Sinkronkan Data Disperindag`.
- **Modal Dialog Detail**:
  - **Modal Dapur SPPG**: Menampilkan kapasitas Porsi/Hari, Yayasan pengelola SPPG, serta daftar sekolah sasaran MBG.
  - **Modal Sasaran Penerima**: Menampilkan teks:
    - `"Kelompok Sasaran Intervensi Gizi Terpadu Program Makanan Bergizi Gratis Garut"`
    - `"Memenuhi AKG Nasional BGN RI"`
    - `"Standar Menu: Nasi, Lauk Hewani, Nabati, Sayur, & Buah"`
    - `"Dapur Penyuplai (SPPG): SPPG Garut Terdekat"`
    - `"Wilayah {kecamatan}, Garut"`
  - **Modal Rute Logistik**:
    - `"Rute Distribusi Makanan Bergizi dari Central Hub menuju SPPG Kecamatan"`
    - `"Armada Pengangkut: Mobil Boks Berpendingin (Insulated Van)"`
    - `"Hub Garut Kota ➔ {target}"`
    - `"Jalur Protokol & Arteri Garut"`
- **Konstanta & Variabel**:
  - `GARUT_CENTER = [-6.3980, 106.8420]`
  - `Kecamatan gabungan se-Garut`
  - Fallback `"Garut Kota"`

### B. `src/api/gisService.js`
- **Properti Baseline**: `totalSppgTerdaftar: 9`, key array `dapur: [...]`.
- **Konstanta & Alias Kompatibilitas**:
  - `export const GARUT_HUB = DEPOK_HUB;`
  - `export const DISPERINDAG_GARUT_BASELINE = KKMP_DEPOK_BASELINE;`
- **Fungsi**:
  - `importDisperindagData()`
  - `resetToDisperindagBaseline()`

### C. `src/components/admin/GisImportModal.jsx`
- Teks layer status: `<p>Dapur SPPG</p>` dan `<p>Sekolah Sasaran</p>`.
- Judul/Tombol: `Sinkronkan Data Disperindag`.

---

## 2. 👥 Dashboard 5 Role Pengguna

### A. Role Logistik & Armada
- **`src/pages/logistik/LogistikOrders.jsx`**:
  - Baris 370: Header tabel `<TableHead>Mitra SPPG</TableHead>`.
  - Baris 505: `<p>Tujuan Mitra SPPG</p>`.
  - Baris 533: `Diterima oleh: {selected.pod_recipient_name || "Petugas SPPG"}`.
  - Baris 248: Komentar `Beri notifikasi realtime ke Mitra Dapur SPPG, Supplier, dan Admin`.
- **`src/components/logistik/PodSubmitModal.jsx`**:
  - Baris 113: Fallback `delivery.mitra || delivery.mitra_name || "Dapur SPPG"`.
- **`src/components/logistik/PodViewModal.jsx`**:
  - Baris 15: Fallback `"Petugas Dapur SPPG"`.
  - Baris 16: Fallback `"Pengelola Dapur"`.
  - Baris 20: Fallback `"Dapur SPPG"`.
  - Baris 21: Fallback area `"Garut"`.

### B. Role Mitra (Pos Cabang KKMP)
- **`src/pages/mitra/MitraDashboard.jsx`**:
  - Baris 121: Properti `sppgName` pada `<StockAlertBanner sppgName={...} />`.
- **`src/pages/mitra/MitraKebutuhan.jsx`**:
  - Baris 56, 109, 134, 145: Filter dan payload order masih menggunakan key `sppg_id: user.email`, `sppg_name: user.organization_name`.
- **`src/pages/mitra/MitraOrders.jsx`**:
  - Baris 80, 265: Filter rating `{ sppg_id: user.email }` dan prop `sppgProfile={profile}`.

### C. Role Supplier Pangan
- **`src/pages/supplier/SupplierDashboard.jsx`**:
  - Baris 93–95: `mitra_id: need.sppg_id`, `mitra_name: need.sppg_name`.
  - Baris 102: Notifikasi toast orderan dari `need.sppg_name`.
  - Baris 178: `need.sppg_name || need.pos_name || "Pos Cabang KKMP"`.
- **`src/pages/supplier/SupplierRatings.jsx`**:
  - Baris 128: Fallback review `r.sppg_name || "SPPG"`.
- **`src/components/supplier/PilihLogistik.jsx`**:
  - Baris 49–73: Fungsi `fetchSppg`, state `sppgProfile`, variabel `jarakKeSppg`.
  - Baris 133: Label teks `"...diurutkan berdasarkan jarak terdekat ke supplier & SPPG"`.
  - Baris 162: Teks badge `(sup: ... · sppg: ...)`.

### D. Role Admin Induk
- **`src/pages/admin/AdminMitra.jsx`**:
  - Baris 303: Modal header `Detail Mitra / SPPG`.
  - Baris 318: Badge `Role: Mitra / SPPG`.
  - Baris 349: Label `Alamat Dapur:`.

---

## 3. 🗑️ Berkas Mati / Dead Code Bekas Smart MBG (Rencana Dihapus Total)

Berkas-berkas berikut tidak lagi diimpor atau digunakan dalam alur rute aplikasi KKMP:

| No | Lokasi Berkas | Keterangan Residu MBG | Tindakan |
|:---:|---|---|:---:|
| 1 | `src/pages/admin/AdminSppgMenus.jsx` | Pemantauan menu harian dapur SPPG MBG | **Hapus** |
| 2 | `src/pages/penerima/PenerimaLayout.jsx` | Layout lama role penerima sasaran MBG | **Hapus** |
| 3 | `src/components/penerima/PenerimaMenuView.jsx` | Komponen jadwal menu gizi penerima MBG | **Hapus** |
| 4 | `src/pages/mitra/MitraMenu.jsx` | Manajemen resep & porsi masak harian SPPG | **Hapus** |
| 5 | `src/pages/mitra/MitraNutrition.jsx` | Kalkulasi AKG & makronutrisi makanan bergizi | **Hapus** |
| 6 | `src/components/mitra/IngredientNutritionCalculator.jsx` | Kalkulator kalori & protein per porsi MBG | **Hapus** |
| 7 | `src/components/marketplace/WeeklyMenuCards.jsx` | Kartu menu makan bergizi mingguan | **Hapus** |
| 8 | `src/components/marketplace/WeeklyMenuSection.jsx` | Seksi menu gizi mingguan di beranda | **Hapus** |

---

## 4. ⚙️ Helper, Validasi, Store, & Seed Data

### A. Skema Validasi (`src/lib/validations.js`)
- Baris 44: `portions: z.number().int().min(1, "Jumlah porsi makanan minimal 1")`.
- Baris 60: `grams: z.number().min(5, "Takaran minimal 5 gram per porsi")`.
- Baris 64: `menu_name: z.string().min(3, "Nama menu makanan bergizi minimal 3 karakter")`.
- Baris 67: `total_calories: z.number().min(200, "Kalori porsi terlalu rendah untuk makan siang")`.
- Baris 73: `export const sppgProfileSchema = z.object({...})`.
- Baris 80: `kapasitas_porsi: z.number().int().min(100, "Kapasitas harian minimal 100 porsi")`.

### B. Helper & Query Client
- **`src/lib/career.js`**: Baris 9 & 16: `case "sppg": return "Pos Cabang Koperasi"`.
- **`src/lib/feedback.js`**:
  - Baris 83: `"Siap diproses untuk kebutuhan Dapur SPPG."`.
  - Baris 92: `"Dapur SPPG dan logistik telah menerima notifikasi."`.
  - Baris 107: `"Sebanyak ${portions} porsi makan bergizi siap diserahterimakan..."`.
- **`src/lib/query-client.js`**: Baris 39–40, 77: `sppgList`, `sppgDetail`, `useSppgQuery`.

### C. Seed Data (`src/lib/seed.js`)
- Baris 20–73: Seed data resep makanan MBG harian (Ayam goreng, semur daging, takaran kalori & gram per porsi).
- Baris 244, 266: Alamat pengiriman `"Jl. Raya Cikajang, Garut"` dan `"Garut Kota, Kabupaten Garut"`.
- Baris 259–260: Supplier `"Toko Tani Garut"`.
- Baris 273–274: Entity `WeeklyMenu` resep gizi.
- Baris 277–295: `Mitra SPPG Cikajang`, key `sppg_id: "mitra@demo.local"`.

### D. Store Warga & Komponen Alamat
- **`src/lib/warga-store.js`**: Baris 30 & 127: Default fallback regency `"Kabupaten Garut"`.
- **`src/components/warga/AddressForm.jsx`**: Baris 19: Default form `regency: "Kabupaten Garut"`.

### E. Edukasi Knowledge Center (`src/components/marketplace/KnowledgeSection.jsx`)
- Baris 82: `tag: "Dapur"`.
- Baris 86–87: `"Standar Resep Gizi — Resep baku mengikuti panduan gizi Kemenkes — kalori, protein, & porsi seimbang."`.
- Baris 94: `"Pemantauan output harian per dapur untuk memastikan volume mencukupi penerima."`.
- Baris 100: `"Higiene & Sanitasi Dapur — Audit sanitasi peralatan, pegawai, & ruang masak..."`.
- Baris 110: `"Pengiriman tepat waktu dari dapur ke satuan penerima dengan rute optimal."`.

---

## 5. 🌐 Feed Berita Daerah & Konfigurasi Proxy

- **`src/lib/news.js`**:
  - Fungsi `mapGarutNews()` mengambil blog dari `https://satudata.garutkab.go.id/artikel/`.
  - Endpoint `/satudata/api/blog`.
- **`vite.config.js`**:
  - Baris 14–18 & 33–37: Reverse proxy Vite `/satudata` mengarah ke `https://satudata-api.garutkab.go.id`.

---

## 🎯 Target Standarisasi Identitas KKMP Sukmajaya Depok

| Istilah / Konsep Lama | Standar Baru KKMP Sukmajaya Kota Depok |
|---|---|
| **SPPG / Dapur SPPG / Dapur MBG** | **Pos Cabang KKMP / Gerai Distribusi Koperasi** |
| **Gudang Pusat Garut / Central Hub** | **Gudang Induk KKMP Sukmajaya Kota Depok** |
| **Porsi Makan Bergizi / AKG BGN** | **Paket Sembako / Kuota Komoditas Ritel Kelontong** |
| **Penerima Sasaran (Siswa/Balita/Bumil MBG)** | **Anggota Koperasi / Warga Penerima Distribusi** |
| **Disperindag Garut** | **Pengurus Koperasi KKMP & Dinas Koperasi UMKM Depok** |
| **Kabupaten Garut / Garut Kota** | **Kecamatan Sukmajaya — Kota Depok** |
