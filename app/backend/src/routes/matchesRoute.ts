import { Router, Request, Response } from 'express';
import validateToken from '../middleware/TokenValidation';
import { validateTeamsEquals, validateTeams } from '../middleware/TeamsValidation';
import MatchesController from '../controllers/MatchesController';

const matchesController = new MatchesController();

const router = Router();

router.get('/', (req: Request, res:Response) =>
  matchesController.getAllMatches(req, res));
router.patch(
  '/:id',
  validateToken,
  matchesController.updateMatch.bind(matchesController),
);
router.patch(
  '/:id/finish',
  validateToken,
  matchesController.finishMatch.bind(matchesController),
);
router.post(
  '/',
  validateToken,
  validateTeamsEquals,
  validateTeams,
  matchesController.saveMatch.bind(matchesController),
);

export default router;
