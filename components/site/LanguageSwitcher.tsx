"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/dictionaries";

interface LanguageSwitcherProps {
  current: Locale;
  labels: { en: string; es: string };
}

export function LanguageSwitcher({ current, labels }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const switchTo = (locale: Locale) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && (locales as readonly string[]).includes(segments[0])) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    return `/${segments.join("/")}`;
  };

  return (
    <nav
      aria-label="Language switcher"
      className="inline-flex items-center gap-0.5 rounded-lg border border-line p-0.5"
    >
      {locales.map((locale) => {
        const isActive = locale === current;
        return (
          <Link
            key={locale}
            href={switchTo(locale)}
            title={labels[locale]}
            aria-current={isActive ? "true" : undefined}
            className={`rounded-md px-2.5 py-1 font-mono text-xs font-semibold uppercase transition-colors ${
              isActive
                ? "bg-primary text-white"
                : "text-muted hover:text-ink"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
