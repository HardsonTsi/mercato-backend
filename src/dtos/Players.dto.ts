import { FootballPosition } from '@/generated/client';
import { FootballPositionType } from '@/lib/prisma';
import { boolean, InferType, number, object, string, date, mixed } from 'yup';

export const createPlayerDto = object({
  lastname: string().required(),
  firstname: string().required(),
  email: string().email('Email invalide').required(),
  number: number().positive().moreThan(0).required(),
  available: boolean().default(true).required(),
  price: number().positive().moreThan(0).required(),
  country: string().required(),
  avatar: string().url().required(),
  birthday:  date().required(),
  position: mixed<FootballPositionType>().required(),
});

export type CreatePlayerType = InferType<typeof createPlayerDto>

