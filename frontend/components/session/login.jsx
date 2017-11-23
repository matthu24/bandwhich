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
      this.props.history.push('/');
    }
  }

  renderErrors(){
    const errors = this.props.errors ? (
      <ul>{
          this.props.errors.map((error,i) => (<li key={i}>{error}</li>))
          }
      </ul>
    ) : null;
    return (
      <div>
        {errors}
      </div>

    );
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
        <h3>Log In</h3>

        <label htmlFor="username">Username
          <input type="text" value={this.state.username} onChange={this.update("username")}/>
        </label>

        <br/>
        <label htmlFor="password">Password
          <input type="password" value={this.state.password} onChange={this.update("password")}/>
        </label>

        <br/>
        <button onClick={this.handleSubmit}>Log in</button>
        {this.renderErrors()}
    </form>

      </div>
    );

  }


}

export default withRouter(Login);
