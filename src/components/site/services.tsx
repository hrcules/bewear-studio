import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services, type ServiceTone } from "@/content/services";
import { whatsappLink } from "@/content/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

const tones: Record<ServiceTone, { card: string; muted: string; button: "ink" | "white" }> = {
  light: { card: "bg-card", muted: "text-muted-foreground", button: "ink" },
  dark: { card: "bg-ink text-ink-foreground border-zinc-700", muted: "text-zinc-300", button: "white" },
  primary: { card: "bg-primary text-primary-foreground border-primary", muted: "text-violet-100", button: "white" },
};

export function Services() {
  return (
    <section id="servicos" className="bg-white px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading eyebrow="Serviços" title="Escolha o pacote que faz sentido pro seu negócio" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const t = tones[s.tone];
            return (
              <Card key={s.name} className={cn("gap-5", t.card)}>
                <CardHeader>
                  <span className={cn("text-xs font-semibold uppercase tracking-[0.08em]", t.muted)}>{s.tag}</span>
                  <CardTitle>{s.name}</CardTitle>
                  <CardDescription className={t.muted}>{s.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="flex flex-col gap-2.5 text-[15px]">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0" /> {it}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex-col items-stretch gap-4">
                  <p className="text-[15px]">
                    <span className={t.muted}>a partir de </span>
                    <strong className="text-xl">{s.price}</strong>
                  </p>
                  <Button asChild variant={t.button}>
                    <a href={whatsappLink(s.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                      Quero esse
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
