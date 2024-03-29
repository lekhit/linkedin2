// const { Deta } = require('deta');

// export const deta=Deta(process.env.DETA_KEY,1,"c02R7jSCpopE")

// export const jobs=deta.Base('jobs2')
// export const blogs=deta.Base('blogs')
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma