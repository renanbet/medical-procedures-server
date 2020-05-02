var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller')

router.post('/signup', async (req, res) => {
  let username = req.body.username
  let password = req.body.password
  let role = req.body.role

  try {
    if (!username || !password || role) {
      res.status(400)
      .json({ error: "Invalid username, role or password!" });
    }
    let ret = await userController.insert(username, password, role)
    res.json({data: ret})
  } catch (error) {
    console.log(error)
    res.status(400)
      .json(error);
  }
});

router.post('/login', async (req, res, next) => {
  let username = req.body.username
  let password = req.body.password

  try {
    if (!username || !password) {
      throw { error: "Invalid username or password!" }
    }
    let ret = await userController.login(username, password)
    res.json({data: ret})
  } catch (error) {
    console.log(error)
    res.status(400)
      .json(error);
  }
});

module.exports = router;