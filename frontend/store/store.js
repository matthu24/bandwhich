import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
import thunk from '../thunk/thunk';


//define configureStore, which creates store and passes in root reducer and apply middleware


//need preloadedState for keeping a user logged in if the browser is refreshed 
const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer,preloadedState,applyMiddleware(thunk));
};

export default configureStore;
