import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/shared/utils/prisma'
import { z } from 'zod'

const createWaitlistSchema = z.object({
  email: z.string().email(),
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      })

      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar usuários' })
    }
  }

  if (req.method === 'POST') {
    try {
      const { email } = createWaitlistSchema.parse(req.body)

      // Verifica se o e-mail já existe
      const existingUser = await prisma.user.findUnique({
        where: { email }
      })

      // Se já existe, retorna sucesso
      if (existingUser) {
        return res.status(200).json({ message: 'E-mail já cadastrado' })
      }

      // Se não existe, cria novo usuário
      const user = await prisma.user.create({
        data: { email }
      })

      return res.status(201).json(user)
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ message: 'E-mail inválido' })
      }

      return res.status(500).json({ message: 'Erro ao cadastrar e-mail' })
    }
  }

  return res.status(405).json({ message: 'Método não permitido' })
} 