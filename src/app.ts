import 'reflect-metadata';
import express from 'express';
import authRouter from './routes/auth.js';
const app = express();

app.get('/', (req: any, res: any) => {
  res.status(200).send('Hello World!');
});

app.use('/auth', authRouter);

export default app;
