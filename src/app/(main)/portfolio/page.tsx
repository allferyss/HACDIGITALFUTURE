import type { Metadata } from "next";
import Image from "next/image";
import { portfolioItems } from "@/lib/portfolio-data";
import { StaggerGroup, StaggerItem } from "@/components/animations/fade-in";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Lihat sebagian hasil kerja HAC Digital Future untuk klien bisnis, brand, dan personal.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-32">
      <div className="container">
        <p className="eyebrow mb-3">Portofolio</p>
        <h1 className="max-w-2xl font-display text-4xl font-medium text-white sm:text-5xl">
          Karya yang telah kami kerjakan bersama klien.
        </h1>
        <p className="mt-4 max-w-xl text-mist">
          Berikut beberapa proyek digital, website, desain, dan branding yang telah dipercayakan kepada HAC Digital Future.
        </p>
      </div>

      <div className="section-pad">
        <div className="container">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((p) => (
              <StaggerItem key={p.slug}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-md">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute inset-0 z-10 flex items-end p-6">
                    <div>
                      <span className="inline-block rounded-full bg-blue-500/20 px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider text-blue-300 backdrop-blur-md">
                        {p.category} · {p.year}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-medium text-white drop-shadow-sm">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </div>
  );
}
