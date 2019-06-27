import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Info from './Components/Info';
import Purchase from './Components/Purchase';
import SignIn from './Components/SignIn';
import TicketConfirmation from './Components/TicketConfirmation';
import Concession from './Components/Concession';
import Accessibility from './Components/Accessibility';

function App() {
  const routing = (
    <Router>
      <div className="container">
        <Route path="/" component={HomePage} exact/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/concessions" component={Concession}/>
        <Route path="/accessbility" component={Accessibility}/>
        <Route path="/contact" component={Info}/>
        <Route path="/purchase" component={Purchase}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/ticketconfirmation" component={TicketConfirmation}/>
      </div>
    </Router>
  )
  return (
    <>
    <div className="App">
      {routing}
    </div>
    </>
  );
}

export default App;
