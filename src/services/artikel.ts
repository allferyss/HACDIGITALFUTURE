import type { Article } from "@/types/artikel";

export async function fetchArticles(): Promise<Article[]> {
  const res = await fetch("/api/artikel");
  if (!res.ok) throw new Error("Gagal memuat artikel");
  return res.json();
}
