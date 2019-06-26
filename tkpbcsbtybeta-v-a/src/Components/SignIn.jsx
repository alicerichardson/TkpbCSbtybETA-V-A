import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
import './css/signin.css';
import axios from 'axios';

const SignIn = (props) => {

    //const [user, setUser] = useState([])
    //const [loggedIn, setLoggedIn] = useState(false)
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    var user;

    useEffect(() => {
        let getData = async() => {
        let response = await axios.get('http://localhost:3000/users/emily')
        let userData = await response.data
        //user = userData.username
        console.log(userData);
        }
    getData()
    },[])

    // const handleUsernameChange = (event) => {
    //     setUsername([event.target.value])
    // }
    // const handlePasswordChange = (event) => {
    //     setPassword([event.target.value])
    // }

    // function signIn () {
    //     var u = document.getElementById(username).value;
    //     var p = document.getElementById(password).value;
    //     console.log(u);
    //     console.log(p);
    // }

    return(
        <div>
        <Popup trigger={<button>Sign In</button>} position="left top">
            <div className="signinFields">
                <form onSubmit="return signIn()">
                    <input type="text" id="username" placeholder="Username"/>
                    <input type="password" className="password" placeholder="Password"/>
                    <input type="submit" value="Submit"/>               
                </form>
            </div>
        </Popup>
        </div>
    )

}
export default SignIn;