import React from 'react';
import { Link, Route } from 'react-router-dom';

const ArtistIndexItem = props => {
  const artistImage = props.artist.image_file_name;
  return (


    <li key={props.idx} className="band-item">

      <Link className = 'artist-name' to={`/artists/${props.artist.id}`}>
        <img className='artist-image' src= {artistImage}/>
        {props.artist.name}
        <div className='artist-description'>{props.artist.genre}</div>
      </Link>

    </li>

  );
};

export default ArtistIndexItem;
