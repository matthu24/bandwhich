import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import SearchContainer from '../search/search_form_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  //compare current path with new props path
  //if they are different, clear errors by dispatching clear error action
  //for clear errors for switching between log in and sign in
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.clearErrors();
    }
  }

  render(){
    const navContent = this.props.currentUser ? (
      <div>
        <SearchContainer/>
        <div>Hi {this.props.currentUser.username}</div>
        <NavLink to='/artists' exact={true} activeStyle={{ textDecoration: 'underline' }}>Discover</NavLink>
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
          <Link to='/artists'><img className='logo' src="https://s3-us-west-1.amazonaws.com/fullstackfiles/BandwhichLogo.png"/></Link>
        </div>
        <div className="right-nav">  {navContent}</div>
      </header>
    );
  }
}

export default NavBar;
