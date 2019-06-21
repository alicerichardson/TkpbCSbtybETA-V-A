import React, {useEffect, useState} from 'react';
import Popup from 'reactjs-popup';
import './css/movie.css';
import axios from 'axios';

const SignIn = (props) => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        let getData = async() => {
        let response = await axios.get('http://localhost:3000/users')
        console.log(response);
        let users = await response.data
        setUsers(users)
    }
    getData()
    },[])

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const user = useState('')

    const handleUsernameChange = (event) => {
        setUsername([event.target.value])
    }
    const handlePasswordChange = (event) => {
        setPassword([event.target.value])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(users);
        if(users.includes(username)){
            user = users.filter(user => user.username === username );
            console.log(user.username);
            console.log(user.password);
            if(user.password === password){
                console.log("true");
                return true;
            }
        }
        console.log("false");
    }
    return(
        <Popup trigger={<button>Sign In</button>} position="left top">
            <div>
                <form>
                    <p>Username: <input type="text" name="Username" /></p>
                    <p>Password: <input type="text" name="Password" /></p>
                    <br />
                    <p>Stay logged in: <input type="checkbox" name="StaySignedIn" /></p>
                    <p><input type="submit" value="Sign-in" /></p>
                </form>
            </div>
        </Popup>
    )

}
export default SignIn;