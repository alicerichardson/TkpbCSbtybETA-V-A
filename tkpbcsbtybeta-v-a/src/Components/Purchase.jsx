import React, {useState} from 'react';
import './css/purchase.css';
import NavBar from './NavBar';
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
        if(adultTickets>0){
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
        if(childTickets>0){
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

        return(
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
                            <p>Change your movie time</p>
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
                            <p>Select number of adult tickets: {adultTickets}</p>
                                <button onClick={decrementAdultTickets}>-</button>
                                <button onClick={incrementAdultTickets}>+</button>
                            
                            <p>Select number of child tickets: {childTickets}</p>
                                <button onClick={decrementChildTickets}>-</button>
                                <button onClick={incrementChildTickets}>+</button>
                            <p></p>
                            <p>Total: ${priceTotal}</p>
                            </div>
                        </form>
                    </div>
                    <div class = "column">
                        <form>
                            <div className="cardInfo">
                                <p>Enter your card information</p>
                                <p><input type="text" className='Cardholder name' placeholder="Cardholder name"></input></p>
                                <p><input type="text" className='Card number' placeholder="Card number"></input></p>
                                <p><input type="text" className='CVV' placeholder="CVV"></input></p>
                                <p><input type="date" className='Expiration date' placeholderText="Expiration Date"></input></p>
                            </div>
                            <button className="submit" type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
}
export default Purchase;