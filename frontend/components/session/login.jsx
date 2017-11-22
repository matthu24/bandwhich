import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',password:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        console.log("logged in");
        this.props.history.push('/home');
      }
    }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state);
  }

  update(field){
    return(e) => {
      this.setState({[field]:e.target.value});
    };
  }
  render(){
    return(
      <div>

      <form className="login-form">
        <h1>Log In</h1>
        <label htmlFor="username">Username</label>
        <input type="text" value={this.state.username} onChange={this.update("username")}/>
        <br/>
        <label htmlFor="password">Password</label>
        <input type="password" value={this.state.password} onChange={this.update("password")}/>
        <br/>
        <button onClick={this.handleSubmit}>Log in</button>
    </form>
      </div>
    );

  }


}

export default withRouter(Login);
