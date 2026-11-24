import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/content/site";

const nav = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/#processo", label: "Como funciona" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-bewear.png" alt="Monograma Bewear" width={44} height={44} priority />
          <span className="text-lg font-bold tracking-wide">
            BEWEAR <span className="font-normal text-primary">Studio</span>
          </span>
        </Link>
        <nav className="flex items-center gap-8 text-[15px] font-medium">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hidden text-zinc-700 transition-colors hover:text-primary md:inline">
              {item.label}
            </Link>
          ))}
          <Button asChild variant="ink">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Fale comigo
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
