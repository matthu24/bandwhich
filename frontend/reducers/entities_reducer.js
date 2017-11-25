import React from 'react';
import {combineReducers} from 'redux';


import artistsReducer from './artists_reducer';



export default combineReducers({

  artists: artistsReducer
});

// export default entitiesReducers;
