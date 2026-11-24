import { AtSign, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { instagramLink, site, whatsappLink } from "@/content/site";

export function Contact() {
  return (
    <section id="contato" className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 rounded-[2rem] bg-primary px-8 py-14 text-primary-foreground md:px-12 md:py-16">
        <div className="flex max-w-xl flex-col gap-4">
          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-[2.75rem]">Bora tirar sua marca do papel?</h2>
          <p className="text-lg leading-relaxed text-violet-100">
            Me chama no WhatsApp, conta sobre o seu negócio e eu te mando uma proposta sem compromisso.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-72">
          <Button asChild size="lg" variant="white">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> WhatsApp {site.whatsappDisplay}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-violet-300 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <AtSign /> @{site.instagram}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
