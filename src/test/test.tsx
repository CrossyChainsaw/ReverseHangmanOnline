import { stat } from 'fs';
import React, { useState } from 'react';
import { text } from 'stream/consumers';
import './test.css';
import { Button } from "react-bootstrap";

function Test() {
    const [count, setCount] = useState(0);
    const [swagg, setSwagg] = useState("type a word");
    const [dynamicText, setDynamicText] = useState("");

    const getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        // show the user input value to console
        const userValue = event.target.value;

        console.log(userValue);
    };

    return (
        <div className='coolDiv'>
            <h1>TEST ZONE</h1>
            <h1>{count}</h1>
            <h1>{swagg}</h1>
            <h1>{dynamicText}</h1>

            <Button onClick={() => setCount(count + 1)}>++</Button>
            <Button onClick={() => setSwagg("hello")}>change text</Button>
            <Button onClick={() => setDynamicText(dynamicText + "Help")}>Set Word</Button>

            <input type="text" onChange={getInputValue} />

            <input
                id='tb1'
                type='text'
                placeholder='type a word'
            />
        </div>
    )
}

export default Test;