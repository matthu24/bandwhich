import React from 'react';
import { Link, Route } from 'react-router-dom';

const AlbumShowItem = props => {
  const albumImage = props.album.image_file_name;
  return (

    <li>
      <div className = "album-show">
        <h2>{props.album.title}</h2>
        <img className='album-image' src= {albumImage}/>
      </div>

    </li>
  );
};

export default AlbumShowItem;
