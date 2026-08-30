import { Marquee } from "@/components/animations/marquee";

const clients = [
  "Universitas Nusantara", "Kopi Kita Group", "Bina Sarana Studio", "Meraki Interior",
  "Terang Listrik", "Sejahtera Retail", "Cendekia Publishing", "Lingkar Kreatif",
];

export function Trusted() {
  return (
    <section className="section-pad border-y border-white/5 bg-navy-900/60">
      <div className="container">
        <p className="eyebrow mb-8 text-center">Dipercaya oleh</p>
      </div>
      <Marquee>
        {clients.map((c) => (
          <span key={c} className="whitespace-nowrap font-display text-xl text-mist2">
            {c}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
