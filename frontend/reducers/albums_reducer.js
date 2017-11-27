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
      // access action.artist.albums from the artist JSON
      
      const albums = albumArray.reduce((acc, album) => {
        acc[album.id] = album;
        return acc;
      }, {});
      return merge({}, state, albums);

      //If we had an album index for a particular artist, we would have a
      //receive album action type that would just return the album

      //this action would be triggered when we clicked on a particluar album
      //in the album index

      // In this case, where an artist has more than one album, the tracks reducer
      //would only respond to a receive album action rather than a receive artist
      //action (because we don't want the tracks when just navigating to an artists
      //show page, we only want the list of albums in our state)
      //

    default:
      return state;
  }
};
