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
    slug: "imperio-das-oticas",
    title: "Império das Óticas",
    client: "Distribuidora Império das Óticas",
    category: "Identidade visual",
    year: "2026",
    summary: "Marca de distribuidora de óticas: coroa, azul royal e dourado.",
    description: [
      "Identidade visual completa para a Distribuidora Império das Óticas. A coroa virou o símbolo da marca e traduz o nome “Império” de forma direta e memorável.",
      "O azul royal (#004AAD) é a cor principal e o dourado (#F1A530) aparece no símbolo e nos destaques. A tipografia combina Catchy Mager nos títulos com DM Sans nos textos.",
      "O projeto inclui versões da logomarca para fundos claros e escuros, reduções do símbolo, ícones e padrão de óculos, além das aplicações na fachada da loja e no vestuário.",
    ],
    cover: "/projetos/imperio-das-oticas/11-encerramento.webp",
    gallery: [
      "/projetos/imperio-das-oticas/01-capa.webp",
      "/projetos/imperio-das-oticas/03-logomarca.webp",
      "/projetos/imperio-das-oticas/04-versoes.webp",
      "/projetos/imperio-das-oticas/05-simbolo.webp",
      "/projetos/imperio-das-oticas/06-elementos.webp",
      "/projetos/imperio-das-oticas/07-paleta.webp",
      "/projetos/imperio-das-oticas/08-tipografia.webp",
      "/projetos/imperio-das-oticas/09-fachada.webp",
      "/projetos/imperio-das-oticas/10-camiseta.webp",
    ],
    services: ["Logomarca", "Paleta e tipografia", "Elementos gráficos", "Fachada", "Vestuário"],
    links: {},
  },
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
