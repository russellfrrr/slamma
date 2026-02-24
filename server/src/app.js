import express from 'express';
import cors from 'cors';
import tournamentRouter from './routes/tournament.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Slamma API!');
});

app.use('/api/v1/tournaments', tournamentRouter);

export default app;