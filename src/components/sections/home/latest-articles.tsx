import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/articles-data";
import { SectionHeading } from "@/components/common/heading";
import { StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { formatDate } from "@/lib/utils";

export function LatestArticles() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Artikel Terbaru" title="Insight seputar digital, teknologi, dan kreatif." />
          <Link href="/artikel" className="inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200">
            Semua artikel <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map((a) => (
            <StaggerItem key={a.slug}>
              <Link href={`/artikel/${a.slug}`} className="group block">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-navy-800" />
                <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-blue-300">
                  {a.category} · {formatDate(a.publishedAt)}
                </p>
                <h3 className="mt-2 font-display text-lg font-medium text-white group-hover:text-blue-300">
                  {a.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-mist">{a.excerpt}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
