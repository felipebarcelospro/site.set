import { z } from 'zod'

export const createPostSchema = z.object({
  title: z.string(),
  content: z.string(),
  excerpt: z.string(),
  coverUrl: z.string().url('URL da capa inválida'),
  slug: z.string(),
})

export const updatePostSchema = createPostSchema.partial()

// Schema para a resposta da OpenAI
export const openAIPostSchema = z.object({
  post: z.object({
    title: z.string()
      .describe('Título SEO-friendly do artigo'),

    excerpt: z.string()
      .describe('Resumo cativante do artigo com call-to-action'),

    content: z.string()
      .describe('Conteúdo do artigo em Markdown'),

    slug: z.string()
      .describe('URL-friendly slug do artigo'),

    coverUrl: z.string()
      .describe('Select an image from Pexels or Unsplash that you think is relevant and has a good license.'),

    seoKeywords: z.array(z.string())
      .describe('Palavras-chave principais para SEO'),
  })
})

export type CreatePost = z.infer<typeof createPostSchema>
export type UpdatePost = z.infer<typeof updatePostSchema>
export type OpenAIPost = z.infer<typeof openAIPostSchema> 