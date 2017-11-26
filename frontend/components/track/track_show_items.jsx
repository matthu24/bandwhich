import React from 'react';
import { Link, Route } from 'react-router-dom';

const TrackShowItems = props => {

  return (

    <li>
      <div className = "tracks-show">
        {props.track.title}
      </div>
    </li>
  );
};

export default TrackShowItems;
