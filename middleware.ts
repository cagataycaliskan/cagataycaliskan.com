import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const supportedLanguages = ["en", "tr"];

  const lang = pathname.split("/")[1];

  if (
    !supportedLanguages.includes(lang) &&
    pathname !== "/" &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/static") &&
    !pathname.startsWith("/styles")
  ) {
    request.nextUrl.pathname = "/en";
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
