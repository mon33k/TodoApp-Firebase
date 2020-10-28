import React from 'react';
import firebase from '../firebase';

class SignUp extends React.Component {
    constructor() {
        super()
        this.state ={ 
            username: '',
            email: '',
            password: '',
            userid: ''
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
            console.log("error", error)
        })
    }


    render() {
        const {email, password, username} = this.state

        return(
            <>
            <div>SignUp</div>
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

export default SignUp;