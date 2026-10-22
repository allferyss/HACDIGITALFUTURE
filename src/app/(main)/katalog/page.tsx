import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { KatalogClient } from "@/components/sections/katalog/katalog-client";

export const metadata: Metadata = {
  title: "Katalog Alat & Perlengkapan Kerja",
  description:
    "Beli alat listrik dan alat tukang berkualitas dengan harga terjangkau. Pesan langsung via WhatsApp dari HAC Digital Future.",
  alternates: { canonical: `${siteConfig.url}/katalog` },
  openGraph: {
    title: `Katalog Alat & Perlengkapan | ${siteConfig.name}`,
    description:
      "Alat listrik dan alat tukang berkualitas, harga transparan, pesan langsung via WhatsApp.",
    url: `${siteConfig.url}/katalog`,
  },
};

export default function KatalogPage() {
  return <KatalogClient />;
}
