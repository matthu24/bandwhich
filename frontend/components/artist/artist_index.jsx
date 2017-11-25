import React from 'react';
import ArtistIndexItem from './artist_index_item';
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

  render(){
    return(
      <div>
        <ul className="artist-index">
          {
            this.props.artists.map((artist,idx) => (
                <ArtistIndexItem idx = {idx} artist={artist}/> ))
          }
        </ul>
      </div>
    );
  }
}


export default ArtistIndex;
