import React from 'react';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bandname: '',password:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e){
    // this.props.login
  }

  update(field){
    return(e) => {
      this.setState({[field]:e.target.value});
    };
  }
  render(){
    return(
      <h1>Log In</h1>
    );

  }


}

export default Login;
