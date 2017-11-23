import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session';
import merge from 'lodash/merge';


const _nullerrors = {
  errors: []
};

export default (errors = [], action) =>{
  Object.freeze(errors);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
    
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return null;

    default:
      return errors;
  }

};
