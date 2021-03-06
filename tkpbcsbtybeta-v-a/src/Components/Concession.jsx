import React from 'react';
import NavBar from './NavBar';
import popcorn from '../popcorn.PNG';
import soda from '../soda.png';
import candy from '../candy.jpg';
import concessionStand from '../ConcessionStand.jpg';
import './css/concession.css';

const Concession = () => { 
    return (
        <div>
            <NavBar/> 
            <h1>Concession Stand</h1>
            <table align="center">
                <tr>
                    <th>Item</th>
                    <th>Small</th>
                    <th>Medium</th>
                    <th>Large</th>
                </tr>
                <tr>
                    <th><img class="concession" src={popcorn} alt="Popcorn"></img></th>
                    <th>$3.99</th>
                    <th>$5.99</th>
                    <th>$6.99</th>
                </tr>
                <tr>
                    <th><img class="concession" src={soda} alt="Soda"></img></th>
                    <th>$3.99</th>
                    <th>$4.99</th>
                    <th>$5.99</th>
                </tr>
                    <th><img class="concession" src={candy} alt="Candy"></img></th>
                    <th colspan="3">$2.99</th>
            </table>
        </div>
    );
}

export default Concession;