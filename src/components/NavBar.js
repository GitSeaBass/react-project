import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar(props) {
    return (
      <div className='NavBar'>
        <div className='brand'>
          <img src="" alt="Logo" className='logo'/>
          <h3>Title</h3>
        </div>

        <div className='buttons'>
          {props.loggedIn ? <button className='button'>Create Post</button>:
            <Link to='/login'>
              <button className='button'> Sign In</button>
            </Link>
          } 
          {props.loggedIn ? <button className='button' onClick={props.onLoggedIn}>Logout</button>:
            <button className='button'>Signup</button>}
        </div>
      </div>
    );
}

export default NavBar;