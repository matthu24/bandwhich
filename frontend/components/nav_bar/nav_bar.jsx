import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../docs/Screen Shot 2017-11-18 at 10.48.06 PM.png';// relative path to image
// import logo from '../../../docs/logo.jpg';
//demo user link goes to Demo route /guest
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
      <Link to='/guest'>Demo user</Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <div>
        {navContent}

      </div>
    </header>
  );
};
// <img src={logo} alt="mountains"/>


// <img src="../../../docs/logo.png" alt="Bandwhich"/>
