import './App.css';

// npx create-react-app é pesado demais para ficar criando vários, apenas comenta o exercicio 
// Exercicio 1 que na verdade é o 2
/* 
const Task = (value) => {
  return (
    <li key={value}> {value} </li>
  );
}

const myList = ['Acordar Cedo', 'Escovar os Dentes', 'Tomar Café', 'Estudar', 'Almoçar', 'Estudar', 'Jantar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ myList.map(myList => Task(myList)) }</ul>
    );
  }
} 
*/

//Exercicio 2 que na verdade é o 3
// Importando tudo
import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
} 

export default App;
