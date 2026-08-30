import { Star } from "lucide-react";
import { testimonials } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/common/heading";
import { Marquee } from "@/components/animations/marquee";

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="Testimoni" title="Apa kata mereka yang sudah bekerja sama dengan kami." align="center" />
      </div>
      <div className="mt-12">
        <Marquee>
          {testimonials.map((t) => (
            <div key={t.name} className="glass w-[340px] shrink-0 rounded-2xl p-6">
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-blue-400 text-blue-400" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mist">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-hac-gradient font-display text-xs text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-mist2">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
