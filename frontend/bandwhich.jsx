import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchAllArtists,fetchSingleArtist} from './actions/artist';
import {fetchSingleTrack} from './actions/track';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    // const store = configureStore();


    let store;
    if (window.currentUser) {

      const preloadedState = { session: {currentUser: window.currentUser}};
      store = configureStore(preloadedState);

    } else {
      store = configureStore();
    }
      window.getState = store.getState;
      window.dispatch = store.dispatch;
      window.fetchAllArtists= fetchAllArtists;
      window.fetchSingleArtist = fetchSingleArtist;
      window.fetchSingleTrack = fetchSingleTrack;
    ReactDOM.render(<Root store={store}/>, root);
});
