import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/common/heading";
import { StaggerGroup, StaggerItem } from "@/components/animations/fade-in";
import { ArcDivider } from "@/components/animations/arc-divider";

export function Process() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Proses Kerja"
          title="Alur kerja yang jelas dari konsultasi hingga proyek selesai."
          align="center"
        />
        <ArcDivider className="mt-6" />
        <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.process.map((p) => (
            <StaggerItem key={p.step} className="relative">
              <span className="font-mono text-xs text-blue-400">{p.step}</span>
              <h3 className="mt-3 font-display text-base font-medium text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{p.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
