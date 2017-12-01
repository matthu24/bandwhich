import React from 'react';
import {combineReducers} from 'redux';


import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';
import tracksReducer from './tracks_reducer';
import commentsReducer from './comments_reducer';


export default combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  tracks: tracksReducer,
  comments: commentsReducer
});
