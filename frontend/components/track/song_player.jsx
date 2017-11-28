import React, { Component } from 'react';
import ReactHowler from 'react-howler';

class SongPlayer extends React.Component {
  // This sound file may not work due to cross-origin setting
  constructor(props){
    super(props);
    this.state = {playing: true};
    this.handlePause = this.handlePause.bind(this);
  }

  handlePause(){
    this.setState({playing:false});
  }

  render () {
    const audioFileName = this.props.audio;
    const playing = this.props.playing;
    return (
      <div>
      <ReactHowler
        src={[audioFileName]}
        playing={playing}

      />
    <button onClick={this.handlePause}>Pause</button>
    </div>
  );
  }
}

export default SongPlayer;
