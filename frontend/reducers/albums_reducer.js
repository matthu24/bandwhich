import { RECEIVE_ALBUM,RECEIVE_ALBUMS } from '../actions/album';
import {RECEIVE_ARTIST} from '../actions/artist';
import merge from 'lodash/merge';

export default (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    //must respond to receive artist because want to fill state
    //with just
    case RECEIVE_ARTIST:
      // let newState = action.artist.albums;
      // return newState;

      const albumArray = Object.values(action.artist.albums);
      const albums = albumArray.reduce((acc, album) => {
        acc[album.id] = album;
        return acc;
      }, {});
      return merge({}, state, albums);
  

    default:
      return state;
  }
};
