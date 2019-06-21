import React, {useState} from 'react';
import NavBar from './NavBar';
import signUpTheater from  '../signUpTheater.png';

const SignUp = (props) => {

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
        //alert(`${FirstName} ${LastName} ${Email} ${Birthday}`)
        event.preventDefault()
        props.submitFirstName(FirstName)
        props.submitLastName(LastName)
        props.submitEmail(Email)
        props.submitBirthday(Birthday)

    }

    return (
        <div>
            <NavBar />
            <p>
                <img class="signupBanner" src={signUpTheater}></img>   
            </p> 
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