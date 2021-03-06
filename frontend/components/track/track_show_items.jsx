import React from 'react';
import { Link, Route } from 'react-router-dom';
import SongPlayer from './song_player';


class TrackShowItems extends React.Component {
  constructor(props){
    super(props);
    // this.state={playing: false};
    this.playMusic = this.playMusic.bind(this);
    this.changePlayButton = this.changePlayButton.bind(this);
    this.state = {buttonClassName:"play-button"};
  }

//change playStatus in playMusic if
//playStatus is currently false
//OR if currentTrack's id === this.props.track.title

  playMusic(){
    this.props.changeCurrentTrack(this.props.track);
    if (this.props.playStatus === false ||
      this.props.currentTrack.audio_file_name ===this.props.track.audio_file_name ) {
      this.props.changePlayStatus();
    }
  }

  changePlayButton(){
    // this.setState({buttonClassName:"pause-button"});
  }

  //want to render a pause symbol if play_status is true AND ui.currentTrack is the song that the button is attached to
  //if this.props.playStatus === true && this.props.currentTrack.audio_file_name ===this.props.track.audio_file_name
  render () {
    if (this.props.playStatus === true && this.props.currentTrack.audio_file_name ===this.props.track.audio_file_name){
      return (
        <li>
          <div className='song-titles' >
            <i onClick={this.playMusic} className="fa fa-pause-circle"></i>
            {this.props.track.title}
          </div>
        </li>
      );
    } else{
      return (
        <li>
          <div className='song-titles' >
            <i onClick={this.playMusic} className="fa fa-play-circle"></i>
            {this.props.track.title}
          </div>
        </li>
      );
    }

  }
}

export default TrackShowItems;
