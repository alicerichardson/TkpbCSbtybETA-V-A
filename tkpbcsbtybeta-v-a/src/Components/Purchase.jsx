import React, {useState, useEffect} from 'react';

const Purchase = () => {
    const [count, setCount] = useState(0);
    const decrementTickets = (event) => {
        event.preventDefault()
        if(count>0){
            setCount(count - 1)
        }
    }
    const incrementTickets = (event) => { 
        event.preventDefault()
        setCount(count + 1)
    }

        return(
            <div>
                <form>
                    <p>Select number of tickets:</p>
                    <if><button onClick={decrementTickets}>-</button></if>
                    <button onClick={incrementTickets}>+</button>
                    <p>
                        Current number of tickets: {count}
                    </p>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
}
export default Purchase;