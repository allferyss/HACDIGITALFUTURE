export type ToolCategory = "Alat Listrik" | "Alat Tukang";

export interface ToolProduct {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  category: ToolCategory;
  image: string;
}

export const toolProducts: ToolProduct[] = [
  // ──── Alat Listrik ────
  {
    id: "solder-60watt",
    name: "Solder 60watt",
    price: 45000,
    priceLabel: "Rp45.000",
    category: "Alat Listrik",
    image: "/images/katalog/listrik/solder-60watt.webp",
  },
  {
    id: "tang-listrik-set",
    name: "Tang Listrik Set",
    price: 153000,
    priceLabel: "Rp153.000",
    category: "Alat Listrik",
    image: "/images/katalog/listrik/tang-listrik-set.webp",
  },
  {
    id: "flug-solder",
    name: "Flug Solder",
    price: 12000,
    priceLabel: "Rp12.000",
    category: "Alat Listrik",
    image: "/images/katalog/listrik/flug-solder.webp",
  },
  {
    id: "solasi-nitto",
    name: "Solasi Nitto (High Quality)",
    price: 15000,
    priceLabel: "Rp15.000",
    category: "Alat Listrik",
    image: "/images/katalog/listrik/solasi-nitto.webp",
  },
  {
    id: "tespen",
    name: "Tespen (High Quality)",
    price: 13000,
    priceLabel: "Rp13.000",
    category: "Alat Listrik",
    image: "/images/katalog/listrik/tespen.webp",
  },
  {
    id: "multi-tester",
    name: "Multi Tester",
    price: 26000,
    priceLabel: "Rp26.000",
    category: "Alat Listrik",
    image: "/images/katalog/listrik/multi-tester.webp",
  },
  {
    id: "klem-kabel-beton",
    name: "Klem Kabel Beton",
    price: 10000,
    priceLabel: "Rp10.000",
    category: "Alat Listrik",
    image: "/images/katalog/listrik/klem-kabel-beton.webp",
  },
  {
    id: "klem-kabel-kayu",
    name: "Klem Kabel Kayu",
    price: 5000,
    priceLabel: "Rp5.000",
    category: "Alat Listrik",
    image: "/images/katalog/listrik/klem-kabel-kayu.webp",
  },
  {
    id: "charger-aki",
    name: "Charger Aki Motor/Low Voltage",
    price: 35000,
    priceLabel: "Rp35.000",
    category: "Alat Listrik",
    image: "/images/katalog/listrik/charger-aki.webp",
  },

  // ──── Alat Tukang ────
  {
    id: "palu-karet",
    name: "Palu Karet",
    price: 20000,
    priceLabel: "Rp20.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/palu-karet.webp",
  },
  {
    id: "palu-beton",
    name: "Palu Beton",
    price: 25000,
    priceLabel: "Rp25.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/palu-beton.webp",
  },
  {
    id: "palu-gagang-kayu-kecil",
    name: "Palu Gagang Kayu Kecil",
    price: 15000,
    priceLabel: "Rp15.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/palu-gagang-kayu-kecil.webp",
  },
  {
    id: "kunci-pipa",
    name: "Kunci Pipa",
    price: 45000,
    priceLabel: "Rp45.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/kunci-pipa.webp",
  },
  {
    id: "gunting-baja",
    name: "Gunting Baja",
    price: 61000,
    priceLabel: "Rp61.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/gunting-baja.webp",
  },
  {
    id: "obeng-pahat",
    name: "Obeng Pahat",
    price: 32000,
    priceLabel: "Rp32.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/obeng-pahat.webp",
  },
  {
    id: "tali-tambang-30m",
    name: "Tali Tambang 30m Besar",
    price: 52000,
    priceLabel: "Rp52.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/tali-tambang-30m.webp",
  },
  {
    id: "glue-gun-refill",
    name: "Glue Gun + Refill",
    price: 27000,
    priceLabel: "Rp27.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/glue-gun-refill.webp",
  },
  {
    id: "mata-bor-beton-set",
    name: "Mata Bor Beton Set",
    price: 45000,
    priceLabel: "Rp45.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/mata-bor-beton-set.webp",
  },
  {
    id: "mata-bor-kayu-set",
    name: "Mata Bor Kayu Set",
    price: 30000,
    priceLabel: "Rp30.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/mata-bor-kayu-set.webp",
  },
  {
    id: "mata-gerinda-besi",
    name: "Mata Gerinda Besi",
    price: 5000,
    priceLabel: "Rp5.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/mata-gerinda-besi.webp",
  },
  {
    id: "mata-gerinda-kayu",
    name: "Mata Gerinda Kayu",
    price: 11000,
    priceLabel: "Rp11.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/mata-gerinda-kayu.webp",
  },
  {
    id: "kikir",
    name: "Kikir",
    price: 10000,
    priceLabel: "Rp10.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/kikir.webp",
  },
  {
    id: "sendok-semen",
    name: "Sendok Semen",
    price: 10000,
    priceLabel: "Rp10.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/sendok-semen.webp",
  },
  {
    id: "silet-kaca",
    name: "Silet Kaca",
    price: 15000,
    priceLabel: "Rp15.000",
    category: "Alat Tukang",
    image: "/images/katalog/tukang/silet-kaca.webp",
  },
];

export const toolCategories: ToolCategory[] = ["Alat Listrik", "Alat Tukang"];

export function getToolsByCategory(category: ToolCategory) {
  return toolProducts.filter((t) => t.category === category);
}

export function formatRupiah(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
