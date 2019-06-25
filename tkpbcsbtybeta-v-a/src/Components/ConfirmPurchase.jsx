import React from "react";
import Popup from "reactjs-popup";
import './css/confirmpurchase.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const ConfirmPurchase = (props) => {
    return (
        <Popup trigger={<button class="button"> Submit </button>} modal> 
        {close => (
            <div class="modal">
                <div>
                    <p>Purchase TICKET NUMBER tickets for MOVIE NAME at MOVIE TIME?</p>
                    <h2>Total: TOTAL COST</h2>
                </div>
                <button class="confirmButton">Confirm</button>
                <button class="cancelButton" onClick={() => {close();}}>Cancel</button>
            </div>
        )}
        </Popup>
    )
}

export default ConfirmPurchase;