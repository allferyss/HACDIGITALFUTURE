import { AdminTable } from "@/components/ui/admin-table";
import { services } from "@/lib/services-data";

export default function AdminLayananPage() {
  const rows = services.map((s) => ({
    title: s.title,
    category: s.category,
    price: s.priceLabel,
  }));

  return (
    <AdminTable
      title="Kelola Layanan"
      description="Tambah, ubah, atau hapus layanan tanpa mengubah kode aplikasi."
      addLabel="Tambah Layanan"
      columns={[
        { key: "title", label: "Nama Layanan" },
        { key: "category", label: "Kategori" },
        { key: "price", label: "Harga" },
      ]}
      rows={rows}
    />
  );
}
