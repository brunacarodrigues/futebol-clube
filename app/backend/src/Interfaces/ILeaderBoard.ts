import { IMatches } from './IMaches';
import ITeams from './ITeams';

export interface ILeaderboard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number | string;
}

export interface ILResult extends ITeams {
  homeGame?: IMatches[];
  awayGame?: IMatches[];
}
