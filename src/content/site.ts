// Dados gerais do estúdio. Troque os valores marcados com TODO.
export const site = {
  name: "Bewear Studio",
  owner: "Hércules",
  city: "Patos, PB",
  description:
    "Estúdio de criação em Patos, PB: identidade visual, sites, landing pages e gestão de Instagram para o comércio local.",
  url: "https://bewear-studio.vercel.app", // TODO: trocar pelo domínio final quando o Hércules registrar
  whatsapp: "5583999170411",
  whatsappDisplay: "(83) 99917-0411",
  instagram: "_hrcules",
  behance: "https://www.behance.net/SEU_USUARIO", // TODO
  email: "contato@bewearstudio.com.br", // TODO
};

export function whatsappLink(message = "Olá! Vim pelo site do Bewear Studio e quero um orçamento.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const instagramLink = `https://instagram.com/${site.instagram}`;
