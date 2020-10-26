// Has the users todos and only for that specific user
import React from 'react';

import firebase from '../firebase';

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
        console.log("userrr", this.props)
        this.setState({
            user: {username: user.username, email: user.email}
        })
    }


    render() {
        console.log('current logged in user ------> ', this.state.user)

        return(
            <>
            <div>Profile</div>
            </>
        )
    }
}

export default Profile;