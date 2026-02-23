import { Router } from 'express';
import {
  createTournament,
  getAllTournaments,
  getTournamentsBySlug,
} from '../controllers/tournament.controller.js';

import editionRouter from './tournamentEdition.routes.js';

const tournamentRouter = Router();

tournamentRouter.post('/', createTournament);
tournamentRouter.get('/', getAllTournaments);
tournamentRouter.get('/:slug', getTournamentsBySlug);

tournamentRouter.use('/:slug/editions', editionRouter);

export default tournamentRouter;