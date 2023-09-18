import { Request, Response, NextFunction } from 'express';
import JWT from '../utils/JWT';

function validateToken(req: Request, res: Response, next: NextFunction): Response | void {
  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const token = bearerToken.split(' ')[1];
    const validToken = JWT.verify(token);
    req.body.user = validToken;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}

export default validateToken;
