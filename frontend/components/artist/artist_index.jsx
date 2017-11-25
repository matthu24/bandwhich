import React from 'react';

// export default () => (
//   <div className="discover">
//     <h1>Discover</h1>
//   </div>
// );


class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){

    this.props.fetchAllArtists();

  }

  render(){

    return(
      <ul>
        {
          this.props.artists.map(artist => (
              <li>{artist.name}</li> ))
        }
      </ul>
    );
  }
}
//
//

export default ArtistIndex;
