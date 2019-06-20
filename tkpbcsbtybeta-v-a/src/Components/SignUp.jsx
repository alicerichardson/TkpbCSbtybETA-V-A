import React, { useState } from 'react'
import './css/movie.css'

const SignUp = () => {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Birthday, setBirthday] = useState('')
    
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
    const handleSubmit = (event) => {
        alert(`${FirstName} ${LastName} ${Email} ${Birthday}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Firstname: </label>
                <input type="text" name='FirstName' value={FirstName} onChange={handleFirstNameChange}></input>
            </div>
            <div>
                <label>Lastname: </label>
                <input type="text" name='LastName' value={LastName} onChange={handleLastNameChange}></input>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" name='Email' value={Email} placeholder="user@domain.com" onChange={handleEmailChange}></input>
            </div>
            <div>
                <label>Birthday: </label>
                <input type="date" name='Birthday' value={Birthday} onChange={handleBirthdayChange}></input>
            </div>
                <button type='submit'>Sign Up!</button>
        </form>
    )
}
export default SignUp

/*
const SignUp = () => {
    return (
        <div>
        <form>

            <p>First Name: <input type="text" name="FirstName" /></p>
            <p>Last Name: <input type="text" name="LastName" /></p>
            <p>E-mail: <input type="text" name="Email" placeholder="user@domain.com" /></p>
            <p>Birthday: <input type="date" name="Birthday" /></p>

            <p><input type="submit" value="Sign Up!" /></p>

        </form>
        </div>
    );
}



const SignUp = (props) => {
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [Birthday, setBirthday] = useState('')

    const handleFirstName = (event) => {
        setFirstName([event.target.value])
    }

    const handleLastName = (event) => {
        setLastName([event.target.value])
    }

    const handleEmail = (event) => {
        setEmail([event.target.value])
    }

    const handleBirthday = (event) => {
        setBirthday([event.target.value])
    }


}
*/
