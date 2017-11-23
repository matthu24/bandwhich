import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Splash from './dashboard/dashboard';
import Welcome from './welcome/welcome';


//nav bar always shows up
//use Authroute for login and signup?
const App = () => (
  <div>


        <Route path="/" component={NavBarContainer}/>
        <Route exact path="/" component={Welcome}/>
        <ProtectedRoute exact path = "/splash" component={Splash}/>
        <Switch>
        <AuthRoute path="/guest" component={LoginContainer} /> 
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer}/>
        </Switch>
  </div>
);

export default App;
