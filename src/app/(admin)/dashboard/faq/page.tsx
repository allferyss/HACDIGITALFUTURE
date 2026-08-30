import { AdminTable } from "@/components/ui/admin-table";

const faqRows = [
  { question: "Bagaimana cara memesan layanan HAC Digital Future?", page: "Home" },
  { question: "Apakah bisa request desain sesuai referensi sendiri?", page: "Home" },
  { question: "Berapa lama waktu respons?", page: "Kontak" },
];

export default function AdminFaqPage() {
  return (
    <AdminTable
      title="Kelola FAQ"
      description="Tambah, ubah, atau hapus pertanyaan yang sering diajukan di berbagai halaman."
      addLabel="Tambah FAQ"
      columns={[
        { key: "question", label: "Pertanyaan" },
        { key: "page", label: "Ditampilkan di" },
      ]}
      rows={faqRows}
    />
  );
}
