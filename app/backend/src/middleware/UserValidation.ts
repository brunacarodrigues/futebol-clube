import { Request, Response, NextFunction } from 'express';
import { ILogin } from '../Interfaces/ILogin';

export default function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body as ILogin;
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email);

  if (!email || !password) {
    const message = 'All fields must be filled';
    return res.status(400).json({ message });
  }

  if (password.length < 6 || !emailRegex) {
    const message = 'Invalid email or password';
    return res.status(401).json({ message });
  }
  next();
}
