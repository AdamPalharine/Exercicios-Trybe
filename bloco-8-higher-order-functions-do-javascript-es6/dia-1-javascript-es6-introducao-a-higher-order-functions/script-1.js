const newEmployees = (callback) => {
    const employees = {
      id1: callback("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    };
    return employees;
  };

  const criarEmail = (nome) => {
      return {
          nome: nome,
          email: 'undefine@trybe.com',
      };
  };

  console.log(newEmployees(criarEmail))
/* const employees = {
  id1: 'pedro_guerra@trybe.com',
  id2: 'luiza_drumond@trybe.com',
  id3: 'carla_paiva@trybe.com',
}
 */