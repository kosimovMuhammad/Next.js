import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// "Middleware" was renamed to "Proxy" in Next.js 16 — same behavior, new name/file.
const intlMiddleware = createMiddleware(routing);

const oldProxyDemoPath = new RegExp(
  `^/(${routing.locales.join("|")})/demos/proxy/old$`
);

export default function proxy(request: NextRequest) {
  // Demo from /demos/proxy: redirect /demos/proxy/old to /demos/proxy/new,
  // preserving whichever locale prefix the request came in with.
  const match = request.nextUrl.pathname.match(oldProxyDemoPath);
  if (match) {
    console.log(`[proxy.ts] intercepted request for ${request.nextUrl.pathname}`);
    return NextResponse.redirect(
      new URL(`/${match[1]}/demos/proxy/new`, request.url)
    );
  }

  return intlMiddleware(request);
}

export const config = {
  // Skip API routes, Next.js internals, Vercel internals, and any path
  // that looks like a file (has a dot, e.g. favicon.ico, robots.txt).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
