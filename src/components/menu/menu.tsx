import './menu.css';

function Menu(props: any) {

    function EnableSingleplayer() {
        props.setGamemode(props.Gamemodes.singleplayer);
    }

    function EnableMultiplayer() {
        props.setGamemode(props.Gamemodes.multiplayer);
    }

    return (
        <div>
            <h1 className='center'>REVERSE HANGMAN</h1>
            <button type='button' onClick={() => EnableSingleplayer()}>Singleplayer</button>
            <button type='button' onClick={() => EnableMultiplayer()}>Multiplayer</button>
        </div>
    );
}

export default Menu;