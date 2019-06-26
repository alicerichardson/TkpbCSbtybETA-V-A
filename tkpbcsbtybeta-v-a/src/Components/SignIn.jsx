import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
import './css/signin.css';
import axios from 'axios';

const SignIn = (props) => {

    const [users, setUsers] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        let getData = async() => {
        let response = await axios.get('http://localhost:3000/users')
        let userData = await response.data
        setUsers(users.users)
        console.log(userData)
        }
    getData()
    },[])

    const handleUsernameChange = (event) => {
        setUsername([event.target.value])
    }
    const handlePasswordChange = (event) => {
        setPassword([event.target.value])
    }

<<<<<<< HEAD
    function signIn (username) {
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

=======
>>>>>>> 51621e9ff0f85582006bb29a813006a134f56e03
    return(
        <div>
        <Popup trigger={<button>Sign In</button>} position="left top">
            <div className="signinFields">
                <form onSubmit="return signIn()" class="form">
                    <input type="text" id="username" placeholder="Username"/>
                    <input type="password" className="password" placeholder="Password"/>
                    <input type="submit" value="Sign In"/>               
                </form>
            </div>
        </Popup>
        </div>
    )

}
export default SignIn;