import { SectionHeading } from "@/components/common/heading";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations/fade-in";

const faqs = [
  { q: "Bagaimana cara memesan layanan HAC Digital Future?", a: "Anda bisa langsung menghubungi kami via WhatsApp, ceritakan kebutuhan Anda, dan tim kami akan membantu memberikan penawaran terbaik." },
  { q: "Apakah bisa request desain sesuai referensi sendiri?", a: "Tentu, kami sangat terbuka terhadap referensi desain dan brand guideline yang sudah Anda miliki." },
  { q: "Berapa lama rata-rata waktu pengerjaan?", a: "Tergantung jenis layanan, mulai dari 1 hari untuk desain sederhana hingga 2 minggu untuk website lengkap." },
  { q: "Apakah ada garansi revisi?", a: "Ya, setiap layanan kami sertakan sesi revisi sesuai ketentuan masing-masing paket." },
  { q: "Metode pembayaran apa saja yang tersedia?", a: "Transfer bank, e-wallet, dan QRIS. Detail akan diinformasikan setelah kesepakatan penawaran." },
];

export function Faq() {
  return (
    <section className="section-pad bg-navy-900/40">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan." />
        <FadeIn>
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
