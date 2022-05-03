module.exports = (Sequelize, DataType) => {
  const User = Sequelize.define('User', {
    name: {
      type: DataType.STRING,
      allowNull: false
    },
    email: {
      type: DataType.STRING,
      allowNull: false
    },
    password: {
      type: DataType.CHAR(60)
    },
    google_id: {
      type: DataType.STRING
    },
    picture: {
      type: DataType.STRING
    }
  }, {
    tableName: 'users'
  });

  return User;
}