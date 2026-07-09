import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// "Middleware" was renamed to "Proxy" in Next.js 16 — same behavior, new name/file.
export function proxy(request: NextRequest) {
  console.log(`[proxy.ts] intercepted request for ${request.nextUrl.pathname}`);
  return NextResponse.redirect(new URL("/demos/proxy/new", request.url));
}

export const config = {
  matcher: "/demos/proxy/old",
};
