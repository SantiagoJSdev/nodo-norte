import { en } from "./en";
import { es } from "./es";

export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, es };

export const defaultLocale: Locale = "en";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale?: string): Dictionary {
  if (locale && hasLocale(locale)) return dictionaries[locale];
  return dictionaries[defaultLocale];
}
