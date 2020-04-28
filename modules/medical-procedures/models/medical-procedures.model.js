const db = require('../db/db').db;

const MedicalProcedures = db.define('procedimentos', {
  id: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  procedimento: db.Sequelize.INTEGER,
  idade: db.Sequelize.INTEGER,
  sexo: db.Sequelize.STRING,
  permitido: db.Sequelize.STRING,
  data: db.Sequelize.DATE
});

module.exports = {
  MedicalProcedures
};
