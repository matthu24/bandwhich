import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {receiveCurrentUser} from './actions/session';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.getState = store.getState;
    window.receiveCurrentUser= receiveCurrentUser;
    ReactDOM.render(<Root store={store}/>, root);
});
