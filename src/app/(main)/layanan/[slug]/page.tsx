import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/services-data";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { ArcDivider } from "@/components/animations/arc-divider";
import { waLink } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `${siteConfig.url}/layanan/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.description,
      url: `${siteConfig.url}/layanan/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = (Icons as any)[service.icon] ?? Icons.Sparkle;
  const related = getRelatedServices(service);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    areaServed: "ID",
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: service.priceFrom,
      url: `${siteConfig.url}/layanan/${service.slug}`,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumb */}
      <div className="container mb-10 flex items-center gap-2 text-xs text-mist2">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <Link href="/layanan" className="hover:text-white">Layanan</Link>
        <span>/</span>
        <span className="text-mist">{service.title}</span>
      </div>

      {/* Hero */}
      <section className="container">
        <FadeIn className="max-w-3xl">
          <Badge>{service.category}</Badge>
          <div className="mt-5 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
              <Icon className="h-6 w-6" />
            </div>
            <h1 className="font-display text-3xl font-medium text-white sm:text-5xl">{service.title}</h1>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-mist">{service.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href={waLink(`Halo HAC Digital Future, saya tertarik dengan ${service.title}.`)} target="_blank" rel="noopener noreferrer">
                Pesan via WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <span className="font-mono text-sm text-blue-300">{service.priceLabel}</span>
          </div>
        </FadeIn>
      </section>

      <ArcDivider className="my-16" />

      {/* Benefits */}
      <section className="container grid grid-cols-1 gap-12 lg:grid-cols-2">
        <FadeIn>
          <p className="eyebrow mb-3">Manfaat</p>
          <h2 className="font-display text-2xl font-medium text-white">Apa yang Anda dapatkan</h2>
          <ul className="mt-6 space-y-3">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-mist">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" /> {b}
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="eyebrow mb-3">Yang Diserahkan</p>
          <h2 className="font-display text-2xl font-medium text-white">Deliverables</h2>
          <ul className="mt-6 space-y-3">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm text-mist">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" /> {d}
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      {/* Process */}
      <section className="section-pad">
        <div className="container">
          <p className="eyebrow mb-3">Proses Kerja</p>
          <h2 className="font-display text-2xl font-medium text-white">Bagaimana kami mengerjakannya</h2>
          <StaggerGroup className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <StaggerItem key={p.title}>
                <span className="font-mono text-xs text-blue-400">0{i + 1}</span>
                <h3 className="mt-2 font-display text-base font-medium text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{p.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-navy-900/40">
        <div className="container max-w-2xl">
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="font-display text-2xl font-medium text-white">Pertanyaan seputar {service.title}</h2>
          <Accordion type="single" collapsible className="mt-6">
            {service.faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{f.question}</AccordionTrigger>
                <AccordionContent>{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-pad">
          <div className="container">
            <p className="eyebrow mb-3">Rekomendasi Lainnya</p>
            <h2 className="font-display text-2xl font-medium text-white">Layanan terkait</h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/layanan/${r.slug}`}>
                  <Card className="h-full">
                    <h3 className="font-display text-base font-medium text-white">{r.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-mist">{r.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs text-blue-300">
                      Selengkapnya <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container pb-24">
        <FadeIn className="glass rounded-3xl px-8 py-14 text-center">
          <h2 className="font-display text-2xl font-medium text-white sm:text-3xl">
            Tertarik menggunakan {service.title.toLowerCase()}?
          </h2>
          <Button asChild size="lg" className="mt-6">
            <a href={waLink(`Halo HAC Digital Future, saya tertarik dengan ${service.title}.`)} target="_blank" rel="noopener noreferrer">
              Hubungi via WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </FadeIn>
      </section>
    </div>
  );
}
