import React from 'react';


function App(props) {
    const raccoons = {
      name: 'Russiaville Raccoons',
      logoSrc: './components/assets/images/raccoon.png'
    }
  
    const squirrels = {
      name: 'Sheridan Squirrels',
      logoSrc: './components/assets/images/squirrel.png'
    }
  
    const bunnies = {
      name: 'Burlington Bunnies',
      logoSrc: './components/assets/images/bunny.png'
    }
  
    const hounds = {
      name: 'Hammond Hounds',
      logoSrc: './components/assets/images/hound.png'
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
    );
  }
  
  export default App;



