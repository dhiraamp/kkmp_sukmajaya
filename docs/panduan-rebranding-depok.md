# Panduan Langkah Kerja Rebranding Sistem Integrasi Koperasi Depok

Dokumen ini berisi panduan alur dan langkah-langkah pengerjaan rebranding sistem dari **Smart MBG Kabupaten Garut** menjadi **Sistem Integrasi Rantai Pasok Koperasi Kelurahan Merah Putih Bersama (KKMP) Kota Depok**.

---

## 📋 Ringkasan Proyek & Tenggat Waktu
- **Nama Sistem Baru**: Sistem Integrasi Rantai Pasok Koperasi Kelurahan Merah Putih Bersama (KKMP) / Koperasi Kelurahan Merah Putih.
- **Lokasi Wilayah**: Kota Depok.
- **Target Penyelesaian**: Pengerjaan dimulai segera agar siap diuji coba/demo pada hari Kamis.
- **Kredensial Akses Demo**: `demo 1 2 3 4`.

---

## 🛠️ Langkah-Langkah Pengerjaan (Step-by-Step)

### 1. Pembaharuan Branding & Tampilan Utama (Frontend / Homepage)
- [ ] **Penyesuaian Lokasi**: Mengubah lokasi operasional sistem dari **Kota Garut** menjadi **Kota Depok**.
- [ ] **Pembaharuan Header & Identitas**: Mengubah seluruh teks header dan nama sistem dari *Smart MBG Kabupaten Garut* menjadi *Koperasi Kelurahan Merah Putih*.
- [ ] **Pembersihan Menu MBG**: Menghapus seluruh menu khusus MBG/EPG di tampilan halaman depan (*front page*).
- [ ] **Penggantian Gambar & Aset Visual**: Mengganti banner dan gambar bernuansa menu makanan MBG dengan foto/aset bertema koperasi dan komoditas.
- [ ] **Retensi Fitur Berita & Marketplace**: Mempertahankan menu Berita dan fitur *Marketplace* di halaman depan (tersambung ke data pusat KKMP).

### 2. Pengelolaan Katalog & Komoditas Barangnya
- [ ] **Penyesuaian Kategori Komoditas**: Mengubah item menu menjadi kategori komoditas kelontong (sembako, kebutuhan harian, perlengkapan sekolah, dll.).
- [ ] **Penyusunan Katalog Pusat**: Menyusun daftar produk komoditas di gudang pusat KKMP yang disuplai oleh para *supplier*.

### 3. Restrukturisasi Pengguna & Peran (*User Roles*)
- [ ] **Penetapan 5 Role Pengguna**:
  1. **Admin**: Mengelola Gudang Pusat KKMP (misal: KKMP Mekar Jaya).
  2. **Koperasi / KD KKMP**: Pengelola pos/kantor cabang koperasi lokal (Beji, Margonda, Depok 1, Depok 2, dll.).
  3. **Anggota**: Anggota terdaftar koperasi yang dapat melakukan pembelian barang.
  4. **Supplier**: Pemasok barang/komoditas ke Gudang Pusat.
  5. **Logistik**: Bagian internal koperasi yang menangani pengiriman barang.
- [ ] **Eliminasi Role Warga**: Menghapus opsi role *Warga* dan mewajibkan pembeli teregistrasi/login sebagai *Anggota Koperasi*.

### 4. Penyederhanaan Alur Transaksi & Rantai Pasok (*Supply Chain Flow*)
- [ ] **Eliminasi Transaksi Langsung Anggota-Supplier**: Menghapus algoritma/alur pembelian langsung dari anggota ke supplier.
- [ ] **Pemasokan Komoditas (Supplier → Gudang Pusat)**:
  - *Supplier* hanya memasok komoditas ke Gudang Pusat KKMP (Admin).
- [ ] **Pemesanan Barang (Anggota → Pos/Gudang Koperasi)**:
  - *Anggota* memesan kebutuhan komoditas melalui pos/kantor koperasi cabang wilayahnya.
  - Pesanan diteruskan dan dikumpulkan di Gudang Pusat KKMP.
- [ ] **Pengiriman Logistik (Gudang Pusat → Pos Cabang Koperasi)**:
  - Admin Gudang Pusat menerbitkan instruksi pengirimian ke role *Logistik*.
  - *Logistik* mengambil barang di gudang pusat dan mengantarkannya ke pos/kantor koperasi cabang tujuan.

### 5. Pengujian Sistem & Pemeliharaan (*Testing & Demo*)
- [ ] **Uji Coba Registrasi & Login**: Memastikan seluruh role dapat login dan terdaftar dengan kredensial yang tepat.
- [ ] **Uji Coba Alur Transaksi**: Memastikan simpul transaksi dari pemesanan anggota hingga instruksi logistik berjalan sesuai alur baru.
- [ ] **Persiapan Demo**: Memastikan seluruh perubahan visual dan fungsional siap digunakan untuk uji coba/demo pada hari Kamis.
