const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  operatorsAliases: false,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    freezeTableName: true,
    timestamps: false
  }
});

let connection = () => {
  try {
    sequelize.authenticate();
    return true;
  }
  catch (err) {
    return false;
  }
};

module.exports = {
  db: sequelize,
  connection
};
