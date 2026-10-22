"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Search, ShoppingCart, MessageCircle, X, Zap, Hammer, Package } from "lucide-react";
import { toolProducts, toolCategories, type ToolCategory, type ToolProduct } from "@/lib/katalog-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/common/heading";
import { FadeIn } from "@/components/animations/fade-in";
import { waLink } from "@/lib/utils";

type FilterType = "Semua" | ToolCategory;

const categoryIcons: Record<FilterType, React.ReactNode> = {
  Semua: <Package className="h-4 w-4" />,
  "Alat Listrik": <Zap className="h-4 w-4" />,
  "Alat Tukang": <Hammer className="h-4 w-4" />,
};

export function KatalogClient() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<ToolProduct[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let products = toolProducts;

    if (activeFilter !== "Semua") {
      products = products.filter((p) => p.category === activeFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      products = products.filter((p) => p.name.toLowerCase().includes(q));
    }

    return products;
  }, [activeFilter, searchQuery]);

  const addToCart = (product: ToolProduct) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const cartTotal = cart.reduce((sum, p) => sum + p.price, 0);

  const orderSingleViaWa = (product: ToolProduct) => {
    const msg = `Halo HAC Digital Future, saya mau pesan:\n\n🛒 *${product.name}*\n💰 Harga: ${product.priceLabel}\n\nApakah barang ready?`;
    window.open(waLink(msg), "_blank");
  };

  const orderAllViaWa = () => {
    if (cart.length === 0) return;

    const items = cart
      .map((p, i) => `${i + 1}. ${p.name} — ${p.priceLabel}`)
      .join("\n");

    const totalFormatted = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(cartTotal);

    const msg = `Halo HAC Digital Future, saya mau pesan beberapa alat:\n\n${items}\n\n💰 *Total: ${totalFormatted}*\n\nApakah semua barang ready?`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-hac-radial" />
        <div className="container relative">
          <FadeIn>
            <Badge className="mb-4">Katalog Produk</Badge>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Alat & Perlengkapan{" "}
              <span className="bg-hac-gradient bg-clip-text text-transparent">
                Kerja Berkualitas
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-mist">
              Peralatan listrik dan pertukangan pilihan, harga transparan dan terjangkau.
              Pesan langsung via WhatsApp, kami antar ke lokasi Anda.
            </p>
          </FadeIn>

          {/* Search & Filter Bar */}
          <FadeIn delay={0.15} className="mt-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Search */}
              <div className="relative max-w-md flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                <input
                  type="text"
                  placeholder="Cari alat... (misal: palu, solder, kikir)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 w-full rounded-full border border-white/10 bg-navy-800/60 pl-11 pr-4 text-sm text-white placeholder:text-mist/60 outline-none transition-all focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2">
                {(["Semua", ...toolCategories] as FilterType[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
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
            </div>

            {/* Results count */}
            <p className="mt-4 text-sm text-mist">
              Menampilkan <span className="font-medium text-white">{filteredProducts.length}</span>{" "}
              produk
              {activeFilter !== "Semua" && (
                <> dalam kategori <span className="text-blue-300">{activeFilter}</span></>
              )}
              {searchQuery && (
                <> untuk &ldquo;<span className="text-blue-300">{searchQuery}</span>&rdquo;</>
              )}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section className="pb-20">
        <div className="container">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                  >
                    <ProductCard
                      product={product}
                      onOrder={orderSingleViaWa}
                      onAddToCart={addToCart}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <Search className="mb-4 h-12 w-12 text-mist/40" />
                <p className="text-lg font-medium text-white">Produk tidak ditemukan</p>
                <p className="mt-2 text-sm text-mist">
                  Coba kata kunci lain atau ubah filter kategori.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Floating Cart Button ── */}
      {cart.length > 0 && (
        <motion.button
          initial={{ scale: 0, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0, y: 100 }}
          onClick={() => setCartOpen(true)}
          className="fixed bottom-24 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-hac-gradient text-white shadow-[0_0_30px_-5px_rgba(0,112,243,0.6)] transition-transform hover:scale-110"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold">
            {cart.length}
          </span>
        </motion.button>
      )}

      {/* ── Cart Drawer ── */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setCartOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-navy-900/95 backdrop-blur-xl"
            >
              {/* Cart Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="h-5 w-5 text-blue-400" />
                  <h2 className="font-display text-lg font-medium text-white">
                    Keranjang ({cart.length})
                  </h2>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="rounded-full p-2 text-mist transition-colors hover:bg-white/5 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <ShoppingCart className="mb-3 h-10 w-10 text-mist/30" />
                    <p className="text-mist">Keranjang masih kosong</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cart.map((item, i) => (
                      <motion.div
                        key={`${item.id}-${i}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex items-center gap-4 rounded-xl border border-white/5 bg-navy-800/50 p-3"
                      >
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white/5">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain p-1"
                            sizes="56px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="truncate text-sm font-medium text-white">{item.name}</p>
                          <p className="text-xs text-blue-300">{item.priceLabel}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(i)}
                          className="shrink-0 rounded-full p-1.5 text-mist/60 transition-colors hover:bg-red-500/10 hover:text-red-400"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="border-t border-white/10 px-6 py-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-mist">Total Estimasi</span>
                    <span className="font-display text-xl font-bold text-white">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(cartTotal)}
                    </span>
                  </div>
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="w-full"
                    onClick={orderAllViaWa}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Pesan Semua via WhatsApp
                  </Button>
                  <button
                    onClick={() => setCart([])}
                    className="w-full text-center text-xs text-mist/60 transition-colors hover:text-red-400"
                  >
                    Kosongkan keranjang
                  </button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Product Card ── */
function ProductCard({
  product,
  onOrder,
  onAddToCart,
}: {
  product: ToolProduct;
  onOrder: (p: ToolProduct) => void;
  onAddToCart: (p: ToolProduct) => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-800/60 transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_40px_-10px_rgba(61,107,255,0.25)]">
      {/* Category Badge */}
      <div className="absolute left-3 top-3 z-10">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md ${
            product.category === "Alat Listrik"
              ? "bg-yellow-500/15 text-yellow-300 border border-yellow-400/20"
              : "bg-emerald-500/15 text-emerald-300 border border-emerald-400/20"
          }`}
        >
          {product.category === "Alat Listrik" ? (
            <Zap className="h-3 w-3" />
          ) : (
            <Hammer className="h-3 w-3" />
          )}
          {product.category}
        </span>
      </div>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
        {imgError ? (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              {product.category === "Alat Listrik" ? (
                <Zap className="mx-auto h-12 w-12 text-yellow-400/30" />
              ) : (
                <Hammer className="mx-auto h-12 w-12 text-emerald-400/30" />
              )}
              <p className="mt-2 px-4 text-xs text-mist/50">{product.name}</p>
            </div>
          </div>
        ) : (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-sm font-medium text-white line-clamp-2 leading-snug">
          {product.name}
        </h3>
        <p className="mt-2 font-display text-lg font-bold text-blue-400">
          {product.priceLabel}
        </p>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onOrder(product)}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2.5 text-xs font-semibold text-white transition-all hover:brightness-110 hover:-translate-y-0.5"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Beli via WA
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center justify-center rounded-xl border border-white/10 px-3 py-2.5 text-mist transition-all hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300"
            title="Tambah ke keranjang"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
