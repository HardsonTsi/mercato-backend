import express from 'express';
import { userRegisterSchema } from '@/dtos/RegisterDto';
import UserService from '@/services/userService';
import validate from '@/lib/yup';
import { userLoginSchema } from '@/dtos/LoginDto';

const router = express.Router();

router.post(
  '/register',
  validate(userRegisterSchema),
  UserService.register,
);


router.post(
  '/login',
  validate(userLoginSchema),
  UserService.login,
);


export default router;
