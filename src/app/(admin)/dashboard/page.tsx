import { Briefcase, FileText, MessageSquareQuote, Users } from "lucide-react";
import { services } from "@/lib/services-data";
import { articles } from "@/lib/articles-data";
import { testimonials } from "@/lib/portfolio-data";

const cards = [
  { label: "Total Layanan", value: services.length, icon: Briefcase },
  { label: "Total Artikel", value: articles.length, icon: FileText },
  { label: "Testimoni", value: testimonials.length, icon: MessageSquareQuote },
  { label: "Pesan Masuk", value: 0, icon: Users },
];

export default function DashboardOverviewPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-medium text-white">Overview</h1>
      <p className="mt-1 text-sm text-mist">Ringkasan konten dan aktivitas website Anda.</p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-2xl border border-white/10 bg-navy-800/60 p-6">
            <c.icon className="h-5 w-5 text-blue-400" />
            <p className="mt-4 font-display text-3xl font-medium text-white">{c.value}</p>
            <p className="mt-1 text-sm text-mist">{c.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-navy-800/60 p-6">
        <p className="text-sm text-mist">
          Dashboard ini adalah antarmuka contoh. Untuk produksi, hubungkan setiap tabel (Layanan,
          Artikel, Portofolio, Testimoni, FAQ, Pesan Kontak) ke database melalui Prisma agar admin
          dapat menambah/mengubah konten tanpa mengubah kode — lihat <code className="text-blue-300">prisma/schema.prisma</code> dan{" "}
          <code className="text-blue-300">README.md</code> bagian &ldquo;Menghubungkan Admin ke Database&rdquo;.
        </p>
      </div>
    </div>
  );
}
