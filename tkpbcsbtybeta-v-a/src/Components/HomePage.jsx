import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import Schedule from './Schedule';
import Info from './Info';
import './css/homepage.css';
import { Random } from 'react-animated-text';
import CinemaKey from '../CinemaKey.jpg';
import SignIn from './SignIn';
import CustomInput from './SelectDate';
import DatePicker from "react-datepicker";


const HomePage = () => {

    const[username, setUsername] = useState('')
    const[loggedIn, setLoggedIn] = useState(false)
    const[startDate, setStartDate] = useState(new Date())
  
    const handleChange = (date) => {
        setStartDate(date)
    };

    const signIn = (username) => {
        console.log(username)
        setUsername(username)
        setLoggedIn(true)
    }

    return (
        <div>
            <div className="title">
                <img class="logo" src={CinemaKey}></img>
                <div className="signin">
                    <SignIn username={'alice'}/>
                    <div>
                        {loggedIn && (<div><p>Welcome {username}</p></div>)}
                    </div>
                </div>
                <div class="navbar">
                    <header><NavBar /></header>
                </div>
                <h1><Random className="mainTitle" text='TkpbCSbtybETA@V+A' /></h1>
                <h3>(TheaterKey powered by Clinical Solutions brought to you by Elsevier Tech Associates @ Via + Aries)</h3> 
            </div>
            <div className="selectdate">
                <p>Movies Playing On: <CustomInput /></p>
                {/* Movies Playing On: <DatePicker>selected={startDate} onChange={handleChange}</DatePicker> */}
            </div>
            <div className="schedule">
                <Schedule />
            </div> 
            <div className="footer">
                <footer><Info /></footer>
            </div>
        </div>
    );
}
export default HomePage;