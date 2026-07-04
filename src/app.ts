import express from 'express';
const app = express();

app.get('/', (req: any, res: any) => {
  res.status(200).send('Hello World!');
});

export default app;
