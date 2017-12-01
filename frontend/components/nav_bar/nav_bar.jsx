import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  //compare current path with new props path
  //if they are different, clear errors by dispatching clear error action
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.clearErrors();
    }
  }

  render(){
    const navContent = this.props.currentUser ? (
      <div>
        <div>Hi {this.props.currentUser.username}</div>
        <Link to='/artists'>Discover</Link>
        <div><a href="#" onClick={this.props.logout}>Log Out</a></div>
      </div>
    ) : (
      <div>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/guest'>Demo Login</Link>
      </div>
    );
    return (
      <header className="nav-bar">
        <div className="left-nav">
          <Link to='/artists'><img className='logo' src="https://i.imgur.com/gHgI8rt.jpg"/></Link>
        </div>
        <div className="right-nav">  {navContent}</div>
      </header>
    );
  }
}
//bandcamps logo
// http://www.drunkenwerewolf.com/wp-content/uploads/2017/04/Bandcamp.png
export default NavBar;
