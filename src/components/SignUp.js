import React from 'react';
import firebase from '../firebase';
import '../styleheets/signup.css';
import { Container, Row, Col, Alert, Form, Button } from 'react-bootstrap';

class SignUp extends React.Component {
    constructor() {
        super()
        this.state ={ 
            username: '',
            email: '',
            password: '',
            userid: '',
            error: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const {username, email, password, userid} = this.state
        e.preventDefault()

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            res.user.updateProfile({
                displayName: username
            })
            this.setState({
                userid: res.user.uid
            })
            this.props.setCurrentUser({email: res.user.email, userid: res.user.uid, username: username})
        })
        .catch((error) => {
            this.setState({
                error: error.message
            })
        })
    }


    render() {
        const {email, password, username, error} = this.state

        return(
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                    <h2 className="signUpHeader">SignUp</h2>
                    {error ? <Alert variant="danger">{error}</Alert>: ""}

                        <Form>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" name="username" value={username} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" name="email" value={email} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Enter Password" name="password" value={password} onChange={this.handleInputChange} />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SignUp;