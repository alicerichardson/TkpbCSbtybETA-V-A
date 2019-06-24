import React from 'react';
import NavBar from './NavBar';
import Schedule from './Schedule';
import Info from './Info';
import './css/homepage.css';
import { Wave, Random } from 'react-animated-text';
import CinemaKey from '../CinemaKey.jpg';
import SignIn from './SignIn';


const HomePage = () => {
    return (
        <div>
            <div className="title">
                
                <img class="logo" src={CinemaKey}></img>
                <div class="signin">
                    <SignIn />
                </div>
                <div class="navbar">
                    <header><NavBar /></header>
                </div>
                <h1><Random className="mainTitle" text='TkpbCSbtybETA@V+A' /></h1>
                <h3>(TheaterKey powered by Clinical Solutions brought to you by Elsevier Tech Associates @ Via + Aries)</h3> 
            </div>
            
            <div classname="schedule">
                <Schedule />
            </div>
            <div className="footer">
                <footer><Info /></footer>
            </div>
        </div>
    );
}
export default HomePage;