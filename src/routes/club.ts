import express from 'express';
import { checkJWT } from '@/middlewares/middlewares';

import clubService from '@/services/ClubService';
import validate from '@/lib/yup';
import { createClubDto } from '@/dtos/CreateClub.dto';

const clubRouter = express.Router();


clubRouter.use(checkJWT);

clubRouter.post(
  '/create',
  validate(createClubDto),
  clubService.createClub,
);

clubRouter.put(
  '/update',
  validate(createClubDto),
  clubService.updateClub,
);

export default clubRouter;
