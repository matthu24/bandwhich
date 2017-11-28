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



//change playStatus in playMusic if
//playStatus is currently false
//OR if currentTrack's id === this.props.track.title

  playMusic(){
    this.props.changeCurrentTrack(this.props.track);
    if (this.props.playStatus === false || this.props.currentTrack.audio_file_name ===this.props.track.audio_file_name ) {
      this.props.changePlayStatus();
    }
  }

  render () {
    return (
      <li>
        <div className='song-titles' >
          <button onClick={this.playMusic} className="play-button"></button>
          {this.props.track.title}
        </div>
      </li>
    );
  }
}

export default TrackShowItems;
