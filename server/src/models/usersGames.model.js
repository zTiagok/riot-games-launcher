const UsersGamesSchema = (sequelize, DataTypes) => {
  const UsersGamesTable = sequelize.define('UsersGames', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users', key: 'id',
      }
    },
    games_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'games', key: 'id',
      }
    }
  }, {
    tableName: 'user_games',
    underscored: true,
  }
);

  return UsersGamesTable;
}

module.exports = UsersGamesSchema;