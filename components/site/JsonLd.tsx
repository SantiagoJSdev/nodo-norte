import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

export function JsonLd({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: dict.meta.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
