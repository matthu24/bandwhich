import React from 'react';
import { connect } from 'react-redux';
import {fetchAllArtists,fetchSingleArtist,clearArtists } from '../../actions/artist';
import {fetchSingleTrack} from '../../actions/track';
import ArtistShow from './artist_show';
import {values} from 'lodash';

//at this point, the state has changed because of mapDispatchToProps
//state.entities.artists is not all the artists now; it is only one
//because mapDispatchToProps allows componentDidMount to dispatch fetchSingleArtist
//which goes to the reducer and then changes the state
//so, mapStateToProps is affected by mapDispatchToProps in the sense that
//it allows componentDidMount to actually change the state when the path of a specific
//route is navigated to

// don't really have to use ownProps in this situation because
//there is only one artist in the state at this point
//my fetchSingleArtist action creator wipes out the artist slice of state
//and replaces it all with only the artist that was specified (by the id)
//as opposed to merging the new artist with the rest of the artists in the state
//in this case you would need own props
const mapStateToProps = (state,ownProps) => ({
  artist: state.entities.artists[ownProps.match.params.artistId],
  // artist: state.entities.artists,
  album: state.entities.albums,
  tracks: state.entities.tracks
});

const mapDispatchToProps = dispatch => ({
  fetchSingleArtist: (id) => dispatch(fetchSingleArtist(id)),
  clearArtists: () => dispatch(clearArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistShow);
