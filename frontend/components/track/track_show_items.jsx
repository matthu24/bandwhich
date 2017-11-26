import React from 'react';
import { Link, Route } from 'react-router-dom';

const TrackShowItems = props => {

  return (

    <li>
      <div className = "tracks-show">
        <div>{props.track.title}</div>

      </div>

    </li>
  );
};

export default TrackShowItems;
