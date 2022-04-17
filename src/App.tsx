import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { isPropertySignature } from 'typescript';
import Game from './components/game/game'
import Test from './test/test'
import Menu from './components/menu/menu';
import Singleplayer from './components/singleplayer/singleplayer';
import Multiplayer from './components/multiplayer/multiplayer';

enum Gamemodes {
  none,
  singleplayer,
  multiplayer
}

function App() {
  const [gamemode, setGamemode] = useState(Gamemodes.none)

  if (gamemode == Gamemodes.singleplayer) {
    return (
      <div>
        <Singleplayer />
      </div>
    );
  }
  else if (gamemode == Gamemodes.multiplayer) {
    return (
      <div>
        <Multiplayer />
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
