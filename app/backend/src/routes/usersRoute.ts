import { Router, Request, Response } from 'express';
import validateLogin from '../middleware/UserValidation';
import UserController from '../controllers/UserController';

const userController = new UserController();

const router = Router();

router.post(
  '/',
  validateLogin,
  (req: Request, res: Response) => userController.login(req, res),
);

export default router;
