import React from 'react';
import ArtistIndexItem from './artist_index_item';

import { Link, Route } from 'react-router-dom';
// export default () => (
//   <div className="discover">
//     <h1>Discover</h1>
//   </div>
// );

class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  //this is what changes the state and gets all the artists to fill the artist slice of state
  //when using ajax should use componentdidmount
  componentDidMount(){
    this.props.fetchAllArtists();
  }

  render(){

    //this is so that I have access to artists after first render
    //return null on first render when artists array is empty
    if (this.props.artists.length === 0) return null;

    const artist1 = this.props.artists[0];
    const artist2 = this.props.artists[1];
    const artist3 = this.props.artists[2];
    //artist1,2,3 on first render do not exist
    if (!artist1 || !artist2 || !artist3) return null;

    return(
      <div className = "spotlight-container">
        <div className = "spotlight">
          <div className="artist1">
            <Link className = 'artist-name' to={`/artists/${artist1.id}`}>
               <img className='spotlight1-image' src= "https://i.imgur.com/FFWYYGU.jpg" />
            </Link>
          </div>

          <div className = 'side-spotlight'>
            <div className="artist2">
              <Link className = 'artist-name' to={`/artists/${artist2.id}`}>
                <img className='spotlight2-image' src= "https://i.imgur.com/PfOGvOH.jpg" />
              </Link>
            </div>
            <div className="artist3">
              <Link className = 'artist-name' to={`/artists/${artist3.id}`}>
                <img className='spotlight3-image' src= "https://i.imgur.com/MtOVLwY.jpg" />
              </Link>
            </div>
          </div>
        </div>
      <div className="artist-box">
        <ul className="artist-index">
          {
            this.props.artists.map((artist,idx) => (
                <ArtistIndexItem key = {idx} artist={artist}/> ))
          }
        </ul>
      </div>
      </div>
    );
  }
}

export default ArtistIndex;
