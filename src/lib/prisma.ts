import {
  Club,
  Player,
  PrismaClient,
  User,
  Transfer
} from '@/generated/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient({
  errorFormat: 'pretty',
});

if (!global.prisma) {
  prisma.$connect().then(() => console.log('Mongo 🚀'))
    .catch(() => console.error('Mongo 🚫'));
}


if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export type UserType = User
export type ClubType = Club
export type PlayerType = Player
export type TransferType = Transfer

export default prisma;
