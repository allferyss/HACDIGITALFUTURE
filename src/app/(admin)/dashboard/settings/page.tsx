const sections = [
  { title: "Pengaturan SEO", desc: "Meta title, meta description, dan Open Graph default untuk seluruh halaman." },
  { title: "Integrasi", desc: "WhatsApp API, Google Analytics, Search Console, Meta Pixel, TikTok Pixel, reCAPTCHA." },
  { title: "Media & Banner", desc: "Kelola logo, favicon, dan banner promosi yang tampil di homepage." },
  { title: "Pengguna Admin", desc: "Kelola akun yang memiliki akses ke dashboard ini." },
];

export default function AdminSettingsPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-medium text-white">Pengaturan</h1>
      <p className="mt-1 text-sm text-mist">Konfigurasi global untuk website HAC Digital Future.</p>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {sections.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-navy-800/60 p-6">
            <h3 className="font-display text-base font-medium text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-mist">{s.desc}</p>
            <button className="mt-4 rounded-full border border-white/10 px-4 py-2 text-xs text-mist hover:text-white">
              Kelola
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
