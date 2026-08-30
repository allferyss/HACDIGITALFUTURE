import type { Metadata } from "next";
import { Rocket, Target, Eye, Award } from "lucide-react";
import { siteConfig } from "@/config/site";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { Counter } from "@/components/animations/counter";
import { ArcDivider } from "@/components/animations/arc-divider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali HAC Digital Future — digital agency premium yang membantu bisnis dan brand mewujudkan proyek digital berkualitas.",
};

const values = [
  { icon: Rocket, title: "Cepat Bergerak", desc: "Kami menghargai waktu Anda — proses kerja efisien tanpa mengorbankan kualitas." },
  { icon: Target, title: "Fokus Hasil", desc: "Setiap proyek diukur dari dampaknya terhadap tujuan klien, bukan sekadar tampil bagus." },
  { icon: Eye, title: "Detail Oriented", desc: "Kami memperhatikan detail kecil yang membuat perbedaan besar pada hasil akhir." },
  { icon: Award, title: "Standar Tinggi", desc: "Setiap pekerjaan melalui quality check sebelum diserahkan ke klien." },
];

const timeline = [
  { year: "2022", desc: "HAC Digital Future didirikan berfokus pada layanan desain kreatif dan solusi digital." },
  { year: "2023", desc: "Memperluas layanan ke pembuatan website modern dan identitas visual untuk UMKM." },
  { year: "2024", desc: "Menambah layanan digital marketing, video animasi, dan scale-up untuk klien korporat." },
  { year: "2026", desc: "Meluncurkan ulang identitas dan website baru dengan standar digital agency premium." },
];

export default function TentangPage() {
  return (
    <div className="pt-32">
      <section className="container">
        <FadeIn className="max-w-2xl">
          <p className="eyebrow mb-3">Tentang Kami</p>
          <h1 className="font-display text-4xl font-medium text-white sm:text-5xl">
            Studio digital yang tumbuh bersama kebutuhan Anda.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-mist">
            HAC Digital Future lahir dari keinginan untuk menyediakan layanan digital, desain, dan web development yang
            rapi, terpercaya, dan berdampak nyata bagi bisnis serta brand yang ingin tampil profesional secara online.
          </p>
        </FadeIn>
      </section>

      <ArcDivider className="my-16" />

      <section className="section-pad">
        <div className="container grid grid-cols-1 gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="eyebrow mb-3">Visi</p>
            <p className="font-display text-xl text-white">
              Menjadi mitra digital terpercaya bagi bisnis, brand, dan profesional di seluruh Indonesia.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="eyebrow mb-3">Misi</p>
            <p className="text-mist leading-relaxed">
              Menyediakan layanan digital, web development, dan kreatif dengan kualitas tinggi, proses yang
              transparan, serta performa maksimal — sambil terus mengikuti perkembangan teknologi terbaru.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-navy-900/40">
        <div className="container">
          <p className="eyebrow mb-3">Nilai Perusahaan</p>
          <h2 className="font-display text-2xl font-medium text-white">Yang memandu setiap pekerjaan kami</h2>
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title} className="glass rounded-2xl p-6">
                <v.icon className="h-6 w-6 text-blue-400" />
                <h3 className="mt-4 font-display text-base font-medium text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{v.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <FadeIn className="text-center max-w-xl mx-auto mb-16">
            <p className="eyebrow mb-2">Perjalanan Kami</p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-white">
              Roadmap & Milestone
            </h2>
            <p className="mt-3 text-mist text-sm sm:text-base">
              Langkah demi langkah evolusi kami dalam menghadirkan ekosistem solusi digital terbaik.
            </p>
          </FadeIn>

          {/* Desktop & Tablet: Horizontal MCU-style Timeline */}
          <div className="relative mt-8 hidden md:block">
            {/* Center Main Horizontal Axis Line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent dark:via-blue-400/40" />

            {/* Glowing Accent Core */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[1px] bg-blue-500 shadow-[0_0_15px_rgba(0,112,243,0.8)]" />

            <div className="relative grid grid-cols-4 gap-6">
              {timeline.map((t, idx) => {
                const isEven = idx % 2 === 0; // Alternating top / bottom like MCU Phase timeline
                return (
                  <FadeIn
                    key={t.year}
                    delay={idx * 0.12}
                    className="flex flex-col items-center group relative min-h-[300px]"
                  >
                    {/* Top Content (for even index) */}
                    <div className={cn("w-full flex flex-col items-center justify-end pb-8 h-[130px]", !isEven && "invisible pointer-events-none")}>
                      <div className="glass w-full rounded-2xl p-5 border border-white/10 dark:border-white/10 transition-all duration-300 group-hover:border-blue-400/50 group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_30px_-5px_rgba(0,112,243,0.25)]">
                        <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {t.year}
                        </span>
                        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-mist">
                          {t.desc}
                        </p>
                      </div>
                    </div>

                    {/* Center Node & Stem */}
                    <div className="relative flex flex-col items-center justify-center my-auto z-20">
                      {/* Vertical connector stem to Top */}
                      <div
                        className={cn(
                          "w-[2px] h-8 transition-colors duration-300",
                          isEven
                            ? "bg-gradient-to-t from-blue-500 to-blue-400/40"
                            : "opacity-0"
                        )}
                      />

                      {/* Timeline Center Node */}
                      <div className="relative flex items-center justify-center">
                        <div className="h-7 w-7 rounded-full bg-navy-900 border-2 border-blue-500 flex items-center justify-center shadow-[0_0_12px_rgba(0,112,243,0.6)] group-hover:scale-125 transition-transform duration-300 bg-white dark:bg-navy-950">
                          <div className="h-2.5 w-2.5 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors" />
                        </div>
                      </div>

                      {/* Vertical connector stem to Bottom */}
                      <div
                        className={cn(
                          "w-[2px] h-8 transition-colors duration-300",
                          !isEven
                            ? "bg-gradient-to-b from-blue-500 to-blue-400/40"
                            : "opacity-0"
                        )}
                      />
                    </div>

                    {/* Bottom Content (for odd index) */}
                    <div className={cn("w-full flex flex-col items-center justify-start pt-8 h-[130px]", isEven && "invisible pointer-events-none")}>
                      <div className="glass w-full rounded-2xl p-5 border border-white/10 dark:border-white/10 transition-all duration-300 group-hover:border-blue-400/50 group-hover:translate-y-1.5 group-hover:shadow-[0_10px_30px_-5px_rgba(0,112,243,0.25)]">
                        <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {t.year}
                        </span>
                        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-mist">
                          {t.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Mobile View: Clean Connected Linear Timeline */}
          <div className="relative mt-8 space-y-6 md:hidden">
            <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-blue-400 to-blue-700/30" />
            {timeline.map((t, idx) => (
              <FadeIn key={t.year} delay={idx * 0.1} className="relative flex items-start gap-5 pl-2">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 bg-white dark:bg-navy-950 shadow-[0_0_10px_rgba(0,112,243,0.4)]">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                </div>
                <div className="glass flex-1 rounded-2xl p-4 border border-white/10">
                  <span className="inline-block rounded-full bg-blue-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {t.year}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-mist">
                    {t.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-900/40">
        <div className="container">
          <StaggerGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {siteConfig.stats.map((s) => (
              <StaggerItem key={s.label} className="border-l border-white/10 pl-5">
                <p className="font-display text-4xl font-medium text-white">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-mist">{s.label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </div>
  );
}
