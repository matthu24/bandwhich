import React from 'react';
import {Link} from 'react-router-dom';


class Dropdown extends React.Component {
  render () {
    if(!this.props.results) return null;

    return (
      <div className="suggestions">
        <ul>
          {this.props.results.slice(0,3).map((result, key) => {
            let id = result.name ? result.id : result.artist_id;
            let name = result.name ? result.name : result.title;


            return(
              <li id="search-results-li">
                <Link to={`/artists/${id}`}>
                <p>{name}</p>
                </Link>
              </li>
            )

          })}
        </ul>
      </div>
    )
  }
}

export default Dropdown;
