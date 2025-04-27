import prisma, { UserType } from '@/lib/prisma';
import { UserRegisterType } from '@/dtos/RegisterDto';
import UserService from '@/services/UserService';

const saveUser = async (data: UserRegisterType) => {
  return prisma.user.create({
    data,
  });
};

const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
    include: {
      club: true,
    },
  });
};

const updateUserByEmail = async (email: string, data: Partial<UserType>) => {
  return prisma.user.update({
    where: { email },
    data,
  });
};

const assignClubToUser = async (email: string, clubId: string) => {

  return prisma.user.update({
    data: {
      clubId: clubId,
    },
    where: {
      email,
    },
  });

};

export default { saveUser, findUserByEmail, updateUserByEmail, assignClubToUser };
