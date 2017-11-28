import { RECEIVE_TRACK,CLEAR_CURRENT_TRACK } from '../actions/track';
import merge from 'lodash/merge';





const _nullTrack = {
  currentTrack: {audio_file_name: ""}
};

export default (state = _nullTrack, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACK:
      let newState = merge({},state);
        newState.currentTrack = action.track;
        //if they are the same, we want to pause the song,
        //and therefore assign currentTrack to "" again

      return newState;
    case CLEAR_CURRENT_TRACK:
      let nextState = merge({},state);
      nextState.currentTrack = {audio_file_name: ""};
      return nextState;

    default:
      return state;
  }
};
