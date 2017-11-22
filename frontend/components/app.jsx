import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

// import PostIndexContainer from './posts/post_index_container';

const App = () => (
  <div>

      <Switch>

        <Route path="/login" component={LoginContainer} />

      </Switch>
  </div>
);

export default App;
