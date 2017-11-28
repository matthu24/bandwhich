import {RECEIVE_ARTIST} from '../actions/artist';
import merge from 'lodash/merge';

export default(state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:

      // return ({}, )
      let newState = action.artist.tracks;
      return newState;

    default:
      return state;
  }
};
