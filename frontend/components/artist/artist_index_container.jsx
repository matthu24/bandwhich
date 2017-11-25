import React from 'react';
import { connect } from 'react-redux';
import {fetchAllArtists,fetchSingleArtist } from '../../actions/artist';
import ArtistIndex from './artist_index';
import {values} from 'lodash';

const mapStateToProps = state => ({
  artists: Object.values(state.entities.artists)
});

const mapDispatchToProps = dispatch => ({
  fetchAllArtists: () => dispatch(fetchAllArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistIndex);
