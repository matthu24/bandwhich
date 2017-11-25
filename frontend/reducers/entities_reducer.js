import React from 'react';
import {combineReducers} from 'redux';


import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';


export default combineReducers({

  artists: artistsReducer,
  albums: albumsReducer
});

// export default entitiesReducers;
