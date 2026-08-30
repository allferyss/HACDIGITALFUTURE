# HAC Digital Future — Website Company Profile Premium

Website resmi HAC Digital Future dibangun dengan **Next.js 15 (App Router)**, **TypeScript**,
**Tailwind CSS**, komponen bergaya **Shadcn UI**, **Framer Motion**, **GSAP**, **Lenis Smooth
Scroll**, siap dihubungkan ke **Prisma + Supabase PostgreSQL**, **Sanity CMS**, dan **React Hook
Form + Zod**.

---

## 1. Menjalankan di Lokal

Prasyarat: Node.js 20+ dan npm.

```bash
# 1. Ekstrak project, lalu masuk ke foldernya
cd hac-digital-future

# 2. Install dependency
npm install

# 3. Salin file environment dan isi sesuai kebutuhan Anda
cp .env.example .env

# 4. Jalankan development server
npm run dev
```

Buka `http://localhost:3000`.

> Catatan: project ini dibuat tanpa akses internet di sisi pembuat kode, sehingga
> `npm install` **belum pernah dijalankan/di-build di sisi kami**. Setelah install,
> jalankan `npm run build` untuk memastikan semua kompatibel, dan perbaiki versi
> package di `package.json` jika ada breaking change dari rilis terbaru library terkait.

### Jika `npm install` gagal dengan error `ERESOLVE`

Ini terjadi kalau salah satu package pihak ketiga merilis versi baru dengan
persyaratan peer dependency yang belum sinkron dengan React 19 (hal ini wajar
di ekosistem npm yang terus berubah). Langkah mengatasinya, urut dari yang
paling aman:

1. Coba dulu `npm install` biasa (sudah kami rapikan agar minim konflik).
2. Jika masih ada error `ERESOLVE`, jalankan:
   ```bash
   npm install --legacy-peer-deps
   ```
   Ini aman untuk project ini karena seluruh dependency inti (Next.js, React,
   Tailwind, Radix, Framer Motion) sudah saling kompatibel — opsi ini hanya
   melonggarkan pengecekan versi peer yang terlalu ketat dari package pendukung.
3. Sanity Studio (folder `sanity/`) sengaja punya `package.json` terpisah dengan
   React 18, karena versi `sanity` saat ini belum resmi mendukung React 19 —
   jangan install dependency Studio dari root project, selalu dari dalam folder
   `sanity/`.

---

## 2. Struktur Folder

```
hac-digital-future/
├── prisma/schema.prisma        # Skema database (Supabase PostgreSQL)
├── sanity/                     # Skema & config Sanity Studio (CMS artikel & layanan)
├── src/
│   ├── app/
│   │   ├── (main)/             # Halaman publik: home, layanan, tentang, artikel, kontak, portfolio
│   │   ├── (admin)/dashboard/  # Dashboard admin (CMS internal, UI shell)
│   │   ├── api/                # Route handlers (contact, layanan, artikel, auth)
│   │   ├── sitemap.ts          # sitemap.xml otomatis
│   │   ├── robots.ts           # robots.txt otomatis
│   │   └── icon.tsx            # Favicon dinamis
│   ├── components/
│   │   ├── ui/                 # Button, Card, Badge, Accordion, AdminTable (gaya Shadcn)
│   │   ├── layout/              # Navbar (mega menu), Footer
│   │   ├── animations/         # FadeIn, Counter, Marquee, ArcDivider, PixelField, GsapParallax
│   │   ├── sections/            # Section per halaman (home, layanan, artikel, tentang)
│   │   ├── forms/                # ContactForm (React Hook Form + Zod)
│   │   └── widgets/              # WhatsApp float, Lenis provider, Loader, ThemeToggle
│   ├── lib/                     # services-data.ts, articles-data.ts, portfolio-data.ts, utils, prisma, sanity, supabase
│   ├── config/site.ts           # Konfigurasi global (nama, WhatsApp, statistik, dsb.)
│   ├── types/                   # Tipe TypeScript (Service, Article, User)
│   ├── hooks/, store/, services/ # Hook, Zustand store, dan API client helpers
│   └── middleware.ts             # Proteksi route /dashboard
└── .env.example
```

### Konten saat ini bersifat statis (mock data)

Agar website ini **langsung bisa dijalankan tanpa setup database**, seluruh konten
(23 layanan, artikel, portofolio, testimoni) disimpan sebagai data TypeScript di
folder `src/lib/*.ts`. Ini membuat Anda bisa preview & deploy dalam hitungan menit.

Untuk pengelolaan konten tanpa coding (sesuai permintaan awal), ikuti langkah
"Menghubungkan ke Database & CMS" di bawah — setelah itu, dashboard admin dan
halaman publik akan membaca dari Supabase/Sanity, bukan dari file statis.

---

## 3. Menghubungkan ke Database & CMS

### a. Supabase (PostgreSQL) + Prisma

1. Buat project baru di [supabase.com](https://supabase.com).
2. Ambil `DATABASE_URL` dan `DIRECT_URL` dari Project Settings → Database, isi ke `.env`.
3. Jalankan migrasi:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```
4. Ganti pemanggilan data statis (`import { services } from "@/lib/services-data"`)
   dengan query Prisma, misalnya:
   ```ts
   const services = await prisma.service.findMany({ where: { isPublished: true } });
   ```
5. (Opsional) Gunakan Supabase Storage untuk upload gambar portofolio/artikel.

### b. Sanity CMS (artikel & layanan tanpa coding)

> Sanity Studio sengaja dipisah dari aplikasi Next.js (folder `sanity/` punya
> `package.json` sendiri), karena `sanity` versi terbaru masih mensyaratkan
> React 18 sementara aplikasi utama memakai React 19 — memisahkannya mencegah
> konflik `ERESOLVE` saat `npm install`.

1. Masuk ke folder studio dan install terpisah:
   ```bash
   cd sanity
   npm install
   npx sanity init   # hubungkan ke project Sanity Anda (atau isi projectId manual)
   npm run dev        # jalankan studio di localhost:3333
   ```
2. Buat project di [sanity.io](https://sanity.io), isi `NEXT_PUBLIC_SANITY_PROJECT_ID`
   dan `NEXT_PUBLIC_SANITY_DATASET` di `.env` **root project** (bukan di folder `sanity/`),
   supaya Next.js bisa membaca datanya lewat `next-sanity` / `@sanity/client`.
3. Deploy studio (`npm run deploy` di dalam folder `sanity/`) agar tim non-teknis
   bisa menambah artikel/layanan lewat antarmuka visual di URL Sanity terpisah.
4. Di halaman Next.js (misalnya `src/app/(main)/artikel/page.tsx`), ganti data statis
   dengan query GROQ menggunakan `sanityClient` dari `src/lib/sanity.ts`.

### c. Autentikasi Admin (Clerk atau AuthJS)

Dashboard di `/dashboard` saat ini dilindungi oleh `middleware.ts` versi sederhana
(cek cookie `hac_session`). Untuk produksi, pilih salah satu:

- **Clerk** — cocok jika ingin setup cepat dengan UI login siap pakai.
- **AuthJS (NextAuth)** — cocok jika ingin kontrol penuh dan gratis.

Setelah dipasang, perbarui `middleware.ts` agar memverifikasi sesi asli, bukan
sekadar mengecek keberadaan cookie.

---

## 4. Deployment ke Vercel

1. Push project ini ke repository GitHub/GitLab Anda.
2. Import repository di [vercel.com](https://vercel.com/new).
3. Tambahkan seluruh environment variable dari `.env.example` di Vercel Project
   Settings → Environment Variables.
4. Set **Build Command**: `npm run build`, **Output**: default (Next.js otomatis terdeteksi).
5. Deploy. Vercel akan otomatis menjalankan `prisma generate` lewat script `postinstall`.
6. Hubungkan domain custom Anda (misal dari Niagahoster atau Cloudflare) di
   Vercel → Domains, lalu arahkan DNS (CNAME/A record) sesuai instruksi Vercel.

---

## 5. Integrasi WhatsApp

Nomor WhatsApp diatur di satu tempat: `.env` → `NEXT_PUBLIC_WHATSAPP_NUMBER`
(format internasional tanpa `+`, contoh `6281323995747`). Semua tombol CTA dan
tombol mengambang menggunakan helper `waLink()` di `src/lib/utils.ts`, jadi
mengganti nomor cukup dilakukan sekali di `.env`.

---

## 6. SEO & Performa

- Metadata default & per-halaman diatur lewat Next.js Metadata API (`generateMetadata`).
- `sitemap.xml` dan `robots.txt` dibuat otomatis dari `src/app/sitemap.ts` dan `robots.ts`,
  mengikuti data layanan & artikel — tidak perlu update manual.
- Setiap halaman layanan & artikel menyertakan **JSON-LD Schema.org** (`Service`, `FAQPage`,
  `Article`) untuk rich snippet Google.
- Gunakan `next/image` (belum diaktifkan di beberapa placeholder) saat gambar asli sudah
  tersedia agar otomatis teroptimasi.
- Untuk mencapai skor Lighthouse 95+, pastikan gambar final dikompres, font dibatasi
  (sudah menggunakan `next/font` agar self-hosted & tanpa render-blocking), dan
  hindari menambahkan script pihak ketiga yang berat di luar yang diperlukan.

---

## 7. Integrasi Tambahan (siap dipasang)

Slot environment variable sudah disediakan di `.env.example` untuk:

- Google Analytics (`NEXT_PUBLIC_GA_ID`)
- Meta Pixel (`NEXT_PUBLIC_META_PIXEL_ID`)
- TikTok Pixel (`NEXT_PUBLIC_TIKTOK_PIXEL_ID`)
- reCAPTCHA (`RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY`)
- Resend untuk notifikasi email dari form kontak (`RESEND_API_KEY`)

Tambahkan script/inisialisasi masing-masing layanan di `src/app/layout.tsx` sesuai
dokumentasi resmi masing-masing provider.

---

## 8. Desain System Singkat

| Token | Nilai |
| --- | --- |
| Warna utama | `#3D6BFF` (biru brand), `#04060C`–`#161D2E` (navy gelap), `#FFFFFF` |
| Font display | Space Grotesk |
| Font body | Inter |
| Font mono/label | JetBrains Mono |
| Motif signature | `ArcDivider` (lengkung orbit dari logo) & `PixelField` (kluster piksel dari logo) |

Lihat `tailwind.config.ts` untuk daftar lengkap token warna, radius, dan animasi.

---

## 9. Menambah Layanan / Artikel Baru (sebelum CMS terhubung)

Selama masih menggunakan mock data, cukup tambahkan entri baru di:

- `src/lib/services-data.ts` untuk layanan baru (halaman detail otomatis dibuat
  lewat dynamic route `/layanan/[slug]`).
- `src/lib/articles-data.ts` untuk artikel baru.
- `src/lib/portfolio-data.ts` untuk item portofolio & testimoni baru.

Setelah database/CMS terhubung (lihat bagian 3), penambahan konten dilakukan
lewat dashboard admin (`/dashboard`) atau Sanity Studio, tanpa perlu mengubah kode.

---

Selamat membangun bersama HAC Digital Future 🚀
