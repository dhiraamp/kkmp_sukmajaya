# 📋 Panduan Akun Demo & Kredensial Pengujian (Dummy Accounts)
## Koperasi Kelurahan Merah Putih (KKMP) Sukamaja / Sukmajaya — Kota Depok

Dokumen ini memuat seluruh akun pengujian (dummy accounts) untuk memverifikasi seluruh modul dan alur kerja di ekosistem **KKMP Kota Depok**.

---

### 🔑 Kredensial Umum (Sandi Bersama)
Seluruh akun demo di bawah ini menggunakan kata sandi standar yang sama:
```text
Kata Sandi: demo1234
```
*(Bisa juga menggunakan spasi `demo 1 2 3 4` pada sistem jika diperlukan).*

---

### 👥 Daftar Lengkap Akun Berdasarkan Role

| No | Peran / Role | Nama Akun / Instansi | Email Utama | Email Alternatif | Akses Halaman |
|---|---|---|---|---|---|
| **1** | **Warga / Anggota Koperasi** | Adhira Maharani | `anggota.depok@kkmp-depok.id` | `warga@demo.local` | `/warga/beranda` & `/marketplace` |
| **2** | **Mitra Pos Cabang** | Mitra Pos Cabang Beji | `cabang.beji@kkmp-depok.id` | `mitra@demo.local` | `/mitra/dashboard` |
| **3** | **Supplier Bahan Pangan** | Gapoktan Sawangan Mandiri | `supplier.pangan@kkmp-depok.id` | `supplier@demo.local` | `/supplier/dashboard` |
| **4** | **Logistik & Armada** | Tim Logistik KKMP Kota Depok | `logistik@kkmp-depok.id` | `logistik@demo.local` | `/logistik/dashboard` |
| **5** | **Pengurus Induk (Admin)** | Pengurus KKMP Sukmajaya | `admin.induk@kkmp-depok.id` | `admin@demo.local` | `/admin/dashboard` |

---

### 📌 Rincian Hak Akses & Fitur Masing-Masing Role

#### 1. 🛒 Anggota Koperasi (Warga)
- **Email:** `anggota.depok@kkmp-depok.id` atau `warga@demo.local`
- **Fitur Utama:**
  - Berbelanja komoditas pokok & warung kelontong (Beras Ramos, Shampo Lifebuoy/Pantene, Mentega Blue Band, Indomie, Sabun Sunlight/Dettol, dsb.) dengan **Harga Khusus Anggota**.
  - Keranjang belanja mandiri dan checkout pesanan ke Pos Cabang kelurahan terdekat.
  - Tracking status pengiriman sembako secara real-time.
  - Layanan digital (Pulsa, BPJS, Tagihan PLN/PDAM).

#### 2. 🏪 Mitra Pos Cabang (Kelurahan Beji / 8 Pos Cabang Depok)
- **Email:** `cabang.beji@kkmp-depok.id` atau `mitra@demo.local`
- **Fitur Utama:**
  - Monitoring stok lokal Pos Cabang.
  - Melakukan restock pemesanan komoditas ke Supplier dan Gudang Induk Sukmajaya.
  - Rekapitulasi pesanan anggota warga di wilayah kelurahannya.
  - Penerimaan dan verifikasi barang masuk dari tim logistik.

#### 3. 🚜 Supplier Bahan Pangan (Gapoktan Sawangan Mandiri)
- **Email:** `supplier.pangan@kkmp-depok.id` atau `supplier@demo.local`
- **Fitur Utama:**
  - Manajemen katalog komoditas & penetapan harga bahan pokok.
  - Menerima Purchase Order (PO) dari Pos Cabang dan Gudang Induk.
  - Konfirmasi kesiapan barang dan penjadwalan pengiriman armada logistik.
  - Laporan pendapatan dan mutasi transaksi penjualan.

#### 4. 🚚 Tim Logistik & Distribusi (Kota Depok)
- **Email:** `logistik@kkmp-depok.id` atau `logistik@demo.local`
- **Fitur Utama:**
  - Manajemen armada kendaraan (Mobil pickup, motor box kelurahan).
  - Alur rute pengiriman dari Gudang Induk Sukmajaya menuju 8 Pos Cabang.
  - Pelacakan pesanan aktif (Pickup -> On the way -> Delivered).
  - Update status dan tanda terima serah terima logistik.

#### 5. 🏛️ Pengurus Koperasi Induk (Admin Pusat Sukmajaya)
- **Email:** `admin.induk@kkmp-depok.id` atau `admin@demo.local`
- **Fitur Utama:**
  - Monitoring agregat stok Gudang Pusat Sukmajaya dan seluruh 8 cabang kelurahan.
  - GIS Peta Sebaran 8 Pos Cabang KKMP Kota Depok (Sukmajaya, Sukmajaya, Beji, Pancoran Mas, Cimanggis, Sawangan, Cipayung, Tapos).
  - Manajemen anggota koperasi, verifikasi pendaftar baru, dan laporan keuangan ekosistem.
  - Pemantauan stabilitas inflasi harga bahan pokok pangan (Bapokting).

---

### 🚀 Cara Cepat Masuk (Portal Login)
1. Buka halaman portal di peramban: **[http://localhost:5173/portal](http://localhost:5173/portal)**
2. Pilih tab Role yang ingin dicoba (Warga, Mitra, Supplier, Logistik, atau Admin).
3. Email default akan terisi otomatis atau Anda dapat mengetik salah satu email di atas.
4. Masukkan sandi: `demo1234`
5. Klik tombol **Masuk**.
