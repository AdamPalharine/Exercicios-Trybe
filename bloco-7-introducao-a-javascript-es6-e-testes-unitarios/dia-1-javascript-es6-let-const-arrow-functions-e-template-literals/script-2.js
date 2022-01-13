// Pensando em como fazer isso de forma mais complicada, fazendo o for, calculando qual o menor numero e então retornando a lista :V

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  for (let i = 0; i < oddsAndEvens.length; i+=1) {
      return oddsAndEvens[i];        
  }
}

console.log(oddsAndEvens); 

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

/* Versão do Gabarito

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`); */