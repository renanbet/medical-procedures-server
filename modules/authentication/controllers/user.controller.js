var UserModel = require('../models/user').User
const Auth = require('../lib/auth')

const insert = async (username, password, role) => {
  let user = await UserModel.findOne(
    {
      where: {
        username
      }
    }
  )
  if (user != null) {
    throw {
      error: "User already exists!"
    }
  }
  let hashPass = Auth.createPasswordHash(password)
  let newUser = {
    username,
    password: hashPass,
    role
  }
  await UserModel.create(newUser)
  return true
};

const login = async (username, password) => {
  let user = await UserModel.findOne(
    {
      where: {
        username
      }
    }
  )
  if (!user || !Auth.passwordCompare(password, user.password)) {
    throw {
      error: "Invalid username or password!"
    }
  }
  const userToken = {
    role: user.role
  }
  let token = Auth.createToken(userToken)
  return {
    role: user.role,
    token
  }
};

module.exports = {
  insert,
  login
}
