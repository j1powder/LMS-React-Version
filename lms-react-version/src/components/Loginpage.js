import './Loginpage.css';
import authService from '../FirebaseAuthService';
import { Card } from 'primereact/card';
import { useState } from 'react';
import { projectAuth } from '../config';



const LoginPage = ({ existingUser }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

async function handleSubmit(event) {
    event.preventDefault();
    try {
        await authService.loginUser(username, password);
        setUsername('');
        setPassword('');
    }
 catch(error){
    alert(error.message);
}
}

const handleLogout = () => {

    authService.logoutUser();
}


    return <Card className='logincard' title="Login">
        <form onSubmit={handleSubmit}>
        {/* <div id='formsection'><form id='loginpage'> */}
        <label>Username: </label><input type='email' onChange={(e)=> setUsername(e.target.value)} />
        <label>Password: </label><input type='password' onChange={(e)=> setPassword(e.target.value)} />
        <br/>
        <button class='loginbtn'>Submit</button> <br/>
    </form>
    <button type='button' class='loginbtn' onClick={handleLogout}>Logout</button>

    {/* </div> */}
    </Card>
}

export default LoginPage;