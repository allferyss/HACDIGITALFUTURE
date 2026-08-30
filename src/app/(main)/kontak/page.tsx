import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/animations/fade-in";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi HAC Digital Future untuk konsultasi gratis seputar website, desain grafis, dan kebutuhan digital lainnya.",
};

const contactFaqs = [
  { q: "Berapa lama waktu respons?", a: "Umumnya kami merespons dalam 1x24 jam pada hari kerja, seringkali lebih cepat via WhatsApp." },
  { q: "Apakah konsultasi awal berbayar?", a: "Tidak, konsultasi awal untuk memahami kebutuhan Anda sepenuhnya gratis." },
];

export default function KontakPage() {
  return (
    <div className="pt-32">
      <div className="container">
        <FadeIn className="max-w-2xl">
          <p className="eyebrow mb-3">Kontak</p>
          <h1 className="font-display text-4xl font-medium text-white sm:text-5xl">
            Mari diskusikan proyek Anda.
          </h1>
          <p className="mt-4 text-mist">
            Isi form di bawah atau hubungi kami langsung via WhatsApp untuk respons lebih cepat.
          </p>
        </FadeIn>
      </div>

      <div className="section-pad">
        <div className="container grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <FadeIn className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <p className="eyebrow mb-4">Informasi Kontak</p>
              <ul className="space-y-4 text-sm text-mist">
                <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-blue-400" /> {siteConfig.whatsappDisplay}</li>
                <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-blue-400" /> {siteConfig.email}</li>
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-blue-400" /> {siteConfig.address}</li>
                <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 text-blue-400" /> Senin – Sabtu, 09.00 – 21.00 WIB</li>
              </ul>
              <Button asChild className="mt-6 w-full">
                <a href={waLink("Halo HAC Digital Future, saya ingin konsultasi.")} target="_blank" rel="noopener noreferrer">
                  Chat via WhatsApp
                </a>
              </Button>
            </div>

            <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-navy-800">
              <iframe
                title="Lokasi HAC Digital Future"
                src="https://www.google.com/maps?q=Jakarta&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>

            <div className="glass rounded-2xl p-6">
              <p className="eyebrow mb-4">FAQ</p>
              <Accordion type="single" collapsible>
                {contactFaqs.map((f, i) => (
                  <AccordionItem key={i} value={`c-${i}`}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
