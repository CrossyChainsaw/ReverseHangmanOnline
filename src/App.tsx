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

interface test {
  b1: string;
}

function App() {
  const [gamemode, setGamemode] = useState(Gamemodes.none)

  if (gamemode == Gamemodes.singleplayer) {
    console.log("Fluffy beer");
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
        <Menu gamemode={gamemode} />
      </div>
    )
  }
}


export default App;
