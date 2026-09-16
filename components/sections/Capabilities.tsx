import type { Dictionary } from "@/lib/i18n/dictionaries";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

export function Capabilities({ dict }: { dict: Dictionary }) {
  const { capabilities } = dict;

  return (
    <section id="capabilities" className="w-full bg-panel py-16 lg:py-24">
      <Container>
        <SectionHeading
          kicker={capabilities.kicker}
          title={capabilities.title}
          description={capabilities.subtitle}
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {capabilities.panels.map((panel) => (
            <article
              key={panel.tag}
              className="flex flex-col justify-between rounded-xl bg-white p-8 shadow-card transition-shadow hover:shadow-panel"
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-accent">
                    {panel.tag}
                  </span>
                  <Icon name={panel.icon} className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-1.5 text-xl font-bold text-ink">
                  {panel.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted">
                  {panel.body}
                </p>
                <ul className="space-y-3 text-sm text-ink">
                  {panel.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Icon
                        name="arrow-right"
                        className="mt-1 h-4 w-4 shrink-0 text-accent"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-line pt-4 font-mono text-[11px] text-muted">
                <span>{panel.stack}</span>
                <span className="font-semibold text-primary">
                  {capabilities.okLabel}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
