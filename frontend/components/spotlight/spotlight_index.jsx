import React from 'react';

// export default () => (
//   <div className="discover">
//     <h1>Discover</h1>
//   </div>
// );

class SpotlightIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllArtists();
  }

  render(){
    return(
      <div>
        Spotlight
      </div>
    );
  }
}

export default SpotlightIndex;
//
// <ul className="spotlight-index">
//   {
//     this.props.artists.map((artist,idx) => (
//         <ArtistIndexItem key = {idx} artist={artist}/> ))
//   }
// </ul>
