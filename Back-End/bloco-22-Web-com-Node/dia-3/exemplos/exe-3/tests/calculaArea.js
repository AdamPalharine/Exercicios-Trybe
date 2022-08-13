const { expect } = require('chai');
const sinon = require('sinon');

const { calculaArea } = require('../calculaArea');
const readline = require('readline-sync');

describe('Calcula a área de um quadrado', () => {
  describe('Quando a pessoa usuaria passa o valor 10', () => {

    before(() => {
      sinon.stub(readline, 'questionInt').returns(10);
    });

    after(() => {
      readline.questionInt.restore();
    });


    it ('é igual a 100', () => {
      const resposta = calculaArea();
      expect(resposta).to.be.equal(100)
    });
  });
});

// nesse caso precisamos criar um duble(sinon) para simular a entrada de um numero novalor da equação, pq no teste não deveria ter entrada de valores