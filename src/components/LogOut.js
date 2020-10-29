import React from "react";
import firebase from '../firebase';
import {Redirect} from 'react-router-dom'

const LogOut = () => {

    const handleLogOutUser = (e) => {
        e.preventDefault()
        firebase.auth().signOut()
            .then(() =>{
                console.log("user signed off")
                return <Redirect to="/" /> //***fix the logout page so that it disappears when youre routed back to the landing page */
            })
            .catch((error) => {
                console.log("error --> ", error)
            })
        
    }

    return (
        <div>
            <div>Logout</div>
            <button type="submit" onClick={handleLogOutUser}>LogOust</button>
        </div>
        
    )
}

export default LogOut;