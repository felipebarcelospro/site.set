# Site.Set

Plataforma para criar lojas de afiliados de forma rápida e intuitiva, desenvolvida com Next.js.

![Site.Set Preview](public/preview.png)

## Features

### Landing Page
- Design moderno e responsivo
- Tema dark por padrão
- Lista de espera com persistência
- Analytics integrado (Vercel)
- Speed Insights

### Blog
- Posts com Markdown
- Busca integrada
- Compartilhamento social
- SEO otimizado
- Imagens otimizadas

### API
- Auth via token
- CRUD de posts
- Lista de espera
- Rate limiting
- CORS configurado
- Docs OpenAPI

## Stack

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Vercel Analytics](https://vercel.com/analytics)
- [OpenAI](https://openai.com/)

## Setup

```bash
# Clone
git clone https://github.com/felipebarcelospro/site.set.git

# Install
cd site.set
npm install

# Config
cp .env.sample .env

# Database
npx prisma migrate dev

# Dev
npm run dev
```

## Scripts

```bash
npm run dev      # Dev server
npm run generate # Novo post
npm run build    # Build
npm run start    # Prod server
npm run lint     # Lint
```

## Env

```bash
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/site-set"

# API
API_AUTH_TOKEN="seu-token"
NEXT_PUBLIC_API_KEY="chave-publica"

# OpenAI
OPENAI_API_KEY="sua-chave"
```

## Docs

### API
- [OpenAPI Spec](openapi.json)

### Guias
- [GPT Setup](docs/gpt-setup.md)
- [CLI Setup](docs/cli-setup.md)
- [Vercel Deploy](docs/vercel-deploy.md)

## Deploy

### Vercel

1. Fork o repo
2. Crie conta [Vercel](https://vercel.com)
3. Importe projeto
4. Configure env
5. Deploy!

[Guia Detalhado](docs/vercel-deploy.md)

### Database

1. Crie PostgreSQL
2. Configure DATABASE_URL
3. Migrations:
   ```bash
   npx prisma migrate deploy
   ```

## License

MIT - [LICENSE](LICENSE)

## Contribuição

1. Fork
2. Branch (`git checkout -b feature/xyz`)
3. Commit (`git commit -m 'Add xyz'`)
4. Push (`git push origin feature/xyz`)
5. PR

## Créditos

- [Rocketseat](https://rocketseat.com.br/)
- [Vercel](https://vercel.com)
- [Shadcn](https://ui.shadcn.com/)
