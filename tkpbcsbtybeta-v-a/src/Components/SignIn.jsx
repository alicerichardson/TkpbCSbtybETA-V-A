import React from 'react';
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
    return (
        <div>
            <div>
                {/*{users.map(user => <User key={user.name} user={user}/>)}*/}
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" name='Username' value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" name='Password' value={password} onChange={handlePasswordChange}></input>
                </div>
                <br />
                <p>Stay logged in: <input type="checkbox" name="StaySignedIn" /></p>
                <p><input type="submit" value="Sign-in" /></p>
            </form>
        </div>
    );
}
export default SignIn;