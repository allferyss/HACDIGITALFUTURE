import { AdminTable } from "@/components/ui/admin-table";
import { portfolioItems } from "@/lib/portfolio-data";

export default function AdminPortfolioPage() {
  const rows = portfolioItems.map((p) => ({
    title: p.title,
    category: p.category,
    year: p.year,
  }));

  return (
    <AdminTable
      title="Kelola Portofolio"
      description="Tambah, ubah, atau hapus item portofolio tanpa mengubah kode aplikasi."
      addLabel="Tambah Portofolio"
      columns={[
        { key: "title", label: "Judul Proyek" },
        { key: "category", label: "Kategori" },
        { key: "year", label: "Tahun" },
      ]}
      rows={rows}
    />
  );
}
