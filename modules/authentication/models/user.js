const db = require('../db/db').db;

const Users = db.define('users', {
  id: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: db.Sequelize.STRING,
  password: db.Sequelize.STRING,
  role: db.Sequelize.STRING
});

module.exports = {
    Users
};
