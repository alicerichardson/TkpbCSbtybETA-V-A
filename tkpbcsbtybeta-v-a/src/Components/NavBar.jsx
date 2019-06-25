import React from 'react';
import './css/navbar.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="btn-group">
                <Link to="/"><button className="navBtn">Home</button></Link>
                <Link to="/signup"><button className="navBtn">Sign Up</button></Link>
                <button className="navBtn">Concessions</button>
                <button className="navBtn">Accessibility</button>
                <Link to="/contact"><button className="navBtn">Contact Info</button></Link>
            </div>
        </div>
    );
}
export default NavBar;