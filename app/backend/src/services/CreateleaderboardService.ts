import { ILeaderboard } from '../Interfaces/ILeaderBoard';

const score = (home: ILeaderboard, away: ILeaderboard) => ({
  name: home.name,
  totalPoints: Number(home.totalPoints) + Number(away.totalPoints),
  totalGames: Number(home.totalGames) + Number(away.totalGames),
  totalVictories: Number(home.totalVictories) + Number(away.totalVictories),
  totalDraws: Number(home.totalDraws) + Number(away.totalDraws),
  totalLosses: Number(home.totalLosses) + Number(away.totalLosses),
  goalsFavor: Number(home.goalsFavor) + Number(away.goalsFavor),
  goalsOwn: Number(home.goalsOwn) + Number(away.goalsOwn),
  goalsBalance: 0,
  efficiency: 0,
});

const orderClassification = (matches: ILeaderboard[]) => matches.sort((a, b) => (
  b.totalPoints - a.totalPoints
  || b.totalVictories - a.totalVictories
  || b.goalsBalance - a.goalsBalance
  || b.goalsFavor - a.goalsFavor
  || a.goalsOwn - b.goalsOwn
));

const calculateClassification = (home: ILeaderboard[], away: ILeaderboard[]) => {
  const init: ILeaderboard[] = [];
  home.forEach((homeTeam) => {
    away.forEach((awayTeam) => {
      if (homeTeam.name === awayTeam.name) {
        const team = score(homeTeam, awayTeam);
        team.goalsBalance = team.goalsFavor - team.goalsOwn;
        team.efficiency = (team.totalPoints / (team.totalGames * 3)) * 100;
        team.efficiency = Number(team.efficiency.toFixed(2));
        init.push(team as unknown as ILeaderboard);
      }
    });
  });
  return orderClassification(init);
};

export {
  calculateClassification,
  orderClassification,
};
