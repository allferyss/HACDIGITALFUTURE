import { AdminTable } from "@/components/ui/admin-table";
import { testimonials } from "@/lib/portfolio-data";

export default function AdminTestimonialPage() {
  const rows = testimonials.map((t) => ({
    name: t.name,
    role: t.role,
    rating: `${t.rating} / 5`,
  }));

  return (
    <AdminTable
      title="Kelola Testimoni"
      description="Tambah, ubah, atau hapus testimoni klien tanpa mengubah kode aplikasi."
      addLabel="Tambah Testimoni"
      columns={[
        { key: "name", label: "Nama" },
        { key: "role", label: "Jabatan / Bisnis" },
        { key: "rating", label: "Rating" },
      ]}
      rows={rows}
    />
  );
}
