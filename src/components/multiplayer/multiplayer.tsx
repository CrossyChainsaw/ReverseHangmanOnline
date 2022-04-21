import React, { useEffect, useState } from 'react';
import { Word } from '../../interfaces/interfaces';
import './multiplayer.css';
import './multiplayer.css';

function Multiplayer(props: any) {
    const [word, setWord] = useState<string>("");
    const [apiResult, setApiResult] = useState<Word>();
    const [disabledTextBox, setDisabledTextBox] = useState<boolean>(false);
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const [buttonClicks, setButtonClicks] = useState<number>(0);

    useEffect(() => {
        const api = async () => {
            const apiUrl = "http://localhost:8080/word/test?word=" + word;
            const data = await fetch(apiUrl);
            const jsonData = await data.json();
            setApiResult(jsonData);
        };
        api();
    }, [buttonClicks]);

    function OnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setWord(e.currentTarget.value);
    }

    function OnCLick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setButtonClicks(buttonClicks + 1);

        console.log("word: " + word);
        console.log("apiRes: " + apiResult?.word);

        if (word.valueOf() == apiResult?.word.valueOf()) {
            setDisabledTextBox(true);
            setDisabledButton(true);
        }
        else {
            console.log("the word '" + word + "' does not exist");
        }
    }

    return (
        <div>
            <h1>this is multiplayer</h1>
            <input id='myTb' type='password' disabled={disabledTextBox} onChange={(e) => OnChange(e)} />
            <button id='myBtn' disabled={disabledButton} onClick={(e) => OnCLick(e)}>Confirm</button>
        </div>
    )
}

export default Multiplayer;