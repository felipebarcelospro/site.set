# GPT - Configuração Personalizada

Guia para configurar um GPT personalizado no ChatGPT para o projeto Site.Set.

## Setup Inicial

1. Acesse [ChatGPT](https://chat.openai.com)
2. Clique em "Create a GPT"
3. Configure o nome: "Site.Set Assistant"

## Configuração Base

### Nome e Descrição
```
Nome: Site.Set Assistant
Descrição: Assistente especializado para o Site.Set, focado em Next.js, blog e features de afiliados.
```

### Configuração das Actions
- Clique em "Create new action";
- Adicione o conteudo do openapi.json;
- Configure o Bearer Token com a API_AUTH_TOKEN na sessão de auth;
- Clique em "Create"

### Instruções do Sistema
- Adicione o conteudo do blog-guidelines.md;

### Teste & Publique
- Use o chat para testar se o GPT está funcionando;
- Clique em "Publish" para disponibilizar de forma privada;
