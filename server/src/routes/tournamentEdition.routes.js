import { Router } from 'express';
import {
  createEdition,
  getEditions,
  getSpecificEdition,
} from '../controllers/tournamentEdition.controller.js';

const editionRouter = Router({ mergeParams: true });


editionRouter.post('/', createEdition);
editionRouter.get('/', getEditions);
editionRouter.get('/:year/:tour', getSpecificEdition);

export default editionRouter;