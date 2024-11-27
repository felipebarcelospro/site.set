'use server'

import { prisma } from '@/shared/utils/prisma'
import { actionSiteClient } from '../../actions/client'
import { subscribeToWaitlistSchema } from './schema'

export const subscribeToWaitlist = actionSiteClient.action({
  name: 'subscribe-to-waitlist',
  type: 'mutate',
  schema: subscribeToWaitlistSchema,
  handler: async ({ input, context }) => {
    const email = input.email 
  
    try {
      // Verifica se o e-mail já existe
      const existingUser = await prisma.user.findUnique({
        where: { email }
      })
  
      // Se já existe, retorna sucesso
      if (existingUser) {
        return {
          success: true,
          message: 'E-mail já cadastrado'
        }
      }
  
      // Se não existe, cria novo usuário
      await prisma.user.create({
        data: { email }
      })
  
      return {
        success: true,
        message: 'E-mail cadastrado com sucesso'
      }
    } catch (error) {
      return {
        error: 'Erro ao cadastrar e-mail'
      }
    }
  } 
})
