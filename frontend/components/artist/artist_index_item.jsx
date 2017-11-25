import React from 'react';
import { Link, Route } from 'react-router-dom';

const ArtistIndexItem = props => {
  const artistImage = props.artist.image_file_name;
  return (

    <li key={props.idx}>

      <img className='artist-image' src= {artistImage}/>
      <Link to={`/artists/${props.artist.id}`}>{props.artist.name}</Link>
    </li>
  );
};

export default ArtistIndexItem;
