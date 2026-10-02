// Modul Berita Resmi Kantor Kementerian Agama Kota Depok (depok.kemenag.go.id)
// Disinkronkan untuk portal informasi warga & anggota Koperasi Kelurahan Merah Putih (KKMP) Sukmajaya.

export const KEMENAG_DEPOK_PORTAL_URL = "https://depok.kemenag.go.id/kategori/berita";
const CACHE_KEY = "kkmp_kemenag_news_cache_v1";
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 jam

export function stripHtml(html) {
  if (!html) return "";
  try {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  } catch {
    return html.replace(/<[^>]*>?/gm, "");
  }
}

// Data awal riil yang bersumber langsung dari https://depok.kemenag.go.id/kategori/berita
export const KEMENAG_DEPOK_NEWS_SEED = [
  {
    id: "audiensi-pmi-2026",
    title: "Kankemenag Depok Terima Audiensi PMI, Bahas Tindak Lanjut Bulan Dana Kemanusiaan 2026",
    url: "https://depok.kemenag.go.id/kankemenag-depok-terima-audiensi-pmi-bahas-tindak-lanjut-bulan-dana-kemanusiaan-2026",
    img: "https://depok.kemenag.go.id/uploads/images/20261001_150258_f873329b1be96c081491.webp",
    tag: "Kemanusiaan",
    color: "emerald",
    time: "1 hari yang lalu",
    date: "Kamis, 01 Oktober 2026 • 10:55 WIB",
    summary: "Kantor Kementerian Agama Kota Depok menerima audiensi Palang Merah Indonesia (PMI) Kota Depok dalam rangka penguatan sinergi tindak lanjut gerakan kemanusiaan Bulan Dana 2026 di satuan kerja keagamaan.",
    source: "Kantor Kementerian Agama Kota Depok",
    sourceUrl: KEMENAG_DEPOK_PORTAL_URL,
  },
  {
    id: "kesaktian-pancasila-2026",
    title: "Hari Kesaktian Pancasila, Kakankemenag Depok Ajak ASN Perkuat Nilai Persatuan",
    url: "https://depok.kemenag.go.id/hari-kesaktian-pancasila-kakankemenag-depok-ajak-asn-perkuat-nilai-persatuan",
    img: "https://depok.kemenag.go.id/uploads/images/20261001_145756_dc6992921ae5cac08500.webp",
    tag: "Wawasan Kebangsaan",
    color: "orange",
    time: "1 hari yang lalu",
    date: "Kamis, 01 Oktober 2026 • 08:10 WIB",
    summary: "Memperingati Hari Kesaktian Pancasila, Kakankemenag Kota Depok mengajak seluruh ASN Kemenag mengamalkan nilai luhur Pancasila dalam melayani umat dan memperkokoh persaudaraan kebangsaan.",
    source: "Kantor Kementerian Agama Kota Depok",
    sourceUrl: KEMENAG_DEPOK_PORTAL_URL,
  },
  {
    id: "pembinaan-pesantren-pakis-2026",
    title: "Kasi Pakis Depok Berikan Pembinaan kepada Lembaga Pesantren dan Pendidikan Keagamaan Islam",
    url: "https://depok.kemenag.go.id/kasi-pakis-depok-berikan-pembinaan-kepada-lembaga-pesantren-dan-pendidikan-keagamaan-islam",
    img: "https://depok.kemenag.go.id/uploads/images/20261001_145155_4c40225c0c1920fc6ef4.webp",
    tag: "Pendidikan Agama",
    color: "blue",
    time: "2 hari yang lalu",
    date: "Rabu, 30 September 2026 • 11:51 WIB",
    summary: "Seksi Pendidikan Agama dan Keagamaan Islam Kemenag Depok menyelenggarakan pembinaan standarisasi kelembagaan pesantren, madin, dan LPQ guna memastikan mutu kurikulum dan legalitas formal di Depok.",
    source: "Kantor Kementerian Agama Kota Depok",
    sourceUrl: KEMENAG_DEPOK_PORTAL_URL,
  },
  {
    id: "tindak-lanjut-pemeriksaan-2026",
    title: "Kakankemenag Depok Tekankan Tindak Lanjut Hasil Pemeriksaan untuk Perkuat Akuntabilitas",
    url: "https://depok.kemenag.go.id/kakankemenag-depok-tekankan-tindak-lanjut-hasil-pemeriksaan-untuk-perkuat-akuntabilitas",
    img: "https://depok.kemenag.go.id/uploads/images/20261001_144026_5ded9a2271ea297ac97f.webp",
    tag: "Tata Kelola",
    color: "emerald",
    time: "2 hari yang lalu",
    date: "Rabu, 30 September 2026 • 09:11 WIB",
    summary: "Rapat koordinasi pimpinan Kemenag Depok menekankan penyelesaian tindak lanjut temuan pengawasan internal sebagai wujud komitmen Zona Integritas dan akuntabilitas keuangan negara.",
    source: "Kantor Kementerian Agama Kota Depok",
    sourceUrl: KEMENAG_DEPOK_PORTAL_URL,
  },
  {
    id: "bantuan-sembako-bojongsari-2026",
    title: "KUA Bojongsari dan BAZNAS Depok Salurkan Bantuan Sembako kepada 10 Duafa",
    url: "https://depok.kemenag.go.id/kua-bojongsari-dan-baznas-depok-salurkan-bantuan-sembako-kepada-10-duafa",
    img: "https://depok.kemenag.go.id/uploads/images/20261001_143138_365394c28500877cb979.webp",
    tag: "Bantuan Sembako",
    color: "orange",
    time: "3 hari yang lalu",
    date: "Selasa, 29 September 2026 • 14:00 WIB",
    summary: "KUA Kecamatan Bojongsari berkolaborasi bersama BAZNAS Kota Depok menyerahkan paket bantuan sembako kebutuhan pangan pokok kepada keluarga mustahik dhuafa guna meringankan beban ekonomi warga.",
    source: "Kantor Kementerian Agama Kota Depok",
    sourceUrl: KEMENAG_DEPOK_PORTAL_URL,
  },
  {
    id: "evaluasi-mutu-madrasah-2026",
    title: "Kasi Penmad Depok: PKKM Jadi Instrumen Evaluasi dan Peningkatan Mutu Madrasah",
    url: "https://depok.kemenag.go.id/kasi-penmad-depok-pkkm-jadi-instrumen-evaluasi-dan-peningkatan-mutu-madrasah",
    img: "https://depok.kemenag.go.id/uploads/images/20261001_144723_5ea262629ef5ef1e38d9.webp",
    tag: "Pendidikan Madrasah",
    color: "blue",
    time: "3 hari yang lalu",
    date: "Selasa, 29 September 2026 • 11:46 WIB",
    summary: "Penilaian Kinerja Kepala Madrasah (PKKM) di seluruh madrasah se-Kota Depok bertujuan memetakan standar manajerial kepemimpinan sekolah dan akselerasi transformasi mutu pendidikan digital.",
    source: "Kantor Kementerian Agama Kota Depok",
    sourceUrl: KEMENAG_DEPOK_PORTAL_URL,
  },
  {
    id: "inovasi-dan-aset-asn-2026",
    title: "Kakankemenag Depok Tekankan Inovasi Kerja dan Penertiban Aset dalam Pembinaan ASN",
    url: "https://depok.kemenag.go.id/kakankemenag-depok-tekankan-inovasi-kerja-dan-penertiban-aset-dalam-pembinaan-asn",
    img: "https://depok.kemenag.go.id/uploads/images/20260928_114508_1cef846f45438bce8be0.webp",
    tag: "Manajemen ASN",
    color: "emerald",
    time: "4 hari yang lalu",
    date: "Senin, 28 September 2026 • 08:44 WIB",
    summary: "Pembinaan rutin aparatur sipil negara di lingkungan kantor Kemenag Depok untuk mendorong etos kerja inovatif, tertib administrasi BMN, dan peningkatan kualitas pelayanan ramah warga.",
    source: "Kantor Kementerian Agama Kota Depok",
    sourceUrl: KEMENAG_DEPOK_PORTAL_URL,
  },
  {
    id: "pelayanan-kua-limo-2026",
    title: "Kepala KUA Limo Tekankan Profesionalisme dan Pelayanan dalam Apel Pagi",
    url: "https://depok.kemenag.go.id/kepala-kua-limo-tekankan-profesionalisme-dan-pelayanan-dalam-apel-pagi",
    img: "https://depok.kemenag.go.id/uploads/images/20260928_132045_58254f62a6bc3a78a96b.webp",
    tag: "Pelayanan Publik",
    color: "blue",
    time: "4 hari yang lalu",
    date: "Senin, 28 September 2026 • 08:20 WIB",
    summary: "Pengarahan apel pagi KUA Kecamatan Limo memfokuskan peningkatan kualitas layanan bimbingan perkawinan, konsultasi keluarga sakinah, serta kecepatan verifikasi administrasi keagamaan warga Depok.",
    source: "Kantor Kementerian Agama Kota Depok",
    sourceUrl: KEMENAG_DEPOK_PORTAL_URL,
  },
];

// Parser dinamis HTML langsung dari web resmi https://depok.kemenag.go.id/kategori/berita
export function parseKemenagDepokNews(html) {
  if (!html) return [];
  try {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const items = [];
    const elements = doc.querySelectorAll(".kemenag-content-item");

    elements.forEach((el, index) => {
      const titleLink = el.querySelector(".kemenag-content-title-link, .kemenag-content-title a, h3 a");
      const title = titleLink?.textContent?.trim() || "";
      let href = titleLink?.getAttribute("href") || "";
      if (href && !href.startsWith("http")) {
        href = `https://depok.kemenag.go.id${href.startsWith("/") ? "" : "/"}${href}`;
      }

      if (!title || title.length < 5) return;

      const imgEl = el.querySelector("img");
      let img = imgEl?.getAttribute("src") || "";
      if (img && !img.startsWith("http")) {
        img = `https://depok.kemenag.go.id${img.startsWith("/") ? "" : "/"}${img}`;
      }
      if (img && img.includes("/uploads/images/")) {
        img = img.split("?")[0];
      }

      const kicker = el.querySelector(".kemenag-content-kicker")?.textContent?.trim() || "Berita Depok";
      const timeSpan =
        el.querySelector(".kemenag-content-meta span[title]") ||
        el.querySelector(".kemenag-content-meta span:last-child");
      const time = timeSpan?.textContent?.trim() || "Terkini";
      const fullDate = timeSpan?.getAttribute("title") || time;

      const descEl = el.querySelector("p, .text-muted:not(.kemenag-content-meta)");
      const summary = descEl?.textContent?.trim() ||
        `Warta resmi Kantor Kementerian Agama Kota Depok: ${title}. Simak informasi selengkapnya di portal resmi Kemenag Kota Depok.`;

      const colors = ["emerald", "blue", "orange"];

      items.push({
        id: href || `kemenag-depok-${index}`,
        title,
        url: href || KEMENAG_DEPOK_PORTAL_URL,
        img: img || "https://depok.kemenag.go.id/uploads/branding/logo.webp",
        tag: kicker,
        color: colors[index % colors.length],
        time,
        date: fullDate,
        summary,
        source: "Kantor Kementerian Agama Kota Depok",
        sourceUrl: KEMENAG_DEPOK_PORTAL_URL,
      });
    });

    return items;
  } catch (err) {
    console.warn("Gagal mengekstrak struktur HTML Kemenag Depok:", err);
    return [];
  }
}

/**
 * Mengambil berita Kemenag Depok terkini setiap hari.
 * Mendukung real-time update harian, caching cerdas, dan fallback otomatis.
 */
export async function fetchAllNews(forceRefresh = false) {
  if (typeof window !== "undefined" && !forceRefresh) {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { timestamp, items } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION_MS && Array.isArray(items) && items.length > 0) {
          return items;
        }
      }
    } catch (e) {
      // Abaikan error parse cache
    }
  }

  // Coba sumber real-time secara berurutan
  const candidateUrls = [
    "/kemenag-depok-news/kategori/berita", // Vite Proxy (Dev & Preview)
    "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://depok.kemenag.go.id/kategori/berita"),
    "https://corsproxy.io/?url=" + encodeURIComponent("https://depok.kemenag.go.id/kategori/berita"),
    KEMENAG_DEPOK_PORTAL_URL,
  ];

  for (const url of candidateUrls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const res = await fetch(url, {
        signal: controller.signal,
        headers: { Accept: "text/html,application/xhtml+xml" },
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const html = await res.text();
        const parsed = parseKemenagDepokNews(html);
        if (parsed.length > 0) {
          if (typeof window !== "undefined") {
            try {
              localStorage.setItem(
                CACHE_KEY,
                JSON.stringify({ timestamp: Date.now(), items: parsed })
              );
            } catch (err) {}
          }
          return parsed;
        }
      }
    } catch (fetchErr) {
      // Lanjut ke kandidat berikutnya
    }
  }

  // Jika jaringan gagal, gunakan cache terakhir atau seed resmi yang selalu valid
  if (typeof window !== "undefined") {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { items } = JSON.parse(cached);
        if (Array.isArray(items) && items.length > 0) return items;
      }
    } catch {}
  }

  return KEMENAG_DEPOK_NEWS_SEED;
}

// Alias kompatibilitas
export const fetchKemenagDepokNews = fetchAllNews;
export const KKMP_DEPOK_NEWS = KEMENAG_DEPOK_NEWS_SEED;
