"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PixelField } from "@/components/animations/pixel-field";
import { GsapParallax } from "@/components/animations/gsap-parallax";
import { waLink } from "@/lib/utils";

import Image from "next/image";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const glowX = useTransform(springX, [0, 1], ["20%", "80%"]);
  const glowY = useTransform(springY, [0, 1], ["10%", "60%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 pb-12"
    >
      {/* Aurora / mouse-interactive glow */}
      <motion.div
        aria-hidden
        style={{ left: glowX, top: glowY }}
        className="pointer-events-none absolute h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-[120px]"
      />
      <div className="pointer-events-none absolute inset-0 bg-hac-radial" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(0,112,243,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(0,112,243,0.35)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]"
      />

      <GsapParallax speed={-25} className="pointer-events-none absolute right-10 top-28 hidden md:block">
        <PixelField className="h-20 w-20 opacity-70 animate-float" />
      </GsapParallax>

      <div className="container relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: Text & Actions */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-mist">
              Digital Agency Premium
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-medium leading-[1.08] text-ink dark:text-white sm:text-5xl lg:text-6xl"
          >
            Membangun <span className="text-gradient">masa depan digital</span> untuk bisnis dan brand modern Indonesia.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-mist"
          >
            HAC Digital Future menyediakan berbagai jasa seperti merancang website dengan performa tinggi, menciptakan desain visual kreatif dan keren, editing video, dan strategi pemasaran dengan standar studio kelas dunia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg">
              <a href={waLink("Halo HAC Digital Future, saya ingin konsultasi gratis.")} target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/layanan">Lihat Layanan</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right: 3D Isometric Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Subtle Ambient Backlight */}
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/30" />

          {/* Isometric Image with Smooth Float Motion */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[720px] drop-shadow-[0_20px_35px_rgba(61,107,255,0.15)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
          >
            <Image
              src="/images/hero/hero-isometric.png"
              alt="HAC Digital Future — Ecosystem Layanan Digital & Kreatif"
              width={1200}
              height={900}
              priority
              className="h-auto w-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
