import { fetchArtist,fetchArtists } from '../utils/artist_util';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const CLEAR_ARTISTS = 'CLEAR_ARTISTS';

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

const clearArtistsAction = () => ({
  type: CLEAR_ARTISTS,
  artists: null
});

export const clearArtists = () => dispatch => {
  return dispatch(clearArtistsAction());
};

export const fetchAllArtists = () => dispatch => (
 fetchArtists().then(artists => dispatch(receiveArtists(artists)))
);

export const fetchSingleArtist = id => dispatch => {
 return fetchArtist(id).then(artist => dispatch(receiveArtist(artist)));
};
