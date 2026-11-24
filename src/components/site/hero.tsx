import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site, whatsappLink } from "@/content/site";

const chips = ["Logos", "Sites", "Landing pages", "Instagram"];

export function Hero() {
  return (
    <section id="topo" className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-12 md:pt-20 lg:grid-cols-[1.15fr_1fr]">
      <div className="flex flex-col gap-7">
        <Badge variant="secondary" className="px-4 py-2 text-xs uppercase tracking-[0.12em]">
          Estúdio de criação · {site.city}
        </Badge>
        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Sua marca com cara de profissional, <span className="text-primary">do logo ao site.</span>
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          Crio identidade visual, sites, landing pages e cuido do seu Instagram, tudo no mesmo lugar e com preço que
          cabe no bolso do comércio local.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> Pedir orçamento no WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#portfolio">
              Ver trabalhos <ArrowRight />
            </a>
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 rounded-[2rem] bg-ink p-10 md:p-12">
        <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl bg-white">
          <Image src="/logo-bewear.png" alt="Logo Bewear" width={320} height={320} className="h-[82%] w-[82%] object-contain" priority />
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {chips.map((c) => (
            <Badge key={c} variant="dark" className="px-4 py-2 text-sm font-normal">
              {c}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
