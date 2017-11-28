import React from 'react';
import { connect } from 'react-redux';
import {changeCurrentTrack} from '../../actions/track';
import TrackShowItems from './track_show_items';
import {values} from 'lodash';

//track is like ownprops destructured 
const mapStateToProps = (state, {track}) => ({
  track
});

const mapDispatchToProps = dispatch => ({
  changeCurrentTrack: (track) => dispatch(changeCurrentTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShowItems);
