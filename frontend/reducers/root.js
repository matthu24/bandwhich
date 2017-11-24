import { combineReducers } from 'redux';
import sessionReducer from './session';
import sessionErrorsReducer from './session_errors_reducer';
import artistsReducer from './artists_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: sessionErrorsReducer,
  artists: artistsReducer
});
