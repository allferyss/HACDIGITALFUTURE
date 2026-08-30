"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactFormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Gagal mengirim pesan");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass space-y-5 rounded-2xl p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs text-mist">Nama Lengkap</label>
          <input
            {...register("name")}
            className="w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white placeholder:text-mist2 focus:border-blue-400/50 focus:outline-none"
            placeholder="Nama Anda"
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-xs text-mist">Email</label>
          <input
            {...register("email")}
            className="w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white placeholder:text-mist2 focus:border-blue-400/50 focus:outline-none"
            placeholder="nama@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs text-mist">Nomor WhatsApp</label>
          <input
            {...register("phone")}
            className="w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white placeholder:text-mist2 focus:border-blue-400/50 focus:outline-none"
            placeholder="0812xxxxxxx"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-xs text-mist">Layanan yang Dibutuhkan</label>
          <select
            {...register("service")}
            className="w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white focus:border-blue-400/50 focus:outline-none"
          >
            <option value="">Pilih layanan (opsional)</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs text-mist">Pesan</label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white placeholder:text-mist2 focus:border-blue-400/50 focus:outline-none"
          placeholder="Ceritakan kebutuhan Anda..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Mengirim..." : "Kirim Pesan"} <Send className="h-4 w-4" />
      </Button>

      {status === "success" && <p className="text-sm text-emerald-400">Pesan berhasil dikirim, kami akan segera menghubungi Anda.</p>}
      {status === "error" && <p className="text-sm text-red-400">Terjadi kesalahan, silakan coba lagi atau hubungi kami via WhatsApp.</p>}
    </form>
  );
}
