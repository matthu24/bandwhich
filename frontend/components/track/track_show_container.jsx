import React from 'react';
import { connect } from 'react-redux';
import {changeCurrentTrack, changePlayStatus} from '../../actions/track';
import TrackShowItems from './track_show_items';

import {values} from 'lodash';

//track is like ownprops destructured
const mapStateToProps = (state, {track}) => ({
  track,
  playStatus: state.play_status,
  currentTrack: state.ui.currentTrack
});

const mapDispatchToProps = dispatch => ({
  changeCurrentTrack: (track) => dispatch(changeCurrentTrack(track)),
  changePlayStatus: () => dispatch(changePlayStatus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShowItems);
