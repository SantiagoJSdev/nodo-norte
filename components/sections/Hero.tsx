import type { Dictionary } from "@/lib/i18n/dictionaries";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict;

  return (
    <section className="w-full bg-white pb-20 pt-14 lg:pb-28 lg:pt-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded bg-panel-2 px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-muted">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span>{hero.kicker}</span>
            </div>

            <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              {hero.headlinePrefix}{" "}
              <span className="text-primary underline decoration-accent decoration-2 underline-offset-4">
                {hero.headlineHighlight}
              </span>
              {hero.headlineSuffix}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#contact">
                {hero.primaryCta}
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
              <Button href="#services" variant="secondary">
                {hero.secondaryCta}
                <Icon name="arrow-down" className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-muted">
              <Icon name="verified" className="h-4 w-4 text-accent" />
              <span>{hero.trustNote}</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-xl bg-ink p-6 text-white shadow-panel">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-primary" />
                  <span className="h-3 w-3 rounded-full bg-accent" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="ml-2 font-mono text-[11px] tracking-wide text-white/60">
                    {hero.terminal.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-white/60">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>{hero.terminal.region}</span>
                </div>
              </div>

              <div className="space-y-4 rounded-lg bg-[#233242] p-6">
                {hero.terminal.lines.map((line) => (
                  <div
                    key={line}
                    className="flex items-center gap-3 font-mono text-sm"
                  >
                    <span className="text-accent">›</span>
                    <span className="text-white/80">{line}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 font-mono text-sm">
                  <span className="text-accent">›</span>
                  <span className="inline-block h-4 w-2 animate-pulse bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
