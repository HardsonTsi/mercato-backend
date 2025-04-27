import { PrismaClient, User, Club } from '@/generated/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (!global.prisma) {
  prisma.$connect().then(() => console.log('Mongo 🚀'))
    .catch(() => console.error('Mongo 🚫'));
}


if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export type UserType = User
export type ClubType = Club

export default prisma;
