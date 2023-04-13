import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';

const DUMMY_ITEMS = [
{

},
{

}
];

function App() {
  const[items, setItems] = useState(DUMMY_ITEMS);
  const addItemHandler = item => {
    setItems((prevItems) => {
      return [item, ...prevItems];
    });
  }

  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const onLoggedIn = () => {
    setIsLoggedIn(() => {
      return true;
    });
  }

  return (
    <>
    <NavBar loggedIn={isLoggedIn} onLoggedIn={onLoggedIn}/>
    </>
  );
}

export default App;
