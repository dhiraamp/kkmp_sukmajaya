# Panduan Langkah Kerja Rebranding Sistem Integrasi Koperasi Depok

Dokumen ini berisi panduan alur dan checklist pengerjaan implementasi **Sistem Integrasi Rantai Pasok Koperasi Kelurahan Merah Putih Bersama (KKMP) Kota Depok**.

---

## 📋 Ringkasan Proyek & Tenggat Waktu
- **Nama Sistem**: Sistem Integrasi Rantai Pasok Koperasi Kelurahan Merah Putih Bersama (KKMP) / Koperasi Kelurahan Merah Putih.
- **Lokasi Wilayah**: Kota Depok.
- **Status Eksekusi**: Selesai diimplementasikan secara menyeluruh.
- **Kredensial Akses Demo**: `demo 1 2 3 4`.

---

## 🛠️ Langkah-Langkah Pengerjaan (Step-by-Step)

### 1. Pembaharuan Branding & Tampilan Utama (Frontend / Homepage)
- [x] **Penyesuaian Lokasi**: Mengubah lokasi operasional sistem menjadi **Kota Depok**.
- [x] **Pembaharuan Header & Identitas**: Mengubah seluruh teks header dan nama sistem menjadi *Koperasi Kelurahan Merah Putih*.
- [x] **Pembersihan Menu Program Lama**: Menghapus seluruh menu khusus program lama di tampilan halaman depan (*front page*).
- [x] **Penggantian Gambar & Aset Visual**: Mengganti banner dan gambar komoditas kelontong (beras, minyak, telur, shampoo, mentega, dll.).
- [x] **Retensi Fitur Berita & Marketplace**: Mempertahankan menu Berita dan fitur *Marketplace* di halaman depan (tersambung ke data pusat KKMP).

### 2. Pengelolaan Katalog & Komoditas Barangnya
- [x] **Penyesuaian Kategori Komoditas**: Mengubah item menu menjadi kategori komoditas kelontong (sembako, kebutuhan harian, perlengkapan sekolah, dll.).
- [x] **Penyusunan Katalog Pusat**: Menyusun daftar produk komoditas di gudang pusat KKMP yang disuplai oleh para *supplier*.

### 3. Restrukturisasi Pengguna & Peran (*User Roles*)
- [x] **Penetapan 5 Role Pengguna**:
  1. **Admin**: Mengelola Gudang Pusat KKMP (misal: KKMP Mekar Jaya).
  2. **Koperasi / KD KKMP**: Pengelola pos/kantor cabang koperasi lokal (Beji, Margonda, Depok 1, Depok 2, dll.).
  3. **Anggota**: Anggota terdaftar koperasi yang dapat melakukan pembelian barang.
  4. **Supplier**: Pemasok barang/komoditas ke Gudang Pusat.
  5. **Logistik**: Bagian internal koperasi yang menangani pengiriman barang.
- [x] **Penyesuaian Role Warga**: Menyelaraskan role *Warga* sebagai *Anggota Koperasi*.

### 4. Penyederhanaan Alur Transaksi & Rantai Pasok (*Supply Chain Flow*)
- [x] **Alur Rantai Pasok Terpadu**: Transaksi terhubung melalui gudang pusat dan pos cabang KKMP.
- [x] **Pemasokan Komoditas (Supplier → Gudang Pusat)**:
  - *Supplier* memasok komoditas ke Gudang Pusat KKMP (Admin).
- [x] **Pemesanan Barang (Anggota → Pos/Gudang Koperasi)**:
  - *Anggota* memesan kebutuhan komoditas melalui pos/kantor koperasi cabang wilayahnya.
  - Pesanan diteruskan dan dikumpulkan di Gudang Pusat KKMP.
- [x] **Pengiriman Logistik (Gudang Pusat → Pos Cabang Koperasi)**:
  - Admin Gudang Pusat menerbitkan instruksi pengirimian ke role *Logistik*.
  - *Logistik* mengambil barang di gudang pusat dan mengantarkannya ke pos/kantor koperasi cabang tujuan.

### 5. Pengujian Sistem & Pemeliharaan (*Testing & Demo*)
- [x] **Uji Coba Registrasi & Login**: Seluruh 5 role dapat login dengan kredensial `demo1234`.
- [x] **Uji Coba Alur Transaksi**: Simpul transaksi pemesanan anggota hingga instruksi logistik dan POD berjalan lancar.
- [x] **Pembersihan Total**: Seluruh dependensi, kunci localStorage, dan artefak lama telah dibersihkan 100%.
