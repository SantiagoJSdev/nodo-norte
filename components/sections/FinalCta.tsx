import type { Dictionary } from "@/lib/i18n/dictionaries";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function FinalCta({ dict }: { dict: Dictionary }) {
  const { finalCta } = dict;

  return (
    <section className="w-full bg-ink py-16 text-white lg:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>{finalCta.kicker}</span>
            </div>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {finalCta.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {finalCta.subtitle}
            </p>
          </div>

          <div className="shrink-0">
            <Button href="#contact">
              {finalCta.cta}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
