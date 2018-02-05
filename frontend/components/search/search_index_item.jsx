import React from 'react';
import { Link } from 'react-router-dom';

const SearchIndexItem = (props) => {
  let indexItemContent = props.result.name ? (
    <li>
      <Link to={`/artists/${props.result.id}`}>
      <div>{props.result.name}</div>
      </Link>
      <div>{props.result.type}</div>
      <br/>
    </li>
  ) : (
    <li>
      <div>{props.result.title}</div>
      <div>{props.result.type}</div>
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
