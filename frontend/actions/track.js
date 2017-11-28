// import { fetchTrack,fetchTracks } from '../utils/track_util';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const CLEAR_CURRENT_TRACK = 'CLEAR_CURRENT_TRACK';

const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track
});

const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks
});

const clearTrackAction = () => ({
  type: CLEAR_CURRENT_TRACK

});

export const clearCurrentTrack = () => dispatch => {
  return dispatch(clearTrackAction());
};


export const changeCurrentTrack = (track) => dispatch => {
  return dispatch(receiveTrack(track));
};

// export const fetchAllAlbums = () => dispatch => {
//   return fetchAlbums().then(albums => dispatch(receiveAlbums(albums)));
// };
