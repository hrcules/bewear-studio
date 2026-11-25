// Dados gerais do estúdio. Troque os valores marcados com TODO.
export const site = {
  name: "Bewear Studio",
  owner: "Hércules",
  city: "Patos, PB",
  description:
    "Estúdio de criação em Patos, PB: identidade visual, sites, landing pages e gestão de Instagram para o comércio local.",
  url: "https://bewear-studio.vercel.app", // TODO: trocar pelo domínio final quando o Hércules registrar
  // Texto de apresentação (rascunho da Clara, seção 2 de textos-prospeccao-bewear.md).
  // Aguardando aprovação do Hércules antes de publicar.
  about: [
    "A Bewear Studio é um estúdio de criação em Patos, na Paraíba.",
    "Fazemos identidade visual, sites, landing pages e Instagram gerenciado para pequenas empresas.",
    "Do logo ao primeiro cliente que chega pelo WhatsApp, a gente cuida da sua imagem para você cuidar do seu negócio.",
  ],
  whatsapp: "5583999170411",
  whatsappDisplay: "(83) 99917-0411",
  // [INSTAGRAM] O perfil do estúdio ainda não existe. Quando o Hércules criar a conta,
  // preencha só o @ aqui (sem "@" e sem URL, ex.: "nomedaconta"): o botão do Instagram aparece sozinho.
  // Enquanto estiver vazio, o botão fica oculto. Não usar @bewear.studio (é de outra pessoa).
  instagram: "",
  behance: "https://www.behance.net/SEU_USUARIO", // TODO
  email: "contato@bewearstudio.com.br", // TODO
};

export function whatsappLink(message = "Olá! Vim pelo site do Bewear Studio e quero um orçamento.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const instagramLink = site.instagram ? `https://instagram.com/${site.instagram}` : null;
