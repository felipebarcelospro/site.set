# CLI para Geração de Conteúdo

Este guia explica como configurar e utilizar o CLI para geração automatizada de conteúdo do blog usando OpenAI GPT.

## Pré-requisitos

1. Conta na OpenAI com créditos disponíveis
2. Chave de API da OpenAI
3. Node.js 18+ instalado

## Configuração

1. Adicione sua chave da OpenAI no arquivo `.env`:
   \`\`\`env
   OPENAI_API_KEY="sua-chave-aqui"
   \`\`\`

2. Verifique se o arquivo `blog-guidelines.md` está atualizado com suas diretrizes de conteúdo

## Uso do CLI

Use o comando:
\`\`\`bash
npm run generate
\`\`\`

O CLI irá:
1. Solicitar um tema para o post
2. Gerar o conteúdo usando GPT-4
3. Criar o arquivo Markdown na pasta correta
4. Adicionar metadados necessários

### Personalização do Prompt

O prompt base está em `scripts/cli.ts` e pode ser personalizado:

\`\`\`typescript
const systemPrompt = \`
Você é um especialista em marketing digital e vendas online.
Seu objetivo é criar conteúdo educativo e envolvente para o blog do Site.Set.

Diretrizes:
1. Use tom profissional mas acessível
2. Inclua exemplos práticos
3. Foque em soluções acionáveis
4. Otimize para SEO
...\`
\`\`\`

### Estrutura do Post Gerado

Cada post gerado segue esta estrutura:
\`\`\`markdown
---
title: "Título SEO-friendly"
excerpt: "Resumo cativante com call-to-action"
coverUrl: "URL da imagem de capa"
---

# Título Principal

Introdução envolvente...

## Subtópico 1

Conteúdo detalhado...

## Subtópico 2

Mais conteúdo...

## Conclusão

Call-to-action final...
\`\`\`

## Melhores Práticas

1. **Temas**
   - Foque em problemas reais dos usuários
   - Use palavras-chave relevantes
   - Mantenha relevância para afiliados

2. **Conteúdo**
   - Verifique precisão das informações
   - Adicione exemplos locais
   - Mantenha tom consistente

3. **SEO**
   - Revise títulos e meta descrições
   - Otimize imagens
   - Adicione links internos

## Troubleshooting

### Erros Comuns

1. **Rate Limiting**
   ```
   Error: OpenAI API rate limit exceeded
   ```
   Solução: Aguarde alguns minutos e tente novamente

2. **Token Inválido**
   ```
   Error: Invalid API key
   ```
   Solução: Verifique sua chave no .env

3. **Timeout**
   ```
   Error: Request timed out
   ```
   Solução: Tente reduzir o tamanho do prompt

## Suporte

Para problemas ou dúvidas:
1. Abra uma issue no GitHub
2. Contate suporte@site.set
3. Consulte a [documentação da OpenAI](https://platform.openai.com/docs) 