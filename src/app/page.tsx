import { Contact } from "@/components/site/contact";
import { Hero } from "@/components/site/hero";
import { Portfolio } from "@/components/site/portfolio";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
    </>
  );
}
