import bcrypt from 'bcrypt';
import config from '@/config/config';
import { Request, Response } from 'express';
import UserRepository from '@/repositories/userRepository';
import { LoginType } from '@/dtos/LoginDto';
import jwtService from '@/lib/jwt';

const register = async (req: Request, res: Response) => {

  const userDto = req.body;
  const { password, email, lastname, firstname } = userDto;

  // if user exists
  const oldUser = await UserRepository.findUserByEmail(email);

  if (oldUser) {
    res.status(400).json({ message: `User ${email} already exists` });
  }

  const hashed = await bcrypt.hash(password, config.saltRound);
  const user = await UserRepository
    .saveUser({ email, lastname, firstname, password: hashed });

  res.status(201).json(user);

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
    res.status(400).json({ message: 'Wrong password' });
  }

//   jwt
  const token = jwtService.generateToken(user);
  res.status(200).json({
    user,
    token,
  });


};


export default { register, login };
