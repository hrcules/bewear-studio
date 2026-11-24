import Image from "next/image";

import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t px-6 pb-12 pt-8">
      <div className="flex items-center gap-3">
        <Image src="/logo-bewear.png" alt="" width={32} height={32} />
        <span className="font-semibold">{site.name}</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Feito por {site.owner} · {site.city} · © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
