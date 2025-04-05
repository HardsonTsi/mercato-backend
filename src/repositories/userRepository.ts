import prisma from '@/lib/prisma';
import { UserRegisterType } from '@/dtos/RegisterDto';

const saveUser = async (data: UserRegisterType) => {
  return prisma.user.create({
    data,
  });
};

const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export default { saveUser, findUserByEmail };
