import React from 'react';
import NavBar from './NavBar';
import Schedule from './Schedule';
import Info from './Info';
import SignUp from './SignUp';
import './css/homepage.css';
import { Wave, Random } from 'react-animated-text';
import CinemaKey from '../CinemaKey.jpg';


const HomePage = () => {
    return (
        <div>
            <div className="title">
                <img src={CinemaKey}></img>
                <h1><Random effect="stretch" className="mainTitle" text='TkpbCSbtybETA@V+A' /></h1>
                <h3>(TheaterKey powered by Clinical Solutions brought to you by Elsevier Tech Associates @ Via + Aries)</h3>
            </div>
            <div>
                <header><NavBar /></header>
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