import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  const d = new Date(date);
  return d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} menit baca`;
}

export function waLink(message: string) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281323995747";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
