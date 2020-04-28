const db = require('./db');
const expect = require('chai').expect;

describe('Db', () => {
  it('Should return connection bd', async () => {
    let connection = await db.connection();
    expect(connection).to.be.true;
  });
});
