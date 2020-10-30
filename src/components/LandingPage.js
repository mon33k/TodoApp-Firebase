import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';

const LandingPage = () => {
    return(
        <Jumbotron fluid>
            <Container>
                <h1>Simple To Do App</h1>
                <p>
                    Using Firebase for user auth and realtime database to store todos
                </p>
            </Container>
        </Jumbotron>
    )
}

export default LandingPage