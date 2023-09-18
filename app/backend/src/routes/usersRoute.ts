import { Router, Request, Response } from 'express';
import validateLogin from '../middleware/UserValidation';
import UserController from '../controllers/UserController';
import validateToken from '../middleware/TokenValidation';

const userController = new UserController();

const router = Router();

router.post(
  '/',
  validateLogin,
  (req: Request, res: Response) => userController.login(req, res),
);
router.get(
  '/role',
  validateToken,
  (req: Request, res: Response) => userController.getRoleObject(req, res),
);

export default router;
