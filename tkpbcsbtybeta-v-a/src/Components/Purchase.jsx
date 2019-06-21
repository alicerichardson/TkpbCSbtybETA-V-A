import React, {useState} from 'react';
import './css/purchase.css';
import NavBar from './NavBar';

const Purchase = (props) => {
    const [adultTickets, setAdultTickets] = useState(0);
    const [childTickets, setChildTickets] = useState(0);
    const [movie] = props.match.params.name;
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
                <div className="purchaseTitle">
                    <h3>Purchase Tickets for {props.match.params.name}:</h3>
                </div>
                <form>
                    <p>Select number of adult tickets:</p>
                        <button onClick={decrementAdultTickets}>-</button>
                        <button onClick={incrementAdultTickets}>+</button>
                    <p>
                        Current number of adult tickets: {adultTickets}
                    </p>
                    
                    <p>Select number of child tickets:</p>
                        <button onClick={decrementChildTickets}>-</button>
                        <button onClick={incrementChildTickets}>+</button>
                    <p>
                        Current number of child tickets: {childTickets}
                    </p>
                    <button className="submit" type='submit'>Submit</button>
                </form>
            </div>
        );
}
export default Purchase;