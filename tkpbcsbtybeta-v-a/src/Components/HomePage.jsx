import React, {style} from 'react';
import NavBar from './NavBar';
import Schedule from './Schedule';
import Info from './Info';

const HomePage = () => {
    return (
        <div>
            <div className="title">
                <h3>TkpbCSbtybETA@V+A</h3>
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