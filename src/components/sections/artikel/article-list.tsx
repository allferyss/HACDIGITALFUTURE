"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { articles } from "@/lib/articles-data";
import { formatDate, readingTime } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/animations/fade-in";

export function ArticleList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");
  const categories = ["Semua", ...Array.from(new Set(articles.map((a) => a.category)))];

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchCategory = category === "Semua" || a.category === category;
      const matchQuery = a.title.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [query, category]);

  return (
    <div className="section-pad">
      <div className="container">
        <div className="glass mb-10 flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-full border border-slate-200/80 px-4 py-2.5 dark:border-white/10">
            <Search className="h-4 w-4 text-mist" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari artikel..."
              className="w-full bg-transparent text-sm text-ink placeholder:text-mist2 focus:outline-none dark:text-white"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                  category === cat
                    ? "border-blue-500 bg-blue-500/15 text-blue-600 dark:border-blue-400/60 dark:bg-blue-500/20 dark:text-blue-300 font-semibold shadow-sm"
                    : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:text-mist dark:hover:border-white/20 dark:hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <StaggerGroup
          key={`${category}-${query}`}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {filtered.map((a) => (
            <StaggerItem key={a.slug}>
              <Link href={`/artikel/${a.slug}`} className="group block">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-navy-800" />
                <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-blue-500 dark:text-blue-300">
                  {a.category} · {formatDate(a.publishedAt)} · {readingTime(a.content.join(" "))}
                </p>
                <h3 className="mt-2 font-display text-lg font-medium text-ink transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300">
                  {a.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-mist">{a.excerpt}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {filtered.length === 0 && <p className="py-16 text-center text-mist">Artikel tidak ditemukan.</p>}
      </div>
    </div>
  );
}
