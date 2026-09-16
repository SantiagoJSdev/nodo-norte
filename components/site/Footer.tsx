import type { Dictionary } from "@/lib/i18n/dictionaries";

import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="w-full border-t border-line bg-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 border-b border-line pb-16 md:grid-cols-12">
          <div className="flex flex-col items-start md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {dict.footer.description}
            </p>
          </div>

          <nav
            className="flex flex-col md:col-span-3"
            aria-label={dict.footer.navigation}
          >
            <span className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
              {dict.footer.navigation}
            </span>
            <div className="flex flex-col gap-3">
              {dict.header.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="flex flex-col md:col-span-4">
            <span className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
              {dict.footer.inquiries}
            </span>
            <div className="flex flex-col gap-3 font-mono text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-ink transition-colors hover:text-primary"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.phoneHref}
                className="text-muted transition-colors hover:text-ink"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 font-mono text-xs text-muted sm:flex-row">
          <p>{dict.footer.rights}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-ink">
              {dict.footer.privacy}
            </a>
            <span className="text-line-strong">·</span>
            <a href="#" className="transition-colors hover:text-ink">
              {dict.footer.terms}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
