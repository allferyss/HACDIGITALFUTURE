import { defineField, defineType } from "sanity";

export default defineType({
  name: "layanan",
  title: "Layanan",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Nama Layanan", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Deskripsi", type: "text", rows: 4 }),
    defineField({ name: "category", title: "Kategori", type: "reference", to: [{ type: "kategori" }] }),
    defineField({ name: "priceFrom", title: "Harga Mulai", type: "number" }),
    defineField({ name: "icon", title: "Nama Ikon (lucide-react)", type: "string" }),
    defineField({ name: "benefits", title: "Manfaat", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "deliverables", title: "Deliverables", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "faqs",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string", title: "Pertanyaan" },
            { name: "answer", type: "text", title: "Jawaban" },
          ],
        },
      ],
    }),
    defineField({ name: "isPublished", title: "Terbitkan", type: "boolean", initialValue: true }),
  ],
});
