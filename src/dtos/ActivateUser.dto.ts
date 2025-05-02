import { InferType, object, string } from 'yup';


const activateUserSchema = object({
  email: string().email().required('Email is required'),
  code: string().length(6, 'Must be 6 digits').required('Code is required'),
});

const sendCodeSchema = object({
  email: string().email().required('Email is required'),
});

type ActivateUserType = InferType<typeof activateUserSchema>

export { activateUserSchema, sendCodeSchema, ActivateUserType };
