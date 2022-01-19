const numberCheck = (myNumber, number) => myNumber === number;

const loteria = (myNumber, callback) => {
  const number = Math.floor((Math.random()*5)+1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
}; 

console.log(loteria(2, numberCheck));