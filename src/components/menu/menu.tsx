import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './menu.css';
import { Col, Container, Row } from 'react-bootstrap';

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
        <Container>
            <br></br>
            <br></br>
            <br></br>
            <h1 className={'center large-text'}>REVERSE HANGMAN</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Col sm={true}>
                    <button className={'white-border'} type='button' onClick={() => EnableSingleplayer()}>Singleplayer</button>
                </Col>
                <Col sm={true}>
                    <button className={'white-border'} type='button' onClick={() => EnableRules()}>Rules</button>
                </Col>
                <Col sm={true}>
                    <button className={'white-border'} type='button' onClick={() => EnableMultiplayer()}>Multiplayer</button>
                </Col>
            </Row>
        </Container>
    );
}

export default Menu;