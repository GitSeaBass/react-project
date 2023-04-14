import {Link} from 'react-router-dom';

function SignUpPage(props) {
    return (
        <div className='SignupPage'>
            <h2 id='SignupHeader'>Create Account</h2>
            <form className='signup-form'>
                <label for="name">Create Username</label> <br/>
                <input type="text" id="name"></input> <br/>
                <label for="pass">Create Password</label> <br/>
                <input type="text" id="pass"></input> <br/>
            </form>
            <Link to='/login'>
                    <button onClick={props.onLoggedIn} id='signupButton' className='button'>Sign Up</button>
            </Link>
        </div>
    );
}

export default SignUpPage;