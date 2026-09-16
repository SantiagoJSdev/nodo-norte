import type { Dictionary } from "@/lib/i18n/dictionaries";

import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "@/components/contact/ContactForm";

export function Contact({ dict }: { dict: Dictionary }) {
  const { contact } = dict;

  return (
    <section id="contact" className="w-full bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading
          kicker={contact.kicker}
          title={contact.title}
          description={contact.subtitle}
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-10 rounded-2xl bg-panel p-6 lg:grid-cols-12 lg:gap-12 lg:p-10">
          <div className="rounded-xl bg-white p-6 shadow-card lg:col-span-8 lg:p-8">
            <ContactForm contact={contact} />
          </div>

          <div className="flex flex-col justify-between gap-8 lg:col-span-4">
            <div className="rounded-xl bg-white p-6 shadow-card">
              <div className="mb-1.5 flex items-center gap-2 text-primary">
                <Icon name="shield-check" className="h-5 w-5" />
                <span className="text-lg font-semibold">
                  {contact.reassurance.title}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {contact.reassurance.body}
              </p>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                {contact.channelsLabel}
              </span>

              <div className="space-y-1 rounded-lg bg-white p-5 shadow-card">
                <span className="font-mono text-[11px] uppercase text-muted">
                  {contact.emailLabel}
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block truncate text-lg font-semibold text-ink transition-colors hover:text-primary"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="space-y-1 rounded-lg bg-white p-5 shadow-card">
                <span className="font-mono text-[11px] uppercase text-muted">
                  {contact.phoneLabel}
                </span>
                <a
                  href={siteConfig.phoneHref}
                  className="block text-lg font-semibold text-ink transition-colors hover:text-primary"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white p-5 shadow-card">
                <div>
                  <span className="block font-mono text-[11px] uppercase text-muted">
                    {contact.availabilityLabel}
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {contact.availabilityValue}
                  </span>
                </div>
                <span className="rounded bg-panel-2 px-2.5 py-1 font-mono text-[11px] font-semibold text-accent">
                  {contact.online}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-white px-2 py-3 text-center text-sm font-medium text-ink shadow-card transition-colors hover:bg-panel"
              >
                <Icon name="chat" className="h-4 w-4 text-accent" />
                <span>{contact.whatsapp}</span>
              </a>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 rounded-lg bg-white px-2 py-3 text-center text-sm font-medium text-ink shadow-card transition-colors hover:bg-panel"
              >
                <Icon name="phone" className="h-4 w-4 text-primary" />
                <span>{contact.call}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
