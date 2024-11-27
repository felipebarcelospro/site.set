import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/shared/utils/prisma'
import { createPostSchema } from '@/shared/schemas/post'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const posts = await prisma.post.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      })

      return res.status(200).json(posts)
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar posts' })
    }
  }

  if (req.method === 'POST') {
    try {
      const validatedData = createPostSchema.parse(req.body)

      const post = await prisma.post.create({
        data: validatedData
      })

      return res.status(201).json(post)
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ message: 'Dados inválidos', errors: error.errors })
      }

      return res.status(500).json({ message: 'Erro ao criar post' })
    }
  }

  return res.status(405).json({ message: 'Método não permitido' })
} 