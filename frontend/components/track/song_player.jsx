import React, { Component } from 'react';
import ReactHowler from 'react-howler';

class SongPlayer extends React.Component {
  // This sound file may not work due to cross-origin setting
  constructor(props){
    super(props);
    // this.state = {playing: true};
    this.state = {progress:0};
    this.player = null;
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

  getDuration () {
    this.player.duration();
  }

  //get the position of playback
  getSeek () {
    this.player.seek();
  }

  //set the position of playback
  setSeek () {
    this.player.seek(0.5);
  }

  render () {
    let howler;
    howler = (
      <ReactHowler
        ref={(ref) => (this.player = ref)}
        src={[audioFileName]}
        playing={this.props.playing}

      />
    );



    const audioFileName = this.props.audio;

    if(audioFileName === "") return null;

    const playing = this.props.playing;
    return (
      <div>
        <ReactHowler
          ref={(ref) => (this.player=ref)}
          src={[audioFileName]}
          playing={this.props.playing}
        />

    </div>
  );
  }
}

export default SongPlayer;
