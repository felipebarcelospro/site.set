import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/shared/utils/prisma'
import { updatePostSchema } from '@/shared/schemas/post'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query

  if (typeof slug !== 'string') {
    return res.status(400).json({ message: 'Slug inválido' })
  }

  if (req.method === 'GET') {
    try {
      const post = await prisma.post.findUnique({
        where: { slug }
      })

      if (!post) {
        return res.status(404).json({ message: 'Post não encontrado' })
      }

      return res.status(200).json(post)
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar post' })
    }
  }

  if (req.method === 'PUT') {
    try {
      const validatedData = updatePostSchema.parse(req.body)

      const post = await prisma.post.update({
        where: { slug },
        data: validatedData
      })

      return res.status(200).json(post)
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ message: 'Dados inválidos', errors: error.errors })
      }

      if (error.code === 'P2025') {
        return res.status(404).json({ message: 'Post não encontrado' })
      }

      return res.status(500).json({ message: 'Erro ao atualizar post' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      await prisma.post.delete({
        where: { slug }
      })

      return res.status(204).end()
    } catch (error: any) {
      if (error.code === 'P2025') {
        return res.status(404).json({ message: 'Post não encontrado' })
      }

      return res.status(500).json({ message: 'Erro ao deletar post' })
    }
  }

  return res.status(405).json({ message: 'Método não permitido' })
} 