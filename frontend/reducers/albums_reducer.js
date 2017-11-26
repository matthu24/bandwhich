import { RECEIVE_ALBUM,RECEIVE_ALBUMS } from '../actions/album';
import {RECEIVE_ARTIST} from '../actions/artist';
import merge from 'lodash/merge';

export default (albums={},action) => {
  Object.freeze(albums);
  switch (action.type) {
    //must respond to receive artist because want to fill state
    //with just 
    case RECEIVE_ARTIST:
      let newState = action.artist.albums;
      return newState;
    default:
      return albums;
  }
};
