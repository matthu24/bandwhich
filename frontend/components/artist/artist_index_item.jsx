import React from 'react';

const ArtistIndexItem = props => {
  const artistImage = props.artist.image_file_name;
  return (

    <li key={props.idx}>

      <img className='artist-image' src= {artistImage}/>
    </li>
  );
};

export default ArtistIndexItem;
