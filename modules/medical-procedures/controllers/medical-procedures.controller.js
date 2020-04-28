const MedicalProceduresModel = require('./../models/medical-procedures.model').MedicalProcedures

const get = async (procedimento) => {
  return await MedicalProceduresModel
    .findOne(
      {
        where: {
          procedimento
        }
      }
    )
};

const getAll = async () => {
  return await MedicalProceduresModel
    .findAll()
};

const insert = async (procedure) => {
  procedurue.data = new Date()
  return await MedicalProceduresModel.create(procedure)
};

const update = async (id, procedure) => {
  return await MedicalProceduresModel
    .update(
      procedure,
      {
        where: {
          id
        }
      })
};

module.exports = {
  get,
  getAll,
  insert,
  update
}
