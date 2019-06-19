import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Info = () => {
    return (
        <div>
            <p>Theater Hours: 9:00AM - 11:00 PM Mon - Sat</p>
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