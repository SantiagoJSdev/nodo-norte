import type { Dictionary } from "@/lib/i18n/dictionaries";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function Principles({ dict }: { dict: Dictionary }) {
  const { principles } = dict;

  return (
    <section className="w-full bg-panel py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {principles.items.map((item, index) => (
            <article
              key={item.title}
              className="flex flex-col rounded-lg bg-white p-6 shadow-card"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-panel-2 text-accent">
                <Icon name={item.icon} className="h-6 w-6" />
              </div>
              <span className="mb-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                {principles.label} {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-1.5 text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
