import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (
    loggedIn ? <Redirect to="/artists" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (
    loggedIn ? <Component {...props} /> : <Redirect to="/splash" />
    )}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, undefined)(Protected));
