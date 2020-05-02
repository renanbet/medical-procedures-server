var UserModel = require('../models/user').Users
const Auth = require('../lib/auth')

const insert = async (username, password, role) => {
  let user = await User.findOne(
    {
      where: {
        username
      }
    }
  )
  if (user) {
    throw {
      error: "User already exists!"
    }
  }
  var newUser = {
    username,
    password: Auth.createPasswordHash(password),
    role,

  }
  return await UserModel.create(newUser)
};

const login = async (username, password) => {
  let user = await UserModel.findOne(
    {
      where: {
        username
      }
    }
  )
  console.log(user)
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
