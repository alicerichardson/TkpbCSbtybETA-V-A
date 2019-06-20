import React from 'react';
import NavBar from './NavBar';
import './css/movie.css';

const SignUp = () => {
    return (
        <div>
            <NavBar/>
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
export default SignUp;