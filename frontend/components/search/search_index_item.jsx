import React from 'react';
import { Link } from 'react-router-dom';

const SearchIndexItem = (props) => {
  let imageFile = props.result.image_file_name ? props.result.image_file_name : 'https://s3-us-west-1.amazonaws.com/fullstackfiles/GenericMusic.png'

  let indexItemContent = props.result.name ? (
    <li className='search-item'>

      <Link className='search-title' to={`/artists/${props.result.id}`}>
        <img className='search-image' src={props.result.image_file_name}/>
      </Link>
      <Link className='search-title' to={`/artists/${props.result.id}`}>
        <div >{props.result.name}</div>
      </Link>
      <div className='search-type'>{props.result.type}</div>
      <br/>
    </li>
  ) : (
    <li className='search-item'>
      <Link className='search-title' to={`/artists/${props.result.artist_id}`}>
        <img className='search-image' src={imageFile}/>
      </Link>
    <Link className='search-title' to={`/artists/${props.result.artist_id}`}>

        <div >{props.result.title}</div>
      </Link>
      <div className='search-type'>{props.result.type}</div>

      <br/>
    </li>
  );

  return(
    <div>
      {indexItemContent}
    </div>
  )
}

export default SearchIndexItem;


// <Link className = 'artist-name' to={`/artists/${props.artist.id}`}>
//in order to link to artist s
