import { Router } from 'express';
import {
  createTournament,
  getAllTournaments,
  getTournamentsBySlug,
} from '../controllers/tournament.controller.js';

const tournamentRouter = Router();

tournamentRouter.post('/', createTournament);
tournamentRouter.get('/', getAllTournaments);
tournamentRouter.get('/:slug', getTournamentsBySlug);

export default tournamentRouter;