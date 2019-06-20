import React from 'react';
import './css/movie.css';

const SignIn = () => {
    return (
        <div>
            <form>
                <p>Username: <input type="text" name="Username" /></p>
                <p>Password: <input type="text" name="Password" /></p>
                <br />
                <p>Stay logged in: <input type="checkbox" name="StaySignedIn" /></p>
                <p><input type="submit" value="Sign-in" /></p>
            </form>
        </div>
    );
}
export default SignIn;