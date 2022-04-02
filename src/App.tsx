import React from 'react';
import logo from './logo.svg';
import './App.css';
import { isPropertySignature } from 'typescript';
import Game from './game/game'
import Test from './test/test'

function App() {
  return (
    <div>
      <Game />
      {/* <Test /> */}
    </div>
  );
}


export default App;
