import './LoginPage.css'
import {Link} from 'react-router-dom';
import React, {useState} from 'react';

function LoginPage(props) {

    const [user, setUser] = useState({
        user: '',
        pass: '',
    });

    const onChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value})
        console.log(user.user);
    }

    return (
        <div className='LoginPage'>
            <h2 id='loginHeader'>Login</h2>

            <form className='login-form'>
                <label for="user">Username</label> <br/>
                <input type="text" id="user" onChange={onChange}></input> <br/>

                <label for="pass">Password</label> <br/>
                <input type="text" id="pass" onChange={onChange}></input> <br/>
            </form>

            <Link to='/'> {/*this needs to be input type submit*/}
                    <button onClick={() => {
                        props.onLoggedIn();
                        props.addCurrentUser(user.user);
                    }} id='loginButton' className='button'>LOGIN</button>
            </Link>
        </div>
    );
}

export default LoginPage;