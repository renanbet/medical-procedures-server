const db = require('../../db/db').db;
const { QueryTypes } = require('sequelize')
const Auth = require('../lib/auth')
var UserModel = require('../models/user').User

const createUser = async (username, password, role) => {
    let user = await UserModel.findOne(
        {
          where: {
            username
          }
        }
      )
      if (user) {
        return
      }
      var newUser = {
        username,
        password: Auth.createPasswordHash(password),
        role,
      }
      return await UserModel.create(newUser)
}

const setup = async () => {
    let query = `CREATE TABLE IF NOT EXISTS users (
        id int(11) NOT NULL AUTO_INCREMENT,
        username varchar(100) NOT NULL,
        password varchar(254) NOT NULL,
        role varchar(100) NOT NULL,
        PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`

    await db.query(query,
        { type: QueryTypes.CREATE })
        
    await createUser('admin', 'admin', 'admin')
    await createUser('user', 'user', 'user')
};

module.exports = {
    setup
}
