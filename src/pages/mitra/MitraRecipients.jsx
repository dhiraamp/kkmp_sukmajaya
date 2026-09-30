import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { School, Users, MapPin } from "lucide-react";

const initialData = [
  { id: 1, type: "anggota", name: "Komunitas Warga RT 02/05 Beji", address: "Jl. Ridwan Rais, Beji, Kota Depok", recipients: 240, posyandu: false },
  { id: 2, type: "anggota", name: "Kelompok Tani Perkotaan Kemiri Muka", address: "Jl. Margonda Raya No. 45, Beji", recipients: 180, posyandu: false },
  { id: 3, type: "titik_distribusi", name: "Pos Distribusi RW 03 Tanah Baru", address: "Jl. R. Sanim, Tanah Baru, Beji", recipients: 85, posyandu: true },
  { id: 4, type: "titik_distribusi", name: "Pos Distribusi RW 07 Kukusan", address: "Jl. KH. M. Usman, Kukusan, Beji", recipients: 95, posyandu: true },
  { id: 5, type: "anggota", name: "Koperasi Warga Sukmajaya Bersatu", address: "Jl. Tole Iskandar, Sukmajaya, Depok", recipients: 320, posyandu: false },
  { id: 6, type: "titik_distribusi", name: "Pos Layanan Sembako Pancoran Mas", address: "Jl. Raya Sawangan No. 12, Pancoran Mas", recipients: 110, posyandu: true },
];

export default function MitraRecipients() {
  const [data] = useState(initialData);
  const [filterType, setFilterType] = useState("all");

  const totalKomunitas = data.filter(d => d.type === "anggota").reduce((a, b) => a + b.recipients, 0);
  const totalTitik = data.filter(d => d.type === "titik_distribusi").reduce((a, b) => a + b.recipients, 0);
  const total = totalKomunitas + totalTitik;

  const filtered = data.filter(d => filterType === "all" || d.type === filterType);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Data Anggota & Titik Distribusi Wilayah</h2>
        <p className="text-muted-foreground">Data persebaran anggota terdaftar dan pos distribusi di wilayah kerja Pos KKMP Kota Depok</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-red-600 to-rose-700 text-white border-0">
          <CardContent className="p-5">
            <Users className="w-8 h-8 mb-2 opacity-80" />
            <p className="text-3xl font-bold">{total.toLocaleString("id-ID")}</p>
            <p className="text-red-100 text-sm mt-1">Total Anggota Terlayani</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0">
          <CardContent className="p-5">
            <School className="w-8 h-8 mb-2 opacity-80" />
            <p className="text-3xl font-bold">{totalKomunitas.toLocaleString("id-ID")}</p>
            <p className="text-blue-100 text-sm mt-1">Anggota Kelompok & Komunitas</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white border-0">
          <CardContent className="p-5">
            <Users className="w-8 h-8 mb-2 opacity-80" />
            <p className="text-3xl font-bold">{totalTitik.toLocaleString("id-ID")}</p>
            <p className="text-emerald-100 text-sm mt-1">Warga di Pos Distribusi</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-2">
        {["all", "anggota", "titik_distribusi"].map(t => (
          <button key={t} onClick={() => setFilterType(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${filterType === t ? "bg-orange-600 text-white" : "bg-muted hover:bg-muted/80"}`}>
            {t === "all" ? "Semua" : t === "anggota" ? "Kelompok Anggota" : "Pos Distribusi"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className={item.type === "anggota" ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"}>
                      {item.type === "anggota" ? "Komunitas Anggota" : "Pos Distribusi"}
                    </Badge>
                  </div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" /> {item.address}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-600">{item.recipients}</p>
                  <p className="text-xs text-muted-foreground">anggota</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t">
                <p className="text-xs text-muted-foreground">Tercatat aktif dalam jaringan distribusi Pos KKMP</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>


    </div>
  );
}