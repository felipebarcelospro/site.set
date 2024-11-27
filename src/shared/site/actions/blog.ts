'use server'

import { prisma } from '@/shared/utils/prisma'
import { actionSiteClient } from './client'
import { searchPostsSchema, getPostBySlugSchema } from '@/shared/schemas/blog'
import { delay } from '@/shared/utils/delay'

export const searchPosts = actionSiteClient.action({
  name: 'search-posts',
  type: 'query',
  schema: searchPostsSchema,
  handler: async ({ input }) => {
    try {
      const posts = await prisma.post.findMany({
        where: input.searchTerm ? {
          OR: [
            { title: { contains: input.searchTerm } },
            { content: { contains: input.searchTerm } },
            { excerpt: { contains: input.searchTerm } },
          ],
        } : undefined,
        orderBy: {
          createdAt: 'desc'
        },
        select: {
          slug: true,
          title: true,
          excerpt: true,
          coverUrl: true,
          createdAt: true,
        }
      })

      return {
        success: true,
        data: posts.map(post => ({
          ...post,
          createdAt: post.createdAt.toISOString(),
        }))
      }
    } catch (error) {
      return {
        error: 'Erro ao buscar posts'
      }
    }
  }
})

export const getPostBySlug = actionSiteClient.action({
  name: 'get-post-by-slug',
  type: 'query',
  schema: getPostBySlugSchema,
  handler: async ({ input }) => {
    try {
      const post = await prisma.post.findUnique({
        where: { slug: input.slug }
      })

      if (!post) {
        return {
          error: 'Post não encontrado'
        }
      }

      return {
        success: true,
        data: {
          ...post,
          createdAt: post.createdAt.toISOString(),
          updatedAt: post.updatedAt.toISOString(),
        }
      }
    } catch (error) {
      return {
        error: 'Erro ao buscar post'
      }
    }
  }
}) 