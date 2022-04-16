import { stat } from 'fs';
import React, { useState } from 'react';
import { text } from 'stream/consumers';
import './singleplayer.css';
import { Button } from "react-bootstrap";

function Singleplayer(props: any) {
    console.log(props.name);
    return (
        <h1>this is singleplayer</h1>
    )
}

export default Singleplayer;