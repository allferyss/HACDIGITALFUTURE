import type { ContactFormValues } from "@/lib/validations/contact";

export async function sendContactMessage(values: ContactFormValues) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (!res.ok) throw new Error("Gagal mengirim pesan");
  return res.json();
}
