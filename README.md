# Bewear Studio

Landing page do Bewear Studio — Next.js (App Router), Tailwind CSS v4 e shadcn/ui.

## Rodar local

```bash
npm install
npm run dev
```

## Onde editar

- `src/content/site.ts` — WhatsApp, Instagram, Behance, e-mail, domínio
- `src/content/services.ts` — pacotes, preços e etapas do processo
- `src/content/projects.ts` — portfólio (cada item gera `/projetos/<slug>`)
- Imagens dos projetos: `public/projetos/<slug>/`
- Cores da marca: `src/app/globals.css`

Componentes shadcn em `src/components/ui` (adicione mais com `npx shadcn@latest add <componente>`).
