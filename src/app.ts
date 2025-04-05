import express from 'express';
import authRouter from './routes/auth';
import { withHttpStatus } from '@/middlewares/middlewares';

const app = express();


app.use(express.json());
app.use(withHttpStatus);

app.use('/auth', authRouter);


export default app;
