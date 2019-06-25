import React, {useState} from 'react';
import './css/purchase.css';
import NavBar from './NavBar';
import Popup from "reactjs-popup";
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Purchase = (props) => {
    const [adultTickets, setAdultTickets] = useState(0);
    const [childTickets, setChildTickets] = useState(0);
    const [priceTotal, setPriceTotal] = useState(0);
/*
    const handleMovieSelection = (event) => {
        event.preventDefault()
        this.getMovie(movie.name)
    }
*/
    const calculateTotal = () => {
        setPriceTotal(((childTickets + adultTickets)*10));
    }

    const decrementAdultTickets = (event) => {
        event.preventDefault()
        if(adultTickets > 0){
            setAdultTickets(adultTickets - 1)
        }
        calculateTotal();
    }

    const incrementAdultTickets = (event) => { 
        event.preventDefault()
        setAdultTickets(adultTickets + 1)
        calculateTotal();
    }

    const decrementChildTickets = (event) => {
        event.preventDefault()
        if(childTickets > 0){
            setChildTickets(childTickets - 1)
        }
        calculateTotal();
    }
    const incrementChildTickets = (event) => { 
        event.preventDefault()
        setChildTickets(childTickets + 1)
        calculateTotal();
    }

    const clear = () =>{
        setAdultTickets(0);
        setChildTickets(0);
        calculateTotal(0);
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
                        <p>Total: ${priceTotal}</p>
                        </div>
                    </form>
                </div>
                <div class = "column">
                    <form>
                        <div className="cardInfo">
                            <p>Enter Card Information</p>
                            <p><input type="text" name='Cardholder name' placeholder="Cardholder name"></input></p>
                            <p><input type="text" name='Card number' placeholder="Card number"></input></p>
                            <p><input type="text" name='CVV' placeholder="CVV"></input></p>
                            <p><input type="date" name='Expiration date' placeholder="Expiration Date"></input></p>
                        </div>
                    </form>
                    <Popup trigger={<button class="button"> Submit </button>} modal>
                    {close => (
                        <div class="modal">
                            <div>
                                <p>Purchase {adultTickets + childTickets} ticket(s) for {props.location.state.name} at {props.location.state.time}?</p>
                                <h2>Total: ${priceTotal}</h2>
                            </div>
                            <Link to={{pathname:"/ticketconfirmation", state:{time: props.location.state.time, name: props.location.state.name}}}><button class="confirmButton">Confirm</button></Link>
                            <button class="cancelButton" onClick={() => {close();}}>Cancel</button>
                        </div>            
                    )}
                    </Popup>
                </div>
            </div>
        </div>
    );
}
export default Purchase;