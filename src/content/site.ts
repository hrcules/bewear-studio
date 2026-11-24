// Dados gerais do estúdio. Troque os valores marcados com TODO.
export const site = {
  name: "Bewear Studio",
  owner: "Hércules",
  city: "Patos, PB",
  description:
    "Estúdio de criação em Patos, PB: identidade visual, sites, landing pages e gestão de Instagram para o comércio local.",
  url: "https://bewearstudio.com.br", // TODO: domínio final
  whatsapp: "5583900000000", // TODO: DDI + DDD + número, só dígitos
  whatsappDisplay: "(83) 9 0000-0000", // TODO
  instagram: "bewearstudio", // TODO: @ sem o arroba
  behance: "https://www.behance.net/SEU_USUARIO", // TODO
  email: "contato@bewearstudio.com.br", // TODO
};

export function whatsappLink(message = "Olá! Vim pelo site do Bewear Studio e quero um orçamento.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const instagramLink = `https://instagram.com/${site.instagram}`;
