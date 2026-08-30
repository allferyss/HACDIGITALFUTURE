import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Placeholder auth check — replace with real session/token verification
// once Clerk or AuthJS is wired up (see README "Autentikasi Admin").
export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith("/dashboard");

  if (isAdminRoute) {
    const session = request.cookies.get("hac_session");
    if (!session) {
      const loginUrl = new URL("/kontak", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
