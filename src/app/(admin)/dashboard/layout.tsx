import Link from "next/link";
import {
  LayoutDashboard, FileText, Briefcase, Image as ImageIcon,
  MessageSquareQuote, HelpCircle, Settings, LogOut,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/layanan", label: "Layanan", icon: Briefcase },
  { href: "/dashboard/artikel", label: "Artikel", icon: FileText },
  { href: "/dashboard/portfolio", label: "Portofolio", icon: ImageIcon },
  { href: "/dashboard/testimonial", label: "Testimoni", icon: MessageSquareQuote },
  { href: "/dashboard/faq", label: "FAQ", icon: HelpCircle },
  { href: "/dashboard/settings", label: "Pengaturan", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-navy-950 text-white">
      <aside className="hidden w-64 shrink-0 border-r border-white/10 p-6 lg:block">
        <p className="font-display text-lg font-semibold">
          HAC <span className="text-blue-400">Admin</span>
        </p>
        <nav className="mt-8 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-mist transition-colors hover:bg-white/5 hover:text-white"
            >
              <item.icon className="h-4 w-4" /> {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/"
          className="mt-10 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-mist hover:text-white"
        >
          <LogOut className="h-4 w-4" /> Kembali ke Website
        </Link>
      </aside>
      <main className="flex-1 p-6 lg:p-10">{children}</main>
    </div>
  );
}
