// const peso = 40;
// const altura = 1.20 ** 2;

const imc = (peso, altu) => {
  return (peso / Math.pow(altu, 2)).toFixed(2);
}

module.exports = imc;
