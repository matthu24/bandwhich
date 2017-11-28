import { fetchTrack,fetchTracks } from '../utils/track_util';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';


const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track
});

const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks
});



export const changeCurrentTrack = (track) => dispatch => {
  return dispatch(receiveTrack(track));
};

// export const fetchAllAlbums = () => dispatch => {
//   return fetchAlbums().then(albums => dispatch(receiveAlbums(albums)));
// };
