import { AdminTable } from "@/components/ui/admin-table";
import { articles } from "@/lib/articles-data";
import { formatDate } from "@/lib/utils";

export default function AdminArtikelPage() {
  const rows = articles.map((a) => ({
    title: a.title,
    category: a.category,
    date: formatDate(a.publishedAt),
  }));

  return (
    <AdminTable
      title="Kelola Artikel"
      description="Tambah, ubah, atau hapus artikel blog tanpa mengubah kode aplikasi."
      addLabel="Tulis Artikel"
      columns={[
        { key: "title", label: "Judul" },
        { key: "category", label: "Kategori" },
        { key: "date", label: "Tanggal Terbit" },
      ]}
      rows={rows}
    />
  );
}
