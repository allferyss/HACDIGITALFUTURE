"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { Search, ArrowUpRight } from "lucide-react";
import { services, serviceCategories } from "@/lib/services-data";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/animations/fade-in";

export function ServiceCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("Semua");

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchCategory = category === "Semua" || s.category === category;
      const matchQuery = s.title.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [query, category]);

  return (
    <div className="section-pad">
      <div className="container">
        <div className="glass sticky top-24 z-10 mb-10 flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-full border border-slate-200/80 px-4 py-2.5 dark:border-white/10">
            <Search className="h-4 w-4 text-mist" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari layanan..."
              className="w-full bg-transparent text-sm text-ink placeholder:text-mist2 focus:outline-none dark:text-white"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["Semua", ...serviceCategories].map((cat) => (
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
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((s) => {
            const Icon = (Icons as any)[s.icon] ?? Icons.Sparkles;
            return (
              <StaggerItem key={s.slug}>
                <Link href={`/layanan/${s.slug}`} className="block h-full">
                  <Card className="h-full">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-medium text-ink dark:text-white">{s.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-mist">{s.tagline}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-mono text-xs font-medium text-blue-600 dark:text-blue-300">{s.priceLabel}</span>
                      <ArrowUpRight className="h-4 w-4 text-mist2 transition-colors group-hover:text-blue-400" />
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-mist">Tidak ada layanan yang cocok dengan pencarian Anda.</p>
        )}
      </div>
    </div>
  );
}
