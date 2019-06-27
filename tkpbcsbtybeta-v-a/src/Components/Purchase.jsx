import React, {useState} from 'react';
import './css/purchase.css';
import NavBar from './NavBar';
import Popup from "reactjs-popup";
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Purchase = (props) => {
    const [adultTickets, setAdultTickets] = useState(0);
    const [childTickets, setChildTickets] = useState(0);
    const [priceTotal, setPriceTotal] = useState(0);
    const [email, setEmail] = useState('')

    const handleEmailChange = (event) => {
        setEmail([event.target.value])
    }

    const handleCardChange = (event) => {
        calculateTotal();
    }

    const calculateTotal = () => {
        console.log('herere')
        if(email[0].includes("@elsevier.com")){
            setPriceTotal(( (childTickets*4) + (adultTickets*8) ));
        }
        else{
            setPriceTotal(( (childTickets*6) + (adultTickets*10) ));
        }
    }

    const decrementAdultTickets = (event) => {
        event.preventDefault()
        if(adultTickets > 0){
            setAdultTickets(adultTickets - 1)
        }
    }

    const incrementAdultTickets = (event) => { 
        event.preventDefault()
        setAdultTickets(adultTickets + 1)
    }

    const decrementChildTickets = (event) => {
        event.preventDefault()
        if(childTickets > 0) {
            setChildTickets(childTickets - 1)
        }
    }
    const incrementChildTickets = (event) => { 
        event.preventDefault()
        setChildTickets(childTickets + 1)
    }

    const clear = () =>{
        setAdultTickets(0);
        setChildTickets(0);
    }

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div class="row">
                <div class="column">
                    <div className="purchaseTitle">
                        <h2>Purchase Tickets for {props.location.state.name} at <br />{props.location.state.time}</h2>
                        <p>This movie is rated {props.location.state.rating} and runs for <br /> {props.location.state.runtime} </p>
                    </div>
                    <div className="times">
                        <p>Change your movie time: </p>
                        <ul class="showtimes1">
                            {props.location.state.showtimes.map((value, index) => {return <Link to={{pathname:"/purchase", 
                                state:{time: value, name: props.location.state.name, rating: props.location.state.rating, 
                                runtime: props.location.state.runtime, showtimes: props.location.state.showtimes}}} onClick={clear}>
                                    <li class="individualTimes" key={index}>{value}</li></Link>})}
                        </ul>
                    </div>
                </div>
                <div class = "column">
                    <form>
                        <div class="tickets">
                        <p>Select Number of Adult Tickets: {adultTickets}</p>
                            <button class="ticketBtn" onClick={decrementAdultTickets}>-</button>
                            <button class="ticketBtn" onClick={incrementAdultTickets}>+</button>
                        
                        <p>Select Number of Child Tickets: {childTickets}</p>
                            <button class="ticketBtn" onClick={decrementChildTickets}>-</button>
                            <button class="ticketBtn" onClick={incrementChildTickets}>+</button>
                        <p></p>
                        <p>Adult Tickets: $10
                            Child Tickets: $8
                        </p>
                        </div>
                    </form>
                </div>
                <div class = "column">
                    <form>
                        <div className="email">
                            <p>Enter Email</p>
                            <p><input type="text" name='Email' placeholder="Email" value={email} onChange={handleEmailChange}></input></p>
                        </div>
                        <div className="cardInfo">
                            <p>Enter Card Information</p>
                            <p><input type="text" name='Cardholder name' placeholder="Cardholder name" onChange={handleCardChange}></input></p>
                            <p><input type="text" name='Card number' placeholder="Card number"></input></p>
                            <p><input type="text" name='CVV' placeholder="CVV"></input></p>
                            <p><input type="text" name='Expiration date' placeholder="Expiration (MM/YY)"></input></p>
                        </div>
                    </form>
                    <Popup trigger={<button class="button"> Submit </button> } modal>
                    {close => (
                        <div class="modal">
                            <div>
                                <p>Purchase {adultTickets + childTickets} ticket(s) for {props.location.state.name} at {props.location.state.time}?</p>
                                <h2>Total: ${priceTotal}</h2>
                            </div>
                            <Link to={{pathname:"/ticketconfirmation", state:{time: props.location.state.time, name: props.location.state.name, email: email}}}><button class="confirmButton">Confirm</button></Link>
                            <button class="cancelButton" onClick={() => {close();}}>Cancel</button>
                        </div>            
                    )}
                    </Popup>
                </div>
                <div>
                    <p className="footnote">Elsevier employees get a 20% discount! Please give your Elsevier email.</p>
                </div>
            </div>
        </div>
    );
}
export default Purchase;