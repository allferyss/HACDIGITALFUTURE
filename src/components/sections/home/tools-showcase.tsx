"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Zap, Hammer, Package, MessageCircle } from "lucide-react";
import { toolProducts, type ToolCategory, type ToolProduct } from "@/lib/katalog-data";
import { SectionHeading } from "@/components/common/heading";
import { FadeIn } from "@/components/animations/fade-in";
import { waLink } from "@/lib/utils";

type FilterType = "Semua" | ToolCategory;

const categoryIcons: Record<FilterType, React.ReactNode> = {
  Semua: <Package className="h-3.5 w-3.5" />,
  "Alat Listrik": <Zap className="h-3.5 w-3.5" />,
  "Alat Tukang": <Hammer className="h-3.5 w-3.5" />,
};

// Show 8 featured products on landing page
const featuredProducts = toolProducts.slice(0, 8);

export function ToolsShowcase() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("Semua");

  const filteredProducts =
    activeFilter === "Semua"
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === activeFilter);

  const orderViaWa = (product: ToolProduct) => {
    const msg = `Halo HAC Digital Future, saya mau pesan:\n\n🛒 *${product.name}*\n💰 Harga: ${product.priceLabel}\n\nApakah barang ready?`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <section className="section-pad">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Perlengkapan Kerja"
            title="Alat Listrik & Tukang Berkualitas, Harga Terjangkau."
            description="Peralatan kerja pilihan dengan harga transparan. Pesan langsung via WhatsApp."
          />
          <Link
            href="/katalog"
            className="inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200 transition-colors"
          >
            Lihat semua katalog <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <FadeIn delay={0.1} className="mt-8">
          <div className="flex gap-2">
            {(["Semua", "Alat Listrik", "Alat Tukang"] as FilterType[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-hac-gradient text-white shadow-[0_0_20px_-5px_rgba(0,112,243,0.5)]"
                    : "border border-white/10 text-mist hover:border-blue-400/40 hover:text-white"
                }`}
              >
                {categoryIcons[cat]}
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Product Grid */}
        <div className="mt-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
            >
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <ShowcaseCard product={product} onOrder={orderViaWa} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <FadeIn delay={0.2} className="mt-10 text-center">
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 rounded-full bg-hac-gradient px-7 py-3 text-sm font-medium text-white shadow-[0_0_30px_-5px_rgba(0,112,243,0.5)] transition-all hover:shadow-[0_0_40px_-5px_rgba(0,112,243,0.7)] hover:-translate-y-0.5"
          >
            Lihat Katalog Lengkap ({toolProducts.length} Produk)
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Showcase Card (compact version for homepage) ── */
function ShowcaseCard({
  product,
  onOrder,
}: {
  product: ToolProduct;
  onOrder: (p: ToolProduct) => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-800/60 transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_30px_-10px_rgba(61,107,255,0.2)]">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
        {imgError ? (
          <div className="flex h-full items-center justify-center">
            {product.category === "Alat Listrik" ? (
              <Zap className="h-10 w-10 text-yellow-400/20" />
            ) : (
              <Hammer className="h-10 w-10 text-emerald-400/20" />
            )}
          </div>
        ) : (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-xs font-medium text-white line-clamp-2 leading-snug sm:text-sm">
          {product.name}
        </h3>
        <p className="mt-1.5 font-display text-sm font-bold text-blue-400 sm:text-base">
          {product.priceLabel}
        </p>

        <button
          onClick={() => onOrder(product)}
          className="mt-3 flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2 text-[11px] font-semibold text-white transition-all hover:brightness-110 hover:-translate-y-0.5 sm:text-xs"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Beli via WA
        </button>
      </div>
    </div>
  );
}
