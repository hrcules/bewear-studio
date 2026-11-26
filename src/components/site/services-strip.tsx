"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

// Promoção de dezembro (Tabela de preços): Combo Bewear + 1 mês de manutenção grátis.
// Horário de Brasília (UTC-3, sem horário de verão).
const PROMO_LAST_DAYS_FROM = new Date("2026-12-17T00:00:00-03:00").getTime();
const PROMO_ENDS_AT = new Date("2026-12-20T23:59:59-03:00").getTime();

const PROMO_TEXT = "Combo Bewear R$ 780 + 1 mês de manutenção grátis · até 20/12";
const PROMO_LAST_DAYS_TEXT = `Últimos dias: ${PROMO_TEXT}`;

type PromoState = "normal" | "last-days" | "off";

function promoState(now: number): PromoState {
  if (now > PROMO_ENDS_AT) return "off";
  if (now >= PROMO_LAST_DAYS_FROM) return "last-days";
  return "normal";
}

const services = ["Identidade visual", "Landing page", "Gestão de Instagram", "Combo Bewear"];

function Star() {
  return (
    <span aria-hidden className="text-violet-200">
      ✦
    </span>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="whitespace-nowrap rounded-full bg-white px-4 py-1 text-sm font-bold normal-case tracking-normal text-primary">
      {text}
    </span>
  );
}

// Sequência: Identidade visual ✦ Landing page ✦ [pílula] ✦ Gestão de Instagram ✦ Combo Bewear ✦ [pílula] ✦
function buildItems(text: string | null) {
  const items: { key: string; node: React.ReactNode }[] = [];
  services.forEach((name, i) => {
    items.push({ key: name, node: <span>{name}</span> });
    if (text && (i === 1 || i === 3)) items.push({ key: `promo-${i}`, node: <Pill text={text} /> });
  });
  return items;
}

// Faixa de serviços logo abaixo do header. O texto repete quatro vezes pra rolar sem emenda.
// Com "reduzir movimento" ativo, a faixa fica parada e mostra só o aviso (ou os serviços, se a promoção acabou).
export function ServicesStrip() {
  // Começa em "normal" (igual ao HTML do servidor) e acerta pela data real depois de carregar.
  const [state, setState] = useState<PromoState>("normal");
  useEffect(() => {
    setState(promoState(Date.now()));
  }, []);

  const text = state === "off" ? null : state === "last-days" ? PROMO_LAST_DAYS_TEXT : PROMO_TEXT;
  const items = buildItems(text);

  return (
    <div
      className="marquee overflow-hidden bg-primary py-2 text-white"
      role="region"
      aria-label={text ? "Serviços e promoção do estúdio" : "Serviços do estúdio"}
    >
      <div className="flex w-max animate-marquee motion-reduce:hidden">
        {[0, 1, 2, 3].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy > 0}>
            {items.map((item) => (
              <li
                key={item.key}
                className="flex items-center gap-6 pr-6 text-xs font-semibold uppercase tracking-[0.12em]"
              >
                {item.node}
                <Star />
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div
        className={cn(
          "mx-auto hidden max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 text-xs font-semibold uppercase tracking-[0.12em] motion-reduce:flex"
        )}
      >
        {text ? (
          <>
            <Star />
            <Pill text={text} />
            <Star />
          </>
        ) : (
          services.map((name) => <span key={name}>{name}</span>)
        )}
      </div>
    </div>
  );
}
