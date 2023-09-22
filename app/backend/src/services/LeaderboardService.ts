import LeaderboardModel from '../models/LeaderboardModel';
import CreateLeaderboard from './CreateleaderboardService';

export default class LeaderboardService {
  constructor(
    private model = new LeaderboardModel(),
    private leaderboard = new CreateLeaderboard(),
  ) {}

  getAllLB = async (accordingTo: string) => {
    const matches = await this.model.getAll(accordingTo);

    if (!matches) return { code: 401, message: 'Bad request' };

    const leaderBoard = this.leaderboard.getLeaderboard(matches);

    return { code: 200, response: leaderBoard };
  };
}
