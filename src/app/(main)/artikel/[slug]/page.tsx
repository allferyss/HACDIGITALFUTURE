import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/lib/articles-data";
import { siteConfig } from "@/config/site";
import { formatDate, readingTime } from "@/lib/utils";
import { FadeIn } from "@/components/animations/fade-in";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${siteConfig.url}/artikel/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${siteConfig.url}/artikel/${article.slug}`,
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Organization", name: siteConfig.name },
    datePublished: article.publishedAt,
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <div className="pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container mb-8 flex items-center gap-2 text-xs text-mist2">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <Link href="/artikel" className="hover:text-white">Artikel</Link>
        <span>/</span>
        <span className="text-mist">{article.title}</span>
      </div>

      <article className="container grid grid-cols-1 gap-12 lg:grid-cols-[1fr_260px]">
        <div>
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-widest text-blue-300">
              {article.category} · {formatDate(article.publishedAt)} · {readingTime(article.content.join(" "))}
            </p>
            <h1 className="mt-4 font-display text-3xl font-medium text-white sm:text-4xl">{article.title}</h1>
            <p className="mt-4 text-mist">{article.excerpt}</p>
          </FadeIn>

          <div className="mt-8 aspect-[16/9] rounded-2xl border border-white/10 bg-navy-800" />

          <div className="prose prose-invert mt-10 max-w-none">
            {article.content.map((p, i) => (
              <p key={i} className="mb-5 leading-relaxed text-mist">{p}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-6">
            {article.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist">#{t}</span>
            ))}
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-8">
            <div className="glass rounded-2xl p-5">
              <p className="eyebrow mb-3">Daftar Isi</p>
              <ul className="space-y-2 text-sm text-mist">
                <li>Pendahuluan</li>
                <li>Pembahasan Utama</li>
                <li>Kesimpulan</li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="eyebrow mb-3">Bagikan</p>
              <div className="flex gap-2">
                <a href="#" className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-mist hover:text-white">WhatsApp</a>
                <a href="#" className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-mist hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
        </aside>
      </article>

      {related.length > 0 && (
        <section className="section-pad">
          <div className="container">
            <p className="eyebrow mb-3">Artikel Terkait</p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((a) => (
                <Link key={a.slug} href={`/artikel/${a.slug}`} className="group block">
                  <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-navy-800" />
                  <h3 className="mt-3 font-display text-base font-medium text-white group-hover:text-blue-300">{a.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
