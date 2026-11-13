import { Header } from "@/components/lml/header";
import { Hero } from "@/components/lml/hero";
import { Statement } from "@/components/lml/statement";
import { Services } from "@/components/lml/services";
import { Work } from "@/components/lml/work";
import { Process } from "@/components/lml/process";
import { About } from "@/components/lml/about";
import { Contact } from "@/components/lml/contact";
import { Footer } from "@/components/lml/footer";
import { StickyCta } from "@/components/lml/sticky-cta";

export default function LastMinuteLabs() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statement />
        <Services />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
