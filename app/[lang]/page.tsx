import { notFound } from "next/navigation";

import { getDictionary, hasLocale } from "@/lib/i18n/dictionaries";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { Principles } from "@/components/sections/Principles";
import { Flagship } from "@/components/sections/Flagship";
import { Capabilities } from "@/components/sections/Capabilities";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { FinalCta } from "@/components/sections/FinalCta";

type Props = PageProps<'/[lang]'>;

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} header={dict.header} />
      <main id="main">
        <Hero dict={dict} />
        <Principles dict={dict} />
        <Flagship dict={dict} />
        <Capabilities dict={dict} />
        <Process dict={dict} />
        <Team dict={dict} />
        <Contact dict={dict} />
        <FinalCta dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
