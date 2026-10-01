/**
 * Service Data Geospasial (GIS) Terpadu — KKMP Kota Depok
 * Terintegrasi dengan Sistem Koperasi Kelurahan Merah Putih Bersama
 * Kelurahan Mekarjaya, Kecamatan Sukmajaya, Kota Depok
 * 
 * Mendukung:
 * 1. Dataset Gudang Pusat Mekarjaya & 8 Pos Cabang KKMP se-Kota Depok
 * 2. Titik Penerima Manfaat Komunitas / Sekolah Binaan
 * 3. Jaringan Supplier Komoditas Pangan Pokok
 * 4. Rute Logistik Distribusi Antar Cabang
 * 5. Penyimpanan terpadu & pembaruan reaktif via event
 */

const STORAGE_KEY = "kkmp_depok_gis_v1";
const EVENT_NAME = "kkmp_gis_updated";

// Titik Pusat Hub: Gudang Induk KKMP Mekarjaya, Sukmajaya, Kota Depok
export const DEPOK_HUB = { lat: -6.3980, lng: 106.8420 };
// Alias kompatibilitas
export const GARUT_HUB = DEPOK_HUB;

export const KECAMATAN_COORDS = {
  // Kota Depok
  "Mekarjaya": { lat: -6.3980, lng: 106.8420 },
  "Sukmajaya": { lat: -6.4020, lng: 106.8370 },
  "Beji": { lat: -6.3725, lng: 106.8200 },
  "Pancoran Mas": { lat: -6.3995, lng: 106.8120 },
  "Cimanggis": { lat: -6.3680, lng: 106.8650 },
  "Cilodong": { lat: -6.4320, lng: 106.8520 },
  "Sawangan": { lat: -6.4150, lng: 106.7780 },
  "Bojongsari": { lat: -6.4250, lng: 106.7450 },
  "Cipayung": { lat: -6.4280, lng: 106.8080 },
  "Tapos": { lat: -6.4100, lng: 106.8850 },
  "Cinere": { lat: -6.3350, lng: 106.7820 },
  "Limo": { lat: -6.3650, lng: 106.7780 },
};

// Dataset Baseline KKMP Kota Depok (Gudang Pusat + 8 Pos Cabang)
export const KKMP_DEPOK_BASELINE = {
  source: "kkmp-mekarjaya.depok.go.id",
  portal_name: "Portal Geospasial Rantai Pasok KKMP Mekarjaya Kota Depok",
  lastUpdated: new Date().toISOString(),
  status: "verified_koperasi_network",
  totalSppgTerdaftar: 9,
  totalSasaranPenerima: 3200,

  // Titik Pos Cabang & Gudang Induk
  dapur: [
    {
      id: "hub_mekarjaya",
      name: "Gudang Pusat Induk Mekarjaya",
      code: "HUB-00",
      lat: -6.3980,
      lng: 106.8420,
      kapasitas: 25000,
      kecamatan: "Mekarjaya",
      status: "Pusat Distribusi (Hub)",
      penanggungJawab: "Bpk. Wibisono (Logistik KKMP)",
      kontak: "0811-1234-5678",
      alamat: "Jl. Bahagia Raya No. 10, Kel. Mekarjaya, Kec. Sukmajaya, Kota Depok",
    },
    {
      id: "pos_beji",
      name: "Pos Cabang Beji",
      code: "POS-01",
      lat: -6.3725,
      lng: 106.8200,
      kapasitas: 3500,
      kecamatan: "Beji",
      status: "Aktif",
      penanggungJawab: "Bpk. Rahmat Santoso",
      kontak: "0812-9876-0001",
      alamat: "Jl. Ridwan Rais No. 14, Beji, Kota Depok",
    },
    {
      id: "pos_panmas",
      name: "Pos Cabang Pancoran Mas",
      code: "POS-02",
      lat: -6.3995,
      lng: 106.8120,
      kapasitas: 4000,
      kecamatan: "Pancoran Mas",
      status: "Aktif",
      penanggungJawab: "Ibu Nuraini",
      kontak: "0812-9876-0002",
      alamat: "Jl. Nusantara Raya No. 45, Pancoran Mas, Kota Depok",
    },
    {
      id: "pos_sukmajaya",
      name: "Pos Cabang Sukmajaya",
      code: "POS-03",
      lat: -6.4020,
      lng: 106.8370,
      kapasitas: 4500,
      kecamatan: "Sukmajaya",
      status: "Aktif",
      penanggungJawab: "Bpk. Hendra Gunawan",
      kontak: "0812-9876-0003",
      alamat: "Jl. Kejayaan No. 8, Sukmajaya, Kota Depok",
    },
    {
      id: "pos_cimanggis",
      name: "Pos Cabang Cimanggis",
      code: "POS-04",
      lat: -6.3680,
      lng: 106.8650,
      kapasitas: 3800,
      kecamatan: "Cimanggis",
      status: "Aktif",
      penanggungJawab: "Bpk. Dedi Supriyadi",
      kontak: "0812-9876-0004",
      alamat: "Jl. Raya Bogor KM 31, Cimanggis, Kota Depok",
    },
    {
      id: "pos_cilodong",
      name: "Pos Cabang Cilodong",
      code: "POS-05",
      lat: -6.4320,
      lng: 106.8520,
      kapasitas: 3200,
      kecamatan: "Cilodong",
      status: "Aktif",
      penanggungJawab: "Ibu Siti Fatimah",
      kontak: "0812-9876-0005",
      alamat: "Jl. H. Dimun No. 22, Cilodong, Kota Depok",
    },
    {
      id: "pos_sawangan",
      name: "Pos Cabang Sawangan",
      code: "POS-06",
      lat: -6.4150,
      lng: 106.7780,
      kapasitas: 3600,
      kecamatan: "Sawangan",
      status: "Aktif",
      penanggungJawab: "Bpk. Bambang Irawan",
      kontak: "0812-9876-0006",
      alamat: "Jl. Sawangan Raya No. 88, Sawangan, Kota Depok",
    },
    {
      id: "pos_bojongsari",
      name: "Pos Cabang Bojongsari",
      code: "POS-07",
      lat: -6.4250,
      lng: 106.7450,
      kapasitas: 3000,
      kecamatan: "Bojongsari",
      status: "Aktif",
      penanggungJawab: "Bpk. Agus Hermawan",
      kontak: "0812-9876-0007",
      alamat: "Jl. Curug Raya No. 12, Bojongsari, Kota Depok",
    },
    {
      id: "pos_cipayung",
      name: "Pos Cabang Cipayung",
      code: "POS-08",
      lat: -6.4280,
      lng: 106.8080,
      kapasitas: 3400,
      kecamatan: "Cipayung",
      status: "Aktif",
      penanggungJawab: "Ibu Ratna Dewi",
      kontak: "0812-9876-0008",
      alamat: "Jl. Jembatan Serong No. 5, Cipayung, Kota Depok",
    },
  ],

  // Titik Komunitas / Anggota / Sekolah Binaan KKMP
  sekolah: [
    { id: "sek_01", name: "SDN Mekarjaya 1 Sukmajaya", lat: -6.3970, lng: 106.8340, siswa: 450, jenjang: "SD", kecamatan: "Sukmajaya", posId: "pos_sukmajaya" },
    { id: "sek_02", name: "SDN Beji 3 Kota Depok", lat: -6.3710, lng: 106.8180, siswa: 380, jenjang: "SD", kecamatan: "Beji", posId: "pos_beji" },
    { id: "sek_03", name: "SMPN 2 Kota Depok (Pancoran Mas)", lat: -6.3980, lng: 106.8150, siswa: 620, jenjang: "SMP", kecamatan: "Pancoran Mas", posId: "pos_panmas" },
    { id: "sek_04", name: "SDN Harjamukti 1 Cimanggis", lat: -6.3650, lng: 106.8620, siswa: 510, jenjang: "SD", kecamatan: "Cimanggis", posId: "pos_cimanggis" },
    { id: "sek_05", name: "SDN Kalibaru 1 Cilodong", lat: -6.4310, lng: 106.8500, siswa: 420, jenjang: "SD", kecamatan: "Cilodong", posId: "pos_cilodong" },
    { id: "sek_06", name: "SMPN 10 Sawangan Depok", lat: -6.4170, lng: 106.7760, siswa: 580, jenjang: "SMP", kecamatan: "Sawangan", posId: "pos_sawangan" },
    { id: "sek_07", name: "Posyandu Balita Mawar Sehat Bojongsari", lat: -6.4230, lng: 106.7480, siswa: 180, jenjang: "PAUD", kecamatan: "Bojongsari", posId: "pos_bojongsari" },
    { id: "sek_08", name: "Balai Komunitas Warga Cipayung", lat: -6.4260, lng: 106.8100, siswa: 250, jenjang: "PAUD", kecamatan: "Cipayung", posId: "pos_cipayung" },
    { id: "sek_09", name: "SMAN 2 Kota Depok (Sukmajaya)", lat: -6.4010, lng: 106.8390, siswa: 750, jenjang: "SMA", kecamatan: "Sukmajaya", posId: "pos_sukmajaya" },
    { id: "sek_10", name: "SMPN 3 Kota Depok", lat: -6.4050, lng: 106.8320, siswa: 680, jenjang: "SMP", kecamatan: "Sukmajaya", posId: "pos_sukmajaya" },
    { id: "sek_11", name: "TK & PAUD Merah Putih Mekarjaya", lat: -6.3965, lng: 106.8360, siswa: 95, jenjang: "PAUD", kecamatan: "Mekarjaya", posId: "hub_mekarjaya" },
  ],

  // Supplier Komoditas Pangan KKMP
  supplier: [
    { id: "sup_01", name: "Gapoktan Sawangan Mandiri (Sayuran & Buah Segar)", lat: -6.4120, lng: 106.7720, jenis: "Sayuran & Buah Segar", kecamatan: "Sawangan", kontak: "0813-8877-6655" },
    { id: "sup_02", name: "Sentra Kedelai Tahu-Tempe Cilodong", lat: -6.4350, lng: 106.8480, jenis: "Protein Nabati (Tahu/Tempe)", kecamatan: "Cilodong", kontak: "0812-7766-5544" },
    { id: "sup_03", name: "Gudang Beras Premium Cianjur & Sukmajaya", lat: -6.3950, lng: 106.8410, jenis: "Beras & Sembako Pokok", kecamatan: "Sukmajaya", kontak: "0811-9988-7766" },
    { id: "sup_04", name: "Peternakan Unggas & Telur Segar Cipayung", lat: -6.4300, lng: 106.8050, jenis: "Protein Hewani (Telur & Daging)", kecamatan: "Cipayung", kontak: "0813-1122-3344" },
    { id: "sup_05", name: "Budidaya Perikanan Situ Pengasinan (Sawangan)", lat: -6.4280, lng: 106.7580, jenis: "Ikan Segar Air Tawar", kecamatan: "Sawangan", kontak: "0852-3344-5566" },
    { id: "sup_06", name: "Sentra Bumbu Pasar Tradisional Sukmajaya", lat: -6.4005, lng: 106.8360, jenis: "Bumbu & Rempah Pilihan", kecamatan: "Sukmajaya", kontak: "0877-5566-7788" },
    { id: "sup_07", name: "Distributor Minyak Goreng & Gula Pasir Beji", lat: -6.3740, lng: 106.8220, jenis: "Minyak Goreng & Sembako", kecamatan: "Beji", kontak: "0819-2233-4455" },
  ],

  // Rute Rantai Pasok dari Gudang Pusat Mekarjaya ke Pos Cabang
  jalur: [
    { target: "Pos Cabang Beji", path: [DEPOK_HUB, { lat: -6.3725, lng: 106.8200 }], jarak: "4.2 km", waktu: "12 mnt" },
    { target: "Pos Cabang Pancoran Mas", path: [DEPOK_HUB, { lat: -6.3995, lng: 106.8120 }], jarak: "3.5 km", waktu: "10 mnt" },
    { target: "Pos Cabang Sukmajaya", path: [DEPOK_HUB, { lat: -6.4020, lng: 106.8370 }], jarak: "1.2 km", waktu: "5 mnt" },
    { target: "Pos Cabang Cimanggis", path: [DEPOK_HUB, { lat: -6.3680, lng: 106.8650 }], jarak: "6.8 km", waktu: "18 mnt" },
    { target: "Pos Cabang Cilodong", path: [DEPOK_HUB, { lat: -6.4320, lng: 106.8520 }], jarak: "5.1 km", waktu: "15 mnt" },
    { target: "Pos Cabang Sawangan", path: [DEPOK_HUB, { lat: -6.4150, lng: 106.7780 }], jarak: "8.4 km", waktu: "22 mnt" },
    { target: "Pos Cabang Bojongsari", path: [DEPOK_HUB, { lat: -6.4250, lng: 106.7450 }], jarak: "11.2 km", waktu: "28 mnt" },
    { target: "Pos Cabang Cipayung", path: [DEPOK_HUB, { lat: -6.4280, lng: 106.8080 }], jarak: "4.9 km", waktu: "14 mnt" },
  ],

  heatmap: [
    { lat: -6.3980, lng: 106.8420, intensitas: 9, area: "Mekarjaya" },
    { lat: -6.4020, lng: 106.8370, intensitas: 8, area: "Sukmajaya" },
    { lat: -6.3725, lng: 106.8200, intensitas: 7, area: "Beji" },
    { lat: -6.3995, lng: 106.8120, intensitas: 8, area: "Pancoran Mas" },
    { lat: -6.3680, lng: 106.8650, intensitas: 6, area: "Cimanggis" },
    { lat: -6.4320, lng: 106.8520, intensitas: 6, area: "Cilodong" },
    { lat: -6.4150, lng: 106.7780, intensitas: 5, area: "Sawangan" },
    { lat: -6.4250, lng: 106.7450, intensitas: 4, area: "Bojongsari" },
    { lat: -6.4280, lng: 106.8080, intensitas: 5, area: "Cipayung" },
  ],
};

// Alias kompatibilitas penuh untuk modul yang mengimpor DISPERINDAG_GARUT_BASELINE
export const DISPERINDAG_GARUT_BASELINE = KKMP_DEPOK_BASELINE;

/**
 * Mengambil data GIS lengkap yang aktif.
 * Mengutamakan data lokal KKMP Kota Depok yang tersimpan, fallback ke baseline resmi.
 */
export function getGisData() {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && Array.isArray(parsed.dapur) && parsed.dapur.length > 0) {
          return {
            ...KKMP_DEPOK_BASELINE,
            ...parsed,
            sekolah: (parsed.sekolah && parsed.sekolah.length > 0) ? parsed.sekolah : KKMP_DEPOK_BASELINE.sekolah,
            dapur: parsed.dapur,
            supplier: (parsed.supplier && parsed.supplier.length > 0) ? parsed.supplier : KKMP_DEPOK_BASELINE.supplier,
            jalur: (parsed.jalur && parsed.jalur.length > 0) ? parsed.jalur : KKMP_DEPOK_BASELINE.jalur,
          };
        }
      }
    } catch (e) {
      console.warn("Gagal membaca GIS storage:", e);
    }
  }
  return KKMP_DEPOK_BASELINE;
}

/**
 * Menyimpan seluruh struktur data GIS ke storage dan memancarkan event pembaruan.
 */
export function saveGisData(newData) {
  const merged = {
    ...KKMP_DEPOK_BASELINE,
    ...newData,
    lastUpdated: new Date().toISOString(),
  };

  if (typeof window !== "undefined" && window.localStorage) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: merged }));
    } catch (e) {
      console.warn("Gagal menyimpan GIS data:", e);
    }
  }

  return merged;
}

/**
 * Parser Fleksibel untuk mengimpor berkas spasial (GeoJSON, JSON, CSV).
 */
export function importDisperindagData(content, hint = "json") {
  try {
    let parsedData = null;

    if (typeof content === "string" && (content.trim().startsWith("{") || content.trim().startsWith("["))) {
      try {
        parsedData = JSON.parse(content);
      } catch (err) {
        // Lanjutkan ke parser CSV
      }
    } else if (typeof content === "object" && content !== null) {
      parsedData = content;
    }

    const currentData = getGisData();
    let newDapur = [...currentData.dapur];
    let newSekolah = [...currentData.sekolah];
    let newSupplier = [...currentData.supplier];

    if (parsedData && parsedData.type === "FeatureCollection" && Array.isArray(parsedData.features)) {
      parsedData.features.forEach((f, idx) => {
        const props = f.properties || {};
        const coords = f.geometry?.coordinates || [];
        const lng = coords[0] ?? props.lng ?? props.longitude;
        const lat = coords[1] ?? props.lat ?? props.latitude;
        if (!lat || !lng) return;

        const name = props.name || props.nama || `Titik KKMP #${idx + 1}`;
        const tipe = (props.tipe || props.category || props.jenis || "").toLowerCase();

        if (tipe.includes("pos") || tipe.includes("cabang") || tipe.includes("dapur") || tipe.includes("hub")) {
          newDapur.push({
            id: `imp_pos_${Date.now()}_${idx}`,
            name,
            lat: Number(lat),
            lng: Number(lng),
            kapasitas: Number(props.kapasitas || props.capacity || 3000),
            kecamatan: props.kecamatan || "Depok",
            status: props.status || "Aktif",
            alamat: props.alamat || "Kota Depok",
          });
        } else if (tipe.includes("sekolah") || tipe.includes("sd") || tipe.includes("smp") || tipe.includes("anggota")) {
          newSekolah.push({
            id: `imp_sek_${Date.now()}_${idx}`,
            name,
            lat: Number(lat),
            lng: Number(lng),
            siswa: Number(props.siswa || props.jumlah_siswa || 300),
            jenjang: props.jenjang || "SD",
            kecamatan: props.kecamatan || "Depok",
          });
        } else {
          newSupplier.push({
            id: `imp_sup_${Date.now()}_${idx}`,
            name,
            lat: Number(lat),
            lng: Number(lng),
            jenis: props.jenis || props.komoditas || "Bahan Pangan Pokok",
            kecamatan: props.kecamatan || "Depok",
          });
        }
      });
    } else if (parsedData && (Array.isArray(parsedData.dapur) || Array.isArray(parsedData.sekolah))) {
      if (Array.isArray(parsedData.dapur)) newDapur = parsedData.dapur;
      if (Array.isArray(parsedData.sekolah)) newSekolah = parsedData.sekolah;
      if (Array.isArray(parsedData.supplier)) newSupplier = parsedData.supplier;
    } else if (typeof content === "string") {
      const lines = content.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      if (lines.length > 1) {
        const header = lines[0].toLowerCase().split(/[,;\t]/).map((h) => h.replace(/["']/g, "").trim());
        const idxName = header.findIndex((h) => h.includes("nama") || h.includes("name"));
        const idxLat = header.findIndex((h) => h.includes("lat") || h.includes("lintang") || h === "y");
        const idxLng = header.findIndex((h) => h.includes("lng") || h.includes("lon") || h.includes("bujur") || h === "x");
        const idxTipe = header.findIndex((h) => h.includes("tipe") || h.includes("kategori") || h.includes("jenis") || h.includes("type"));
        const idxVal = header.findIndex((h) => h.includes("kapasitas") || h.includes("siswa") || h.includes("jumlah"));
        const idxKec = header.findIndex((h) => h.includes("kecamatan") || h.includes("area") || h.includes("wilayah"));

        for (let i = 1; i < lines.length; i++) {
          const cols = lines[i].split(/[,;\t]/).map((c) => c.replace(/["']/g, "").trim());
          if (cols.length < 3) continue;

          const lat = parseFloat(cols[idxLat]);
          const lng = parseFloat(cols[idxLng]);
          const name = cols[idxName] || `Titik #${i}`;
          const tipe = (cols[idxTipe] || "").toLowerCase();
          const kec = cols[idxKec] || "Depok";
          const val = parseInt(cols[idxVal]) || 500;

          if (isNaN(lat) || isNaN(lng)) continue;

          if (tipe.includes("pos") || tipe.includes("cabang") || tipe.includes("dapur") || tipe.includes("hub")) {
            newDapur.push({
              id: `csv_pos_${Date.now()}_${i}`,
              name,
              lat,
              lng,
              kapasitas: val,
              kecamatan: kec,
              status: "Aktif",
            });
          } else if (tipe.includes("sekolah") || tipe.includes("sd") || tipe.includes("smp")) {
            newSekolah.push({
              id: `csv_sek_${Date.now()}_${i}`,
              name,
              lat,
              lng,
              siswa: val,
              jenjang: name.includes("SMP") ? "SMP" : name.includes("SMA") ? "SMA" : "SD",
              kecamatan: kec,
            });
          } else {
            newSupplier.push({
              id: `csv_sup_${Date.now()}_${i}`,
              name,
              lat,
              lng,
              jenis: cols[idxVal] || "Komoditas Pangan",
              kecamatan: kec,
            });
          }
        }
      }
    }

    const uniqueDapur = Array.from(new Map(newDapur.map((d) => [`${d.name}_${d.lat}`, d])).values());
    const uniqueSekolah = Array.from(new Map(newSekolah.map((s) => [`${s.name}_${s.lat}`, s])).values());
    const uniqueSupplier = Array.from(new Map(newSupplier.map((sp) => [`${sp.name}_${sp.lat}`, sp])).values());

    const newJalur = uniqueDapur.slice(0, 10).map((d) => {
      const jarakKm = Math.round(
        Math.hypot((d.lat - DEPOK_HUB.lat) * 111, (d.lng - DEPOK_HUB.lng) * 111)
      );
      return {
        target: d.name,
        path: [DEPOK_HUB, { lat: d.lat, lng: d.lng }],
        jarak: `${Math.max(1, jarakKm)} km`,
        waktu: `${Math.max(5, Math.round(jarakKm * 2.5))} mnt`,
      };
    });

    const updatedData = saveGisData({
      dapur: uniqueDapur,
      sekolah: uniqueSekolah,
      supplier: uniqueSupplier,
      jalur: newJalur,
      source: "Sinkronisasi Spasial KKMP Kota Depok",
    });

    return {
      success: true,
      importedCounts: {
        dapur: uniqueDapur.length,
        sekolah: uniqueSekolah.length,
        supplier: uniqueSupplier.length,
        jalur: newJalur.length,
      },
      message: `Berhasil mengintegrasikan ${uniqueDapur.length} Titik Pos Cabang, ${uniqueSekolah.length} Titik Komunitas/Sekolah, dan ${uniqueSupplier.length} Supplier Pangan KKMP Depok.`,
      data: updatedData,
    };
  } catch (err) {
    console.error("Gagal impor data GIS:", err);
    return {
      success: false,
      message: `Gagal membaca format data: ${err.message}`,
    };
  }
}

/**
 * Mengembalikan data GIS ke dataset bawaan resmi KKMP Kota Depok.
 */
export function resetToDisperindagBaseline() {
  return saveGisData(KKMP_DEPOK_BASELINE);
}

export function resetToDepokBaseline() {
  return saveGisData(KKMP_DEPOK_BASELINE);
}

/**
 * Mengekspor data GIS saat ini ke format GeoJSON standar.
 */
export function exportToGeoJson() {
  const data = getGisData();
  const features = [];

  (data.dapur || []).forEach((d) => {
    features.push({
      type: "Feature",
      geometry: { type: "Point", coordinates: [d.lng, d.lat] },
      properties: { name: d.name, tipe: "pos_cabang", kapasitas: d.kapasitas, status: d.status, kecamatan: d.kecamatan },
    });
  });

  (data.sekolah || []).forEach((s) => {
    features.push({
      type: "Feature",
      geometry: { type: "Point", coordinates: [s.lng, s.lat] },
      properties: { name: s.name, tipe: "sekolah_komunitas", siswa: s.siswa, jenjang: s.jenjang, kecamatan: s.kecamatan },
    });
  });

  (data.supplier || []).forEach((sp) => {
    features.push({
      type: "Feature",
      geometry: { type: "Point", coordinates: [sp.lng, sp.lat] },
      properties: { name: sp.name, tipe: "supplier", jenis: sp.jenis, kecamatan: sp.kecamatan },
    });
  });

  return {
    type: "FeatureCollection",
    metadata: {
      generatedAt: new Date().toISOString(),
      source: "KKMP Mekarjaya Kota Depok — Geospasial Rantai Pasok",
      totalFeatures: features.length,
    },
    features,
  };
}
