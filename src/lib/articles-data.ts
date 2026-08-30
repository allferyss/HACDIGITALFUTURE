import type { Article } from "@/types/artikel";

export const articles: Article[] = [
  {
    slug: "tips-memilih-jasa-pembuatan-website",
    title: "7 Tips Memilih Jasa Pembuatan Website yang Tepat untuk Bisnis Anda",
    excerpt:
      "Jangan sampai salah pilih vendor. Berikut hal-hal penting yang perlu dicek sebelum menggunakan jasa pembuatan website.",
    content: [
      "Memilih jasa pembuatan website bukan sekadar soal harga murah. Ada beberapa faktor yang menentukan apakah website Anda akan benar-benar mendukung pertumbuhan bisnis atau justru menjadi beban di kemudian hari.",
      "Pertama, perhatikan portofolio dan teknologi yang digunakan. Website modern sebaiknya dibangun dengan teknologi yang cepat dan SEO friendly, bukan sekadar template yang berat.",
      "Kedua, pastikan ada dukungan purna jual seperti revisi, panduan penggunaan, dan bantuan teknis setelah website selesai dibuat.",
    ],
    category: "Website",
    tags: ["website", "bisnis", "tips"],
    coverImage: "/images/blog/website-tips.jpg",
    author: "Tim HAC Digital Future",
    publishedAt: "2026-06-01",
  },
  {
    slug: "pentingnya-seo-untuk-company-profile",
    title: "Kenapa SEO Penting untuk Website Company Profile?",
    excerpt: "Website yang bagus tanpa SEO ibarat toko megah di gang buntu. Berikut alasan SEO wajib sejak awal.",
    content: [
      "Banyak bisnis fokus pada tampilan website tanpa memikirkan bagaimana calon pelanggan menemukannya di Google.",
      "SEO yang baik dimulai dari fondasi teknis: kecepatan loading, struktur heading yang benar, dan metadata yang lengkap.",
      "Dengan fondasi SEO yang kuat sejak awal, website company profile Anda punya peluang lebih besar untuk ranking dan mendatangkan calon klien secara organik.",
    ],
    category: "SEO",
    tags: ["seo", "company profile"],
    coverImage: "/images/blog/seo-company-profile.jpg",
    author: "Tim HAC Digital Future",
    publishedAt: "2026-05-20",
  },
  {
    slug: "strategi-digital-marketing-umkm",
    title: "Strategi Digital Marketing Efektif untuk Meningkatkan Penjualan Brand",
    excerpt: "Langkah terarah membangun kehadiran online dan funnel penjualan yang mendatangkan konversi nyata.",
    content: [
      "Digital marketing bukan hanya tentang posting di sosial media, tapi membangun funnel yang mengarahkan audiens menjadi pelanggan setia.",
      "Mulai dari pembuatan landing page yang fokus konversi, konten visual yang konsisten, hingga optimasi iklan berbayar (Meta & TikTok Ads).",
      "Dengan evaluasi data performa secara berkala, strategi pemasaran dapat terus dioptimalkan untuk hasil ROI terbaik.",
    ],
    category: "Marketing",
    tags: ["marketing", "bisnis", "branding"],
    coverImage: "/images/blog/digital-marketing.jpg",
    author: "Tim HAC Digital Future",
    publishedAt: "2026-05-05",
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
