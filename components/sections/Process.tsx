import type { Dictionary } from "@/lib/i18n/dictionaries";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process({ dict }: { dict: Dictionary }) {
  const { process } = dict;

  return (
    <section id="process" className="w-full bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading
          kicker={process.kicker}
          title={process.title}
          description={process.subtitle}
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <article
              key={step.number}
              className="flex flex-col rounded-xl bg-panel p-6 shadow-card"
            >
              <div className="mb-5 flex items-center justify-between">
                <span
                  className={`font-mono text-2xl font-bold ${
                    index % 2 === 0 ? "text-primary" : "text-accent"
                  }`}
                >
                  {step.number}
                </span>
                <span className="font-mono text-[11px] uppercase text-muted">
                  {`${process.phaseLabel} // ${step.number}`}
                </span>
              </div>
              <h3 className="mb-1.5 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
