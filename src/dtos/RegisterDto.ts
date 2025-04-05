import config from '@/config/config';
import { InferType, object, string } from 'yup';

const userRegisterSchema = object({
  email: string().email().required('Email is required'),
  password: string().min(config.passwordLength, `Password too short, at least length ${config.passwordLength}`).required(),
  firstname: string().notRequired(),
  lastname: string().notRequired(),
});

type UserRegisterType = InferType<typeof userRegisterSchema>

export { userRegisterSchema, UserRegisterType };
