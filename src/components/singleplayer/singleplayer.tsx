import { render } from '@testing-library/react';
import React, { useEffect, useRef, useState } from 'react';
import { Word } from '../../interfaces/interfaces';
import './singleplayer.css';

export function Singleplayer(props: any) {
    const [word, setWord] = useState<string>("");
    const [apiResult, setApiResult] = useState<Word>();
    const [apiResult2, setApiResult2] = useState();
    const [disabledTextBox, setDisabledTextBox] = useState<boolean>(false);
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [buttonClicks, setButtonClicks] = useState<number>(0);
    const [lives, setLives] = useState<number>(0);
    const [visibilityClass, setVisibilityClass] = useState<string>('hidden');
    const notInitialRender1 = useRef(false)
    const notInitialRender2 = useRef(false)
    const notInitialRender3 = useRef(false)

    // send word to backend and get result
    useEffect(() => {
        if (notInitialRender1.current) {
            const api = async () => {
                const apiUrl = "http://localhost:8080/word/check?word=" + word;
                const data = await fetch(apiUrl);
                const jsonData = await data.json();
                setApiResult(jsonData);
            };
            api();
        }
        else {
            notInitialRender1.current = true;
        }
    }, [buttonClicks]);

    // if word exists start game
    useEffect(() => {
        if (notInitialRender2.current) {
            console.log(apiResult);
            if (apiResult?.exists) {
                setDisabledTextBox(true);
                setDisabledButton(true);
                setGameStarted(true);
            }
            else {
                console.log("the word '" + word + "' does not exist");
            }
        }
        else {
            notInitialRender2.current = true;
        }
    }, [apiResult])

    // start game
    useEffect(() => {
        if (notInitialRender3.current) {
            //send word to backend
            GetLives();
            setVisibilityClass('not-hidden')

            // show 'hide-this' class
        }
        else {
            notInitialRender3.current = true;
        }
    }, [gameStarted])

    //
    function GetLives() {
        const api = async () => {
            console.log("word: " + word);
            const apiUrl = "https://localhost:7071/Lives?word=" + word;
            const data = await fetch(apiUrl);
            const jsonData = await data.json();
            setApiResult2(jsonData);
            setLives(jsonData)
        };
        api();
    }

    function OnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setWord(e.currentTarget.value);
    }

    function OnCLick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setButtonClicks(buttonClicks + 1);
    }

    return (
        <div>
            <h1>this is singleplayer</h1>
            <input id='myTb' type='password' disabled={disabledTextBox} onChange={(e) => OnChange(e)} />
            <button id='myBtn' disabled={disabledButton} onClick={(e) => OnCLick(e)}>Confirm</button>

            <div className={visibilityClass}>
                <h1>Lives: {lives}</h1>
            </div>
        </div>
    )
}

export default Singleplayer;