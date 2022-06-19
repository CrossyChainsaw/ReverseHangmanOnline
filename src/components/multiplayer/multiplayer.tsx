import React, { useEffect, useRef, useState } from 'react';
import './multiplayer.css';
import './multiplayer.css';

function Multiplayer(props: any) {
    const [word] = useState<string>("");
    const [buttonClicks] = useState<number>(0);
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

    return (
        <div className='center'>
            <br></br>
            <br></br>
            <br></br>
            <h1 className={'center large-text'}>MULTIPLAYER</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <div className={"center big-text"}>
                    <p>This section is still being worked on!You can find everything regarding rules, gameplay and future ideas here</p>
                    <a href="https://github.com/Epic-Chainsaw-Massacre">Reverse Hangman Online Documentation</a>
                </div>
            </div>
        </div >
    )
}

export default Multiplayer;