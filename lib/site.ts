/**
 * Central site configuration and public business contact details.
 *
 * All public contact values live here in a single place so they stay
 * consistent across the footer, contact section, JSON-LD and metadata.
 */
export const siteConfig = {
  name: "Vector Wave Studio",
  // Canonical base URL. Override with NEXT_PUBLIC_SITE_URL on Netlify.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vectorwavestudio.com",

  email: "santiagor@vectorwavestudio.com",
  phoneDisplay: "+1 (240) 457-6572",
  phoneHref: "tel:+12404576572",
  whatsappHref: "https://wa.me/12404576572",
} as const;
