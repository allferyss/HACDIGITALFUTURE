import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { PixelField } from "@/components/animations/pixel-field";
import { waLink } from "@/lib/utils";

export function Cta() {
  return (
    <section className="section-pad">
      <div className="container">
        <FadeIn className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-hac-radial" />
          <PixelField className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 opacity-40" />
          <PixelField className="pointer-events-none absolute -bottom-4 -right-4 h-20 w-20 opacity-40" />
          <h2 className="relative font-display text-3xl font-medium text-white sm:text-4xl">
            Siap mewujudkan proyek digital Anda bersama kami?
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-mist">
            Konsultasikan kebutuhan Anda sekarang, gratis dan tanpa komitmen.
          </p>
          <Button asChild size="lg" className="relative mt-8">
            <a href={waLink("Halo HAC Digital Future, saya ingin konsultasi gratis.")} target="_blank" rel="noopener noreferrer">
              Konsultasi Gratis <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
