import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Hero } from "@/components/site/hero";
import { Portfolio } from "@/components/site/portfolio";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { ServicesStrip } from "@/components/site/services-strip";

export default function Home() {
  return (
    <>
      <ServicesStrip />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
    </>
  );
}
