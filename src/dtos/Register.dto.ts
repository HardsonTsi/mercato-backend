import config from '@/config/config';
import { boolean, InferType, object, string } from 'yup';

const userRegisterSchema = object({
  email: string().email().required('Email is required'),
  password: string().min(config.passwordLength, `Password too short, at least length ${config.passwordLength}`).required(),
  firstname: string().notRequired(),
  lastname: string().notRequired(),
  role: string().oneOf(['USER', 'ADMIN']).default('USER'),
  isActived: boolean().default(false),
});

type UserRegisterType = InferType<typeof userRegisterSchema>

export { userRegisterSchema, UserRegisterType };
