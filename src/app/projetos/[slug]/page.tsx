import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/content/projects";
import { whatsappLink } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const links = [
    project.links?.live && { href: project.links.live, label: "Ver site" },
    project.links?.behance && { href: project.links.behance, label: "Ver no Behance" },
    project.links?.instagram && { href: project.links.instagram, label: "Ver no Instagram" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <article className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-10">
      <Link href="/#portfolio" className="flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
        <ArrowLeft className="size-4" /> Voltar ao portfólio
      </Link>

      <header className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col gap-5">
          <Badge variant="secondary" className="px-4 py-2 text-xs uppercase tracking-[0.12em]">
            {project.category} · {project.year}
          </Badge>
          <h1 className="text-5xl font-extrabold tracking-tight">{project.title}</h1>
          {project.description.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
        <dl className="flex flex-col gap-5 self-start rounded-3xl border bg-card p-8">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Cliente</dt>
            <dd className="text-lg font-semibold">{project.client}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">Entregas</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {project.services.map((s) => (
                <Badge key={s} variant="outline">
                  {s}
                </Badge>
              ))}
            </dd>
          </div>
          {links.length > 0 && (
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <Button key={l.href} asChild variant="outline">
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} <ExternalLink />
                  </a>
                </Button>
              ))}
            </div>
          )}
        </dl>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {project.gallery.map((src, i) => (
          <div key={src} className={i === 0 ? "md:col-span-2" : undefined}>
            <Image
              src={src}
              alt={`${project.title}, imagem ${i + 1}`}
              width={1600}
              height={1000}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full rounded-3xl border bg-muted object-contain"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-4 rounded-[2rem] bg-ink p-10 text-ink-foreground md:flex-row md:items-center md:justify-between">
        <p className="text-2xl font-bold">Quer algo assim pro seu negócio?</p>
        <Button asChild size="lg" variant="white">
          <a href={whatsappLink(`Olá! Vi o projeto ${project.title} e quero um orçamento.`)} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </article>
  );
}
