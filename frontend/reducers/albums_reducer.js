import { RECEIVE_ALBUM,RECEIVE_ALBUMS } from '../actions/artist';
import merge from 'lodash/merge';

export default (albums={},action) => {
  Object.freeze(albums);
  switch (action.type) {
    case RECEIVE_ALBUM:
      return merge({},albums,{[action.album.id]:action.album});
    case RECEIVE_ALBUMS:
    //returns an object like: {22: {…}, 23: {…}, 24: {…}} because that's what our json view gives us
      return merge({},albums,action.albums);
    default:
      return albums;
  }
};
