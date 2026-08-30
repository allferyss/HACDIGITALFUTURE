import type { Service } from "@/types/layanan";

export async function fetchServices(): Promise<Service[]> {
  const res = await fetch("/api/layanan");
  if (!res.ok) throw new Error("Gagal memuat layanan");
  return res.json();
}
