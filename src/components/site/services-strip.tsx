import { Sparkles } from "lucide-react";

const items = ["Identidade visual", "Logos", "Sites", "Landing pages", "Instagram gerenciado", "Combo Bewear"];

// Faixa de serviços logo abaixo do header. O texto repete quatro vezes pra rolar sem emenda.
export function ServicesStrip() {
  return (
    <div className="marquee overflow-hidden bg-ink py-3 text-ink-foreground" aria-label="Serviços do estúdio">
      <div className="flex w-max animate-marquee">
        {[0, 1, 2, 3].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy > 0}>
            {items.map((item) => (
              <li key={item} className="flex items-center gap-6 pr-6 text-sm font-medium uppercase tracking-[0.12em]">
                {item}
                <Sparkles className="size-3.5 text-violet-400" aria-hidden />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
