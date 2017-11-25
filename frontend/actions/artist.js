import { fetchArtist,fetchArtists } from '../utils/artist_util';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const fetchAllArtists = () => dispatch => (
 fetchArtists().then(artists => dispatch(receiveArtists(artists)))
);

export const fetchSingleArtist = id => dispatch => {
 return fetchArtist(id).then(artist => dispatch(receiveArtist(artist)));
};
