import React, {useState} from 'react';

const Purchase = () => {
    const [adultTickets, setAdultTickets] = useState(0);
    const [childTickets, setChildTickets] = useState(0);
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
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
}
export default Purchase;