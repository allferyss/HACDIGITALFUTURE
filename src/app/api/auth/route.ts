import { NextResponse } from "next/server";

// Placeholder auth endpoint.
// Production: replace with Clerk middleware/hooks, or AuthJS route handlers
// (`app/api/auth/[...nextauth]/route.ts`) per README "Autentikasi Admin".
export async function POST() {
  return NextResponse.json(
    { error: "Auth belum dikonfigurasi. Lihat README bagian Autentikasi Admin." },
    { status: 501 }
  );
}
