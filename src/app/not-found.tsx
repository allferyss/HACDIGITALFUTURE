import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy-950 px-6 text-center">
      <p className="font-mono text-sm text-blue-400">404</p>
      <h1 className="mt-4 font-display text-3xl font-medium text-white sm:text-4xl">
        Halaman tidak ditemukan.
      </h1>
      <p className="mt-3 max-w-md text-mist">
        Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  );
}
