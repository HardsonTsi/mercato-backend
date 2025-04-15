import jwt from 'jsonwebtoken';
import { UserType } from '@/lib/prisma';
import config from '@/config/config';

const generateToken = (user: UserType) => {
  return jwt.sign({ user, expiresIn: config.jwt.duration }, config.jwt.secret);
};

const verify = (token: string) => {

  try {
    const decoded: any = jwt.verify(token, config.jwt.secret);
    if (decoded) {
      return decoded['user'];
    }
  } catch (err) {
    return false;
  }

};

export default { generateToken, verify };
