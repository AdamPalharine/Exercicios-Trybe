import logo from './logo.svg';
import './App.css';

// npx create-react-app é pesado demais para ficar criando vários, apenas comenta o exercicio 
// Exercicio 1 
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
