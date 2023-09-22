import MatchesModel from '../models/MatchesModel';
import { IMatches } from '../Interfaces/IMaches';

export default class MatchesService {
  constructor(private model = new MatchesModel()) {}

  getAllMatches = async (inProgress: string): Promise<IMatches[]> => {
    const matches = await this.model.getAllMatches();
    if (!inProgress) {
      return matches;
    }

    if (inProgress === 'true') {
      return matches.filter((match) => match.inProgress === true);
    }
    return matches.filter((match) => match.inProgress === false);
    return matches;
  };

  saveMatch = async (match: IMatches) => {
    const theMatch = await this.model.saveMatch(match);

    return { code: 201, response: theMatch };
  };

  finishedMatch = async (id: number) => {
    const match = await this.model.findOne(id);
    if (!match) {
      return { code: 404, message: 'Match not found' };
    }
    await this.model.finishedMatch(id);
    return { code: 200, message: 'Finished' };
  };

  updateMatch = async (id: number, homeTeamGoals: number, awayTeamGoals: number) => {
    await this.model.updateMatch(id, homeTeamGoals, awayTeamGoals);

    return { code: 200, message: 'Finished' };
  };
}
