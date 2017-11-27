import React, { Component } from 'react';
import ReactHowler from 'react-howler';

class SongPlayer extends React.Component {
  // This sound file may not work due to cross-origin setting
  constructor(props){
    super(props);
  }

  render () {
    const audioFileName = this.props.audio;
    return (
      <ReactHowler
        src={[audioFileName]}
        playing={true}
      />
  );
  }
}

export default SongPlayer;
