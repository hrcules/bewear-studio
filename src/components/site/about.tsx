import { site } from "@/content/site";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="sobre" className="px-6 pb-8">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_1.4fr] md:gap-14">
        <SectionHeading eyebrow="Sobre" title="Quem faz a Bewear" />
        <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
          {site.about.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
