import { Router, Request, Response } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardController = new LeaderboardController();

const router = Router();

router.get('/', (req, res) => leaderboardController.getClassify(req, res));
router.get(
  '/home',
  (req: Request, res: Response) => leaderboardController.getLBHome(req, res),
);
router.get(
  '/away',
  (req: Request, res: Response) => leaderboardController.getLBAway(req, res),
);

export default router;
