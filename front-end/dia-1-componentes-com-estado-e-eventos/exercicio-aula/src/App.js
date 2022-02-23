import React from 'react';

import './App.css';

import Header from './Components/Header';
import Pokedex from './Components/Pokedex';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
