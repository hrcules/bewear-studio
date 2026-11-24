// Portfólio do estúdio.
// Para adicionar um projeto: coloque as imagens em /public/projetos/<slug>/
// e acrescente um item nesta lista. A página /projetos/<slug> é gerada sozinha.

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "Identidade visual" | "Landing page" | "Site" | "Instagram" | "Sistema";
  year: string;
  summary: string; // uma linha, aparece no card
  description: string[]; // parágrafos da página do projeto
  cover: string; // imagem do card
  coverBg?: string; // cor de fundo do card quando a capa é um logo
  coverInvert?: boolean; // inverte a capa (logo preto em fundo escuro)
  gallery: string[];
  services: string[];
  links?: { behance?: string; live?: string; instagram?: string };
};

export const projects: Project[] = [
  {
    slug: "bewear-shop",
    title: "Bewear Shop",
    client: "Projeto próprio",
    category: "Sistema",
    year: "2025",
    summary: "SaaS de loja virtual: identidade visual e plataforma completa.",
    description: [
      "O Bewear Shop é uma plataforma de loja virtual para pequenos negócios, criada do zero: marca, interface e sistema.",
      "Foi o projeto que deu origem ao nome Bewear e à identidade que hoje assina o estúdio.",
    ],
    cover: "/logo-wordmark.svg",
    coverBg: "#18181b",
    coverInvert: true,
    gallery: ["/projetos/bewear-shop/admin-dashboard.png", "/projetos/bewear-shop/mobile-store-1.png", "/projetos/bewear-shop/mobile-store-2.png"],
    services: ["Identidade visual", "UI/UX", "Desenvolvimento"],
    links: {},
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
