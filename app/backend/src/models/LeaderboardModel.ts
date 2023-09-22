import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';
import { ILResult } from '../Interfaces/ILeaderBoard';

export default class LeaderboardModel {
  protected model = Teams;

  async getAll(accordingTo: string): Promise<ILResult[] | null> {
    return this.model.findAll({
      include: [{ model: Matches, as: accordingTo, where: { inProgress: false } }],
    });
  }
}
