import React, { useState } from 'react'
import SignUp from './SignUp'

function RetrieveData () {
    const [FirstName, setFirstName] = useState('not given')
    const [LastName, setLastName] = useState('not given')
    const [Email, setEmail] = useState('not given')
    const [Birthday, setBirthday] = useState('mm/dd/yyyy')

    const showFirstName = FirstName => {
        setFirstName(FirstName)
    }
    const showLastName = LastName => {
        setLastName(LastName)
    }
    const showEmail = Email => {
        setEmail(Email)
    }
    const showBirthday = Birthday => {
        setBirthday(Birthday)
    }

    return (
        <div className="RetrieveData">
            <h3>Firstname: {FirstName}</h3>
            <h3>Lastname: {LastName}</h3>
            <h3>Email: {Email}</h3>
            <h3>Birthday: {Birthday}</h3>
            <SignUp submitFirstName={showFirstName} submitLastName={showLastName} submitEmail={showEmail} submitBirthday={showBirthday}></SignUp> 
        </div>
    );
}

export default RetrieveData;