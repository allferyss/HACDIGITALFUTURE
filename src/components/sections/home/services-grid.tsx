import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services-data";
import { SectionHeading } from "@/components/common/heading";
import { StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { Card } from "@/components/ui/card";

export function ServicesGrid() {
  return (
    <section className="section-pad bg-navy-900/40">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Semua Layanan" title="Satu agency untuk seluruh kebutuhan digital dan kreatif Anda." />
          <Link href="/layanan" className="inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200">
            Lihat semua <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 9).map((s) => {
            const Icon = (Icons as any)[s.icon] ?? Icons.Sparkle;
            return (
              <StaggerItem key={s.slug}>
                <Link href={`/layanan/${s.slug}`}>
                  <Card className="h-full hover:shadow-[0_0_40px_-10px_rgba(61,107,255,0.35)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-medium text-white">{s.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-mist">{s.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs text-blue-300 opacity-0 transition-opacity group-hover:opacity-100">
                      Selengkapnya <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
