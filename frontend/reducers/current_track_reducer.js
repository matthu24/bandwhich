import { RECEIVE_TRACK } from '../actions/track';
import merge from 'lodash/merge';

const _nullTrack = {
  currentTrack: {audio_file_name: ""}
};

export default (state = _nullTrack, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACK:
      let newState = merge({},state);
      
      if (newState.currentTrack!==action.track ) {
        newState.currentTrack = action.track;
        //if they are the same, we want to pause the song,
        //and therefore assign currentTrack to "" again
      } else {
        newState.currentTrack = {audio_file_name: ""};
      }

      return newState;

    default:
      return state;
  }
};
