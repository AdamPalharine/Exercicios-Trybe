const newEmployees = (callback) => {
  const employees = {
    id1: callback("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const criarEmail = (nome) => {
  const email = nome.toLowerCase().split(' ').join('_'); //  > nome.emMinusculo.removeEspaço.substituiPor'_'
  return {
    nome: nome, email: `${email}@trybe.com`,
  };
};

console.log(newEmployees(criarEmail)) // > console.log(newEmployees(callback))
