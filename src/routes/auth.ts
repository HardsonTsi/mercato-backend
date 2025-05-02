import express from 'express';
import { userRegisterSchema } from '@/dtos/Register.dto';
import UserService from '@/services/UserService';
import validate from '@/lib/yup';
import { userLoginSchema } from '@/dtos/Login.dto';
import { activateUserSchema, sendCodeSchema } from '@/dtos/ActivateUser.dto';
import { checkJWT } from '@/middlewares/middlewares';

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
  '/sendCode',
  validate(sendCodeSchema),
  UserService.regenerateCode,
);

router.get(
  '/profile',
  checkJWT,
  UserService.getUserProfile,
);


export default router;
