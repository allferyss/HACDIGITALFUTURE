import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: any) {
  return builder.image(source);
}

// Example queries (GROQ) for production use:
// export const allArtikelQuery = `*[_type == "artikel" && isPublished == true] | order(publishedAt desc)`;
// export const artikelBySlugQuery = `*[_type == "artikel" && slug.current == $slug][0]`;
// export const allLayananQuery = `*[_type == "layanan" && isPublished == true]`;
