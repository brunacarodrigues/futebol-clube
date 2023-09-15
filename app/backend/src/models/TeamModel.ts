import Teams from '../database/models/TeamsModel';
import ITeams from '../Interfaces/ITeams';

export default class Team {
  protected model = Teams;

  async findAll(): Promise<ITeams[] | null> {
    return this.model.findAll();
  }

  async findOne(id: number): Promise<ITeams | null> {
    return this.model.findByPk(id);
  }
}
