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
      <div className="left-nav">
        <a href="#" onClick={this.props.logout}>log out</a>
        <div>Hi {this.props.currentUser.username}</div>

      </div>
    ) : (
      <div>
        <Link to='/login'>log in</Link>
        <Link to='/signup'>sign up</Link>
        <Link to='/guest'>demo login</Link>

      </div>
    );
    return (
      <header className="nav-bar">
        <div className="left-nav">
          <img className='logo' src="http://www.drunkenwerewolf.com/wp-content/uploads/2017/04/Bandcamp.png"/>

        </div>
        <div className="right-nav">  {navContent}</div>

      </header>
    );
  }
}

export default NavBar;
