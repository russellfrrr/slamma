import express from 'express';
import tournamentRouter from './routes/tournament.routes.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Slamma API!');
});

app.use('/api/v1/tournaments', tournamentRouter);

export default app;