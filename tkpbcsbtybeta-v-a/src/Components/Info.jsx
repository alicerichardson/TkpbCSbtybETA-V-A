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
            <div className="socials">
                <SocialIcon network="twitter" class="tw"/>
                <SocialIcon network="instagram"/>
                <SocialIcon network="facebook"/>
                <SocialIcon network="snapchat"/>
            </div>
        </div>
    );
}
export default Info;