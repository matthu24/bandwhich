import React from 'react';

// export default () => (
//   <div className="discover">
//     <h1>Discover</h1>
//   </div>
// );


class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentWillMount(){
    // this.props.fetchAllArtists();

  }

  render(){

    return(
      <ul>
        {
          <h1>ddf</h1>
        }
      </ul>
    );
  }
}
//
// this.props.artists.map(artist => (
//     <li>{artist.name}</li> ))

export default ArtistIndex;
