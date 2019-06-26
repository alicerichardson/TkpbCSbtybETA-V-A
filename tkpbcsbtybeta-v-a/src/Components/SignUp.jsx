import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import signUpTheater from  '../indy3.png';
import axios from 'axios';
import PropTypes from "prop-types";
import './css/signup.css';

const SignUp = (props) => {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Birthday, setBirthday] = useState('')
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [elsEmployee, setElsEmployee] = useState(false)
    
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
    }
    const handlePasswordChange = (event) => {
        setPassword([event.target.value])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const createUser =() => {
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
    }
        console.log('adding new user');
        if(Email[0].includes("@elsevier.com")){
            console.log('here')
            setElsEmployee(true, createUser)
        }
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
                <p>
                    <button type='submit'>Sign Up!</button>
                </p>
            </div>
        </form>
    </div>
    )
}
export default SignUp