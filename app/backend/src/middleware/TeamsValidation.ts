import { Request, Response, NextFunction } from 'express';
import { IMatches } from '../Interfaces/IMaches';
import MatchesModel from '../models/MatchesModel';

async function validateTeamsEquals(req: Request, res: Response, next: NextFunction) {
  const team: IMatches = req.body;
  const { awayTeamId, homeTeamId } = team;

  if (awayTeamId === homeTeamId) {
    return res
      .status(422)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }

  next();
}

async function validateTeams(req: Request, res: Response, next: NextFunction) {
  const model = new MatchesModel();
  const match: IMatches = req.body;

  const teamHome = await model.findOne(match.homeTeamId);
  const teamAway = await model.findOne(match.awayTeamId);

  if (!teamHome || !teamAway) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  next();
}

export { validateTeamsEquals, validateTeams };
