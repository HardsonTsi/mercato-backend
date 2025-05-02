import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRouter from './routes/auth';
import { withHttpStatus } from '@/middlewares/middlewares';
import bullBoardAdapter from '@/bullmq/bullboard';
import clubRouter from '@/routes/club';
import playerRouter from '@/routes/player';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(cors());
app.use(withHttpStatus);
app.use('/queues', bullBoardAdapter.getRouter());


app.use('/auth', authRouter);
app.use('/club', clubRouter);
app.use('/player', playerRouter);


export default app;
