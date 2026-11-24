import { steps } from "@/content/services";
import { SectionHeading } from "./section-heading";

export function Process() {
  return (
    <section id="processo" className="bg-ink px-6 py-24 text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading dark eyebrow="Como funciona" title="Do primeiro papo à entrega, sem enrolação" />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="flex flex-col gap-3 rounded-3xl border border-zinc-700 p-7">
              <span className="text-4xl font-extrabold text-violet-400">{s.n}</span>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-zinc-300">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
