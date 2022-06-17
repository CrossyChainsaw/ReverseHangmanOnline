import React, { useEffect, useRef, useState } from 'react';
import { Word } from '../../interfaces/interfaces';
import './singleplayer.css';

export function Singleplayer(props: any) {
    const [word, setWord] = useState<string>("");
    const [apiResult, setApiResult] = useState<Word>();
    const [disabledTextBox, setDisabledTextBox] = useState<boolean>(false);
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [buttonClicks, setButtonClicks] = useState<number>(0);
    const [lives, setLives] = useState<number>(0);
    const [goal, setGoal] = useState<number>(0);
    const [visibilityClass, setVisibilityClass] = useState<string>('hidden');
    const notInitialRender1 = useRef(false)
    const notInitialRender2 = useRef(false)
    const notInitialRender3 = useRef(false)
    const [permission, setPermission] = useState<boolean>(false);
    const [guessline, setGuessline] = useState<string>();

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
    }, [buttonClicks, word]);

    // if word exists start game
    useEffect(() => {
        if (word.length > 3 && permission) {
            if (notInitialRender2.current) {
                console.log(apiResult);
                if (apiResult?.exists) {
                    setDisabledTextBox(true);
                    setDisabledButton(true);
                    setGameStarted(true);
                    console.log('disabled button');
                    console.log('disabled textbox');
                    console.log('game started');
                }
                else {
                    console.log("the word '" + word + "' does not exist");
                    setPermission(false);
                }
            }
            else {
                notInitialRender2.current = true;
            }
        }
    }, [apiResult, word, permission])

    // start game
    useEffect(() => {
        if (word.length > 3 && permission) {
            const GetLives = async () => {
                console.log("word: " + word);
                const apiUrl = "https://localhost:80/Lives?word=" + word;
                const data = await fetch(apiUrl);
                const jsonData = await data.json();
                setLives(jsonData)
            };
            const GetGoal = async () => {
                console.log("word: " + word);
                const apiUrl = "https://localhost:80/Goal?word=" + word;
                const data = await fetch(apiUrl);
                const jsonData = await data.json();
                setGoal(jsonData)
            };
            const GetGuessLine = async () => {
                console.log("word: " + word);
                const apiUrl = "https://localhost:80/GuessLine?word=" + word;
                const data = await fetch(apiUrl);
                const jsonData = await data.json(); // Error
                setGuessline(jsonData)
            };
            if (notInitialRender3.current) {
                //send word to backend
                GetGoal();
                GetLives();
                GetGuessLine();
                setVisibilityClass('not-hidden')

                // show 'hide-this' class
            }
            else {
                notInitialRender3.current = true;
            }
        }
    }, [gameStarted, word, permission])

    // this happens everytime text input gets updated
    function OnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setWord(e.currentTarget.value);
    }

    function OnCLick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setButtonClicks(buttonClicks + 1);
        setPermission(true);
    }

    function Button_A(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        // send a to backend
    }

    return (
        <div className='center'>
            <br></br>
            <h1 className="center">Wordmaster fills in a word</h1>
            <br></br>
            <input className={'white-border'} id='myTb' type='password' disabled={disabledTextBox} onChange={(e) => OnChange(e)} />
            <br></br>
            <br></br>
            <button className={'white-border center button-width-30'} id='myBtn' disabled={disabledButton} onClick={(e) => OnCLick(e)}>Confirm</button>


            <div className={visibilityClass}>
                <div className='center'>
                    <h1>Lives {lives}</h1>
                    <h1>Goal &lt; {goal}</h1>
                    <h1>Guessline {guessline}</h1>
                    <button className='square' id='btnA' disabled={false} onClick={(e) => Button_A(e)}>A</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>B</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>C</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>D</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>E</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>F</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>G</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>H</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>I</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>J</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>K</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>L</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>M</button>
                </div>
                <div className='center'>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>N</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>O</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>P</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>Q</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>R</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>S</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>T</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>U</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>V</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>W</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>X</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>Y</button>
                    <button className='square' disabled={false} onClick={(e) => Button_A(e)}>Z</button>
                </div>
                <div>
                    <div className={"center big-text"}>
                        <p>This section is still being worked on! You can find everything regarding rules, gameplay and future ideas here</p>
                        <a href="https://github.com/Epic-Chainsaw-Massacre">Reverse Hangman Online Documentation</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singleplayer;