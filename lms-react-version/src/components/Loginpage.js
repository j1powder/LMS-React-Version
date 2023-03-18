import './Loginpage.css';
import { Card } from 'primereact/card';


const LoginPage = () => {

    return <Card className='logincard' title="Login">
        <form>
        {/* <div id='formsection'><form id='loginpage'> */}
        <label>Username: </label><input type='text' />
        <label>Password: </label><input type='text' />
    </form>
    {/* </div> */}
    </Card>
}

export default LoginPage;