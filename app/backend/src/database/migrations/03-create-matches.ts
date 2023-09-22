import { Model, DataTypes, QueryInterface } from 'sequelize';
import { IMatches } from '../../Interfaces/IMaches';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMatches>>('matches', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      homeTeamId: {
        type: DataTypes.INTEGER,
        field: 'home_team_id',
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      awayTeamId: {
        type: DataTypes.INTEGER,
        field: 'away_team_id',
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    homeTeamGoals: {
      type: DataTypes.INTEGER,
      field: 'home_team_goals',
      allowNull: false,
    },
    awayTeamGoals: {
      type: DataTypes.INTEGER,
      field: 'away_team_goals',
      allowNull: false,
    },
    inProgress: {
      type: DataTypes.BOOLEAN,
      field: 'in_progress',
      allowNull: false,
    },
  })
},

  down(queryInterface: QueryInterface) {
  return queryInterface.dropTable('matches');
  }
}