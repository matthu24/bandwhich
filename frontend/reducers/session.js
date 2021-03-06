import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';
import merge from 'lodash/merge';

const _nullSession = {
  currentUser: null
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = merge({},state);
      newState.currentUser = action.currentUser;
      // return Object.assign({}, { currentUser });
      return newState;
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};
