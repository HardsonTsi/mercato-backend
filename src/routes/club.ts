import express, { Request, Response } from 'express';
import { checkJWT } from '@/middlewares/middlewares';

const clubRouter = express.Router()


clubRouter.use(checkJWT)

clubRouter.get(
  "/",
  (req: Request, res: Response) => {
    res.status(200).json(req.body.user)
  }
)
























export default clubRouter
