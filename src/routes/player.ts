import express from 'express';
import { checkJWT } from '@/middlewares/middlewares';
import validate from '@/lib/yup';
import { createPlayerDto } from '@/dtos/Players.dto';
import PlayerService from '@/services/PlayerService';
import { martketplaceDto } from '@/dtos/Martketplace.dto';

const playersRouter = express.Router();


playersRouter.use(checkJWT);

playersRouter.get(
  '/',
  PlayerService.getClubPlayers,
);

playersRouter.get(
  "/marketplace",
  PlayerService.getMarketplace
)

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

playersRouter.post(
  "/buy",
  validate(martketplaceDto),
  PlayerService.sellPlayer
)



export default playersRouter;
