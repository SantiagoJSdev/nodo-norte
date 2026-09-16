import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, locales } from "@/lib/i18n/dictionaries";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferences = acceptLanguage
    .split(",")
    .map((entry) => entry.trim().toLowerCase().split(";")[0]);

  for (const preference of preferences) {
    const code = preference.slice(0, 2);
    if ((locales as readonly string[]).includes(code)) return code;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Ignore internal paths, API routes and any static asset/file with an
  // extension (sitemap.xml, robots.txt, images, fonts, etc.).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
