import { NextResponse } from "next/server";
import { articles } from "@/lib/articles-data";

// Production: replace static import with `prisma.article.findMany()`
// or a Sanity GROQ query via `sanityClient.fetch(allArtikelQuery)`
export async function GET() {
  return NextResponse.json(articles);
}
