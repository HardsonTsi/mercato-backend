import jwt from 'jsonwebtoken';
import { UserType } from '@/lib/prisma';
import config from '@/config/config';

const generateToken = (user: UserType) => {
  return jwt.sign({ ...user, expiresIn: config.jwt.duration }, config.jwt.secret);
};


export default { generateToken };
