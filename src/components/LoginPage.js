import {Link} from 'react-router-dom';

function LoginPage(props) {
    return (
        <div>
            <form>
                <label for="name">Username</label> <br/>
                <input type="text" id="name"></input> <br/>
                <label for="pass">Password</label> <br/>
                <input type="text" id="pass"></input> <br/>
                <Link to='/'>
                    <button onClick={props.onLoggedIn}>Login</button>
                </Link>
            </form>
        </div>
    );
}

export default LoginPage;