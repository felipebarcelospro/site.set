import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/shared/utils/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método não permitido' })
  }

  const { q } = req.query

  if (typeof q !== 'string') {
    return res.status(400).json({ message: 'Query inválida' })
  }

  try {
    const posts = await prisma.post.findMany({
      where: {
        OR: [
          { title: { contains: q } },
          { content: { contains: q } },
          { excerpt: { contains: q } },
        ],
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return res.status(200).json(posts)
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar posts' })
  }
} 