import { CreatePlayerType } from '@/dtos/Players.dto';
import prisma, { FootballPositionType } from '@/lib/prisma';

const createPlayer = async (clubId: string, data: CreatePlayerType) => {
  return prisma.player.create({
    data: {
      ...data,
      clubId,
    },
  });
};

const updatePlayer = async (clubId: string, id: string, data: CreatePlayerType) => {
  return prisma.player.update({
    data,
    where: {
      clubId,
      id,
    },
  });
};

const findPlayerById = async (id: string) => {
  return prisma.player.findUnique({
    where: { id },
  });
};

const deletePlayerById = async (clubId: string, id: string) => {
  return prisma.player.delete({
    where: { id, clubId },
  });
};

const searchPlayer = async (data: {
  name: string;
  available: boolean;
  country: string;
  price: number;
  position: FootballPositionType;
}) => {
  const { name, available, country, price, position } = data;
  return prisma.player.findMany({
    where: {
      OR: [
        {
          lastname: {
            contains: name,
          },
        },
        {
          position: {
            equals: position,
          },
        },
        {
          firstname: {
            contains: name,
          },
        },
        {
          country: {
            equals: country,
          },
        },
        {
          available: {
            equals: available,
          },
        },
        {
          price: {
            lte: price,
          },
        },
      ],
    },
  });
};

const findClubPlayers = async (clubId: string) => {
  return prisma.player.findMany({
    where: {
      clubId,
    },
  });
};

export default { createPlayer, updatePlayer, findPlayerById, searchPlayer, deletePlayerById, findClubPlayers };
