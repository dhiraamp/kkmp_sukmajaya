import { z } from "zod";

/**
 * Validasi Skema Data & Type Safety Terpadu — KKMP Kota Depok
 * Menggunakan Zod v3 untuk menjamin integritas data transaksi, logistik, dan pasokan pangan KKMP.
 */

// 1. Skema Item Pesanan Bahan Pangan
export const orderItemSchema = z.object({
  product_id: z.string().min(1, "ID produk wajib diisi"),
  product_name: z.string().min(2, "Nama produk wajib diisi"),
  supplier_name: z.string().optional().default(""),
  price: z.number().min(0, "Harga produk tidak boleh negatif"),
  unit: z.string().min(1, "Satuan wajib diisi (kg, liter, ikat, dll.)"),
  quantity: z.number().min(1, "Kuantitas minimal 1"),
});

// 2. Skema Pesanan Transaksi Lengkap (Order)
export const orderSchema = z.object({
  order_number: z.string().optional(),
  mitra_id: z.string().min(1, "ID Pos Cabang / Gerai wajib diisi"),
  mitra_name: z.string().min(2, "Nama Mitra / Pos Cabang wajib diisi"),
  supplier_id: z.string().optional(),
  delivery_area: z.string().min(2, "Area pengiriman di Kota Depok wajib ditentukan"),
  items: z.array(orderItemSchema).min(1, "Pesanan harus memuat minimal 1 item"),
  total_amount: z.number().min(0, "Total nilai transaksi tidak boleh negatif"),
  status: z
    .enum(["pending", "confirmed", "processing", "shipping", "delivered", "cancelled"])
    .default("pending"),
  payment_method: z.enum(["bank_transfer", "va", "tempo", "cash"]).default("bank_transfer"),
  notes: z.string().optional().default(""),
  created_date: z.string().optional(),
});

// 3. Skema Surat Jalan & Manifest Pengiriman Logistik KKMP
export const deliveryManifestSchema = z.object({
  doc_number: z.string().min(5, "Nomor surat jalan tidak valid"),
  origin_hub_id: z.string().min(1, "Gudang / Pos KKMP asal wajib ditentukan"),
  origin_hub_name: z.string().min(2, "Nama Gudang / Pos KKMP asal wajib diisi"),
  destination_school_id: z.string().min(1, "Titik tujuan distribusi wajib ditentukan"),
  destination_school_name: z.string().min(2, "Nama titik tujuan distribusi wajib diisi"),
  driver_name: z.string().min(2, "Nama supir/kurir pengantar wajib diisi"),
  vehicle_plate: z.string().regex(/^[A-Z]{1,2}\s?[0-9]{1,4}\s?[A-Z]{1,3}$/i, "Format plat nomor kendaraan tidak valid (contoh: B 1234 DEP)"),
  portions: z.number().int().min(1, "Jumlah paket komoditas minimal 1").default(1),
  box_count: z.number().int().min(1, "Jumlah boks/peti distribusi minimal 1"),
  food_menu: z.string().min(5, "Rincian paket komoditas pangan wajib diisi"),
  temperature_celsius: z
    .number()
    .min(0, "Suhu tidak boleh di bawah 0°C")
    .max(100, "Suhu tidak boleh melampaui 100°C"),
  departure_time: z.string().min(3, "Jam keberangkatan wajib diisi"),
  target_lunch_time: z.string().min(3, "Jadwal jam tiba wajib diisi"),
  haccp_verified: z.boolean().default(true),
});

// 4. Skema Formulasi Komoditas Pangan KKMP
export const nutritionItemSchema = z.object({
  commodity_id: z.string().min(1, "ID komoditas bahan wajib dipilih"),
  name: z.string().min(2, "Nama komoditas wajib ada"),
  grams: z.number().min(1, "Takaran kuantitas minimal 1").max(5000, "Takaran maksimal 5000"),
});

export const nutritionPlanSchema = z.object({
  menu_name: z.string().min(3, "Nama paket komoditas/sembako minimal 3 karakter"),
  target_group: z.enum(["paud", "sd_rendah", "sd_tinggi", "smp_sma", "ibu_hamil", "warga", "umum"]).default("umum"),
  ingredients: z.array(nutritionItemSchema).min(1, "Paket minimal harus memuat 1 jenis komoditas"),
  total_calories: z.number().optional().default(0),
  total_protein: z.number().optional().default(0),
  cost_per_portion: z.number().min(0, "Estimasi biaya tidak valid"),
});

// 5. Skema Profil Pos Cabang / Mitra KKMP Sukmajaya Kota Depok
export const posProfileSchema = z.object({
  code: z.string().min(3, "Kode Pos Cabang tidak valid"),
  name: z.string().min(3, "Nama Pos Cabang / Unit Usaha KKMP wajib diisi"),
  penanggung_jawab: z.string().min(2, "Nama penanggung jawab wajib diisi"),
  phone: z.string().min(9, "Nomor kontak minimal 9 digit"),
  address: z.string().min(5, "Alamat operasional pos cabang wajib diisi"),
  kecamatan: z.string().min(2, "Nama kecamatan wajib ditentukan"),
  kapasitas_porsi: z.number().int().min(1, "Kapasitas distribusi harian minimal 1").default(100),
  total_sekolah: z.number().int().min(0).default(0),
});

// Alias kompatibilitas ke belakang
export const sppgProfileSchema = posProfileSchema;

/**
 * Helper Validasi Data Aman (Safe Parse)
 * @param {z.ZodSchema} schema - Skema Zod
 * @param {unknown} data - Data yang hendak divalidasi
 * @returns {{ success: boolean, data?: any, errors?: string[] }}
 */
export function validateData(schema, data) {
  const result = schema.safeParse(data);
  if (result.success) {
    return {
      success: true,
      data: result.data,
      errors: [],
    };
  }

  // Format pesan error ramah pengguna dalam Bahasa Indonesia
  const formattedErrors = result.error.errors.map((err) => {
    const fieldPath = err.path.join(".");
    return fieldPath ? `[${fieldPath}] ${err.message}` : err.message;
  });

  return {
    success: false,
    data: null,
    errors: formattedErrors,
  };
}
