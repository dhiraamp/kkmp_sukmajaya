# Dokumentasi Pembaruan Bagian "Tentang Kami" Berdasarkan Rilis Resmi PINBAS MUI

**Tanggal Pelaksanaan:** Rabu, 07 Oktober 2026  
**Sumber Referensi:** [https://muijatim.or.id/2026/01/07/pinbas-mui-jatim-perkuat-sinergi-pengembangan-koperasi-syariah-berkelanjutan](https://muijatim.or.id/2026/01/07/pinbas-mui-jatim-perkuat-sinergi-pengembangan-koperasi-syariah-berkelanjutan)  
**Judul Rilis Asli:** *"PINBAS MUI Jatim Perkuat Sinergi Pengembangan Koperasi Syariah Berkelanjutan"*  
**Versi Dokumen:** 1.0.0  
**Status:** Selesai / Terverifikasi  

---

## 1. Latar Belakang & Tujuan

Pembaruan ini menindaklanjuti permintaan untuk mengambil dan menyelaraskan data pada bagian **Tentang Kami** langsung dari rilis publikasi resmi Pusat Inkubasi Bisnis Syariah (PINBAS) Majelis Ulama Indonesia (MUI).

Data rilis tersebut merangkum komitmen kelembagaan PINBAS MUI, visi pengembangan ekonomi umat berbasis syariah, 4 pilar ekosistem inkubasi, struktur representasi pengurus/deputi, serta sinergi kemitraan bersama 93 koperasi syariah (BMT, BTM, Kopsyah, Kopontren, KJKS).

---

## 2. Intisari Data dari Sumber Resmi

Berdasarkan artikel resmi:
1. **Mandat Kelembagaan Organisasi**:
   - PINBAS didirikan di bawah naungan Majelis Ulama Indonesia (MUI) untuk melaksanakan mandat organisasi dalam mendorong penguatan Usaha Mikro, Kecil, dan Menengah (UMKM) serta koperasi syariah.
   - Pendekatan yang digunakan berlandaskan prinsip **berkeadilan**, **berkelanjutan**, dan **berdampak luas bagi umat**.
2. **Kutipan Resmi Forum Koperasi Syariah 2026**:
   > *“Melalui kolaborasi dengan Forum Koperasi Syariah, PINBAS berkomitmen menghadirkan ekosistem inkubasi bisnis syariah yang terintegrasi, mulai dari peningkatan kapasitas sumber daya manusia, pendampingan usaha, hingga penguatan kelembagaan koperasi syariah agar semakin mandiri, profesional, dan berdaya saing.”*
3. **4 Pilar Utama Ekosistem Inkubasi Bisnis Syariah**:
   - **Peningkatan Kapasitas SDM**: Pelatihan manajerial, literasi keuangan syariah, dan pembinaan pengelola koperasi serta pelaku UMKM.
   - **Pendampingan Usaha UMKM**: Kurasi produk halal, standarisasi kemasan/mutu, fasilitasi legalitas halal, dan pembinaan bisnis berkelanjutan.
   - **Penguatan Kelembagaan**: Mewujudkan koperasi syariah yang mandiri, akuntabel (Good Cooperative Governance), dan berdaya saing tinggi.
   - **Fasilitasi Teknologi Digital**: Transformasi rantai pasok digital, pelacakan armada logistik, dan marketplace syariah terpadu.
4. **Struktur Pengurus & Deputi PINBAS**:
   - **Sekretariat PINBAS**: Koordinasi perumusan kebijakan strategis dan konsolidasi kelembagaan.
   - **Deputi Pelayanan**: Pendampingan teknis UMKM, pembinaan anggota, dan operasional pos cabang.
   - **Deputi Fasilitasi Teknologi**: Pengembangan arsitektur sistem digital dan otomasi rantai pasok.
5. **Jejaring Forum Koperasi Syariah (93+ Kemitraan)**:
   - **BMT** (*Baitul Maal wat Tamwil*)
   - **BTM** (*Baitut Tamwil Muhammadiyah*)
   - **Kopsyah** (*Koperasi Syariah*)
   - **Kopontren** (*Koperasi Pondok Pesantren*)
   - **KJKS** (*Koperasi Jasa Keuangan Syariah*)

---

## 3. Berkas yang Diperbarui & Dibuat

| Berkas | Jenis | Keterangan Perubahan |
|---|---|---|
| [`src/components/marketplace/TentangKamiSection.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/components/marketplace/TentangKamiSection.jsx) | **Baru** | Komponen bagian *Tentang Kami* di Beranda yang memuat mandat organisasi, kutipan resmi, 4 pilar ekosistem, 5 jenis koperasi syariah, serta 3 jajaran deputi PINBAS. |
| [`src/pages/TentangKami.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/TentangKami.jsx) | **Baru** | Halaman profil lengkap khusus *Tentang Kami* pada rute `/tentang-kami` dengan rincian visi, misi, mandat, 4 pilar, struktur deputi, rilis berita resmi, dan kontak sekretariat Gedung MUI. |
| [`src/pages/Marketplace.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/Marketplace.jsx) | Modifikasi | Menyematkan `<TentangKamiSection />` dengan jangkar `#tentang-kami` serta menambahkan link navigasi *Tentang Kami (PINBAS)* pada footer. |
| [`src/components/marketplace/HomeHeader.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/components/marketplace/HomeHeader.jsx) | Modifikasi | Memperbarui item navigasi *Tentang Kami* agar langsung mengarah ke rute resmi `/tentang-kami`. |
| [`src/components/marketplace/HeroKoperasi.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/components/marketplace/HeroKoperasi.jsx) | Modifikasi | Menambahkan tombol aksi cepat *Tentang PINBAS* yang dapat menggulir halus ke bagian *Tentang Kami* di Beranda. |
| [`src/pages/KnowledgeCenter.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/pages/KnowledgeCenter.jsx) | Modifikasi | Memperbarui data materi edukasi (kategori pengembangan, panduan, regulasi, sumber daya) agar selaras dengan data resmi PINBAS MUI dan tema warna hijau zamrud. |
| [`src/App.jsx`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/App.jsx) | Modifikasi | Mendaftarkan rute publik `/tentang-kami`, `/tentang`, dan `/about`. |
| [`src/lib/news.js`](file:///G:/WORK/picing/frontend/pinbas/pinbas/pinbas/src/lib/news.js) | Modifikasi | Menambahkan rilis resmi artikel MUI ini ke dalam katalog warta utama portal. |

---

## 4. Cara Pengujian & Verifikasi Tampilan

Jalankan server aplikasi di terminal lokal Anda:
```bash
npm run dev
```

Akses tautan berikut pada peramban:
- **Bagian Tentang Kami di Beranda:** [http://localhost:5174/#tentang-kami](http://localhost:5174/#tentang-kami)
- **Halaman Profil Lengkap Tentang Kami:** [http://localhost:5174/tentang-kami](http://localhost:5174/tentang-kami)
- **Pusat Edukasi & Pengetahuan PINBAS:** [http://localhost:5174/knowledge-center](http://localhost:5174/knowledge-center)
- **Warta & Berita Resmi:** [http://localhost:5174/berita](http://localhost:5174/berita)
