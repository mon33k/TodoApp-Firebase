// Has the users todos and only for that specific user
import React from 'react';
import firebase from '../firebase';
import {Redirect} from 'react-router-dom'
import Form from './Form';
import TodoList from './TodoList';

class Profile extends React.Component {
    constructor() {
        super()
        this.state ={ 
            user: null
        }

    }


    componentDidMount() {
        this.getLoggedInUser()
    }

    getLoggedInUser(){
        let user = firebase.auth().currentUser
        console.log("whole current user obj --> ", user)
        if(user) {
            this.setState({
                user: {username: user.displayName, email: user.email}
            })
        } else {
            return <Redirect to="/"/>
        }
    }


    render() {
        const {user} = this.state
        return(
            <>
            <div>{user ? user.username : ""}'s Profile</div>
            <Form/>
            <TodoList/>
            </>
        )
    }
}

export default Profile;