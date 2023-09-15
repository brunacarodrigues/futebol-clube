import TeamsModel from '../models/TeamsModel';

export default class TeamService {
  constructor(private model = new TeamsModel()) {}

  getAllTeams = async () => {
    const teams = await this.model.findAll();

    return { code: 200, response: teams };
  };

  getTeamById = async (id: number) => {
    const team = await this.model.findOne(id);

    return { code: 200, response: team };
  };
}
