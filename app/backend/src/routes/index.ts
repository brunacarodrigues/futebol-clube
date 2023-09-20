import { Router } from 'express';
import teamsRoute from './teamsRoute';
import usersRoute from './usersRoute';
import matchesRoute from './matchesRoute';

const router = Router();

router.use('/teams', teamsRoute);
router.use('/login', usersRoute);
router.use('/matches', matchesRoute);

export default router;
