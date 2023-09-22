import LeaderboardModel from '../models/LeaderboardModel';
import CreateLeaderboardHome from './CreateleaderboardHomeService';
import CreateLeaderboardAway from './CreateleaderboardAwayService';
import { calculateClassification } from './CreateleaderboardService';

export default class LeaderboardService {
  constructor(
    private model = new LeaderboardModel(),
    private leaderboardHome = new CreateLeaderboardHome(),
    private leaderboardAway = new CreateLeaderboardAway(),
  ) {}

  getLBHome = async (home: string) => {
    const matches = await this.model.getAll(home);

    if (!matches) return { code: 401, message: 'Bad request' };

    const leaderBoard = this.leaderboardHome.getLeaderboard(matches);

    return { code: 200, response: leaderBoard };
  };

  getLBAway = async (away: string) => {
    const matches = await this.model.getAll(away);

    if (!matches) return { code: 401, message: 'Bad request' };

    const leaderBoard = this.leaderboardAway.getLeaderboard(matches);

    return { code: 200, response: leaderBoard };
  };

  getClassify = async () => {
    const matchesHome = await this.getLBHome('homeGame');
    const matchesAway = await this.getLBAway('awayGame');
    const classification = calculateClassification(
      matchesHome.response as unknown as [],
      matchesAway.response as unknown as [],
    );
    return { code: 200, response: classification };
  };
}
