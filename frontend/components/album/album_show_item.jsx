import React from 'react';
import { Link, Route } from 'react-router-dom';

const AlbumShowItem = props => {
  const albumImage = props.album.image_file_name;
  return (

    <li>
      <div >
        <h2>{props.album.title}</h2>
          <p>by {props.artist.name}</p>
          <p className="bandwhich-text">Includes unlimited streaming via the free Bandwhich app, plus reviews from users like you.</p>
        <img className='album-image' src= {albumImage}/>
      </div>

    </li>
  );
};

export default AlbumShowItem;
