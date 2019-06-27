import React, {useState, useEffect} from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import signUpTheater from  '../indy3.png';
import axios from 'axios';
import './css/signup.css';
import Popup from "reactjs-popup";


const SignUp = (props) => {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Birthday, setBirthday] = useState('')
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [uniqueUser, setUniqueUser] = useState(true)
    const [currentUserName, setCurrentUsername] = useState('')
    
    const handleFirstNameChange = (event) => {
        setFirstName([event.target.value])
    }
    const handleLastNameChange = (event) => {
        setLastName([event.target.value])
    }
    const handleEmailChange = (event) => {
        setEmail([event.target.value])
    }
    const handleBirthdayChange = (event) => {
        setBirthday([event.target.value])
    }

    const handleUsernameChange = (event) => {
        setUsername([event.target.value])
        console.log('hererere')
        axios.get("http://localhost:3000/users/"+Username)
            .then(function (response) {
            console.log('res: ' + response.data)
            setCurrentUsername(response.data);
          })
          .catch(function (error) {
            console.log('err: ' + error);
        })
        
        if(currentUserName === 'User not found'){
            setUniqueUser(true)}
         else{ 
             setUniqueUser(false) 
        }
            
        console.log(uniqueUser)
    }
    const handlePasswordChange = (event) => {
        setPassword([event.target.value])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            "username": Username[0],
            "password": Password[0],
            "firstname": FirstName[0],
            "lastname": LastName[0],
            "email":    Email[0],
            "birthday": Birthday[0],
        }
        axios.post("http://localhost:3000/users/addUser", newUser)
            .then(function (response) {
            console.log('res: ' + response);
          })
          .catch(function (error) {
            console.log('err: ' + error);
        })
        console.log('adding new user');
    }

    return (
        <div>
            <NavBar />
            <p>
                <img class="signupBanner" src={signUpTheater}></img>   
            </p> 
        <form onSubmit={handleSubmit} className="signupForm">
            <div class="row">
                <div class="column">
                    <div>
                        <label>Username: </label>
                        <input type="text" className='Username' value={Username} onChange={handleUsernameChange}></input>
                        {uniqueUser ? <div></div> : <div>Username already in use!</div> }
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" className='Password' value={Password} onChange={handlePasswordChange}></input>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <label>Firstname: </label>
                        <input type="text" className='FirstName' value={FirstName} onChange={handleFirstNameChange}></input>
                    </div>
                    <div>
                        <label>Lastname: </label>
                        <input type="text" className='LastName' value={LastName} onChange={handleLastNameChange}></input>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <label>Birthday: </label>
                        <input type="date" name='Birthday' value={Birthday} onChange={handleBirthdayChange}></input>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" name='Email' value={Email} placeholder="user@domain.com" onChange={handleEmailChange}></input>
                    </div>
                </div>
            </div>
            <div>
            <Popup trigger={<button type='submit' class="button"> Sign Up! </button> } modal>
                {close => (
                        <div class="modal">
                            <div>
                                <p>Thanks for signing up!</p>
                            </div>
                        <Link to="/"><button class="cancelButton" onClick={() => {close();}}>Close</button></Link>       
                        </div>    
                    )}
            </Popup>
            </div>
        </form>
    </div>
    )
}
export default SignUp