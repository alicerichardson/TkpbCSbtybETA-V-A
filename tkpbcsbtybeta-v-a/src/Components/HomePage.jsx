import React from 'react';
import NavBar from './NavBar';
import Schedule from './Schedule';
import Info from './Info';
import SignUp from './SignUp';
import './css/homepage.css';
<<<<<<< HEAD
import { Wave } from 'react-animated-text';

=======
>>>>>>> 3cb88fcd12c9c77c7f18232dfb17523b4d66d844

const HomePage = () => {
    return (
        <div>
            <div className="title">
                <h1><Wave className="mainTitle" text='TkpbCSbtybETA@V+A' /></h1>
                <h3>(TheaterKey powered by Clinical Solutions brought to you by Elsevier Tech Associates @ Via + Aries)</h3>
            </div>
            <div>
                <header><NavBar /></header>
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