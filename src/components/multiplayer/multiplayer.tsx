import React, { useEffect, useRef, useState } from 'react';
import './multiplayer.css';
import './multiplayer.css';

function Multiplayer(props: any) {
    const [word, setWord] = useState<string>("");
    const [disabledTextBox] = useState<boolean>(false);
    const [disabledButton] = useState<boolean>(false);
    const [buttonClicks, setButtonClicks] = useState<number>(0);
    const notInitialRender4 = useRef(false)

    useEffect(() => {
        if (notInitialRender4.current) {
            const api = async () => {
                const apiUrl = "https://localhost:7054/test3?word=" + word;
                const data = await fetch(apiUrl);
                const jsonData = await data.json(); // doesnt work
                console.log(jsonData);

            };
            api();
        }
        else {
            notInitialRender4.current = true;
        }
    }, [buttonClicks, word]);

    function OnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setWord(e.currentTarget.value);
    }

    function OnCLick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setButtonClicks(buttonClicks + 1);
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