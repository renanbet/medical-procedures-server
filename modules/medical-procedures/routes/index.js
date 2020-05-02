var express = require('express');
var router = express.Router();
const MedicalProceduresController = require('../controllers/medical-procedures.controller')
const Auth = require('../../authentication/lib/auth')

router.get('/', Auth.ensureAuthorized, 
  async (req, res, next) => {
    try {
      let ret = await MedicalProceduresController.getAll()
      res.json(ret);
    } catch (error) {
      res.status(400)
        .json(error);
    }
  });

router.get('/:id', Auth.ensureAuthorized, async (req, res, next) => {
  try {
    let ret = await MedicalProceduresController.get(req.params.id)
    res.json(ret);
  } catch (error) {
    res.status(400)
      .json(error);
  }
});

router.post('/', Auth.ensureAuthorized, 
  async (req, res, next) => {
    try {
      let procedure = req.body
      let ret = await MedicalProceduresController.insert(procedure)
      res.json(ret);
    } catch (error) {
      res.status(400)
        .json(error);
    }
  });

router.put('/:id', Auth.ensureAuthorized,
  async (req, res, next) => {
    try {
      let procedure = req.body
      let ret = await MedicalProceduresController.update(req.params.id, procedure)
      res.json(ret);
    } catch (error) {
      res.status(400)
        .json(error);
    }
  });

router.delete('/:id', Auth.ensureAuthorized, async (req, res, next) => {
  try {
    let ret = await MedicalProceduresController.remove(req.params.id)
    res.json(ret);
  } catch (error) {
    res.status(400)
      .json(error);
  }
});

module.exports = router;
