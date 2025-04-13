import express from 'express';
import { userRegisterSchema } from '@/dtos/RegisterDto';
import UserService from '@/services/userService';
import validate from '@/lib/yup';
import { userLoginSchema } from '@/dtos/LoginDto';
import { activateUserSchema, sendCodeSchema } from '@/dtos/ActivateUserDto';

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

router.post(
  '/activate',
  validate(activateUserSchema),
  UserService.activateUser,
);


router.post(
  "/sendCode",
  validate(sendCodeSchema),
  UserService.regenerateCode
)


export default router;
