import React from "react";
import firebase from '../firebase';
import {Redirect} from 'react-router-dom'

class LogOut extends React.Component {
    constructor(){
        super()
        this.state = {
            loggedOut: false
        }
        this.handleLogOutUser = this.handleLogOutUser.bind(this)
    }


    handleLogOutUser(){
        firebase.auth().signOut().then(() => {
                this.setState({
                    loggedOut: true
                })
        }) 
            .catch((error) => {
                console.log("error --> ", error)
        })
    }

    render() {
        if(this.state.loggedOut) {
            return <Redirect to="/" />
        } else {
            return (
                <div>
                    <div>Logout</div>
                    <button type="submit" onClick={this.handleLogOutUser}>LogOust</button>
                </div>
            )
        }
    }
}

export default LogOut;