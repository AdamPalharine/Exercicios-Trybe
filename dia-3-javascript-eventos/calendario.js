function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// Adicionando Dias

  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function criandoDiasDoMes() {
    let getDaysList = document.querySelector('#days'); //selecionar o elemente que tem o id Days
    
    for (let i = 0; i < dezDaysList.length; i += 1){
      let day = dezDaysList[i]; //em cada interação armazena uma variavel - o dia
      let dayItem = document.createElement('li'); //criando o list item que vai representar o dia

      if (day === 24 | day === 31) {
        dayItem.className = 'day holiday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 4 | day === 11 | day === 18) {
        dayItem.className = 'day friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 25) {
        dayItem.className = 'day holiday friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else {
        dayItem.innerHTML = day;
        dayItem.className = 'day';
        getDaysList.appendChild(dayItem);
      }
    };
  };

  criandoDiasDoMes();

// criando botão - Exercicio 2

function botaoFeriados(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container'); // onde vou adicionar o botão
  let newButton = document.createElement('button'); // criando o botão
  let newButtonID = 'btn-holiday'; // criando a ID do botão

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID; // adicionando o ID ao botão
  buttonContainer.appendChild(newButton); // declarando ele como filho da função
};

botaoFeriados('Feriados');

// implementando cores ao botão - Exercicio 3

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();

// Implementando o botão - Exercicio 4

function botaoFriday(buttonFriday) {
  let buttonContainer = document.querySelector('.buttons-container'); // onde vou adicionar o botão
  let newButton = document.createElement('button'); // criando o botão
  let newButtonID = 'btn-friday'; // criando a ID do botão

  newButton.innerHTML = buttonFriday;
  newButton.id = newButtonID; // adicionando o ID ao botão
  buttonContainer.appendChild(newButton); // declarando ele como filho da função
};

botaoFriday('Sexta-Feira');

// Exercicio 5 - Evento click ao botão Sexta-feira

function displayFridays(sextaArray) {
  let sextaDoMes = document.querySelector('#btn-friday');
  let sextaFeira = document.getElementsByClassName('friday')
  let novoTexto = "Sextou"; 

  sextaDoMes.addEventListener('click', function() {
    for (let i = 0; i < sextaFeira.length; i += 1) {
      if (sextaFeira[i].innerHTML !== novoTexto) {
        sextaFeira[i].innerHTML = novoTexto;
      } else {
        sextaFeira[i].innerHTML = sextaArray[i];
      }
    }
  })
};

let diaSexta = [ 4, 11, 18, 25];
displayFridays(diaSexta);