import React, { useState } from 'react';
import './App.css';
import Menu from './components/menu/menu';
import Singleplayer from './components/singleplayer/singleplayer';
import Multiplayer from './components/multiplayer/multiplayer';
import Rules from './components/rules/rules';

enum Gamemodes {
  none,
  singleplayer,
  multiplayer,
  rules
}

function App() {
  const [gamemode, setGamemode] = useState(Gamemodes.none)

  if (gamemode === Gamemodes.singleplayer) {
    return (
      <div>
        <Singleplayer />
      </div>
    );
  }
  else if (gamemode === Gamemodes.multiplayer) {
    return (
      <div>
        <Multiplayer />
      </div>
    );
  }
  else if (gamemode === Gamemodes.rules) {
    return (
      <div>
        <Rules />
      </div>
    );
  }
  else {
    return (
      <div>
        <Menu gamemode={gamemode} Gamemodes={Gamemodes} setGamemode={setGamemode} />
      </div>
    )
  }
}


export default App;
