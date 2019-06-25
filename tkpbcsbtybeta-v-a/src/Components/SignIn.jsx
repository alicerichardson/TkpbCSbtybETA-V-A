import React, {useState, useEffect} from 'react';
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
    const user = props.user;

    const handleUsernameChange = (event) => {
        setUsername([event.target.value])
    }
    const handlePasswordChange = (event) => {
        setPassword([event.target.value])
    }

    const signIn = (username) => {
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
        <div>
        <Popup trigger={<button>Sign In</button>} position="left top">
            <div className="fields">
                <form>
                    <p>Username: <input type="text" className="username" value={username} onChange={handleUsernameChange} /></p>
                    <p>Password: <input type="text" className="password" value={password} onChange={handlePasswordChange} /></p>
                    <br />
                    <p>Stay logged in: <input type="checkbox" name="StaySignedIn" /></p>
                    <button onClick={() => props.signIn(user)}>Sign In</button>
                </form>
            </div>
        </Popup>
        </div>
    )

}
export default SignIn;