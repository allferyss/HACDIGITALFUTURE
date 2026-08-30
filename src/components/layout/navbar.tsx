"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems, siteConfig } from "@/config/site";
import { services, serviceCategories } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/widgets/theme-toggle";
import { cn, waLink } from "@/lib/utils";

import Image from "next/image";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);
    setHidden(latest > previous && latest > 200);
  });

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled ? "glass" : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/logo/hac-logo.png"
              alt="HAC Digital Future Logo"
              width={40}
              height={40}
              priority
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            HAC <span className="text-blue-600 dark:text-blue-400">Digital Future</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.megaMenu ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-mist dark:hover:text-white"
                >
                  {item.label}
                </Link>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="glass absolute left-1/2 top-full mt-3 w-[640px] -translate-x-1/2 rounded-2xl p-6"
                  >
                    <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                      {serviceCategories.map((cat) => (
                        <div key={cat}>
                          <p className="eyebrow mb-3">{cat}</p>
                          <ul className="space-y-2">
                            {services
                              .filter((s) => s.category === cat)
                              .slice(0, 4)
                              .map((s) => (
                                <li key={s.slug}>
                                  <Link
                                    href={`/layanan/${s.slug}`}
                                    className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-mist dark:hover:text-white"
                                  >
                                    {s.title}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/layanan"
                      className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200"
                    >
                      Lihat semua layanan <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </motion.div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-mist dark:hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild size="sm">
            <a href={waLink("Halo HAC Digital Future, saya ingin konsultasi gratis.")} target="_blank" rel="noopener noreferrer">
              Konsultasi Gratis
            </a>
          </Button>
        </div>

        <button
          className="text-slate-800 dark:text-white lg:hidden"
          aria-label="Buka menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="glass border-t border-slate-200/50 px-6 py-6 dark:border-white/10 lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-base font-medium text-slate-800 dark:text-white">
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between border-t border-slate-200/50 pt-3 dark:border-white/10">
              <span className="text-sm text-slate-600 dark:text-mist">Tema Tampilan</span>
              <ThemeToggle />
            </div>
            <Button asChild className="mt-2">
              <a href={waLink("Halo HAC Digital Future, saya ingin konsultasi gratis.")}>Konsultasi Gratis</a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
