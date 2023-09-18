import { Router } from 'express';
import teamsRoute from './teamsRoute';
import usersRoute from './usersRoute';

const router = Router();

router.use('/teams', teamsRoute);
router.use('/login', usersRoute);

export default router;
