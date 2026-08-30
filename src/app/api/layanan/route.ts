import { NextResponse } from "next/server";
import { services } from "@/lib/services-data";

// Production: replace static import with `prisma.service.findMany()`
export async function GET() {
  return NextResponse.json(services);
}
