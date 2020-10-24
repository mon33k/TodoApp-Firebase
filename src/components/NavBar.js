import React from 'react';
import {Link} from 'react-router-dom';
import '../styleheets/navbar.css'

const NavBar = () => {
    return(
        <div className="navbar-container">
            <nav className="navbar">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </nav>

        </div>
    )
}

export default NavBar;