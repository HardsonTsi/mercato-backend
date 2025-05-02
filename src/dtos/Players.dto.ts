import { boolean, InferType, number, object, string } from 'yup';

export const createPlayerDto = object({
  lastname: string().required(),
  firstname: string().required(),
  email: string().email('Email invalide').required(),
  number: number().positive().moreThan(0).required(),
  available: boolean().default(true).required(),
  price: number().positive().moreThan(0).required(),
  country: string().required(),
  avatar: string().url().required(),
});

export type CreatePlayerType = InferType<typeof createPlayerDto>

