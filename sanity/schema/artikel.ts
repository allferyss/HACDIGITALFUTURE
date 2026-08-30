import { defineField, defineType } from "sanity";

export default defineType({
  name: "artikel",
  title: "Artikel",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Judul", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Ringkasan", type: "text", rows: 3 }),
    defineField({ name: "coverImage", title: "Gambar Sampul", type: "image", options: { hotspot: true } }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "reference",
      to: [{ type: "kategori" }],
    }),
    defineField({ name: "tags", title: "Tag", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "author", title: "Penulis", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "body", title: "Konten", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    defineField({ name: "publishedAt", title: "Tanggal Terbit", type: "datetime" }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text", rows: 2 }),
  ],
});
