const GamesSchema = (sequelize, DataTypes) => {
  const GamesTable = sequelize.define('Games', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'games',
    underscored: true,
  }
)

  return GamesTable;
}

module.exports = GamesSchema;