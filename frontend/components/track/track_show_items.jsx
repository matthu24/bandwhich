import React from 'react';
import { Link, Route } from 'react-router-dom';
import SongPlayer from './song_player';


class TrackShowItems extends React.Component {
  constructor(props){
    super(props);
    // this.state={playing: false};
    this.playMusic = this.playMusic.bind(this);
  }

  //local playMusic
  // playMusic(){
  //   if (this.state.playing === true) {
  //     this.setState({playing:false});
  //   } else {
  //     this.setState({playing:true});
  //   }
  // }

  //dispatch the action for resetting currentTrack
  //Move SongPlayer out of track show items
  //have it always play, playing=true
  //
  playMusic(){
    this.props.changeCurrentTrack(this.props.track);
  }

  render () {
    return (
      <li>
        <div className='song-titles' >
          <button onClick={this.playMusic}>Play</button>
          {this.props.track.title}
        </div>
      </li>
    );
  }
}

export default TrackShowItems;
