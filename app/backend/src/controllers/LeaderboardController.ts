import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  constructor(private service = new LeaderboardService()) {}

  async getLBHome(_req: Request, res: Response) {
    const accordingTo = 'homeGame';
    const { code, response } = await this.service.getLBHome(accordingTo);

    return res.status(code).json(response);
  }

  async getLBAway(_req: Request, res: Response) {
    const accordingTo = 'awayGame';
    const { code, response } = await this.service.getLBAway(accordingTo);

    return res.status(code).json(response);
  }

  async getClassify(_req: Request, res: Response) {
    const { code, response } = await this.service.getClassify();

    return res.status(code).json(response);
  }
}
