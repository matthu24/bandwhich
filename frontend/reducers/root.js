import { combineReducers } from 'redux';
// import sessionReducer from './session';
// import sessionErrorsReducer from './session_errors_reducer';
// import artistsReducer from './artists_reducer';




// export default combineReducers({
//   session: sessionReducer,
//   errors: sessionErrorsReducer,
//   artists: artistsReducer
// });


import entitiesReducer from './entities_reducer';
import sessionReducer from './session';
import sessionErrorsReducer from './session_errors_reducer';
import currentTrackReducer from './current_track_reducer';
// import uiReducer from './ui_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: sessionErrorsReducer,
  entities: entitiesReducer,
  ui: currentTrackReducer

});

// export default rootReducer;
