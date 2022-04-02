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
    }

    return (
        <div className='center'>
            <input
                type="text"
                onChange={getInputValue}
            />
            <Button onClick={clickButton}>Set Word</Button>
            <h1>{wordView}</h1>
        </div>
    );
}

export default Game;