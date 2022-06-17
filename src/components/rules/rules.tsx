import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './rules.css'

function Rules(props: any) {

    return (
        <Container>
            <br></br>
            <br></br>
            <br></br>
            <h1 className={'center large-text'}>RULES</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Col sm={true} className={"center big-text"}>
                    <p>This section is still being worked on!You can find everything regarding rules, gameplay and future ideas here</p>
                    <a href="https://github.com/Epic-Chainsaw-Massacre">Reverse Hangman Online Documentation</a>
                </Col>
            </Row>
        </Container>
    );
}

export default Rules;