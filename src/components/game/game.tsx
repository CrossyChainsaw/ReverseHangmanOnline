import { stat } from 'fs';
import React, { useState } from 'react';
import { text } from 'stream/consumers';
import './game.css';
import { Button } from "react-bootstrap";

function Game() {
    const [word, setWord] = useState("");
    const [wordView, setWordDeluxe] = useState("");

    const getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value)
    };

    function clickButton() {
        setWordDeluxe(word);
        (document.getElementById('test') as HTMLBodyElement).innerHTML = "hel";
    }

    return (
        <div className='center'>
            <input id='userProfilePic' type="text" onChange={getInputValue} />
            <Button onClick={clickButton}>Set Word</Button>
            <h1>{wordView}</h1>
            <h2 id='test'></h2>
        </div>
    );
}

export default Game;