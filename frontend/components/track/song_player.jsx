import React, { Component } from 'react';
import ReactHowler from 'react-howler';

class SongPlayer extends React.Component {
  // This sound file may not work due to cross-origin setting
  constructor(props){
    super(props);
    // this.state = {playing: true};
    this.state = {duration:0};
    this.getDuration= this.getDuration.bind(this);
    this.getSeek = this.getSeek.bind(this);
    this.formatTime=this.formatTime.bind(this);
    // this.player = null;
    this.handlePause = this.handlePause.bind(this);
  }

  handlePause(){
    this.setState({playing:false});
  }

//   getHowler () {
//   this.player.howler
// }


//progress bar
//<input type="range">
//set interval every 500 ms to get position
handleOnLoad() {
let duration = Math.floor(this.player.duration);
this.setState({duration: this.player.duration()});
}

  getDuration () {
    return this.player.duration();
  }

  //get the position of playback
  getSeek () {
    return this.player.seek();
  }

  //set the position of playback
  setSeek () {
    return this.player.seek(0.5);
  }

  formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);

  return (minutes < 10 ? `0${minutes}` : minutes) + ':' + (seconds < 10 ? `0${seconds}` : seconds);
}

  render () {

    const audioFileName = this.props.audio;

    if(audioFileName === "") return null;

    const playing = this.props.playing;
    return (
      <div>
        <ReactHowler
          preload='true'
          ref={(ref) => (this.player=ref)}
          onLoad={this.handleOnLoad}
          src={[audioFileName]}
          playing={this.props.playing}
        />


    </div>
  );
  }
}

export default SongPlayer;
