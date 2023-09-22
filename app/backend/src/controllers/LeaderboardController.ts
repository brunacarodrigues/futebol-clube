import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  constructor(private service = new LeaderboardService()) {}

  async getAllTeamHome(_req: Request, res: Response) {
    const accordingTo = 'homeGame';
    const { code, response } = await this.service.getAllLB(accordingTo);

    return res.status(code).json(response);
  }
}
