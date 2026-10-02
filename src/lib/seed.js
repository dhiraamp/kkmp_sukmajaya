// Seed data dummy untuk klon full-local.
// ensureSeed() dijalankan otomatis oleh adapter base44Client saat pertama kali
// dimuat. Data hanya di-seed sekali (versi dicek via localStorage key).

import { PRODUCTS } from "@/lib/marketplace";

const SEED_VERSION = "kkmp_sukmajaya_seed_v6_real_images";

const now = () => new Date().toISOString();
const daysAgo = (n) => new Date(Date.now() - n * 86400000).toISOString();
const hoursAgo = (n) => new Date(Date.now() - n * 3600000).toISOString();

const uid = (p) => `${p}_${Math.random().toString(36).slice(2, 8)}`;

const COLLECTIONS = {
  users: [
    { id: "u_warga", email: "anggota.depok@kkmp-depok.id", password: "demo1234", full_name: "Adhira Maharani (Anggota Koperasi)", role: "penerima", verified: true, created_date: now() },
    { id: "u_mitra", email: "cabang.beji@kkmp-depok.id", password: "demo1234", full_name: "Mitra Pos Cabang Beji", role: "mitra", verified: true, created_date: now() },
    { id: "u_supplier", email: "supplier.pangan@kkmp-depok.id", password: "demo1234", full_name: "Gapoktan Sawangan Mandiri", role: "supplier", verified: true, created_date: now() },
    { id: "u_logistik", email: "logistik@kkmp-depok.id", password: "demo1234", full_name: "Tim Logistik KKMP Kota Depok", role: "logistik", verified: true, created_date: now() },
    { id: "u_admin", email: "admin.induk@kkmp-depok.id", password: "demo1234", full_name: "Pengurus KKMP Sukmajaya Depok", role: "admin", verified: true, created_date: now() },
    // Alias demo.local
    { id: "u_warga_alt", email: "warga@demo.local", password: "demo1234", full_name: "Adhira Maharani (Anggota Koperasi)", role: "penerima", verified: true, created_date: now() },
    { id: "u_mitra_alt", email: "mitra@demo.local", password: "demo1234", full_name: "Mitra Pos Cabang Beji", role: "mitra", verified: true, created_date: now() },
    { id: "u_supplier_alt", email: "supplier@demo.local", password: "demo1234", full_name: "Gapoktan Sawangan Mandiri", role: "supplier", verified: true, created_date: now() },
    { id: "u_logistik_alt", email: "logistik@demo.local", password: "demo1234", full_name: "Tim Logistik KKMP Kota Depok", role: "logistik", verified: true, created_date: now() },
    { id: "u_admin_alt", email: "admin@demo.local", password: "demo1234", full_name: "Pengurus KKMP Sukmajaya Depok", role: "admin", verified: true, created_date: now() },
  ],
  UserProfile: [
    { id: "p_warga", user_id: "u_warga", user_email: "anggota.depok@kkmp-depok.id", full_name: "Adhira Maharani (Anggota Koperasi)", role: "penerima", is_active: true, phone: "081234567890", address: "Jl. Bahagia Raya No. 15", area: "Sukmajaya, Sukmajaya, Depok", created_date: now() },
    { id: "p_mitra", user_id: "u_mitra", user_email: "cabang.beji@kkmp-depok.id", full_name: "Mitra Pos Cabang Beji", role: "mitra", is_active: true, organization_name: "Pos Cabang Beji KKMP", phone: "081234567891", address: "Jl. Ridwan Rais No. 14, Beji", created_date: now() },
    { id: "p_supplier", user_id: "u_supplier", user_email: "supplier.pangan@kkmp-depok.id", full_name: "Gapoktan Sawangan Mandiri", role: "supplier", is_active: true, organization_name: "Gapoktan Sawangan Mandiri", phone: "081234567892", created_date: now() },
    { id: "p_logistik", user_id: "u_logistik", user_email: "logistik@kkmp-depok.id", full_name: "Tim Logistik KKMP Kota Depok", role: "logistik", is_active: true, organization_name: "Divisi Distribusi KKMP Depok", phone: "081234567893", vehicle_type: "mobil_pickup", is_ready: true, created_date: now() },
    { id: "p_admin", user_id: "u_admin", user_email: "admin.induk@kkmp-depok.id", full_name: "Pengurus KKMP Sukmajaya Depok", role: "admin", is_active: true, organization_name: "Koperasi Kelurahan Merah Putih Sukmajaya", phone: "081234567894", created_date: now() },
    // Alias demo.local
    { id: "p_warga_alt", user_id: "u_warga_alt", user_email: "warga@demo.local", full_name: "Adhira Maharani (Anggota Koperasi)", role: "penerima", is_active: true, phone: "081234567890", address: "Jl. Bahagia Raya No. 15", area: "Sukmajaya, Sukmajaya, Depok", created_date: now() },
    { id: "p_mitra_alt", user_id: "u_mitra_alt", user_email: "mitra@demo.local", full_name: "Mitra Pos Cabang Beji", role: "mitra", is_active: true, organization_name: "Pos Cabang Beji KKMP", phone: "081234567891", address: "Jl. Ridwan Rais No. 14, Beji", created_date: now() },
    { id: "p_supplier_alt", user_id: "u_supplier_alt", user_email: "supplier@demo.local", full_name: "Gapoktan Sawangan Mandiri", role: "supplier", is_active: true, organization_name: "Gapoktan Sawangan Mandiri", phone: "081234567892", created_date: now() },
    { id: "p_logistik_alt", user_id: "u_logistik_alt", user_email: "logistik@demo.local", full_name: "Tim Logistik KKMP Kota Depok", role: "logistik", is_active: true, organization_name: "Divisi Distribusi KKMP Depok", phone: "081234567893", vehicle_type: "mobil_pickup", is_ready: true, created_date: now() },
    { id: "p_admin_alt", user_id: "u_admin_alt", user_email: "admin@demo.local", full_name: "Pengurus KKMP Sukmajaya Depok", role: "admin", is_active: true, organization_name: "Koperasi Kelurahan Merah Putih Sukmajaya", phone: "081234567894", created_date: now() },
  ],
  Product: PRODUCTS.map((p, i) => ({
    id: p.id,
    name: p.name,
    category: p.category.toLowerCase(),
    price: p.price,
    base_price: p.old_price || p.price,
    unit: p.unit,
    stock: p.stock,
    origin: p.origin || "Gudang Induk Sukmajaya, Depok",
    image_url: p.img,
    supplier_name: p.origin || "Gudang Induk Sukmajaya, Depok",
    status: "active",
    created_date: daysAgo(i),
  })),
  WarehouseStock: [
    { id: uid("ws"), product_id: "sania-pouch-2l", product_name: "Sania Minyak Goreng Pouch 2L", category: "sembako", quantity: 320, unit: "pouch", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "sari-roti-jumbo", product_name: "Sari Roti Tawar Kupas Jumbo", category: "sembako", quantity: 150, unit: "pack", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "refill-aqua-galon", product_name: "Refill AQUA Air Mineral Galon 19L", category: "sembako", quantity: 200, unit: "galon", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "blueband-cup-250", product_name: "Blue Band Margarine Cup 250g", category: "sembako", quantity: 220, unit: "cup", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "bango-520", product_name: "Bango Kecap Manis Botol 520ml", category: "bumbu", quantity: 240, unit: "botol", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "royco-sapi-230", product_name: "Royco Bumbu Kaldu Sapi Ziplock 230g", category: "bumbu", quantity: 280, unit: "pouch", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "totole-jamur-200", product_name: "Totole Kaldu Rasa Jamur Granule 200g", category: "bumbu", quantity: 190, unit: "pouch", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "racik-ayam-goreng", product_name: "Indofood Bumbu Racik Ayam Goreng", category: "bumbu", quantity: 500, unit: "sachet", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "kentang-astro", product_name: "Kentang Segar Astro Farm 1kg", category: "sayuran", quantity: 180, unit: "kg", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "telur-astro-1kg", product_name: "Telur Ayam Negeri Segar Astro Farm 1kg", category: "protein", quantity: 220, unit: "kg", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "indomie-cabe-ijo", product_name: "Indomie Goreng Cabe Ijo (Isi 5 Pcs)", category: "kelontong", quantity: 380, unit: "paket", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "indomie-ayam-bawang", product_name: "Indomie Kuah Ayam Bawang (Isi 5 Pcs)", category: "kelontong", quantity: 400, unit: "paket", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "sunlight-nipis-750", product_name: "Sunlight Jeruk Nipis Refill 750ml", category: "kelontong", quantity: 300, unit: "pouch", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "bundle-rinso-molto-1500", product_name: "Bundle 2 Rinso Molto Cair 1500g", category: "kelontong", quantity: 150, unit: "paket", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "wipol-cemara-780", product_name: "Wipol Karbol Wangi Cemara 780ml", category: "kelontong", quantity: 210, unit: "pouch", status: "active", updated_date: now(), created_date: daysAgo(2) },
    { id: uid("ws"), product_id: "tissue-nice-bogo", product_name: "Buy 1 Get 1 Nice Living Facial Tissue Soft Pack", category: "perawatan diri", quantity: 250, unit: "paket", status: "active", updated_date: now(), created_date: daysAgo(2) },
  ],
  Order: [
    {
      id: uid("order"),
      order_number: "ORD-KKMP-2026-0001",
      mitra_id: "mitra@demo.local",
      mitra_name: "Pos Cabang KKMP Sukmajaya",
      supplier_name: "Gapoktan Sawangan Mandiri",
      supplier_id: "supplier@demo.local",
      delivery_area: "Kecamatan Sukmajaya, Kota Depok",
      items: [
        { product_id: "kentang-astro", product_name: "Kentang Segar Astro Farm 1kg", quantity: 20, unit: "kg", price: 18500 },
        { product_id: "sania-pouch-2l", product_name: "Sania Minyak Goreng Pouch 2L", quantity: 30, unit: "pouch", price: 37000 },
      ],
      total: 1480000,
      delivery_fee: 12000,
      payment_method: "Transfer Bank",
      status: "delivered",
      tracking: [
        { status: "Menunggu Konfirmasi", at: daysAgo(3), note: "Pesanan dibuat" },
        { status: "Diproses", at: daysAgo(2), note: "Supplier menyiapkan barang" },
        { status: "Dikirim", at: daysAgo(1), note: "Barang dalam perjalanan" },
        { status: "Selesai", at: daysAgo(0), note: "Pesanan diterima" },
      ],
      driver: "Pak Rudi (Armada KKMP)",
      created_date: daysAgo(3),
    },
    {
      id: uid("order"),
      order_number: "ORD-KKMP-2026-0002",
      mitra_id: "mitra@demo.local",
      mitra_name: "Pos Cabang KKMP Sukmajaya",
      supplier_name: "PT Berkah Jaya Supplier",
      supplier_id: "supplier@demo.local",
      delivery_area: "Kecamatan Sukmajaya, Kota Depok",
      items: [
        { product_id: "indomie-cabe-ijo", product_name: "Indomie Goreng Cabe Ijo (Isi 5 Pcs)", quantity: 25, unit: "paket", price: 16500 },
        { product_id: "telur-astro-1kg", product_name: "Telur Ayam Negeri Segar Astro Farm 1kg", quantity: 20, unit: "kg", price: 29500 },
      ],
      total: 1002500,
      delivery_fee: 12000,
      payment_method: "QRIS",
      status: "shipping",
      tracking: [
        { status: "Menunggu Konfirmasi", at: daysAgo(2), note: "Pesanan dibuat" },
        { status: "Diproses", at: daysAgo(1), note: "Supplier menyiapkan barang" },
        { status: "Dikirim", at: daysAgo(0), note: "Barang dalam perjalanan" },
      ],
      driver: "Pak Joko (Armada KKMP)",
      created_date: daysAgo(2),
    },
    {
      id: uid("order"),
      order_number: "ORD-KKMP-2026-0003",
      mitra_id: "mitra@demo.local",
      mitra_name: "Pos Cabang KKMP Sukmajaya",
      supplier_name: "UD Shafira Jaya Abadi",
      supplier_id: "supplier@demo.local",
      delivery_area: "Kecamatan Sukmajaya, Kota Depok",
      items: [
        { product_id: "bango-520", product_name: "Bango Kecap Manis Botol 520ml", quantity: 15, unit: "botol", price: 24500 },
        { product_id: "sunlight-nipis-750", product_name: "Sunlight Jeruk Nipis Refill 750ml", quantity: 20, unit: "pouch", price: 15000 },
      ],
      total: 667500,
      delivery_fee: 12000,
      payment_method: "COD",
      status: "pending",
      tracking: [
        { status: "Menunggu Konfirmasi", at: daysAgo(0), note: "Pesanan dibuat" },
      ],
      driver: "",
      created_date: daysAgo(0),
    },
  ],
  PurchaseOrder: [
    { id: uid("po"), po_number: "PO-KKMP-2026-0001", mitra_email: "mitra@demo.local", mitra_name: "Pos Cabang KKMP Sukmajaya", supplier_email: "supplier@demo.local", supplier_name: "Gapoktan Sawangan Mandiri", items: [{ product_id: "kentang-astro", product_name: "Kentang Segar Astro Farm 1kg", quantity: 20, unit: "kg" }], total: 370000, status: "diproses", has_supplier: true, created_date: daysAgo(1) },
    { id: uid("po"), po_number: "PO-KKMP-2026-0002", mitra_email: "mitra@demo.local", mitra_name: "Pos Cabang KKMP Sukmajaya", supplier_email: "supplier@demo.local", supplier_name: "PT Berkah Jaya Supplier", items: [{ product_id: "telur-astro-1kg", product_name: "Telur Ayam Negeri Segar Astro Farm 1kg", quantity: 30, unit: "kg" }], total: 885000, status: "menunggu", has_supplier: true, created_date: daysAgo(1) },

  ],
  Transaction: [
    {
      id: uid("tx"),
      user_email: "mitra@demo.local",
      mitra_id: "mitra@demo.local",
      transaction_number: "TRX-20260801-0001",
      payment_status: "paid",
      delivery_status: "delivered",
      payment_method: "Transfer Bank",
      items: [
        { product_id: "kentang", product_name: "Kentang Granola", supplier_name: "Gapoktan Sawangan Mandiri", quantity: 20, unit: "kg", subtotal: 280000 },
        { product_id: "telur", product_name: "Telur Ayam Negeri", supplier_name: "Gapoktan Sawangan Mandiri", quantity: 10, unit: "kg", subtotal: 270000 },
      ],
      subtotal: 550000,
      service_fee: 16500,
      delivery_fee: 15000,
      total: 581500,
      delivery_address: "Jl. Ridwan Rais No. 14, Beji, Kota Depok",
      amount: 1055000,
      method: "Transfer Bank",
      status: "success",
      created_date: daysAgo(3),
    },
    {
      id: uid("tx"),
      user_email: "mitra@demo.local",
      mitra_id: "mitra@demo.local",
      transaction_number: "TRX-20260802-0002",
      payment_status: "paid",
      delivery_status: "shipping",
      payment_method: "QRIS",
      items: [
        { product_id: "ayam", product_name: "Ayam Potong", supplier_name: "Gapoktan Sawangan Mandiri", quantity: 30, unit: "kg", subtotal: 1050000 },
        { product_id: "beras", product_name: "Beras Premium Setra Ramos", supplier_name: "Gapoktan Sawangan Mandiri", quantity: 10, unit: "kg", subtotal: 155000 },
      ],
      subtotal: 1205000,
      service_fee: 36150,
      delivery_fee: 15000,
      total: 1256150,
      delivery_address: "Jl. Kejayaan No. 12, Sukmajaya, Kota Depok",
      amount: 1200000,
      method: "QRIS",
      status: "success",
      created_date: daysAgo(2),
    },
    {
      id: uid("tx"),
      user_email: "adhiramaharani@gmail.com",
      mitra_id: "adhiramaharani@gmail.com",
      transaction_number: "TRX-20260803-0003",
      payment_status: "paid",
      delivery_status: "delivered",
      payment_method: "COD",
      items: [
        { product_id: "bayam", product_name: "Bayam Hijau", supplier_name: "Toko Tani Sukmajaya Depok", quantity: 2, unit: "ikat", subtotal: 10000 },
        { product_id: "telur", product_name: "Telur Ayam Negeri", supplier_name: "Toko Tani Sukmajaya Depok", quantity: 1, unit: "kg", subtotal: 27000 },
      ],
      subtotal: 37000,
      service_fee: 1110,
      delivery_fee: 12000,
      total: 50110,
      delivery_address: "Jl. Merdeka No. 12, Abadijaya, Sukmajaya, Kota Depok",
      amount: 41000,
      method: "COD",
      status: "success",
      created_date: daysAgo(1),
    },
  ],
  WeeklyNeeds: [
    { id: uid("wn"), pos_id: "mitra@demo.local", pos_name: "Pos Cabang KKMP Sukmajaya", sppg_id: "mitra@demo.local", sppg_name: "Pos Cabang KKMP Sukmajaya", product_id: "kentang", product_name: "Kentang Granola", quantity: 100, unit: "kg", week_label: "Minggu Ini", status: "open", has_supplier: false, created_date: daysAgo(1) },
    { id: uid("wn"), pos_id: "mitra@demo.local", pos_name: "Pos Cabang KKMP Sukmajaya", sppg_id: "mitra@demo.local", sppg_name: "Pos Cabang KKMP Sukmajaya", product_id: "telur", product_name: "Telur Ayam Negeri", quantity: 60, unit: "kg", week_label: "Minggu Ini", status: "open", has_supplier: false, created_date: daysAgo(1) },
  ],
  StockAlert: [
    { id: uid("sa"), product_id: "cabai-merah", product_name: "Cabai Merah Keriting", message: "Stok Cabai Merah Keriting menipis (12 kg)", level: "warning", status: "active", week_label: "Minggu Ini", created_date: daysAgo(0) },
    { id: uid("sa"), product_id: "telur", product_name: "Telur Ayam Negeri", message: "Stok Telur Ayam Negeri mulai rendah", level: "info", status: "active", week_label: "Minggu Ini", created_date: daysAgo(0) },
  ],
  Notification: [
    { id: uid("notif"), title: "Pesanan Baru Masuk", message: "Ada pesanan baru dari Pos Cabang KKMP Sukmajaya", type: "order", read: false, created_date: daysAgo(0) },
    { id: uid("notif"), title: "Stok Menipis", message: "Stok Cabai Merah Keriting menipis", type: "stock", read: false, created_date: daysAgo(0) },
  ],
  ChatMessage: [
    { id: uid("chat"), channel: "admin-mitra", from: "mitra@demo.local", from_name: "Pos Cabang KKMP Sukmajaya", text: "Selamat pagi, ada update ketersediaan beras?", created_date: daysAgo(1) },
    { id: uid("chat"), channel: "admin-supplier", from: "supplier@demo.local", from_name: "CV Binar Kalasenja", text: "Pengiriman beras sudah kami proses.", created_date: daysAgo(1) },
    { id: uid("chat"), channel: "admin-logistik", from: "logistik@demo.local", from_name: "Tim Logistik", text: "Armada siap berangkat ke Sukmajaya.", created_date: daysAgo(1) },
  ],
  SupplierRating: [
    { id: uid("sr"), pos_id: "mitra@demo.local", pos_name: "Pos Cabang KKMP Sukmajaya", sppg_id: "mitra@demo.local", sppg_name: "Pos Cabang KKMP Sukmajaya", supplier_name: "CV Binar Kalasenja", stars: 5, comment: "Pengiriman cepat dan barang berkualitas.", created_date: daysAgo(1) },
    { id: uid("sr"), pos_id: "mitra@demo.local", pos_name: "Pos Cabang KKMP Sukmajaya", sppg_id: "mitra@demo.local", sppg_name: "Pos Cabang KKMP Sukmajaya", supplier_name: "PT Berkah Jaya Supplier", stars: 4, comment: "Baik, tapi ada sedikit keterlambatan.", created_date: daysAgo(2) },
  ],
  DriverRating: [
    { id: uid("dr"), mitra_id: "mitra@demo.local", driver_name: "Pak Rudi", stars: 5, comment: "Tepat waktu dan ramah.", created_date: daysAgo(1) },
  ],
  ShoppingHistory: [
    { id: uid("sh"), user_email: "mitra@demo.local", items: [{ product_id: "kentang", product_name: "Kentang Granola", quantity: 20 }], total: 280000, created_date: daysAgo(3) },
  ],
  JobOpening: [
    {
      id: uid("job"),
      title: "Petugas Gudang — Pos Cabang Beji",
      category: "mitra",
      owner_role: "mitra",
      owner_email: "mitra@demo.local",
      location: "Pos Cabang Beji, Depok",
      salary: "Rp 2.150.000 / bulan",
      quota: 5,
      status: "open",
      description: "Membantu penyiapan dan pengepakan paket sembako untuk anggota koperasi sesuai standar mutu KKMP Depok.",
      requirements: "Sehat & rajin • Siap bekerja pagi • Mampu bekerja tim",
      created_date: daysAgo(1),
    },
    {
      id: uid("job"),
      title: "Pengemudi / Kurir Logistik KKMP",
      category: "logistik",
      owner_role: "logistik",
      owner_email: "logistik@demo.local",
      location: "Gudang Induk Sukmajaya, Depok",
      salary: "Rp 2.500.000 / bulan",
      quota: 3,
      status: "open",
      description: "Mengantar komoditas pangan dari Gudang Induk ke 8 Pos Cabang kelurahan sesuai jadwal. Menjaga ketepatan waktu dan kelengkapan muatan.",
      requirements: "Memiliki SIM C / SIM A, menguasai rute Kota Depok, bertanggung jawab",
      created_date: daysAgo(2),
    },
    {
      id: uid("job"),
      title: "Helper Gudang / Warehouse Induk",
      category: "lainnya",
      owner_role: "mitra",
      owner_email: "mitra@demo.local",
      location: "Gudang Induk Sukmajaya, Depok",
      salary: "Rp 2.000.000 / bulan",
      quota: 4,
      status: "open",
      description: "Membantu penataan stok, bongkar-muat, dan pengecekan kualitas bahan pangan yang masuk dan keluar gudang komoditas KKMP.",
      requirements: "Jujur, teliti, mampu bekerja sama dalam tim",
      created_date: daysAgo(3),
    },
    {
      id: uid("job"),
      title: "Staf Sortir & Packing — Pos Sukmajaya",
      category: "mitra",
      owner_role: "mitra",
      owner_email: "mitra@demo.local",
      location: "Pos Cabang Sukmajaya, Depok",
      salary: "Rp 2.200.000 / bulan",
      quota: 3,
      status: "open",
      description: "Membantu penyiapan paket sembako dan pemenuhan pesanan anggota koperasi dengan cermat dan higienis.",
      requirements: "Pengalaman penanganan barang minimal 1 tahun • Higienis • Jujur",
      created_date: daysAgo(0),
    },
    {
      id: uid("job"),
      title: "Pengemas Paket Sembako",
      category: "mitra",
      owner_role: "mitra",
      owner_email: "mitra@demo.local",
      location: "Pos Cabang Sawangan, Depok",
      salary: "Rp 1.950.000 / bulan",
      quota: 6,
      status: "open",
      description: "Menjalankan pengemasan paket sembako anggota per sak/paket, pemeriksaan label kemasan, dan kebersihan area simpan.",
      requirements: "Teliti dan higienis • Siap kerja shift",
      created_date: daysAgo(1),
    },
    {
      id: uid("job"),
      title: "Petugas Penerimaan Bahan & Opname",
      category: "mitra",
      owner_role: "mitra",
      owner_email: "mitra@demo.local",
      location: "Pos Cabang Sukmajaya, Depok",
      salary: "Rp 2.100.000 / bulan",
      quota: 2,
      status: "closed",
      description: "Menerima, menimbang, dan mencatat komoditas pangan masuk dari supplier sesuai purchase order.",
      requirements: "Teliti • Mampu hitung dasar",
      created_date: daysAgo(4),
    },
    {
      id: uid("job"),
      title: "Koordinator Distribusi Logistik",
      category: "logistik",
      owner_role: "logistik",
      owner_email: "logistik@demo.local",
      location: "Sentra Logistik Depok, Sukmajaya",
      salary: "Rp 2.800.000 / bulan",
      quota: 1,
      status: "open",
      description: "Mengatur jadwal pengiriman, mengawasi armada, memastikan komoditas sampai ke pos cabang tepat waktu.",
      requirements: "Pengalaman koordinasi logistik • Menguasai jadwal & rute Depok",
      created_date: daysAgo(0),
    },
    {
      id: uid("job"),
      title: "Petugas Muat-Bongkar Barang",
      category: "logistik",
      owner_role: "logistik",
      owner_email: "logistik@demo.local",
      location: "Gudang Induk & 8 Pos Cabang Depok",
      salary: "Rp 1.900.000 / bulan",
      quota: 4,
      status: "open",
      description: "Membantu bongkar-muat komoditas pangan, penataan area gudang, dan pengecekan jumlah harian.",
      requirements: "Fisik kuat • Disiplin jadwal",
      created_date: daysAgo(3),
    },
    {
      id: uid("job"),
      title: "Pengecekan Mutu Komoditas (QC)",
      category: "lainnya",
      owner_role: "logistik",
      owner_email: "logistik@demo.local",
      location: "QC Center Gudang Sukmajaya, Depok",
      salary: "Rp 2.300.000 / bulan",
      quota: 2,
      status: "open",
      description: "Memeriksa kualitas, kesegaran, dan kemasan beras, telur, dan minyak goreng sebelum didistribusikan ke pos cabang.",
      requirements: "Teliti • Siap kerja lapangan",
      created_date: daysAgo(1),
    },
    {
      id: uid("job"),
      title: "Staf Administrasi Koperasi",
      category: "lainnya",
      owner_role: "mitra",
      owner_email: "mitra@demo.local",
      location: "Kantor Pengurus Induk Sukmajaya, Depok",
      salary: "Rp 2.250.000 / bulan",
      quota: 2,
      status: "open",
      description: "Mengelola dokumen pencatatan stok, laporan harian penerimaan/pengeluaran barang, dan koordinasi anggota koperasi.",
      requirements: "Menguasai Ms Office / Google Sheets • Rapi & teliti",
      created_date: daysAgo(2),
    },
    {
      id: uid("job"),
      title: "Kepala Gudang Pos Cabang — Beji Depok",
      category: "mitra",
      owner_role: "mitra",
      owner_email: "mitra@demo.local",
      location: "Pos Cabang Beji, Depok",
      salary: "Rp 3.000.000 / bulan",
      quota: 1,
      status: "open",
      description: "Memimpin tim pos cabang, memastikan stok sembako aman, melayani anggota koperasi, dan rekonsiliasi kas harian.",
      requirements: "Pengalaman supervisi gudang/toko minimal 2 tahun • Kepemimpinan baik",
      created_date: daysAgo(1),
    },
    {
      id: uid("job"),
      title: "Pengawas Inventori Komoditas",
      category: "mitra",
      owner_role: "mitra",
      owner_email: "mitra@demo.local",
      location: "Gudang Induk Sukmajaya, Depok",
      salary: "Rp 2.500.000 / bulan",
      quota: 2,
      status: "open",
      description: "Memantau sirkulasi keluar masuk bahan pokok sembako dan warung kelontong agar stok selalu terjaga.",
      requirements: "Teliti & menyukai data administrasi stok",
      created_date: daysAgo(2),
    },
    {
      id: uid("job"),
      title: "Dispatcher Armada Pickup",
      category: "logistik",
      owner_role: "logistik",
      owner_email: "logistik@demo.local",
      location: "Sentra Logistik Depok, Sukmajaya",
      salary: "Rp 2.400.000 / bulan",
      quota: 2,
      status: "open",
      description: "Menyusun dan memantau jadwal armada pickup pengiriman harian menuju 8 pos cabang kelurahan.",
      requirements: "Jago koordinasi • Terbiasa dengan jadwal pengiriman",
      created_date: daysAgo(1),
    },
    {
      id: uid("job"),
      title: "Supir Pickup Distribusi Cabang",
      category: "logistik",
      owner_role: "logistik",
      owner_email: "logistik@demo.local",
      location: "Gudang Induk Sukmajaya, Depok",
      salary: "Rp 2.600.000 / bulan",
      quota: 4,
      status: "open",
      description: "Mengemudikan armada pickup distribusi bahan pangan ke 8 Pos Cabang se-Kota Depok serta menjaga keselamatan muatan.",
      requirements: "SIM A / B1 • Pengalaman armada minimal 1 tahun",
      created_date: daysAgo(3),
    },
    {
      id: uid("job"),
      title: "Security Gudang Induk",
      category: "lainnya",
      owner_role: "logistik",
      owner_email: "logistik@demo.local",
      location: "Gudang Induk Sukmajaya, Depok",
      salary: "Rp 2.000.000 / bulan",
      quota: 2,
      status: "open",
      description: "Menjaga keamanan gudang induk, mengawasi arus keluar-masuk kendaraan komoditas, dan patroli lingkungan.",
      requirements: "Sehat & disiplin • Siap jadwal shift",
      created_date: daysAgo(1),
    },
    {
      id: uid("job"),
      title: "Petugas Kebersihan & Perawatan Pos",
      category: "mitra",
      owner_role: "mitra",
      owner_email: "mitra@demo.local",
      location: "Pos Cabang Sawangan, Depok",
      salary: "Rp 1.800.000 / bulan",
      quota: 5,
      status: "closed",
      description: "Membersihkan area etalase dan gudang penyimpanan komoditas sembako pos cabang agar selalu bersih dan rapi.",
      requirements: "Rajin & higienis • Jujur",
      created_date: daysAgo(5),
    },
  ],
  Notification: [
    {
      id: uid("ntf"),
      type: "job_application",
      title: "Ada Pelamar Baru",
      message: "Siti Rahmawati melamar posisi \"Staf Sortir & Packing — Pos Sukmajaya\".",
      target_roles: ["mitra"],
      read_by: [],
      created_date: daysAgo(1),
    },
    {
      id: uid("ntf"),
      type: "job_application",
      title: "Ada Pelamar Baru",
      message: "Dedi Kurniawan melamar posisi \"Pengemudi / Kurir Logistik KKMP\".",
      target_roles: ["logistik"],
      read_by: [],
      created_date: hoursAgo(3),
    },
    {
      id: uid("ntf"),
      type: "stock_alert",
      title: "Stok Beras Menipis",
      message: "Stok beras di bawah ambang batas. Segera lakukan penambahan.",
      target_roles: ["mitra", "admin"],
      read_by: [],
      created_date: hoursAgo(5),
    },
    {
      id: uid("ntf"),
      type: "new_order",
      title: "Pesanan Baru Masuk",
      message: "Mitra Pos Cabang Beji mengirimkan pesanan komoditas pangan baru.",
      target_roles: ["supplier"],
      read_by: [],
      created_date: hoursAgo(2),
    },
    {
      id: uid("ntf"),
      type: "order_update",
      title: "Pengiriman Sedang Berjalan",
      message: "Ada pengiriman yang sedang menuju Pos Cabang tujuan. Pantau di menu logistik.",
      target_roles: ["logistik"],
      read_by: [],
      created_date: hoursAgo(1),
    },
    {
      id: uid("ntf"),
      type: "complaint",
      title: "Pengaduan Baru",
      message: "Warga melaporkan permintaan restock barang di Pos Sukmajaya.",
      target_roles: ["admin", "mitra"],
      read_by: [],
      created_date: hoursAgo(6),
    },
  ],
};

export function ensureSeed() {
  if (typeof window === "undefined") return;
  try {
    // Purge seluruh kunci legacy yang mengandung MBG / SPPG
    const legacyKeys = [
      "kkmp_depok_seed_v1", "kkmp_depok_seed_v2", "kkmp_depok_seed_v3", "kkmp_depok_seed_v4",
      "kkmp_sukmajaya_seed_v5_clean", "logistik_notifs"
    ];

    legacyKeys.forEach((k) => localStorage.removeItem(k));

    // Hapus semua key legacy smb_ dan cache order lama
    try {
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && (k.startsWith("smb_") || k.includes("sppg") || k.includes("mbg"))) {
          localStorage.removeItem(k);
        }
      }
    } catch (err) {
      console.warn("Purge legacy localStorage:", err);
    }

    // Pastikan koleksi Product lokal selalu bersih dari produk dummy lama (ayam, unsplash, dsb)
    try {
      const prodRaw = localStorage.getItem("kkmp_collection_Product");
      if (prodRaw && (prodRaw.includes("unsplash.com") || prodRaw.includes('"id":"ayam"'))) {
        localStorage.setItem("kkmp_collection_Product", JSON.stringify(COLLECTIONS.Product));
      }
    } catch (e) {}

    if (localStorage.getItem(SEED_VERSION)) return;

    Object.entries(COLLECTIONS).forEach(([name, items]) => {
      localStorage.setItem(`kkmp_collection_${name}`, JSON.stringify(items));
    });
    localStorage.setItem(SEED_VERSION, "1");

  } catch (e) {
    console.error("Gagal seed data lokal:", e);
  }
}

export function resetSeed() {
  if (typeof window === "undefined") return;
  try {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k && (k.startsWith("kkmp_") || k.startsWith("smb_"))) {
        localStorage.removeItem(k);
      }
    }
  } catch (err) {
    console.warn("Reset seed error:", err);
  }
  localStorage.removeItem(SEED_VERSION);
  localStorage.removeItem("kkmp_session_user");
  localStorage.removeItem("kkmp_user");
  ensureSeed();
}
