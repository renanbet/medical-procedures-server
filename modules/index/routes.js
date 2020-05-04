var express = require('express');
var router = express.Router();
const db = require('../db/db');

router.get('/', 
  async (req, res, next) => {
    try {
      await db.connection();
      res.json({
        online: true
      });
    } catch (error) {
      res.status(400)
        .json({
          online: false
        });
    }
  });

module.exports = router;