import { z } from 'zod'

export const searchPostsSchema = z.object({
  searchTerm: z.string().optional(),
})

export const getPostBySlugSchema = z.object({
  slug: z.string(),
})

export type SearchPostsInput = z.infer<typeof searchPostsSchema>
export type GetPostBySlugInput = z.infer<typeof getPostBySlugSchema> 