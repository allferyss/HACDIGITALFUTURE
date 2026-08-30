import { defineField, defineType } from "sanity";

export default defineType({
  name: "kategori",
  title: "Kategori",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nama", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" } }),
  ],
});
