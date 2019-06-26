import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
import './css/signin.css';
import axios from 'axios';

const SignIn = (props) => {

    const [users, setUsers] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    var user;

    useEffect(() => {
        let getData = async() => {
        let response = await axios.get('http://localhost:3000/users')
        let users = await response.data
        setUsers(users.users)
        console.log(users)
    }
    getData()
    },[])

    const handleUsernameChange = (event) => {
        setUsername([event.target.value])
    }
    const handlePasswordChange = (event) => {
        setPassword([event.target.value])
    }

    function signIn (username) {
        console.log('username: ' + username);
        user = users.filter(user => user.username === username);
        console.log(user.username);
        console.log(user.password);
            if(user.password === password){
                console.log("true");
                setLoggedIn(true);
                return;
            }
        
        console.log("false");
    }

    return(
        <div>
        <Popup trigger={<button>Sign In</button>} position="left top">
            <div className="signinFields">
                <form>
                    <p>Username: <input type="text" className="username" value={username} onChange={handleUsernameChange} /></p>
                    <p>Password: <input type="text" className="password" value={password} onChange={handlePasswordChange} /></p>
                    <br />
                    <p>Stay logged in: <input type="checkbox" name="StaySignedIn" /></p>
                    <button onClick={signIn('alice')}>Sign In</button>
                </form>
            </div>
        </Popup>
            <div>
                {loggedIn && ( <div><p>Welcome {username}</p></div>)}
            </div>
        </div>
    )

}
export default SignIn;