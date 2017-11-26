import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Artist from './artist/artist_index_container';
import Splash from './splash/splash';
import ArtistShowContainer from './artist/artist_show_container';
import Spotlight from './spotlight/spotlight_index_container';

//authroute /guest takes you to login container
//once in login container, if this.props.location.pathname is guest, then guest user is signed in in the render
//which is automatically executed by the loginContainer
//once loggedin, component receives new props and is redirected to /splash
const App = () => (
  <div>


      <Route path="/" component={NavBarContainer}/>
        <Switch>
        <AuthRoute path="/guest" component={LoginContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer}/>
        <Route exact path="/" component={Splash}/>
        <ProtectedRoute exact path = "/artists" component={Artist}/>
        <ProtectedRoute exact path="/artists/:artistId" component={ArtistShowContainer} />
        <Route component={LoginContainer}/>
        </Switch>
  </div>
);

export default App;
