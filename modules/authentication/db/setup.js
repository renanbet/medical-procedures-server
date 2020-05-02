const db = require('./db').db;
const { QueryTypes } = require('sequelize')
const Auth = require('../lib/auth')

const setup = async () => {
    try {
        let query = `CREATE TABLE IF NOT EXISTS users (
            id int(11) NOT NULL AUTO_INCREMENT,
            username varchar(100) NOT NULL,
            password varchar(254) NOT NULL,
            role varchar(100) NOT NULL,
            PRIMARY KEY (id)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`

        let data = await db.query(query,
            { type: QueryTypes.CREATE })

        query = `insert into users (username, password, role)
            values ('admin', '${Auth.createPasswordHash('admin')}', 'admin'),
            ('user', '${Auth.createPasswordHash('user')}', 'user')`

        data = await db.query(query,
            { type: QueryTypes.INSERT })

        return

    } catch (e) {
        console.log(e)
    }
};

module.exports = {
    setup
}
