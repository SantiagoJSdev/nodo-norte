import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import { getDictionary, hasLocale, locales } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/site/JsonLd";

import "../globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

type Props = LayoutProps<'/[lang]'>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const baseUrl = siteConfig.url;

  return {
    metadataBase: new URL(baseUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "es" ? "es_ES" : "en_US",
      url: `${baseUrl}/${lang}`,
      siteName: siteConfig.name,
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${geist.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-ink">
        {children}
        <JsonLd lang={lang} />
      </body>
    </html>
  );
}
