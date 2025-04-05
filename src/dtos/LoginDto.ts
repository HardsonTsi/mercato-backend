import config from '@/config/config';
import { InferType, object, string } from 'yup';

const userLoginSchema = object({
  email: string().email().required('Email is required'),
  password: string().min(config.passwordLength, '').required(`Password too short, at least length ${config.passwordLength}`),
});

type LoginType = InferType<typeof userLoginSchema>

export { userLoginSchema, LoginType };
