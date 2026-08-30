import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Penulis",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nama", type: "string", validation: (r) => r.required() }),
    defineField({ name: "avatar", title: "Foto", type: "image" }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 3 }),
  ],
});
