import React from 'react';
import {Link} from 'react-router-dom';
import '../styleheets/navbar.css'

const NavBar = ({user}) => {
    if(user) {
        return (
            <div className="navbar-container">
                <nav className="navbar">
                    <li><Link to="/logout">Log Out</Link></li>
                    <li><Link to={`/profile/${user.username}`}>Profile</Link></li>
                </nav>
            </div>
        )
    } else {
        return (
            <div className="navbar-container">
            <nav className="navbar">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </nav>
        </div>
        )
    }

}

export default NavBar;