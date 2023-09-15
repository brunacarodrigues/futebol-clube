import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

export default class TeamController {
  constructor(private service = new TeamsService()) {}

  async getAllTeams(_req: Request, res: Response) {
    const { code, response } = await this.service.getAllTeams();

    return res.status(code).json(response);
  }

  async getTeamById(req: Request, res: Response) {
    const { id } = req.params;

    const numberId = Number(id);

    const { code, response } = await this.service.getTeamById(numberId);

    return res.status(code).json(response);
  }
}
