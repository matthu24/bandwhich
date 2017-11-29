import { CHANGE_PLAY_STATUS } from '../actions/track';
import merge from 'lodash/merge';


export default (state = false, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CHANGE_PLAY_STATUS:
      let newState;
      newState = state === false ? true : false;
      return newState;
    default:
      return state;
  }
};
