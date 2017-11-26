import React from 'react';
import { connect } from 'react-redux';
import {fetchAllArtists,fetchSingleArtist,clearArtists } from '../../actions/artist';
import ArtistShow from './artist_show';
import {values} from 'lodash';

const mapStateToProps = (state,ownProps) => ({
  artist: state.entities.artists,
  album: state.entities.albums
});

const mapDispatchToProps = dispatch => ({
  fetchSingleArtist: (id) => dispatch(fetchSingleArtist(id)),
  clearArtists: () => dispatch(clearArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistShow);
