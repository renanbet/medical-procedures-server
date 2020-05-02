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
  procedure.data = new Date()
  return await MedicalProceduresModel.create(procedure)
};

const update = async (id, procedure) => {
  delete procedure.id
  return await MedicalProceduresModel
    .update(
      procedure,
      {returning: true, 
        where: {
          id
        }
      })
};

const remove = async (id) => {
  return await MedicalProceduresModel
    .destroy(
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
  update,
  remove
}
