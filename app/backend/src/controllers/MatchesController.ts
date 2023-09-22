import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  constructor(private service = new MatchesService()) {}

  async getAllMatches(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;
    const matches = await this.service.getAllMatches(inProgress as string);
    return res.status(200).json(matches);
  }

  async saveMatch(req: Request, res: Response):Promise<Response> {
    const match = req.body;
    const { code, response } = await this.service.saveMatch(match);

    return res.status(code).json(response);
  }

  async finishMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { code, message } = await this.service.finishedMatch(Number(id));

    return res.status(code).json(message);
  }

  async updateMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const match = req.body;

    const { code, message } = await this.service.updateMatch(
      Number(id),
      match.awayTeamGoals,
      match.homeTeamGoals,
    );

    return res.status(code).json(message);
  }
}
