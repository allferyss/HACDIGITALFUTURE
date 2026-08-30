"use client";

import { motion } from "motion/react";
import { Rocket, ShieldCheck, Users, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/common/heading";
import { StaggerGroup, StaggerItem } from "@/components/animations/fade-in";

const reasons = [
  { icon: Rocket, title: "Cepat & Ringan", desc: "Dibangun dengan Next.js untuk performa loading terbaik dan pengalaman pengguna yang mulus." },
  { icon: ShieldCheck, title: "Kualitas Terjamin", desc: "Setiap proyek melalui quality check sebelum diserahkan, minim revisi berulang." },
  { icon: Users, title: "Tim Berpengalaman", desc: "Didukung tim developer, desainer, dan digital marketer yang telah menangani ratusan proyek." },
  { icon: Sparkles, title: "Desain Eksklusif", desc: "Tidak menggunakan template pasaran — setiap tampilan dirancang sesuai identitas Anda." },
];

export function WhyUs() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="Mengapa HAC Digital Future" title="Standar studio premium, di setiap detail pekerjaan kami." />
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <StaggerItem key={r.title}>
              <motion.div
                whileHover={{ rotateX: -4, rotateY: 4, translateY: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass h-full rounded-2xl p-6"
              >
                <r.icon className="h-6 w-6 text-blue-400" />
                <h3 className="mt-4 font-display text-base font-medium text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{r.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
