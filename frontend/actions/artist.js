import { fetchArtist,fetchArtists } from '../utils/session';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
})

const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
})

export const fetchArtists = () => dispatch => {
  return fetchArtists().then(artists => dispatch(receiveArtists(artists)))
}

export const fetchArtist = id => dispatch => {
  return fetchArtist(id).then(artist => dispatch(receiveArtist(artist)))
}
