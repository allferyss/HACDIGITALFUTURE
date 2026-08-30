import type { Metadata } from "next";
import { ArticleList } from "@/components/sections/artikel/article-list";

export const metadata: Metadata = {
  title: "Artikel",
  description: "Insight seputar website, SEO, branding, dan strategi digital dari tim HAC Digital Future.",
};

export default function ArtikelPage() {
  return (
    <div className="pt-32">
      <div className="container">
        <p className="eyebrow mb-3">Artikel</p>
        <h1 className="max-w-2xl font-display text-4xl font-medium text-white sm:text-5xl">
          Insight digital, strategi, dan kreatif.
        </h1>
      </div>
      <ArticleList />
    </div>
  );
}
