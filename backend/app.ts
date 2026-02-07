import express, { Request, Response } from 'express';
import matchRouter from './routes/match.routes';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('Slamma API online!');
})

app.use('/api/v1/matches', matchRouter);

export default app;