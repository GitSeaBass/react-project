import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar(props) {
    return (
      <div className='NavBar'>
        <img src="" alt="Logo" className='logo'/>
        {props.loggedIn ? <button className='button'>Create Post</button>:
          <Link to='/login'>
            <button className='button'> Sign In</button>
          </Link>
        } 
        {props.loggedIn ? <></>:<button>Signup</button>}
      </div>
    );
}

export default NavBar;