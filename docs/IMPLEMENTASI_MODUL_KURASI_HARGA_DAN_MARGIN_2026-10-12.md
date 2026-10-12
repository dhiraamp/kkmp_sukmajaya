# Laporan Pelaksanaan Penyelarasan Sistem: Modul Kurasi Harga & Otomasi Margin PINBAS

**Tanggal:** 12 Oktober 2026  
**Entitas:** PINBAS MUI & Koperasi Saudagar Graha Niaga (KGN) Kota Depok  
**Dokumen Referensi:** [`docs/modul-kurasi-harga-otomasi-margin.md`](./modul-kurasi-harga-otomasi-margin.md)  
**Versi Sistem:** 3.2  

---

## 1. Latar Belakang & Ringkasan Eksekutif

Pembaruan ini menindaklanjuti spesifikasi teknis pada **Modul 3.2 Kurasi Harga & Otomasi Margin**. Seluruh sistem harga di ekosistem platform PINBAS (mulai dari input penawaran supplier, verifikasi gudang, kalkulasi margin platform, kepatuhan batas Harga Eceran Tertinggi/HET, hingga etalase marketplace konsumen) telah diselaraskan secara menyeluruh.

Kebijakan margin platform yang sebelumnya menggunakan konfigurasi lama (2,5%) telah **ditingkatkan dan disesuaikan menjadi 25% (0.25)** atau proporsional fee administrasi syariah, dengan jaminan perlindungan konsumen melalui pemindaian algoritmik plafon HET komoditas pangan (Bapanas & Disdagin Kota Depok).

---

## 2. Alur 5 Tahap Kurasi Harga Sistem PINBAS / KGN

Sesuai dengan tabel spesifikasi dokumen modul:

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Tahap 1    │     │   Tahap 2    │     │   Tahap 3    │     │   Tahap 4    │     │   Tahap 5    │
│    INPUT     │ ──> │  VERIFIKASI  │ ──> │  KALKULASI   │ ──> │ PEMINDAIAN   │ ──> │  PUBLIKASI   │
│  Penawaran   │     │  Algoritmik  │     │  Margin +25% │     │   HET Kota   │     │ Marketplace  │
│  Supplier    │     │  KGN/PINBAS  │     │   / Fee Adm  │     │    Depok     │     │ Konsumen     │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

| Tahap | Nama Tahap | Deskripsi & Proses | Contoh Operasional |
| :---: | :--- | :--- | :--- |
| **1** | **Input** | Supplier memasukkan harga penawaran awal komoditas pangan. | Rp10.000 atau Rp20.000 |
| **2** | **Verifikasi** | Pemeriksaan algoritmik kelayakan harga oleh sistem KGN/PINBAS untuk mencegah manipulasi atau anomali harga dasar. | Validasi rentang harga wajar komoditas. |
| **3** | **Kalkulasi** | Sistem secara otomatis menambahkan margin platform sebesar **25%** (`base_price * 1.25`) atau menghitung potongan fee administrasi. | `Rp10.000 + 25% = Rp12.500` <br> `Rp20.000 + 25% = Rp25.000` |
| **4** | **Pemindaian HET** | Sistem mencocokkan harga hasil kalkulasi dengan tabel regulasi Harga Eceran Tertinggi (HET) komoditas yang berlaku di Kota Depok (Bapanas). Jika harga > HET, sistem otomatis membatasi (*auto-cap*) ke batas HET. | Beras Premium HET Rp14.900/kg <br> Minyak Goreng 2L HET Rp38.000 |
| **5** | **Publikasi** | Produk diterbitkan secara resmi ke katalog marketplace dengan harga final yang telah terkurasi dan berlabel kepatuhan HET. | Harga terbit final di etalase pembeli. |

---

## 3. Matriks Referensi Regulasi HET Komoditas Pangan (Kota Depok)

| Komoditas | Sub-Item / Jenis | Plafon HET Maksimal | Satuan | Dasar Hukum Regulasi |
| :--- | :--- | :---: | :---: | :--- |
| **Minyak Goreng** | Minyak Goreng Pouch Kemasan | **Rp 38.000** | Pouch 2L | HET Minyakita / Kemasan Bapanas |
| **Beras Premium** | Beras Premium Kemasan | **Rp 14.900** | kg | HET Beras Premium Zona 1 Jawa Bapanas |
| **Beras Medium** | Beras Medium | **Rp 12.500** | kg | HET Beras Medium Zona 1 Jawa Bapanas |
| **Gula Pasir** | Gula Pasir Konsumsi | **Rp 17.500** | kg | HET Gula Konsumsi Bapanas |
| **Telur Ayam** | Telur Ayam Ras Segar | **Rp 29.500** | kg | HET Telur Ayam Ras Konsumen Bapanas |
| **Daging Ayam** | Daging Ayam Karkas Ras Segar | **Rp 38.500** | kg | HET Daging Ayam Ras Karkas Bapanas |
| **Daging Sapi** | Daging Sapi Paha Belakang Segar | **Rp 140.000** | kg | HET Daging Sapi Konsumen Bapanas |
| **Cabai Merah** | Cabai Merah Keriting / TW | **Rp 55.000** | kg | Batas Plafon Acuan Kemendag/Bapanas |
| **Cabai Rawit** | Cabai Rawit Merah | **Rp 57.000** | kg | Batas Plafon Acuan Kemendag/Bapanas |
| **Bawang Merah** | Bawang Merah Brebes / Super | **Rp 42.000** | kg | Batas Plafon Acuan Kemendag/Bapanas |
| **Bawang Putih** | Bawang Putih Honan / Kating | **Rp 40.000** | kg | Batas Plafon Acuan Kemendag/Bapanas |
| **Tepung Terigu** | Tepung Terigu Segitiga Biru / Curah | **Rp 13.000** | kg | Acuan Harga Pangan Kemendag |

---

## 4. Rincian Modifikasi Berkas & Komponen

### 4.1. Core Engine: `src/lib/pricing.js`
- Menetapkan `PLATFORM_MARGIN_RATE = 0.25` (25%).
- Menyediakan tabel referensi resmi `COMMODITY_HET_TABLE` dan fallback `CATEGORY_DEFAULT_HET`.
- Menambahkan fungsi pemrosesan utama `curatePricePipeline({ basePrice, productName, category })` yang menghasilkan objek audit 5 tahap:
  - `stage1_input`: Memuat `base_price`.
  - `stage2_verification`: Status algoritmik, lolos verifikasi kelayakan.
  - `stage3_calculation`: Margin nominal (+25%), harga pasca margin, fee admin.
  - `stage4_het_scan`: Batas HET komoditas, status kepatuhan, `is_adjusted` (apabila dipotong ke HET), selisih HET.
  - `stage5_publication`: Harga terbit final, badge status kepatuhan HET (`"HET Aman"` / `"Disesuaikan ke HET"`).
- Menyediakan helper `computeMarkedUpPrice`, `estimateBasePrice`, `resolveHETLimit`.

### 4.2. Katalog Sembako: `src/lib/marketplace.js`
- Memperbarui seluruh 27 item sembako pada `RAW_PRODUCTS_DATA` dan `PRODUCTS`:
  - Menetapkan harga penawaran awal supplier (`base_price`).
  - Menghitung harga jual terbit marketplace dengan formula `Math.min(base_price * 1.25, het)`.
  - Menyematkan metadata `het`, `het_status`, dan `margin_rate: 0.25`.

### 4.3. Komponen Etalase Beranda: `src/components/marketplace/FeaturedProducts.jsx`
- Menyelaraskan sampel produk unggulan dengan harga terkurasi, `base_price`, dan menyematkan badge transparan *"HET Aman"*.

### 4.4. Portal Manajemen Produk Supplier: `src/pages/supplier/SupplierProducts.jsx`
- Menyematkan kartu visual interaktif `PriceCurationCard` pada dialog *Tambah Produk Baru* dan *Edit Produk*. Saat supplier mengetik harga penawaran awal (misal Rp10.000 atau Rp20.000), kartu secara real-time menampilkan simulasi 5 tahap (Input → Verifikasi → Margin +25% → Cek HET → Harga Terbit).
- Menyesuaikan penyimpanan data ke Base44 client (`base_price`, `price`, `margin_rate`, `het_limit`, `het_status`).
- Memperbarui tabel produk supplier dengan kolom: *Penawaran Awal*, *Margin (+25%)*, *Plafon HET*, *Harga Terbit*, dan *Kepatuhan HET*.

### 4.5. Panel Admin Inventaris Gudang: `src/pages/admin/AdminStock.jsx`
- Menambahkan banner informatif Modul 3.2 Kurasi Harga PINBAS pada tab *Produk Supplier*.
- Memperbarui tabel produk supplier di dashboard admin dengan 5 parameter kurasi: Penawaran Awal Supplier, Margin PINBAS (+25%), Plafon HET Bapanas, Harga Terbit Marketplace, dan Status Kepatuhan HET.

### 4.6. Laporan Inflasi & Kurasi Pasar: `src/pages/admin/AdminInflation.jsx`
- Menambahkan section interaktif **3.2 Modul Kurasi Harga & Otomasi Margin PINBAS**:
  - Tombol uji cepat harga penawaran awal (Rp 10.000 & Rp 20.000).
  - Pilihan komoditas pangan pokok (Beras, Minyak Goreng, Telur, Daging Ayam, Gula, Cabai, Bawang).
  - Kartu simulator visual alur 5 tahap secara real-time.
- Menambahkan **Tabel Referensi HET Resmi Komoditas Pangan Kota Depok** lengkap dengan dasar hukum Bapanas & Disdagin Kota Depok.

### 4.7. Katalog Konsumen: `src/pages/MarketplacePage.jsx`
- Menambahkan lencana *"HET Terverifikasi"* pada setiap kartu produk.
- Menambahkan panel transparansi kurasi harga syariah pada dialog detail produk (menampilkan Penawaran Awal, Margin PINBAS +25%, dan Plafon HET Bapanas).

---

## 5. Studi Kasus Uji Kalkulasi

### Studi Kasus 1: Penawaran Awal Rp 10.000 (Komoditas Beras)
1. **Tahap 1 (Input):** Supplier memasukkan `Rp 10.000`.
2. **Tahap 2 (Verifikasi):** Sistem memvalidasi kelayakan penawaran (Lolos).
3. **Tahap 3 (Kalkulasi):** `Rp 10.000 * 1,25 = Rp 12.500` (Margin PINBAS = `+Rp 2.500`).
4. **Tahap 4 (Pemindaian HET):** HET Beras Premium adalah `Rp 14.900/kg`. Karena `Rp 12.500 <= Rp 14.900`, status dinyatakan **"HET Aman"**.
5. **Tahap 5 (Publikasi):** Produk diterbitkan di marketplace dengan harga **Rp 12.500/kg**.

### Studi Kasus 2: Penawaran Awal Rp 20.000 (Komoditas Gula Pasir)
1. **Tahap 1 (Input):** Supplier memasukkan `Rp 20.000`.
2. **Tahap 2 (Verifikasi):** Sistem memvalidasi kelayakan penawaran (Lolos).
3. **Tahap 3 (Kalkulasi):** `Rp 20.000 * 1,25 = Rp 25.000` (Margin PINBAS = `+Rp 5.000`).
4. **Tahap 4 (Pemindaian HET):** HET Gula Pasir adalah `Rp 17.500/kg`. Karena `Rp 25.000 > Rp 17.500`, sistem secara otomatis membatasi (*auto-cap*) ke batas HET. Status dinyatakan **"Disesuaikan ke HET"**.
5. **Tahap 5 (Publikasi):** Produk diterbitkan di marketplace dengan harga **Rp 17.500/kg**.

---

## 6. Kesimpulan

Seluruh komponen front-end PINBAS kini telah mematuhi dan mengimplementasikan **Modul 3.2 Kurasi Harga & Otomasi Margin**. Ekosistem menjamin keadilan bagi supplier (penerimaan penawaran transparan), keberlanjutan koperasi (margin 25%), serta kepatuhan hukum dan keterjangkauan harga bagi warga konsumen (pembatasan plafon HET Bapanas Kota Depok).
