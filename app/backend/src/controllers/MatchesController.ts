import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  constructor(private service = new MatchesService()) {}

  async getAllMatches(_req: Request, res: Response) {
    const { code, response } = await this.service.getAllMatches();

    return res.status(code).json(response);
  }
}
