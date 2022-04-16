import { stat } from 'fs';
import React, { useState } from 'react';
import { text } from 'stream/consumers';
import './menu.css';
import { Button } from "react-bootstrap";

function enableSingleplayer(gamemode: any) {
    // look into useCallback w3schools react tutorial
}

function enableMultiplayer() {

}

function Menu(props: any) {

    return (
        <div>
            <button type='button' onClick={() => enableSingleplayer(props.gamemode)}>Singleplayer</button>
            <button type='button' onClick={() => enableMultiplayer()}>Multiplayer</button>
        </div>
    );
}

export default Menu;