"use client";

import { useState } from "react";
import Link from "next/link";

import type { Locale } from "@/lib/i18n/dictionaries";
import type { Dictionary } from "@/lib/i18n/dictionaries";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({
  lang,
  header,
}: {
  lang: Locale;
  header: Dictionary["header"];
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={`/${lang}`} aria-label="Vector Wave Studio — home">
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher current={lang} labels={header.languages} />
          <a
            href="#contact"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {header.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher current={lang} labels={header.languages} />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? header.closeMenu : header.openMenu}
            aria-controls="mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink transition-colors hover:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-panel"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent"
            >
              {header.cta}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
