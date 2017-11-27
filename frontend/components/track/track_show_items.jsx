import React from 'react';
import { Link, Route } from 'react-router-dom';
import SongPlayer from './song_player';

const TrackShowItems = props => {

  return (


    <li>
      <div className='song-titles' >

        {props.track.title}
        {<SongPlayer audio={props.track.audio_file_name}/>}
      </div>
    </li>

  );
};

export default TrackShowItems;
