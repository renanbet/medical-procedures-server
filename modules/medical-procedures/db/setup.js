const db = require('../../db/db').db;
const { QueryTypes } = require('sequelize')

const setup = async () => {
    let query = `CREATE TABLE IF NOT EXISTS procedimentos (
        id int(11) NOT NULL AUTO_INCREMENT,
        procedimento int(11) NOT NULL,
        idade int(11) DEFAULT NULL,
        sexo varchar(100) DEFAULT NULL,
        status varchar(100) DEFAULT NULL,
        motivo varchar(254) DEFAULT NULL,
        data datetime DEFAULT NULL,
        PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`

    await db.query(query,
        { type: QueryTypes.CREATE })
};

module.exports = {
    setup
}
