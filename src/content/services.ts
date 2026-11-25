export type ServiceTone = "light" | "dark" | "primary";

export type Service = {
  tag: string;
  name: string;
  description: string;
  items: string[];
  price: string; // valor fechado, ex.: "R$ 380"
  priceSuffix?: string; // ex.: "/mês"
  deadline: string; // prazo da tabela de preços
  note?: string; // observação curta sob o preço
  tone: ServiceTone;
  whatsappMessage: string;
};

// Valores, prazos e itens seguem a tabela oficial (Shared/tabela-precos-bewear.md).
// Se a tabela mudar, atualize aqui junto.
export const services: Service[] = [
  {
    tag: "Identidade",
    name: "Identidade visual completa",
    description: "Uma marca reconhecível e coerente em todo lugar.",
    items: ["2 opções de logo", "Mini manual da marca", "Kit pras redes sociais (foto de perfil e capa)", "2 rodadas de ajuste"],
    price: "R$ 230",
    deadline: "Prazo: 7 a 10 dias úteis",
    tone: "light",
    whatsappMessage: "Olá! Quero um orçamento de identidade visual completa.",
  },
  {
    tag: "Presença",
    name: "Landing page",
    description: "Seu negócio apresentado com clareza, rápido e pronto pro celular.",
    items: ["Página rápida e responsiva", "Botão direto pro WhatsApp", "2 rodadas de ajuste"],
    price: "R$ 450",
    deadline: "Prazo: 5 a 7 dias úteis",
    note: "Precisa de várias páginas? Site a partir de R$ 850.",
    tone: "light",
    whatsappMessage: "Olá! Quero um orçamento de landing page.",
  },
  {
    tag: "Mensal",
    name: "Instagram gerenciado",
    description: "Posts com identidade, sem você se preocupar.",
    items: [
      "8 posts, stories e 1 reel por mês",
      "Artes, edição, legendas e agendamento",
      "1 revisão por post antes de publicar",
    ],
    price: "R$ 290",
    priceSuffix: "/mês",
    deadline: "Início em até 5 dias úteis",
    note: "Fotos e vídeos enviados por você.",
    tone: "dark",
    whatsappMessage: "Olá! Quero saber do plano de Instagram gerenciado.",
  },
  {
    tag: "Mais completo",
    name: "Combo Bewear",
    description: "Marca, site e Instagram trabalhando juntos.",
    items: ["Identidade visual completa", "Landing page", "1º mês de Instagram", "Economia de R$ 70 (7%)"],
    price: "R$ 900",
    deadline: "Prazo: 15 a 20 dias úteis",
    note: "Entrada de R$ 360 + 3x de R$ 180, ou R$ 810 à vista.",
    tone: "primary",
    whatsappMessage: "Olá! Quero saber do Combo Bewear.",
  },
];

// Condições gerais, exibidas abaixo dos pacotes.
export const paymentNote =
  "Entrada de 40% para começar, restante em até 3x. À vista com 10% de desconto. O prazo conta a partir da entrada paga e do material enviado por você. Domínio e hospedagem ficam por sua conta.";

export const steps = [
  { n: "01", title: "Conversa", description: "Entendo seu negócio, seu público e o que você precisa agora." },
  { n: "02", title: "Proposta", description: "Você recebe escopo, prazo e valor fechados, sem surpresa." },
  { n: "03", title: "Criação", description: "Apresento o projeto e ajustamos juntos até ficar do seu jeito." },
  { n: "04", title: "Entrega", description: "Arquivos, site no ar e suporte pra você usar tudo." },
];
