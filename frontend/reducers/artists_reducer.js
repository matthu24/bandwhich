import { RECEIVE_ARTIST,RECEIVE_ARTISTS,CLEAR_ARTISTS } from '../actions/artist';
import merge from 'lodash/merge';

export default (artists={},action) => {
  Object.freeze(artists);
  switch (action.type) {
    case RECEIVE_ARTISTS:
     return merge({},artists,action.artists);

    case RECEIVE_ARTIST:
      // return merge({},artists,{[action.artist.id]:action.artist});
      return action.artist;
    case CLEAR_ARTISTS:
      return {};
    default:
      return artists;
  }
};
