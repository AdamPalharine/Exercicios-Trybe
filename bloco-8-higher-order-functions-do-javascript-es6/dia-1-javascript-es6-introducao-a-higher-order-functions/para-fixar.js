const wakeUp = () => 'Acordando!!';
const breakFeaster = () => 'Bora tomar café!!';
const goToSleep = () => 'Partiu dormir!!';

const doingThings = (string) => {
  const result = string();
  console.log(result);
};

// Ao chamar a função doingThings:
doingThings(wakeUp);
doingThings(breakFeaster);
doingThings(goToSleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!