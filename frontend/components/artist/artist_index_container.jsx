import { connect } from 'react-redux';
import requestAllArtists 


const mapStateToProps = state => ({
  artists: Object.values()
})

const mapDispatchToProps = dispatch => ({
  requestAllArtists: () => dispatch(requestAllArtists())
})
