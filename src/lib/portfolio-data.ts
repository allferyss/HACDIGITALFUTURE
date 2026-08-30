export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export const portfolioItems: PortfolioItem[] = [
  { slug: "universitas-pamulang", title: "Universitas Pamulang — Portal Akademik & Event Kampus", category: "Website", image: "/images/portfolio/unpam.jpg", year: "2026" },
  { slug: "kopi-nako", title: "Kopi Nako — Landing Page Promo & Menu Digital", category: "Landing Page", image: "/images/portfolio/kopi-nako.jpg", year: "2026" },
  { slug: "toko-pilar-jaya", title: "Toko Pilar Jaya — Website Katalog & Kasir Digital", category: "Website & Sistem", image: "/images/portfolio/pilar-jaya.jpg", year: "2025" },
  { slug: "era-go-digital", title: "Era Go Digital — Company Profile & Campaign Branding", category: "Digital Marketing", image: "/images/portfolio/era-go-digital.jpg", year: "2025" },
  { slug: "saqeela", title: "Saqeela Fashion — Identitas Visual & E-Commerce Lookbook", category: "Desain & Katalog", image: "/images/portfolio/saqeela.jpg", year: "2025" },
  { slug: "davin-fotocopy", title: "Davin FotoCopy & Percetakan — Desain Promosi & Branding", category: "Kreatif & Branding", image: "/images/portfolio/davin-fotocopy.jpg", year: "2025" },
];

export const testimonials = [
  { name: "Bima Restu Imami", role: "Karyawan Swasta", quote: "Saya meminta jasa menambahkan jumlah followers Instagram dan hasilnya memuaskan!", rating: 5 },
  { name: "Dr. Budi Santoso", role: "Koordinator IT, Universitas Pamulang", quote: "Portal website event kampus yang dibangun sangat cepat, responsif, dan mudah diakses oleh ribuan mahasiswa tanpa hambatan.", rating: 5 },
  { name: "Muhaimin", role: "Pemilik, Toko Pilar Jaya", quote: "Sangat puas dengan jasa yang diberikan. Toko saya kini punya Website katalog produk yang rapi dan profesional. Pelanggan jadi jauh lebih mudah mengecek ketersediaan barang di toko.", rating: 5 },
  { name: "Rian Pratama", role: "Managing Director, Era Go Digital", quote: "Branding dan aset visual dari HAC Digital Future sangat berkelas, berhasil memperkuat kredibilitas kami di hadapan klien.", rating: 5 },
];
