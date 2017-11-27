import React from 'react';
import { connect } from 'react-redux';
import {fetchAllArtists,fetchSingleArtist } from '../../actions/artist';
import ArtistIndex from './artist_index';
import {values} from 'lodash';

const mapStateToProps = state => ({
  artists: Object.values(state.entities.artists)
});

//When this container is called in the route (when you navigate to a certain path)
//mapDispatchToProps actually dispatches the action creator fetchAllArtists
//the state is then changed to how you specified in the reducer 
const mapDispatchToProps = dispatch => ({
  fetchAllArtists: () => dispatch(fetchAllArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistIndex);
