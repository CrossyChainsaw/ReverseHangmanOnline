import { stat } from 'fs';
import React, { useState } from 'react';
import { text } from 'stream/consumers';
import './singleplayer.css';
import { Button } from "react-bootstrap";

function Singleplayer(props: any) {
    const [word, setWord] = useState("");
    const [enabled, setEnabled] = useState(false);

    function OnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setWord(e.currentTarget.value);
    }
    function OnCLick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setEnabled(true);
        console.log(word);
    }

    return (
        <div>
            <h1>this is singleplayer</h1>
            <input id='myTb' type='password' disabled={enabled} onChange={(e) => OnChange(e)} />
            <button id='myBtn' onClick={(e) => OnCLick(e)}>Confirm</button>
        </div>
    )
}

export default Singleplayer;