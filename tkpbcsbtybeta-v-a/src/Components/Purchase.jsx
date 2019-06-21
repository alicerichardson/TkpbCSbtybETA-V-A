import React, {useState} from 'react';
import './css/purchase.css';
import NavBar from './NavBar';

const Purchase = (props) => {
    const [adultTickets, setAdultTickets] = useState(0);
    const [childTickets, setChildTickets] = useState(0);
/*
    const handleMovieSelection = (event) => {
        event.preventDefault()
        this.getMovie(movie.name)
    }
*/
    const decrementAdultTickets = (event) => {
        event.preventDefault()
        if(adultTickets>0){
            setAdultTickets(adultTickets - 1)
        }
    }

    const incrementAdultTickets = (event) => { 
        event.preventDefault()
        setAdultTickets(adultTickets + 1)
    }

    const decrementChildTickets = (event) => {
        event.preventDefault()
        if(childTickets>0){
            setChildTickets(childTickets - 1)
        }
    }
    const incrementChildTickets = (event) => { 
        event.preventDefault()
        setChildTickets(childTickets + 1)
    }

        return(
            <div>
                <div>
                    <NavBar />
                </div>
                <div class="row">
                    <div class="column">
                        <div className="purchaseTitle">
                            <h2>Purchase Tickets for {props.location.state.name} at {props.location.state.time}:</h2>
                            <p>This movie is rated {props.location.state.rating} and runs for {props.location.state.runtime} </p>
                        </div>
                        <div className="times">
                            <p>Select your movie time</p>
                            <ul class="showtimes1">
                                {props.location.state.showtimes.map((value, index) => {return <li class="individualTimes" key={index}>{value}</li>})}
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
                            </div>
                        </form>
                    </div>
                    <div class = "column">
                        <form>
                            <div className="cardInfo">
                                <p>Enter your card information</p>
                                <p><input type="text" name='Cardholder name' placeholder="Cardholder name"></input></p>
                                <p><input type="text" name='Card number' placeholder="Card number"></input></p>
                                <p><input type="text" name='CVV' placeholder="CVV"></input></p>
                                <p><input type="date" name='Expiration date' placeholder="Expiration Date"></input></p>
                            </div>
                            <button className="submit" type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
}
export default Purchase;