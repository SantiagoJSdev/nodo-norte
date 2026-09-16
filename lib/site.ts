/**
 * Central site configuration.
 *
 * All contact placeholders live here so they can be swapped in a single place
 * once the real delivery details are provided.
 */
export const siteConfig = {
  name: "Vector Wave Studio",
  // Canonical base URL. Override with NEXT_PUBLIC_SITE_URL on Netlify.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vectorwavestudio.com",

  // Primary contact (real).
  email: "santiagor@vectorwavestudio.com",

  // Contact placeholders — replace with real values when available.
  phoneDisplay: "+1 (555) 019-2834",
  phoneHref: "tel:+15550192834",
  whatsappHref: "https://wa.me/15550192834",
} as const;
