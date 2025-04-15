import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth';
import { withHttpStatus } from '@/middlewares/middlewares';
import bullBoardAdapter from '@/bullmq/bullboard';
import clubRouter from '@/routes/club';


const app = express();

app.use(express.json());

app.use(cors())
app.use(withHttpStatus);
app.use('/queues', bullBoardAdapter.getRouter());


app.use('/auth', authRouter);
app.use('/club', clubRouter)


export default app;
