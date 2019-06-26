import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import signUpTheater from  '../indy3.png';
import axios from 'axios';

const SignUp = (props) => {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Birthday, setBirthday] = useState('')
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    
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

    const addNewUser = () => {
        const newUser = {
            "username": {Username},
            "password": {Password},
            "firstname": {FirstName},
            "lastname": {LastName},
            "email": {Email},
            "birthday": {Birthday}
        }
        axios.post("http://localhost:3000/users", newUser)
            .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addNewUser();
    }

    return (
        <div>
            <NavBar />
            <p>
                <img class="signupBanner" src={signUpTheater}></img>   
            </p> 
        <form onSubmit={handleSubmit} className="signupForm">
            <div class="row">
            <div class="col-left">
            <div>
                <label>Username: </label>
                <input type="text" className='Username' value={Username} onChange={handleUsernameChange}></input>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" className='Password' value={Password} onChange={handlePasswordChange}></input>
            </div>
            <div>
                <label>Firstname: </label>
                <input type="text" className='FirstName' value={FirstName} onChange={handleFirstNameChange}></input>
            </div>
            <div>
                <label>Lastname: </label>
                <input type="text" className='LastName' value={LastName} onChange={handleLastNameChange}></input>
            </div>
            </div>
            <div class="col-right">
            <div>
                <label>Email: </label>
                <input type="text" name='Email' value={Email} placeholder="user@domain.com" onChange={handleEmailChange}></input>
            </div>
            <div>
                <label>Birthday: </label>
                <input type="date" name='Birthday' value={Birthday} onChange={handleBirthdayChange}></input>
            </div>
            </div>
            <div>
                <p>
                    <button type='submit'>Sign Up!</button>
                </p>
            </div>
            
            </div>
        </form>
        </div>
    )
}
export default SignUp