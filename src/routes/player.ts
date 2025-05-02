import express from 'express';
import { checkJWT } from '@/middlewares/middlewares';
import validate from '@/lib/yup';
import { createPlayerDto } from '@/dtos/Players.dto';
import PlayerService from '@/services/PlayerService';

const playersRouter = express.Router();

playersRouter.use(checkJWT);

playersRouter.post(
  '/create',
  validate(createPlayerDto),
  PlayerService.createPlayer,
);

playersRouter.put(
  '/update/:id',
  validate(createPlayerDto.partial()),
  PlayerService.updatePlayer,
);

playersRouter.get(
  '/:id',
  PlayerService.getPlayerById,
);

playersRouter.delete(
  '/delete/:id',
  PlayerService.deletePlayer,
);

playersRouter.get(
  '/',
  PlayerService.getClubPlayers,
);

export default playersRouter;
