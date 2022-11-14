const UsersSchema = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    username: DataTypes.STRING(25),
    password: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    tableName: 'users',
    underscored: true,
  }
)

  UsersTable.associate = (models) => {
    models.Users.hasMany(models.UsersGames, {
      as: 'games',
      foreignKey: 'id'
    })
  }

  return UsersTable;
}

module.exports = UsersSchema;