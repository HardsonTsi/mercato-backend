import { InferType, number, object, string, mixed } from 'yup';
import { UserType } from '@/lib/prisma';

const createClubDto = object({
  name: string().required("Name is required"),
  country: string().required("Country is required"),
  budget: number().default(0).required("Budget is required"),
  user: mixed<UserType>()
})

type CreateClubType = InferType<typeof createClubDto>

export {createClubDto, CreateClubType}
