import React from 'react';
import Game from './components/Game/Game.js';
import Russiaville from './components/Assets/images/raccoon.png';
import Sheridan from './components/Assets/images/squirrel.png';
import Burlington from './components/Assets/images/bunny.png';
import Hammond from './components/Assets/images/hound.png';
import './App.css';


function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: Russiaville
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: Sheridan
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: Burlington
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: Hammond
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;

