import { prisma } from '@/shared/utils/prisma'
import { createActionClient } from 'next-actions'

export const actionSiteClient = createActionClient({
  context: () => ({
    providers: {
      prisma
    }
  })
})
