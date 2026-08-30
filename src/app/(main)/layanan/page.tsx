import type { Metadata } from "next";
import { ServiceCatalog } from "@/components/sections/layanan/service-catalog";

export const metadata: Metadata = {
  title: "Semua Layanan",
  description: "Jelajahi seluruh layanan HAC Digital Future: website, desain grafis, digital marketing, dan solusi digital lainnya.",
};

export default function LayananPage() {
  return (
    <div className="pt-32">
      <div className="container">
        <p className="eyebrow mb-3">Layanan</p>
        <h1 className="max-w-2xl font-display text-4xl font-medium text-white sm:text-5xl">
          15+ layanan untuk mendukung bisnis dan brand modern Anda.
        </h1>
        <p className="mt-4 max-w-xl text-mist">
          Cari layanan yang Anda butuhkan, atau filter berdasarkan kategori di bawah ini.
        </p>
      </div>
      <ServiceCatalog />
    </div>
  );
}
