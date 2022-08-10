const { expect } = require("chai");
const { lerArquivo } = require('../lerArquivo');

describe('Chama a função "ler arquivo"', () => {
  describe('Quando o arquivo é lido com sucesso', () => {

    const CONTENT = "Melhor filme do momento: O despertar das Tartarugas Ninjas";

    it('é igual ao conteudo do arquivo', async () =>{
      const resposta = await lerArquivo('arquivo.txt');
      expect(resposta).to.be.a('string');
    });

    it('é uma string', async () =>{
      const resposta = await lerArquivo('arquivo.txt');
      expect(resposta).to.be.equal(CONTENT);

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
