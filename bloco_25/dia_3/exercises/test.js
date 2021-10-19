const { expect } = require('chai');

// checkIntegers test

const checkIntegers = require('./checkIntegers');

describe("When the parameter isn't a number", () => {
  it('The return is "parameter must be a number"', () => {
    const resposta = checkIntegers('abc');
    expect(resposta).to.be.equal('parameter must be a number')
  });
});

describe('Verify if the return is:', () => {
  it('positive', () => {
    const resposta = checkIntegers(4);
    expect(resposta).to.be.equal('positive');
  });

  it('negative', () => {
    const resposta = checkIntegers(-4);
    expect(resposta).to.be.equal('negative');
  });

  it('neutral', () => {
    const resposta = checkIntegers(0);
    expect(resposta).to.be.equal('neutral');
  });
});

// writeArchive test

const fs = require('fs');
const sinon = require('sinon');

const writeArchive = require('./writeArchive');

describe('Execute writeArchive', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it('check if returns "ok"', () => {
    const resposta = writeArchive('arquivo.txt', 'content');
  
    expect(resposta).to.be.equal('ok');
  });
});
