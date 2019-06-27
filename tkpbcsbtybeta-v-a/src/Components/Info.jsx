import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './css/info.css';
import NavBar from './NavBar';


const Info = () => {
    return (
        <div className="container">
            <div>
                <NavBar/>
            </div>
            <p className="hours">Theater Hours: 9:00AM - 11:00PM Mon - Sat</p>
            <p className="phone">Phone: 111-111-1111</p>
            <p className="address">1600 JFK Blvd Philadelphia, Pennsylvania</p>
            <div className="socials">
                <SocialIcon network="twitter"/>
                <SocialIcon network="instagram"/>
                <SocialIcon network="facebook"/>
                <SocialIcon network="snapchat"/>
            </div>
        </div>
    );
}
export default Info;