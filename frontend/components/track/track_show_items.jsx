import React from 'react';
import { Link, Route } from 'react-router-dom';
import SongPlayer from './song_player';

// const TrackShowItems = props => {
//
//   return (
//
//
//     <li>
//       <div className='song-titles' >
//
//         {props.track.title}
//         <button>Play</button>
//         {<SongPlayer audio={props.track.audio_file_name}/>}
//       </div>
//     </li>
//
//   );
// };
//
// export default TrackShowItems;
//



class TrackShowItems extends React.Component {
  constructor(props){
    super(props);
    this.state={playing: false};
    this.playMusic = this.playMusic.bind(this);
  }

  playMusic(){
    if (this.state.playing === true) {
      this.setState({playing:false});
    } else {
      this.setState({playing:true});
    }
  }
  render () {
    return (
      <li>
        <div className='song-titles' >
          {this.props.track.title}
          <button onClick={this.playMusic}>Play</button>
          {<SongPlayer playing={this.state.playing} audio={this.props.track.audio_file_name}/>}
        </div>
      </li>
    );
  }
}

export default TrackShowItems;
