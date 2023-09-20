import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';
import { IMatches } from '../Interfaces/IMaches';

export default class MatchesModel {
  protected model = Matches;

  async getAllMatches(): Promise<IMatches[] | null> {
    return this.model.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
  }
}
