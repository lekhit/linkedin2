const { Deta } = require('deta');

export const deta=Deta(process.env.DETA_KEY)

export const jobs=deta.Base('jobs2')

import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma