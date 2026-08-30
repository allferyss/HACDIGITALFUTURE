import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioItems } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/common/heading";
import { StaggerGroup, StaggerItem } from "@/components/animations/fade-in";

export function Portfolio() {
  return (
    <section className="section-pad bg-navy-900/40">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Portofolio" title="Sebagian karya yang telah kami kerjakan." />
          <Link href="/portfolio" className="inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200">
            Lihat semua <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((p, i) => (
            <StaggerItem
              key={p.slug}
              className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-md">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 z-10 flex items-end p-6">
                  <div>
                    <span className="inline-block rounded-full bg-blue-500/20 px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider text-blue-300 backdrop-blur-md">
                      {p.category} · {p.year}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-medium text-white sm:text-xl drop-shadow-sm">
                      {p.title}
                    </h3>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
