import { connect } from 'react-redux';
import {fetchAllArtists,fetchSingleArtist } from '../../actions/artist';


const mapStateToProps = state => ({
  artists: Object.values(state.entities.artists)
});

const mapDispatchToProps = dispatch => ({
  fetchAllArtists: () => dispatch(fetchAllArtists())
});
