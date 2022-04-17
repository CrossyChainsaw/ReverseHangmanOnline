import { stat } from 'fs';
import React, { useState } from 'react';
import { text } from 'stream/consumers';
import './menu.css';
import { Button } from "react-bootstrap";

function Menu(props: any) {

    function EnableSingleplayer() {
        props.setGamemode(props.Gamemodes.singleplayer);
    }

    function EnableMultiplayer() {
        props.setGamemode(props.Gamemodes.multiplayer);
    }

    return (
        <div>
            <button type='button' onClick={() => EnableSingleplayer()}>Singleplayer</button>
            <button type='button' onClick={() => EnableMultiplayer()}>Multiplayer</button>
        </div>
    );
}

export default Menu;