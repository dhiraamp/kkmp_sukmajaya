const BADGE_COLORS = ["emerald", "orange", "blue"];

export function stripHtml(html) {
  const doc = new DOMParser().parseFromString(html || "", "text/html");
  return doc.body.textContent || "";
}

export const KKMP_DEPOK_NEWS = [
  {
    tag: "Koperasi",
    color: "emerald",
    time: "2 jam lalu",
    title: "Koperasi Merah Putih Sukmajaya Perluas Jaringan Distribusi Pangan Pokok",
    summary: "Gudang Induk Sukmajaya resmi mengintegrasikan distribusi sembako ke seluruh Pos Cabang KKMP kelurahan untuk jaminan keterjangkauan harga.",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500",
    url: "/berita",
    source: "Humas KKMP Sukmajaya",
  },
  {
    tag: "Pasar",
    color: "orange",
    time: "5 jam lalu",
    title: "Stabilisasi Harga Komoditas Pokok Anggota Koperasi Kota Depok",
    summary: "Pengurus Koperasi menjamin kestabilan harga beras premium, telur ayam, dan minyak goreng bagi seluruh anggota terdaftar di wilayah Kota Depok.",
    img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=500",
    url: "/berita",
    source: "Warta Pasar Depok",
  },
  {
    tag: "Logistik",
    color: "blue",
    time: "1 hari lalu",
    title: "Penguatan Armada Distribusi Terjadwal ke Pos Cabang KKMP",
    summary: "Armada logistik internal KKMP Sukmajaya menyiagakan rute pengiriman harian guna memastikan ketersediaan stok sembako tetap terjaga.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500",
    url: "/berita",
    source: "Logistik KKMP Depok",
  },
  {
    tag: "Ketahanan Pangan",
    color: "emerald",
    time: "2 hari lalu",
    title: "Kemitraan Strategis KKMP Sukmajaya Bersama Gapoktan Jawa Barat",
    summary: "Kerja sama langsung dengan sentra produsen dan gabungan kelompok tani guna memotong rantai pasok dan menjaga margin ramah warga.",
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500",
    url: "/berita",
    source: "Agro Rantai Pasok",
  },
  {
    tag: "Teknologi",
    color: "blue",
    time: "3 hari lalu",
    title: "Digitalisasi Pemesanan dan Transparansi Stok Pos Cabang Sukmajaya",
    summary: "Aplikasi KKMP Sukmajaya memudahkan warga dan pelaku usaha mikro memantau ketersediaan komoditas secara real-time.",
    img: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=500",
    url: "/berita",
    source: "Inovasi Digital KKMP",
  },
];

export function mapKkmpNews(data) {
  return (data?.blogs?.data || []).map((b, i) => ({
    tag: b.grup?.name || "Berita",
    color: BADGE_COLORS[i % BADGE_COLORS.length],
    time: b.date_upload || "Baru-baru ini",
    title: b.judul || "",
    summary: stripHtml(b.deskripsi).slice(0, 160),
    img: b.gambar || "",
    url: b.slug ? `/berita?slug=${b.slug}` : "/berita",
    source: "Portal Warta KKMP Sukmajaya",
  }));
}

// Alias kompatibilitas ke belakang
export const mapGarutNews = mapKkmpNews;

export function parseDataGoIdNews(html) {
  if (!html) return [];
  const doc = new DOMParser().parseFromString(html || "", "text/html");
  const items = [];
  doc.querySelectorAll('a[href^="/news/"]').forEach((a) => {
    const href = a.getAttribute("href") || "";
    const title = (a.textContent || "").trim();
    if (title.length < 10) return;
    const slide = a.closest('[role="group"]');
    const img = slide?.querySelector("img")?.src || "";
    const time = slide?.querySelector("time")?.textContent?.trim() || "";
    const desc = slide?.querySelector(".p-6.pt-0 div.line-clamp-2")?.textContent?.trim() || "";
    const cat = slide?.querySelector(".mt-2 span")?.textContent?.trim() || "Warta Nasional";
    items.push({
      tag: cat,
      color: BADGE_COLORS[items.length % BADGE_COLORS.length],
      time,
      title,
      summary: desc,
      img,
      url: `https://data.go.id${href}`,
      source: "data.go.id",
    });
  });
  return items;
}

export async function fetchAllNews() {
  let portalNews = [];
  try {
    const res = await fetch("/dataid/");
    if (res.ok) {
      const html = await res.text();
      portalNews = parseDataGoIdNews(html);
    }
  } catch (err) {
    console.warn("Gagal memuat portal nasional data.go.id, menyajikan warta KKMP Sukmajaya:", err);
  }

  return [...KKMP_DEPOK_NEWS, ...portalNews];
}
