const controller = require('../modules/medical-procedures/controllers/medical-procedures.controller');
const expect = require('chai').expect;
let procedure = {
    id: 0,
    procedimento: Math.floor(Math.random() * (9999 - 1000)) + 1000,
    idade: 10,
    sexo: 'Masculino',
    permitido: 'Não',
    motivo: 'teste'
}

describe('Medical Procedures add procedure', () => {
    it('Should add procedure', async () => {
        let ret = await controller.insert(procedure)
        procedure.id = ret.id
        expect(ret.id > 0).to.be.true;
    });
});

describe('Medical Procedures get procedure', () => {
    it('Should have procedimento', async () => {
        let ret = await controller.get(procedure.procedimento)
        expect(ret.procedimento === procedure.procedimento).to.be.true
    });
    it('Should have idade', async () => {
        let ret = await controller.get(procedure.procedimento)
        expect(ret.idade === procedure.idade).to.be.true
    });
    it('Should have sexo', async () => {
        let ret = await controller.get(procedure.procedimento)
        expect(ret.sexo === procedure.sexo).to.be.true
    });
    it('Should have permitido', async () => {
        let ret = await controller.get(procedure.procedimento)
        expect(ret.permitido === procedure.permitido).to.be.true
    });
    it('Should have motivo', async () => {
        let ret = await controller.get(procedure.procedimento)
        expect(ret.motivo === procedure.motivo).to.be.true
    });

});

describe('Medical Procedures update procedure', () => {
    it('Should get updated procedure', async () => {
        let procedure2 = {
            idade: 20,
            sexo: 'Feminino',
            permitido: 'Sim',
            motivo: 'novo teste',
        }
        await controller.update(procedure.id, procedure2)
        let ret = await controller.get(procedure.procedimento)
        expect(ret.id === procedure.id).to.be.true
        expect(ret.idade === procedure2.idade).to.be.true
        expect(ret.sexo === procedure2.sexo).to.be.true
        expect(ret.procedimento === procedure.procedimento).to.be.true
        expect(ret.permitido === procedure2.permitido).to.be.true
        expect(ret.motivo === procedure2.motivo).to.be.true
    });
});
