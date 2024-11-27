# Site.Set

Site.Set é uma plataforma que permite criar lojas de afiliados de forma rápida e intuitiva. O projeto foi desenvolvido usando Next.js e inclui um blog integrado para marketing de conteúdo.

![Site.Set Preview](public/preview.png)

## 🚀 Features

### Landing Page
- ✨ Design moderno e responsivo
- 🎨 Tema dark por padrão
- 📱 Totalmente responsivo
- 🔒 Lista de espera com persistência local
- 📊 Analytics integrado (Vercel)
- 📈 Speed Insights para performance

### Blog
- 📝 Sistema de posts com Markdown
- 🔍 Busca integrada
- 🔗 Compartilhamento social
- 📱 Layout responsivo
- 🎯 SEO otimizado
- 🖼️ Imagens otimizadas

### API
- 🔐 Autenticação via token
- 📝 CRUD completo de posts
- 📋 Lista de espera
- 📚 Rate limiting
- 🛡️ CORS configurado
- 📚 Documentação OpenAPI

## 🛠️ Tecnologias

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Vercel Analytics](https://vercel.com/analytics)
- [OpenAI](https://openai.com/)

## 📦 Instalação

\`\`\`bash
# Clone o repositório
git clone https://github.com/seu-usuario/site-set.git

# Entre na pasta
cd site-set

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.sample .env

# Execute as migrações do banco
npx prisma migrate dev

# Inicie o servidor de desenvolvimento
npm run dev
\`\`\`

## 🔧 Comandos

\`\`\`bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run generate     # Gera novo post via OpenAI
npm run build        # Build do projeto
npm run start        # Inicia servidor de produção
npm run lint         # Executa linter
\`\`\`

## 🌍 Variáveis de Ambiente

\`\`\`env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/site-set"

# API Auth
API_AUTH_TOKEN="seu-token-aqui"
NEXT_PUBLIC_API_KEY="sua-chave-publica-aqui"

# OpenAI
OPENAI_API_KEY="sua-chave-openai-aqui"

# Analytics (opcional)
NEXT_PUBLIC_ANALYTICS_ID="seu-id-analytics"

# Rate Limiting (opcional)
RATE_LIMIT_WINDOW="60000"      # 1 minuto em milissegundos
RATE_LIMIT_MAX_REQUESTS="10"   # Máximo de requisições por janela

# CORS (opcional)
CORS_ALLOWED_ORIGINS="http://localhost:3000,https://seu-dominio.com"

# Cache Control (opcional)
CACHE_MAX_AGE="31536000"       # 1 ano em segundos

# Environment
NODE_ENV="development"         # development, production, ou test
\`\`\`

## 📚 Documentação

### API
A documentação completa da API está disponível em:
- [OpenAPI Specification](openapi.json)

### Guias
- [Configurando GPT Custom](docs/gpt-setup.md)
- [CLI de Geração de Posts](docs/cli-setup.md)
- [Deploy na Vercel](docs/vercel-deploy.md)

## 🚀 Deploy

### Deploy na Vercel

1. Fork este repositório
2. Crie uma nova conta na [Vercel](https://vercel.com)
3. Importe o projeto do GitHub
4. Configure as variáveis de ambiente
5. Deploy!

[Guia Detalhado de Deploy](docs/vercel-deploy.md)

### Banco de Dados

1. Crie um banco PostgreSQL
2. Configure a variável DATABASE_URL
3. Execute as migrações:
   \`\`\`bash
   npx prisma migrate deploy
   \`\`\`

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

1. Fork o projeto
2. Crie sua feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit suas mudanças (\`git commit -m 'Add some AmazingFeature'\`)
4. Push para a branch (\`git push origin feature/AmazingFeature\`)
5. Abra um Pull Request

## 📞 Suporte

- Email: suporte@site.set
- Twitter: [@siteset](https://twitter.com/siteset)
- Discord: [Comunidade Site.Set](https://discord.gg/siteset)

## ✨ Agradecimentos

- [Rocketseat](https://rocketseat.com.br/) - Pelo suporte e inspiração
- [Vercel](https://vercel.com) - Pela incrível plataforma
- [Shadcn](https://ui.shadcn.com/) - Pelos componentes incríveis
