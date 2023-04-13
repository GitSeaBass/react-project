import {Link} from 'react-router-dom';

function NavBar(props) {
    return (
      <div>
        <img src="" alt="Logo"/>
        {props.loggedIn ? <button>Create Post</button>:
          <Link to='/login'>
            <button> Sign In</button>
          </Link>
        } 
        {props.loggedIn ? <></>:<button>Signup</button>}
      </div>
    );
}

export default NavBar;