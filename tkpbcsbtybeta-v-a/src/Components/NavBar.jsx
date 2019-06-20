import React from 'react';
import './css/navbar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="btn-group">
                <button className = "home">Home</button>
                <button className = "signup">Sign Up</button>
                <button className = "food">Concessions</button>
                <button className = "access">Accessibility</button>
                <button className = "contact">Contact Info</button>
            </div>
        </div>
    );
}
export default NavBar;