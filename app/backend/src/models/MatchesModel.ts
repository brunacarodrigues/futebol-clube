import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';
import { IMatches } from '../Interfaces/IMaches';

export default class MatchesModel {
  protected model = Matches;

  async getAllMatches(): Promise<IMatches[]> {
    return this.model.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
  }

  async findOne(id: number): Promise<IMatches | null> {
    return this.model.findOne({ where: { id } });
  }

  async saveMatch(match: IMatches): Promise<IMatches> {
    return this.model.create({ ...match, inProgress: true });
  }

  async filterMatches(inProgress: boolean): Promise<IMatches[]> {
    return this.model.findAll(
      { where: { inProgress: inProgress === false ? 0 : 1 },
        include: [
          { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
          { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
        ],
      },
    );
  }

  async updateMatch(
    id: number,
    awayTeam: number,
    homeTeam: number,
  ): Promise<void> {
    await this.model.update(
      { homeTeamGoals: homeTeam, awayTeamGoals: awayTeam },
      { where: { id } },
    );
  }

  async finishedMatch(id: number): Promise<void> {
    await this.model.update({ inProgress: false }, { where: { id } });
  }
}
