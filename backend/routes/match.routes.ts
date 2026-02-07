import { Router } from 'express';
import { getMatches } from '../controllers/match.controller';
import { createMatch } from '../controllers/admin.match.controller';

const matchRouter = Router();

// Public Match Routes
matchRouter.get('/', getMatches);


// ------------------

// Admin Match Routes
matchRouter.post('/admin', createMatch);

export default matchRouter;