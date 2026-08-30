import Link from "next/link";
import { Instagram, Linkedin, Music2, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/lib/services-data";
import { PixelField } from "@/components/animations/pixel-field";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950">
      <PixelField className="pointer-events-none absolute -right-4 top-10 h-24 w-24 opacity-40" />
      <div className="container section-pad">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              HAC <span className="text-blue-400">Digital Future</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">{siteConfig.description}</p>
            <div className="mt-5 flex gap-3">
              <a href={siteConfig.socials.instagram} aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist hover:border-blue-400/50 hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={siteConfig.socials.tiktok} aria-label="TikTok" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist hover:border-blue-400/50 hover:text-white">
                <Music2 className="h-4 w-4" />
              </a>
              <a href={siteConfig.socials.linkedin} aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist hover:border-blue-400/50 hover:text-white">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Layanan Populer</p>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/layanan/${s.slug}`} className="text-sm text-mist hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Perusahaan</p>
            <ul className="space-y-2.5">
              <li><Link href="/tentang" className="text-sm text-mist hover:text-white">Tentang Kami</Link></li>
              <li><Link href="/portfolio" className="text-sm text-mist hover:text-white">Portofolio</Link></li>
              <li><Link href="/artikel" className="text-sm text-mist hover:text-white">Artikel</Link></li>
              <li><Link href="/kontak" className="text-sm text-mist hover:text-white">Kontak</Link></li>
              <li><Link href="/layanan" className="text-sm text-mist hover:text-white">Semua Layanan</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Kontak</p>
            <ul className="space-y-3 text-sm text-mist">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-blue-400" /> {siteConfig.whatsappDisplay}</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-blue-400" /> {siteConfig.email}</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-blue-400" /> {siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-mist2 md:flex-row">
          <p>© {year} HAC Digital Future. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-6">
            <Link href="/kontak" className="hover:text-white">Kebijakan Privasi</Link>
            <Link href="/kontak" className="hover:text-white">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
