import React from 'react';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',password:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }


  renderErrors(){
    return (
      <ul>{
        this.props.errors.map((error,i) => (<li key={i}>{error}</li>))
      }
      </ul>
    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signup(this.state);
  }

  update(field){
    return(e) => {
      this.setState({[field]:e.target.value});
    };
  }
  render(){
    return(
      <div>
        <form className="signup-form">
          <h1>Sign up for a fan account</h1>
          <label htmlFor="username">Username</label>
          <input type="text" value={this.state.username} onChange={this.update("username")}/>
          <br/>
          <label htmlFor="password">Password</label>
          <input type="password" value={this.state.password} onChange={this.update("password")}/>
          <br/>
          <button onClick={this.handleSubmit}>Sign up</button>
        </form>
      </div>
    );

  }


}

export default Signup;
