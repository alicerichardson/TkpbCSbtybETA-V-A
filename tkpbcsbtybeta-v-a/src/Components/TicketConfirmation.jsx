import React, {useState} from 'react';
import NavBar from './NavBar';
import './css/ticketConfirmation.css';
import QRCode from 'qrcode.react';

const TicketConfirmation = (props) => {
    return (
       <div>
            <NavBar/>
            <h2>Thank You for Your Purchase</h2>
            <h4>Your pass for all tickets can be printed from below. You have also been sent a confirmation email at {props.location.state.email}.</h4>
            <div class="ticket">
                <h2>{props.location.state.name}</h2>
                <h3>{props.location.state.time}</h3>
                <QRCode value="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></QRCode>
        </div>
       </div>
    );
}

export default TicketConfirmation;