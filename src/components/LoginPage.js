import './LoginPage.css'
import {Link} from 'react-router-dom';

function LoginPage(props) {
    return (
        <div className='LoginPage'>
            <h2 id='loginHeader'>Login</h2>
            <form className='login-form'>
                <label for="name">Username</label> <br/>
                <input type="text" id="name"></input> <br/>
                <label for="pass">Password</label> <br/>
                <input type="text" id="pass"></input> <br/>
            </form>
            <Link to='/'>
                    <button onClick={props.onLoggedIn} id='loginButton' className='button'>LOGIN</button>
            </Link>
        </div>
    );
}

export default LoginPage;