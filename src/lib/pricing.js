// ════════════════════════════════════════════════════════════════════════════
// 3.2 MODUL KURASI HARGA & OTOMASI MARGIN — PINBAS MUI KOTA DEPOK
//
// Alur Kurasi Harga 5 Tahap:
// 1. Input: Supplier memasukkan harga penawaran awal (contoh: Rp10.000 / Rp20.000).
// 2. Verifikasi: Pemeriksaan algoritmik kelayakan harga oleh sistem KGN/PINBAS.
// 3. Kalkulasi: Penambahan margin otomatis 25% atau kalkulasi potongan fee admin.
// 4. Pemindaian HET: Pemeriksaan kepatuhan HET (Harga Eceran Tertinggi).
//    Jika harga jual > HET, otomatis disesuaikan agar tidak melampaui regulasi.
// 5. Publikasi: Produk diterbitkan di marketplace dengan harga yang telah dikurasi.
// ════════════════════════════════════════════════════════════════════════════

// Tarif margin platform default: 25% (0.25)
export const PLATFORM_MARGIN_RATE = 0.25;
export const PLATFORM_MARKUP_RATE = PLATFORM_MARGIN_RATE; // Alias backward-compatible

// ─── TABEL REGULASI HET (HARGA ECERAN TERTINGGI) KOMODITAS KOTA DEPOK ────────
// Berdasarkan Keputusan Badan Pangan Nasional & Disdagin Kota Depok
export const COMMODITY_HET_TABLE = [
  {
    category: "sembako",
    keyword: "minyak",
    subItem: "Minyak Goreng Pouch 2 Liter",
    het: 38000,
    unit: "pouch 2L",
    source: "HET Minyakita / Minyak Goreng Kemasan Bapanas",
  },
  {
    category: "sembako",
    keyword: "beras",
    subItem: "Beras Premium",
    het: 14900,
    unit: "kg",
    source: "HET Beras Premium Zona 1 Jawa",
  },
  {
    category: "sembako",
    keyword: "gula",
    subItem: "Gula Pasir Konsumsi",
    het: 17500,
    unit: "kg",
    source: "HET Gula Konsumsi Bapanas",
  },
  {
    category: "protein",
    keyword: "telur",
    subItem: "Telur Ayam Ras",
    het: 29500,
    unit: "kg",
    source: "HET Telur Ayam Ras Konsumen",
  },
  {
    category: "protein",
    keyword: "daging-ayam",
    subItem: "Daging Ayam Ras Segar",
    het: 38500,
    unit: "kg",
    source: "HET Daging Ayam Karkas",
  },
  {
    category: "protein",
    keyword: "daging-sapi",
    subItem: "Daging Sapi Segar Paha Depan/Belakang",
    het: 140000,
    unit: "kg",
    source: "HET Daging Sapi Konsumen",
  },
  {
    category: "sayuran",
    keyword: "cabai-merah",
    subItem: "Cabai Merah Keriting",
    het: 55000,
    unit: "kg",
    source: "Batas Acuan Harga Cabai Merah",
  },
  {
    category: "sayuran",
    keyword: "cabai-rawit",
    subItem: "Cabai Rawit Merah",
    het: 60000,
    unit: "kg",
    source: "Batas Acuan Harga Cabai Rawit",
  },
  {
    category: "sayuran",
    keyword: "bawang-merah",
    subItem: "Bawang Merah Brebes/Lokal",
    het: 42000,
    unit: "kg",
    source: "Batas Acuan Harga Bawang Merah",
  },
  {
    category: "sayuran",
    keyword: "bawang-putih",
    subItem: "Bawang Putih Honan/Kating",
    het: 40000,
    unit: "kg",
    source: "Batas Acuan Harga Bawang Putih",
  },
  {
    category: "sayuran",
    keyword: "kentang",
    subItem: "Kentang Segar Pilihan",
    het: 22000,
    unit: "kg",
    source: "Batas Acuan Hortikultura Pasar Depok",
  },
  {
    category: "sembako",
    keyword: "tepung",
    subItem: "Tepung Terigu Serbaguna",
    het: 13000,
    unit: "kg",
    source: "HET Tepung Terigu Kemasan",
  },
  {
    category: "sembako",
    keyword: "roti",
    subItem: "Roti Tawar Jumbo",
    het: 20000,
    unit: "pack",
    source: "HET Ritel Produk Bakery",
  },
  {
    category: "sembako",
    keyword: "aqua",
    subItem: "Air Mineral Galon 19L Refill",
    het: 25000,
    unit: "galon",
    source: "HET Distribusi Air Galon Depok",
  },
  {
    category: "sembako",
    keyword: "margarin",
    subItem: "Margarin Cup 250g",
    het: 19000,
    unit: "cup",
    source: "HET Ritel Margarin Olahan",
  },
  {
    category: "bumbu",
    keyword: "kecap",
    subItem: "Kecap Manis Botol 520ml",
    het: 28000,
    unit: "botol",
    source: "HET Bumbu Olahan Kemasan",
  },
  {
    category: "kelontong",
    keyword: "mie",
    subItem: "Mie Instan Paket 5 Pcs",
    het: 18000,
    unit: "paket",
    source: "HET Paket Mie Instan Eceran",
  },
];

// Fallback HET standar per kategori jika item spesifik tidak ditemukan
export const CATEGORY_DEFAULT_HET = {
  sembako: 45000,
  protein: 150000,
  sayuran: 40000,
  buah: 45000,
  ikan: 55000,
  daging: 140000,
  telur: 32000,
  bumbu: 35000,
  beras: 18000,
  minyak: 40000,
  tepung: 16000,
  mentega: 25000,
  susu: 30000,
  kelontong: 80000,
  perawatan: 60000,
  lainnya: 50000,
};

/**
 * Pemindaian batas HET berdasarkan nama produk dan kategori
 */
export function resolveHETLimit(category = "", productName = "") {
  const normName = String(productName || "").toLowerCase();
  const normCat = String(category || "").toLowerCase();

  // 1. Cari exact match dari keywords
  const matched = COMMODITY_HET_TABLE.find((item) => {
    const key = item.keyword.toLowerCase();
    return normName.includes(key) || (normCat.includes(item.category) && normName.includes(key));
  });

  if (matched) {
    return {
      het: matched.het,
      source: matched.source,
      subItem: matched.subItem,
      unit: matched.unit,
      isExactMatch: true,
    };
  }

  // 2. Fallback berdasarkan kategori
  const defaultHet = CATEGORY_DEFAULT_HET[normCat] || 50000;
  return {
    het: defaultHet,
    source: `Plafon Acuan Standar Kategori (${normCat || "Umum"})`,
    subItem: productName || "Komoditas Umum",
    unit: "unit",
    isExactMatch: false,
  };
}

/**
 * ════════════════════════════════════════════════════════════════════════════
 * 3.2 PIPELINE UTAMA: MODUL KURASI HARGA & OTOMASI MARGIN
 * ════════════════════════════════════════════════════════════════════════════
 * Menjalankan 5 tahap kurasi harga algoritmik sesuai dokumen resmi.
 *
 * @param {Object} params
 * @param {number|string} params.basePrice - Harga penawaran awal supplier (Rp10.000 / Rp20.000)
 * @param {string} [params.category] - Kategori produk
 * @param {string} [params.productName] - Nama produk
 * @param {number} [params.customMarginRate] - Tarif margin (default: 0.25 / 25%)
 * @returns {Object} Hasil kurasi 5 tahap
 */
export function curatePricePipeline({
  basePrice = 0,
  category = "sembako",
  productName = "",
  customMarginRate = PLATFORM_MARGIN_RATE,
}) {
  const initialOffer = Math.max(0, Number(basePrice) || 0);
  const marginRate = Number(customMarginRate) >= 0 ? Number(customMarginRate) : PLATFORM_MARGIN_RATE;

  // ─── TAHAP 1: INPUT HARGA PENAWARAN AWAL ───
  const stage1 = {
    step: 1,
    name: "Input",
    title: "Harga Penawaran Awal Supplier",
    initialOfferPrice: initialOffer,
    formattedInitial: formatRp(initialOffer),
  };

  // ─── TAHAP 2: VERIFIKASI ALGORITMIK ───
  const isValidNumber = initialOffer > 0;
  const isReasonable = initialOffer >= 500; // Minimal batas wajar produk ritel
  const isSuspiciousHigh = initialOffer > 2000000; // Deteksi anomali penawaran

  const stage2 = {
    step: 2,
    name: "Verifikasi",
    title: "Pemeriksaan Algoritmik Sistem PINBAS",
    isValid: isValidNumber && isReasonable && !isSuspiciousHigh,
    status: !isValidNumber
      ? "MENUNGGU_INPUT"
      : isSuspiciousHigh
      ? "ANOMALI_HARGA"
      : "LOLOS_VERIFIKASI",
    statusLabel: !isValidNumber
      ? "Menunggu Input"
      : isSuspiciousHigh
      ? "Perlu Verifikasi Manual (Terlalu Tinggi)"
      : "Lolos Verifikasi Algoritmik",
    checks: {
      positiveValue: isValidNumber,
      reasonableThreshold: isReasonable,
      anomalyCheck: !isSuspiciousHigh,
    },
  };

  // ─── TAHAP 3: KALKULASI MARGIN & FEE ADMIN ───
  // Formula: Harga dengan Margin = Harga Penawaran Awal × (1 + 25%)
  const marginAmount = Math.round(initialOffer * marginRate);
  const calculatedPrice = initialOffer + marginAmount;

  const stage3 = {
    step: 3,
    name: "Kalkulasi",
    title: "Penambahan Margin Otomatis (25%) & Fee Admin",
    marginRate: marginRate,
    marginPercent: `${Math.round(marginRate * 100)}%`,
    marginAmount: marginAmount,
    calculatedPrice: calculatedPrice,
    formattedMargin: formatRp(marginAmount),
    formattedCalculated: formatRp(calculatedPrice),
  };

  // ─── TAHAP 4: PEMINDAIAN HET (HARGA ECERAN TERTINGGI) ───
  const hetInfo = resolveHETLimit(category, productName);
  const hetLimit = hetInfo.het;
  const isExceeded = calculatedPrice > hetLimit;
  const priceAfterHET = isExceeded ? hetLimit : calculatedPrice;
  const cappedAmount = isExceeded ? calculatedPrice - hetLimit : 0;

  const stage4 = {
    step: 4,
    name: "Pemindaian HET",
    title: "Pemeriksaan Regulasi HET Komoditas",
    hetLimit: hetLimit,
    formattedHET: formatRp(hetLimit),
    hetSource: hetInfo.source,
    subItem: hetInfo.subItem,
    isExceeded: isExceeded,
    status: isExceeded ? "DISESUAIKAN_HET" : "AMAN_DIBAWAH_HET",
    statusLabel: isExceeded ? "Disesuaikan ke HET (Batas Maksimal)" : "Sesuai Regulasi (Aman di Bawah HET)",
    cappedAmount: cappedAmount,
    marginAdjusted: isExceeded,
  };

  // ─── TAHAP 5: PUBLIKASI KE MARKETPLACE ───
  // Harga jual akhir yang diterbitkan tidak boleh melampaui HET
  const finalPrice = initialOffer > 0 ? priceAfterHET : 0;
  const effectiveMargin = finalPrice - initialOffer;
  const effectiveMarginRate = initialOffer > 0 ? (effectiveMargin / initialOffer) : 0;

  const stage5 = {
    step: 5,
    name: "Publikasi",
    title: "Harga Terbit di Marketplace",
    publishedPrice: finalPrice,
    formattedPublished: formatRp(finalPrice),
    effectiveMarginAmount: effectiveMargin,
    formattedEffectiveMargin: formatRp(effectiveMargin),
    effectiveMarginPercent: `${(effectiveMarginRate * 100).toFixed(1)}%`,
    readyToPublish: stage2.isValid,
  };

  return {
    basePrice: initialOffer,
    calculatedPrice: calculatedPrice,
    hetLimit: hetLimit,
    finalPrice: finalPrice,
    marginRate: marginRate,
    isHETCapped: isExceeded,
    stages: [stage1, stage2, stage3, stage4, stage5],
    stage1,
    stage2,
    stage3,
    stage4,
    stage5,
  };
}

/**
 * Hitung harga jual terbit ke pembeli (otomatis kalkulasi margin 25% + batas HET)
 */
export function computeMarkedUpPrice(basePrice, category = "sembako", productName = "") {
  const result = curatePricePipeline({
    basePrice,
    category,
    productName,
    customMarginRate: PLATFORM_MARGIN_RATE,
  });
  return result.finalPrice;
}

/**
 * Hitung fee margin platform koperasi dari harga penawaran supplier
 */
export function computePlatformFee(basePrice, category = "sembako", productName = "") {
  const result = curatePricePipeline({
    basePrice,
    category,
    productName,
    customMarginRate: PLATFORM_MARGIN_RATE,
  });
  return Math.max(0, result.finalPrice - Number(basePrice || 0));
}

/**
 * Perkirakan harga penawaran awal supplier dari harga jual marketplace (balik 25%)
 */
export function estimateBasePrice(markedUpPrice) {
  const num = Number(markedUpPrice || 0);
  return Math.round(num / (1 + PLATFORM_MARGIN_RATE));
}

export const formatRp = (n) => `Rp ${Number(n || 0).toLocaleString("id-ID")}`;