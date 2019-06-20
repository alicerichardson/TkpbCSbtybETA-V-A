import React from 'react';
import './css/navbar.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="btn-group">
                <Link to="/"><button className = "home">Home</button></Link>
                <Link to="/signup"><button className = "signup">Sign Up</button></Link>
                <button className = "food">Concessions</button>
                <button className = "access">Accessibility</button>
                <Link to="/contact"><button className = "contact">Contact Info</button></Link>
            </div>
        </div>
    );
}
export default NavBar;