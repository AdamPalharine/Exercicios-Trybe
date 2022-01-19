const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswers, studentAnswers) => {
  if (studentAnswers === rightAnswers) {
    return 1; }
    else if (studentAnswers === 'N.A') {
      return 0; }
      else {return -0.5;
      };
    }

const gabarito = (rightAnswers, studentAnswers, callback) => {
  let contador = 0;
  for (let i = 0; i < rightAnswers.length; i+= 1) {
    const retornara = callback(rightAnswers[i], studentAnswers[i]);
    contador += retornara;
  }
  return `Resultado final: ${contador} pontos`;
}

console.log(gabarito(rightAnswers, studentAnswers, compareAnswers));
