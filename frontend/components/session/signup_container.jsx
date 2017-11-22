import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
  signup: formUser => dispatch(signup(formUser))
});

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
