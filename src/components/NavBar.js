function NavBar(props) {
    return (
      <div>
        <img src="" alt="Logo"/>
        {props.loggedIn ? <button onClick={props.onLoggedIn}>Create Post</button>:<button onClick={props.onLoggedIn}>Login</button>}
        {props.loggedIn ? <></>:<button>Signup</button>}
      </div>
    );
}

export default NavBar;