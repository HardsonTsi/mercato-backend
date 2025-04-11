import { InferType, object, string } from 'yup';


const activateUserSchema = object({
  email: string().email().required('Email is required'),
  code: string().length(6, 'Must be 6 digits').required('Code is required'),
});

type ActivateUserType = InferType<typeof activateUserSchema>

export { activateUserSchema, ActivateUserType };
