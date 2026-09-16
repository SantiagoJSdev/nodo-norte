import type { Dictionary } from "@/lib/i18n/dictionaries";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tileStyles = [
  "bg-ink text-white",
  "bg-panel-2 text-ink",
  "bg-accent/15 text-accent",
];

export function Team({ dict }: { dict: Dictionary }) {
  const { team } = dict;

  return (
    <section id="team" className="w-full bg-panel py-16 lg:py-24">
      <Container>
        <SectionHeading
          kicker={team.kicker}
          title={team.title}
          description={team.subtitle}
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {team.members.map((member, index) => (
            <article
              key={member.initials}
              className="flex flex-col justify-between rounded-xl bg-white p-8 shadow-card"
            >
              <div>
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-lg font-mono text-lg font-bold ${
                    tileStyles[index % tileStyles.length]
                  }`}
                >
                  {member.initials}
                </div>
                <span className="mb-1 block font-mono text-[11px] uppercase tracking-wider text-primary">
                  {member.role}
                </span>
                <h3 className="mb-1.5 text-lg font-semibold text-ink">
                  {member.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {member.body}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-line pt-4 font-mono text-[11px] text-muted">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>{member.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
