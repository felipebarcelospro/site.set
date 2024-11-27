# Deploy - Vercel

Guia para fazer deploy do Site.Set na Vercel.

## Requisitos

1. Conta na [Vercel](https://vercel.com)
2. Repositório no GitHub
3. Banco PostgreSQL (Vercel ou outro)

## Setup

### 1. Preparação

1. Verifique o repositório no GitHub
2. Configure o `vercel.json`:
   ```json
   {
     "version": 2,
     "buildCommand": "npx prisma generate && npm run build",
     "devCommand": "npm run dev",
     "installCommand": "npm install",
     "framework": "nextjs",
     "regions": ["gru1"]
   }
   ```

### 2. Banco de Dados

#### Vercel Postgres
1. Dashboard > Storage
2. Criar banco Postgres
3. Variáveis adicionadas automaticamente

#### Outro Provedor
1. Obtenha URL de conexão
2. Adicione nas variáveis de ambiente

### 3. Deploy

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe o repositório
3. Configure:
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: (padrão)

### 4. Variáveis

```bash
# Database
DATABASE_URL="sua-url-postgres"

# API
API_AUTH_TOKEN="token-seguro"
NEXT_PUBLIC_API_KEY="chave-publica"

# OpenAI
OPENAI_API_KEY="sua-chave"
```

## Configurações

### Domínio
1. Settings > Domains
2. Adicione seu domínio
3. Configure DNS

### Analytics
1. Ative Vercel Analytics
2. Configure Speed Insights
3. Habilite logs

### Proteção
1. Configure DDoS
2. Ajuste cache
3. Ative Prerender

## Pós-Deploy

### Database
```bash
npx prisma migrate deploy
```

### Checklist
- [ ] Form de waitlist
- [ ] Blog e busca
- [ ] API (Postman/Insomnia)

### Performance
- [ ] Web Vitals
- [ ] Loading time
- [ ] SEO/meta tags

## Manutenção

### Updates
1. Push para main = deploy
2. Preview em PRs
3. Rollback disponível

### Monitoramento
1. Alertas de erro
2. Métricas
3. Uso do banco

## Problemas Comuns

### Build
```
Erro: Build failed
```
- Verifique logs
- Confirme vars
- Valide deps

### Database
```
Erro: Connection failed
```
- Verifique string
- Confirme IP
- Teste migrations

### API
```
Erro: 500 Internal
```
- Verifique logs
- Teste endpoints
- Valide tokens

## Links

- [Docs Vercel](https://vercel.com/docs)
- [Prisma Deploy](https://www.prisma.io/docs/guides/deployment/deploying-to-vercel)
- [Next.js Deploy](https://nextjs.org/docs/deployment) 