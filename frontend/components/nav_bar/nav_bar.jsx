import React from 'react';
import { Link } from 'react-router-dom';

//just need a functional component here
//if currentUser exists, they are signed in, and need to
//render a log out button
export default ({ currentUser,logout }) =>{
  const navContent = currentUser ? (
    <div>
      <h3>Hi {currentUser.username}</h3>
      <button onClick={logout}>log out</button>
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
        <img src="Screen Shot 2017-11-18 at 10.48.06 PM.png" alt="Mountain View"/>
      </div>
    </header>
  );
};
