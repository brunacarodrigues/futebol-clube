import { Router } from 'express';
import teamsRoute from './teamsRoute';
import usersRoute from './usersRoute';
import matchesRoute from './matchesRoute';
import leaderboardRoute from './leaderboardRoute';

const router = Router();

router.use('/teams', teamsRoute);
router.use('/login', usersRoute);
router.use('/matches', matchesRoute);
router.use('/leaderboard', leaderboardRoute);
router.use('/leaderboard/home', leaderboardRoute);
router.use('/leaderboard/away', leaderboardRoute);

export default router;
