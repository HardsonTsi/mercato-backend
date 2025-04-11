import prisma, { UserType } from '@/lib/prisma';
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

const updateUserByEmail = async (email: string, data: Partial<UserType>) => {
  return prisma.user.update({
    where: { email },
    data,
  });
};

export default { saveUser, findUserByEmail, updateUserByEmail };
