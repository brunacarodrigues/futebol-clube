import MatchesModel from '../models/MatchesModel';

export default class MatchesService {
  constructor(private model = new MatchesModel()) {}

  getAllMatches = async () => {
    const matches = await this.model.getAllMatches();

    return { code: 200, response: matches };
  };
}
