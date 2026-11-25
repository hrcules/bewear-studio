import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

import { projects } from "@/content/projects";
import { whatsappLink } from "@/content/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

export function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Portfólio" title="Trabalhos recentes" />
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Cada projeto começa entendendo o negócio do cliente. O visual vem depois.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projetos/${p.slug}`} className="reveal group flex flex-col gap-4">
              <div
                className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-muted"
                style={p.coverBg ? { backgroundColor: p.coverBg } : undefined}
              >
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={cn(
                    "transition-transform duration-500 group-hover:scale-105",
                    p.coverBg ? "object-contain p-[18%]" : "object-cover",
                    p.coverInvert && "invert"
                  )}
                />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-[15px] text-muted-foreground">
                    {p.category} · {p.summary}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
            </Link>
          ))}

          <a
            href={whatsappLink("Olá! Quero que meu negócio seja o próximo projeto do Bewear Studio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-violet-200 bg-secondary text-center text-secondary-foreground transition-colors hover:border-primary"
          >
            <Plus className="size-8" />
            <span className="text-lg font-semibold">Seu negócio aqui</span>
            <span className="text-sm text-accent-foreground/80">Bora ser o próximo projeto?</span>
          </a>
        </div>
      </div>
    </section>
  );
}
