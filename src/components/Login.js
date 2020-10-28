import React from 'react';
import firebase from '../firebase';

class Login extends React.Component {
    constructor() {
        super()
        this.state ={ 
            username: '',
            email: '',
            password: '',
            userid: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => { // here use firebase to grab the id too or in component didmount or set user from the props passed from app.js
        e.preventDefault()
        const {email, password, username} = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                res.user.updateProfile({
                    displayName: username
                })
                console.log("res.user.username", res.user.displayName)
                this.setState({
                    username: username,
                    email: res.user.email,
                    userid: res.user.uid
                })
                this.props.setCurrentUser({email: res.user.email, userid: res.user.uid, username: username})
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;     // Create an error message alert from bootstrap
                var errorMessage = error.message;
                console.log("error -> ", error)
                // ...
        });
    }

    render() {
        const {email, password, username} = this.state
        return(
            <>
            <div>Login</div>
            <form>
                <label>
                    Username: 
                    <input id="username" name="username" type="text" placeholder="username" value={username} onChange={this.handleInputChange}/>
                </label>
                <br></br>
                <label>
                    Email: 
                    <input id="email" name="email" type="text" placeholder="email" value={email} onChange={this.handleInputChange}/>
                </label>
                <br></br>
                <label>
                    Password: 
                    <input id="password" name="password" type="text" placeholder="password" value={password} onChange={this.handleInputChange}/>
                </label>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
            </>
        )
    }
}

export default Login;