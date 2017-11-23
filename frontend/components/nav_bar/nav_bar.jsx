import React from 'react';
import { Link } from 'react-router-dom';

// import logo from '../../../docs/Screen Shot 2017-11-18 at 10.48.06 PM.png';// relative path to image
// import logo from '../../../docs/logo.jpg';
//demo user link goes to Demo route /guest


// componentWillReceiveProps
//compare current path with new props path
//if they are different, clear errors by dispatching clear error action

// export default ({ currentUser,logout }) =>{
//   const navContent = currentUser ? (
//     <div>
//
//
//       <a href="#" onClick={logout}>log out</a>
//       <div>Hi {currentUser.username}</div>
//     </div>
//   ) : (
//     <div>
//       <Link to='/login'>log in</Link>
//
//       <Link to='/signup'>sign up</Link>
//       <Link to='/guest'>demo user</Link>
//       <div className="logo">Bandwhich</div>
//     </div>
//   );
//   return (
//     <header className="nav-bar">
//       <div>
//         {navContent}
//
//       </div>
//     </header>
//   );
// };
// <img src={logo} alt="mountains"/>


// <img src="../../../docs/logo.png" alt="Bandwhich"/>
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.clearErrors();
    }
  }

  render(){
    const navContent = this.props.currentUser ? (
      <div>
        <a href="#" onClick={this.props.logout}>log out</a>
        <div>Hi {this.props.currentUser.username}</div>
      </div>
    ) : (
      <div>
        <Link to='/login'>log in</Link>
        <Link to='/signup'>sign up</Link>
        <Link to='/guest'>demo user</Link>
        <div className="logo">Bandwhich</div>
      </div>
    );
    return (
      <header className="nav-bar">
        <div>
          {navContent}
        </div>
      </header>
    );
  }
}

export default NavBar;





// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {username: '',password:''};
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   //redirects the user to the splash page after logging in
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.loggedIn) {
//       // console.log("logged in");
//       this.props.history.push('/artist');
//     }
//   }
//
//   guestUser(){
//     const user = {username: "guest",password:"password"};
//     this.props.login(user);
//   }
//
//   clearErrors(){
//     this.props.errors = null;
//   }
//
//   renderErrors(){
//     const errors = this.props.errors ? (
//       <ul>{
//           this.props.errors.map((error,i) => (<li key={i}>{error}</li>))
//           }
//       </ul>
//     ) : null;
//     return (
//       <div>
//         {errors}
//       </div>
//
//     );
//   }
//
//   handleSubmit(e){
//     e.preventDefault();
//     this.props.login(this.state);
//   }
//
//   update(field){
//     return(e) => {
//       this.setState({[field]:e.target.value});
//     };
//   }
//   render(){
//     if (this.props.location.pathname === '/guest') {
//       console.log(this.props);
//     this.guestUser();
//     return null;
//   }
//     // this.clearErrors();
//     return(
//       <div>
//
//       <form className="login-form">
//         <h3>Log In</h3>
//
//         <label htmlFor="username">Username
//           <input type="text" value={this.state.username} onChange={this.update("username")}/>
//         </label>
//
//         <br/>
//         <label htmlFor="password">Password
//           <input type="password" value={this.state.password} onChange={this.update("password")}/>
//         </label>
//
//         <br/>
//         <button onClick={this.handleSubmit}>Log in</button>
//         {this.renderErrors()}
//     </form>
//
//       </div>
//     );
//
//   }
//
//
// }
//
// export default withRouter(Login);
