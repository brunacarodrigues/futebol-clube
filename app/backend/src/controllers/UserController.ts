import { Request, Response } from 'express';
import { ILogin } from '../Interfaces/ILogin';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(private model = new UserService()) {}

  async login(req: Request, res: Response) {
    const user = req.body as ILogin;
    const { code, message, token } = await this.model.login(user);

    if (message) return res.status(code).json({ message });
    return res.status(code).json({ token });
  }

  async validateLogin(req: Request, res: Response) {
    const { authorization } = req.headers;
    const { code, message, role } = await this.model.validateLogin(authorization);

    if (message) return res.status(code).json({ message });
    return res.status(code).json({ role });
  }

  async getRoleObject(req: Request, res: Response): Promise<Response> {
    const user = await this.model.getRoleObject(req.body.user.email);

    if (user.status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(user.status)).json(user.data);
    return res.status(200).json({ role: user.data });
  }
}
