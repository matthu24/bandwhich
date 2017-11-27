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

  componentDidMount(){
    this.props.fetchAllArtists();
  }

  // componentWillReceiveProp(newProps){
  //   this.props.fetchAllArtists();
  // }


  render(){
    // const spotlightArtists = this.props.artists.slice(0,3);
    // const artist1 = this.props.artists[0];
    // debugger

    // if (!this.props.artists) return null;
    //
    const artist1 = this.props.artists[0];
    // console.log(artist);
    // debugger


    return(
      <div>
        <div className = "spotlight">
          <div className="artist1">
              <img className='spotlight1-image' src= "https://i.imgur.com/FFWYYGU.jpg" />
          </div>
          <div className = 'side-spotlight'>
            <div className="artist2">
                <img className='spotlight2-image' src= "https://i.imgur.com/PfOGvOH.jpg" />
            </div>
            <div className="artist3">
                <img className='spotlight3-image' src= "https://i.imgur.com/MtOVLwY.jpg" />
            </div>
          </div>
        </div>
        {console.log(this.props.artists)}
        <ul className="artist-index">
          {
            this.props.artists.map((artist,idx) => (
                <ArtistIndexItem key = {idx} artist={artist}/> ))
          }
        </ul>
      </div>
    );
  }
}

export default ArtistIndex;
