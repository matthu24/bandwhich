import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Dashboard from './dashboard/dashboard';


//nav bar always shows up
const App = () => (
  <div>


        <Route path="/" component={NavBarContainer}/>
        <Route exact path = "/" component={Dashboard}/>
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer}/>

  </div>
);

export default App;
