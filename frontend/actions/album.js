import { fetchAlbum,fetchAlbums } from '../utils/album_util';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';


const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
});

const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const fetchSingleAlbum = (id) => dispatch => {
  return fetchAlbum(id).then(album => dispatch(receiveAlbum(album)));
};

export const fetchAllAlbums = () => dispatch => {
  return fetchAlbums().then(albums => dispatch(receiveAlbums(albums)));
};
