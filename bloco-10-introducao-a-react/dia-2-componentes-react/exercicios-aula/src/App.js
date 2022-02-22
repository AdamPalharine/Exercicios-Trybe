import React from 'react';

import './App.css';

import Header from './components/Header';
import Pokedex from './components/Pokedex';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
