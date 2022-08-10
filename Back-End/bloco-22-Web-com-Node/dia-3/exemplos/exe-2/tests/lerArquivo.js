

const fs = require('fs').promises;
const { expect } = require("chai");
const { lerArquivo } = require('../lerArquivo');
const sinon = require('sinon');

describe('Chama a função "ler arquivo"', () => {
  describe('Quando o arquivo é lido com sucesso', () => {

    const CONTENT = "O despertar das Tartarugas Ninjas é MARAVILHOSO";

    before(() => {
      sinon.stub(fs, 'readFile').resolves(CONTENT);
    });
    // simulação de readFile do Arquivo

    after(() => {
      fs.readFile.restore();
    });

    it('é uma string', async () =>{
      const resposta = await lerArquivo('arquivo.txt');
      console.log(resposta);
      expect(resposta).to.be.equals(CONTENT);

    it('é igual ao conteudo do arquivo', async () =>{
      const resposta = await lerArquivo('arquivo.txt');
      console.log(resposta);
      expect(resposta).to.be.a('string');
    });

    });
  });
});

describe('Quando a leitura do arquivo falha', () => {
  describe('a resposta', () => {
    it('é igual null', async () =>{
      const resposta = await lerArquivo('arquivo_not_found.txt');
      expect(resposta).to.be.null;

    });
  });
});
