# Deploy na Vercel

Este guia explica como fazer deploy do Site.Set na Vercel, incluindo configuração do banco de dados e variáveis de ambiente.

## Pré-requisitos

1. Conta na [Vercel](https://vercel.com)
2. Repositório do projeto no GitHub
3. Conta no [Vercel Postgres](https://vercel.com/storage/postgres) ou outro provedor PostgreSQL

## Passo a Passo

### 1. Preparação do Projeto

1. Certifique-se de que seu projeto está no GitHub
2. Verifique se o arquivo `vercel.json` está configurado:
   \`\`\`json
   {
     "version": 2,
     "buildCommand": "npx prisma generate && npm run build",
     "devCommand": "npm run dev",
     "installCommand": "npm install",
     "framework": "nextjs",
     "regions": ["gru1"]
   }
   \`\`\`

### 2. Configuração do Banco de Dados

#### Usando Vercel Postgres

1. Na dashboard da Vercel, vá em "Storage"
2. Crie um novo banco Postgres
3. As variáveis de ambiente serão adicionadas automaticamente

#### Usando Outro Provedor

1. Obtenha sua URL de conexão PostgreSQL
2. Adicione-a nas variáveis de ambiente da Vercel

### 3. Deploy na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe seu repositório do GitHub
3. Configure o projeto:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: Deixe o padrão

### 4. Variáveis de Ambiente

Configure as seguintes variáveis:

\`\`\`bash
# Database (se não usar Vercel Postgres)
DATABASE_URL="sua-url-postgres"

# API
API_AUTH_TOKEN="token-seguro-gerado"
NEXT_PUBLIC_API_KEY="chave-publica-gerada"

# OpenAI
OPENAI_API_KEY="sua-chave-openai"
\`\`\`

### 5. Configurações Adicionais

1. **Domínio Personalizado**
   - Vá em "Settings > Domains"
   - Adicione seu domínio
   - Siga as instruções de DNS

2. **Analytics e Monitoramento**
   - Ative o Vercel Analytics
   - Configure Speed Insights
   - Habilite logs de produção

3. **Proteção e Cache**
   - Configure proteção DDoS
   - Ajuste regras de cache
   - Habilite Prerender se necessário

## Verificações Pós-Deploy

1. **Banco de Dados**
   ```bash
   # Execute as migrações
   npx prisma migrate deploy
   ```

2. **Funcionalidades**
   - Teste o formulário de lista de espera
   - Verifique o blog e busca
   - Teste a API com Postman/Insomnia

3. **Performance**
   - Verifique Web Vitals
   - Teste tempo de carregamento
   - Valide SEO e meta tags

## Manutenção

### Atualizações

1. Push para main/master dispara deploy automático
2. Preview deployments em PRs
3. Rollback disponível se necessário

### Monitoramento

1. Configure alertas de erro
2. Monitore métricas de performance
3. Acompanhe uso do banco de dados

## Troubleshooting

### Problemas Comuns

1. **Build Falhou**
   - Verifique logs de build
   - Confirme variáveis de ambiente
   - Valide dependências

2. **Erro de Conexão DB**
   - Verifique string de conexão
   - Confirme IP na whitelist
   - Teste migrações localmente

3. **API 500**
   - Verifique logs de runtime
   - Teste endpoints localmente
   - Valide tokens de autenticação

## Recursos Adicionais

- [Documentação Vercel](https://vercel.com/docs)
- [Guia Prisma Deploy](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)
- [Next.js na Vercel](https://nextjs.org/docs/deployment) 