import { z } from 'zod'

export const subscribeToWaitlistSchema = z.object({
  email: z.string().email('E-mail inválido'),
})
