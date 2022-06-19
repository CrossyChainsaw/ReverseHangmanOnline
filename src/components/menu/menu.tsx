import './menu.css';

function Menu(props: any) {

    function EnableSingleplayer() {
        props.setGamemode(props.Gamemodes.singleplayer);
    }

    function EnableMultiplayer() {
        props.setGamemode(props.Gamemodes.multiplayer);
    }

    function EnableRules() {
        props.setGamemode(props.Gamemodes.rules);
    }

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h1 className={'center large-text'}>REVERSE HANGMAN</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='center'>
                <div>
                    <button className={'white-border width-50'} type='button' onClick={() => EnableSingleplayer()}>Singleplayer</button>
                </div>
                <br></br>
                <div>
                    <button className={'white-border width-50'} type='button' onClick={() => EnableRules()}>Rules</button>
                </div>
                <br></br>
                <div>
                    <button className={'white-border width-50'} type='button' onClick={() => EnableMultiplayer()}>Multiplayer</button>
                </div>
            </div>
        </div>
    );
}

export default Menu;