import React from 'react';
import NavBar from './NavBar';
import Schedule from './Schedule';
import Info from './Info';
import SignUp from './SignUp';

const HomePage = () => {
    return (
        <div>
            <div className="title">
                <h1>TkpbCSbtybETA@V+A</h1> 
                <h3>(TheaterKey powered by Clinical Solutions brought to you by Elsevier Tech Associates @ Via + Aries)</h3>
            </div>
            <div>
                <header><NavBar /></header>
                <p></p>
            </div>
            <div classname="schedule">
                <Schedule />
            </div>
            <div classname="signup">
                <SignUp />
            </div>
            <div className="footer">
                <footer><Info /></footer>
            </div>
        </div>
    );
}
export default HomePage;