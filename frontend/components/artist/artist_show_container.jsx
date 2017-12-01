import React from 'react';
import { connect } from 'react-redux';
import {fetchAllArtists,fetchSingleArtist,clearArtists } from '../../actions/artist';
import {clearCurrentTrack} from '../../actions/track';
import {changePlayStatus} from '../../actions/track';
import ArtistShow from './artist_show';
import {values} from 'lodash';

const mapStateToProps = (state,ownProps) => ({
  artist: state.entities.artists[ownProps.match.params.artistId],
  // artist: state.entities.artists,
  album: state.entities.albums,
  tracks: state.entities.tracks,
  currentTrack: state.ui.currentTrack,
  playStatus: state.play_status
});

const mapDispatchToProps = dispatch => ({
  fetchSingleArtist: (id) => dispatch(fetchSingleArtist(id)),
  clearArtists: () => dispatch(clearArtists()),
  clearCurrentTrack: () => dispatch(clearCurrentTrack()),
  changePlayStatus: () => dispatch(changePlayStatus())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistShow);
