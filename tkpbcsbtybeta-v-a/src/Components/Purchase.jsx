import React, {useState, Component} from 'react';

class Purchase extends Component {
    state ={count: 0};
    decrementTickets = () => {
        this.setState({ count: this.state.count - 1 })
    }

    incrementTickets = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitPurchase(this.tickets)
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Select number of tickets:</p>
                    <button onClick={this.decrementTickets}>-</button>
                    <button onClick={this.incrementTickets}>+</button>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}
export default Purchase;