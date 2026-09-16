import type { Dictionary } from "@/lib/i18n/dictionaries";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Flagship({ dict }: { dict: Dictionary }) {
  const { flagship } = dict;

  return (
    <section id="services" className="w-full bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading
          kicker={flagship.kicker}
          title={flagship.title}
          description={flagship.subtitle}
          className="mb-12"
        />

        <div className="grid grid-cols-1 items-center gap-10 rounded-xl bg-panel p-6 lg:grid-cols-12 lg:gap-12 lg:p-10">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
              {flagship.specsLabel}
            </span>

            <ul className="space-y-4 text-sm text-ink">
              {flagship.checklist.map((item) => (
                <li key={item.strong} className="flex items-start gap-3">
                  <Icon
                    name="check-circle"
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  />
                  <span>
                    <strong>{item.strong}</strong>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2 rounded bg-white px-3 py-1.5 font-mono text-[11px] text-muted">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>{flagship.scopeNote}</span>
              </div>
              <Button href="#contact">
                {flagship.cta}
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="w-full rounded-xl bg-white p-5 shadow-panel lg:col-span-7">
            <div className="mb-5 flex items-center justify-between rounded bg-panel px-3 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="h-2.5 w-2.5 rounded-full bg-panel-2" />
                <span className="ml-2 font-mono text-[11px] text-muted">
                  {flagship.mockup.specLabel}
                </span>
              </div>
              <div className="flex items-center rounded bg-panel-2 p-0.5 font-mono text-[11px]">
                <span className="rounded bg-white px-2 py-0.5 font-semibold text-ink shadow-card">
                  {flagship.mockup.desktop}
                </span>
                <span className="px-2 py-0.5 text-muted">
                  {flagship.mockup.mobile}
                </span>
              </div>
            </div>

            <div className="space-y-5 rounded-lg bg-panel p-5">
              <div className="flex items-center justify-between">
                <div className="h-3 w-28 rounded-sm bg-ink" />
                <div className="flex gap-2">
                  <div className="h-2.5 w-12 rounded-sm bg-panel-2" />
                  <div className="h-2.5 w-12 rounded-sm bg-panel-2" />
                  <div className="h-2.5 w-16 rounded-sm bg-primary" />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 pt-2">
                <div className="col-span-7 space-y-2">
                  <div className="h-2 w-20 rounded-sm bg-accent" />
                  <div className="h-6 w-full rounded-sm bg-ink" />
                  <div className="h-4 w-5/6 rounded-sm bg-panel-2" />
                  <div className="flex gap-2 pt-2">
                    <div className="h-6 w-24 rounded-sm bg-primary" />
                    <div className="h-6 w-20 rounded-sm bg-panel-2" />
                  </div>
                </div>
                <div className="col-span-5 flex flex-col justify-between rounded bg-white p-3 shadow-card">
                  <div className="flex items-center justify-between font-mono text-[10px] text-muted">
                    <span>{flagship.mockup.badge}</span>
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div className="mt-3 space-y-1.5">
                    <div className="h-2 w-full rounded-sm bg-panel-2" />
                    <div className="h-2 w-3/4 rounded-sm bg-panel-2" />
                    <div className="h-2 w-1/2 rounded-sm bg-accent/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
