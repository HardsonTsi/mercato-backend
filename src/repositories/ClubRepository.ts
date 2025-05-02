import prisma from '@/lib/prisma';
import { CreateClubType } from '@/dtos/CreateClub.dto';

const createClub = async (data: CreateClubType) => {
  return prisma.club.create({
    data,
  });
};

const updateClubById = async (id: string, data: CreateClubType) => {
  delete data.user;

  return prisma.club.update({
    where: {
      id,
    },
    data,
    include: {
      players: true,
    },
  });
};

export default { createClub, updateClubById };
