export type ServiceTone = "light" | "dark" | "primary";

export type Service = {
  tag: string;
  name: string;
  description: string;
  items: string[];
  price: string;
  tone: ServiceTone;
  whatsappMessage: string;
};

// TODO: troque os preços quando fechar a tabela
export const services: Service[] = [
  {
    tag: "Identidade",
    name: "Identidade visual",
    description: "Uma marca reconhecível e coerente em todo lugar.",
    items: ["Logo e variações", "Paleta e tipografia", "Aplicações (cartão, post, fachada)"],
    price: "R$ —",
    tone: "light",
    whatsappMessage: "Olá! Quero um orçamento de identidade visual.",
  },
  {
    tag: "Presença",
    name: "Site ou landing page",
    description: "Seu negócio encontrado no Google e no celular.",
    items: ["Página rápida e responsiva", "Botão direto pro WhatsApp", "Google Meu Negócio"],
    price: "R$ —",
    tone: "light",
    whatsappMessage: "Olá! Quero um orçamento de site / landing page.",
  },
  {
    tag: "Mensal",
    name: "Instagram gerenciado",
    description: "Posts com identidade, sem você se preocupar.",
    items: ["Planejamento do mês", "Artes e legendas", "Relatório simples"],
    price: "R$ — /mês",
    tone: "dark",
    whatsappMessage: "Olá! Quero saber do plano de Instagram gerenciado.",
  },
  {
    tag: "Mais completo",
    name: "Combo Bewear",
    description: "Marca, site e Instagram trabalhando juntos.",
    items: ["Identidade visual", "Landing page", "1º mês de Instagram"],
    price: "R$ —",
    tone: "primary",
    whatsappMessage: "Olá! Quero saber do Combo Bewear.",
  },
];

export const steps = [
  { n: "01", title: "Conversa", description: "Entendo seu negócio, seu público e o que você precisa agora." },
  { n: "02", title: "Proposta", description: "Você recebe escopo, prazo e valor fechados, sem surpresa." },
  { n: "03", title: "Criação", description: "Apresento o projeto e ajustamos juntos até ficar do seu jeito." },
  { n: "04", title: "Entrega", description: "Arquivos, site no ar e suporte pra você usar tudo." },
];
