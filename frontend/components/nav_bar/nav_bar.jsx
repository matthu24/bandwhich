import React from 'react';
import { Link } from 'react-router-dom';

//just need a functional component here
//if currentUser exists, they are signed in, and need to
//render a log out button
export default ({ currentUser,logout }) =>{
  const navContent = currentUser ? (
    <div>


      <a href="#" onClick={logout}>log out</a>
      <div>Hi {currentUser.username}</div>
    </div>
  ) : (
    <div>
      <Link to='/login'>log in</Link>

      <Link to='/signup'>sign up</Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <div>
        {navContent}
        <img src="../../../docs/Screen Shot 2017-11-18 at 10.48.06 PM.png" alt="Bandwhich"/>
      </div>
    </header>
  );
};
