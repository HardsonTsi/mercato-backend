import bcrypt from 'bcrypt';
import config from '@/config/config';
import { Request, Response } from 'express';
import UserRepository from '@/repositories/userRepository';
import { LoginType } from '@/dtos/LoginDto';
import jwtService from '@/lib/jwt';
import { UserRegisterType } from '@/dtos/RegisterDto';
import { ActivateUserType } from '@/dtos/ActivateUserDto';
import otp from '@/lib/otp';
import queues from '@/bullmq/queues';
import { UserType } from '@/lib/prisma';

const register = async (req: Request, res: Response) => {

  const userDto: UserRegisterType = req.body;
  const { password, email, lastname, firstname, role, isActived } = userDto;

  // if user exists
  const oldUser = await UserRepository.findUserByEmail(email);

  if (oldUser) {
    res.status(400).json({ message: `User ${email} already exists` });
    return;
  }
  const hashed = await bcrypt.hash(password, config.saltRound);
  const user = await UserRepository
    .saveUser({ email, lastname, firstname, password: hashed, role, isActived });

  // send mail
  await sendActivateMail(user);

  res.status(201).json(user);

};

const activateUser = async (req: Request, res: Response) => {
  const dto: ActivateUserType = req.body;
  const { email, code } = dto;
  const user = await UserRepository.findUserByEmail(email);

  if (!user) {
    res.status(404).send({ mesage: `User ${dto.email} not found` });
    return;
  }

  const matched = otp.verifyOtpCode(code);

  if (!matched) {
    res.status(400).send({ message: `Invalid code: ${code}` });
    return;
  }

  await UserRepository.updateUserByEmail(dto.email, { isActived: true });

  res.status(200).send({ message: `User ${email} updated successfully` });

};

const sendActivateMail = async (user: UserType) => {
  const code = otp.generateOtpCode();
  await queues.UserActivationQueue.add(user.email, { ...user, code });
};

const login = async (req: Request, res: Response) => {
  const loginDto: LoginType = req.body;
  const { email, password } = loginDto;

  const user = await UserRepository.findUserByEmail(email);

  if (!user) {
    throw new Error(`User ${email} not found`);
  }

  const verifiedPassword = await bcrypt.compare(password, user.password);

  if (!verifiedPassword) {
    res.status(401).json({ message: 'Wrong password' });
  }

  if (!user.isActived) {
    res.status(403).json({ message: 'Please, confirm your account' });
    return;
  }

//   jwt
  const token = jwtService.generateToken(user);
  res.status(200).json({
    user,
    token,
  });


};


export default { register, login, activateUser };
