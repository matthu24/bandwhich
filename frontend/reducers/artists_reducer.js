import { RECEIVE_ARTIST,RECEIVE_ARTISTS } from '../actions/artist';
import merge from 'lodash/merge';

export default (artists={},action) => {
  Object.freeze(artists);
  switch (action.type) {
    case RECEIVE_ARTISTS:
     return merge({},artists,action.artists);

    case RECEIVE_ARTIST:
      return merge({},artists,{[action.artist.id]:action.artist});
    default:
      return artists;
  }
};