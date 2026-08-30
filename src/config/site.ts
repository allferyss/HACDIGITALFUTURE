export const siteConfig = {
  name: "HAC Digital Future",
  shortName: "HAC",
  tagline: "Digital Agency untuk Bisnis dan Brand Masa Depan",
  description:
    "HAC Digital Future adalah digital agency premium yang membangun website, desain grafis, dan pertumbuhan digital untuk bisnis serta profesional di seluruh Indonesia.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hacdigitalfuture.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281323995747",
  whatsappDisplay: "0813-2399-5747",
  email: "halo@hacdigitalfuture.com",
  address: "Jakarta, Indonesia",
  socials: {
    instagram: "https://instagram.com/hacdigitalfuture",
    tiktok: "https://tiktok.com/@hacdigitalfuture",
    linkedin: "https://linkedin.com/company/hacdigitalfuture",
  },
  stats: [
    { label: "Website Diluncurkan", value: 250, suffix: "+" },
    { label: "Desain & Kreatif", value: 350, suffix: "+" },
    { label: "Klien Bisnis", value: 120, suffix: "+" },
    { label: "Tingkat Kepuasan", value: 99, suffix: "%" },
  ],
  process: [
    { step: "01", title: "Konsultasi", desc: "Diskusi kebutuhan, target, dan referensi lewat WhatsApp atau meeting online." },
    { step: "02", title: "Penawaran", desc: "Kami kirim rincian scope, timeline, dan harga yang transparan." },
    { step: "03", title: "Pengerjaan", desc: "Tim mulai bekerja dengan update progres berkala." },
    { step: "04", title: "Revisi", desc: "Anda review hasil dan kami sempurnakan sesuai masukan." },
    { step: "05", title: "Selesai", desc: "File final dikirim lengkap dengan dukungan purna jual." },
  ],
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Layanan", href: "/layanan", megaMenu: true },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
];
