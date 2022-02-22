import './App.css';

import React from 'react';


/* 
// Versão 1

function handleClick() {
  console.log('Clicou no botão')
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Olá mundo </h1>
        <div>
          <button onClick={handleClick}> botão 1</button>
          <button onClick={handleClick}> botão 2</button>
          <button onClick={handleClick}> botão 3</button>
        </div>
      </div>
    )
  }
} 
*/

/* 
// Versão 2
// a função dentro do Class não precisa ser chamada (não precisa escrever o function)
// fentro do class, é necessário introduzir o this em frente a função, ou então o react não será capaz de compreender o que é pedido.

class App extends React.Component {
  handleClick() {
    console.log('Clicou no botão');
  }
  render() {
    console.log(this);
    return (
      <div>
        <h1> Olá mundo </h1>
        <div>
          <button onClick={this.handleClick}> botão 1</button>
        </div>
      </div>
    );
  }
} 
*/

/* 

// Versão 3 - dessa forma nossa função tem acesso ao this
class App extends React.Component {
  // o react vai sempre renderizar o constructor antes das outras funções
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this) // sem essa função, o 'Eu primeiro não será lido'
    console.log('Eu primeiro')
  }

  handleClick() {
    console.log(this)
    console.log('Clicou no botão')
  }
  render() {
    console.log(this)
    return (
      <div>
        <h1> Olá mundo </h1>
        <div>
          <button onClick={this.handleClick}> botão 1</button>
        </div>
      </div>
    );
  }
} 
*/

// Versão 4

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this) 
    console.log('Eu primeiro')
  }

  handleClick() {
    console.log(this)
    console.log('Clicou no botão')
  }
  render() {
    console.log(this)
    return (
      <div>
        <h1> Olá mundo </h1>
        <div>
          <button onClick={this.handleClick}> botão 1</button>
        </div>
      </div>
    );
  }
} 


export default App;
