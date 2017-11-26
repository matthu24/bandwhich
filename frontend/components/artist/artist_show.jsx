import React from 'react';
// import AlbumShowContainer from './album_show_container';
import { Link, Route } from 'react-router-dom';
import ArtistShowItem from './artist_show_item';
// export default () => (
//   <div className="discover">
//     <h1>Discover</h1>
//   </div>
// );


class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchSingleArtist(this.props.match.params.artistId);
  }

  componentWillReceiveProps(newProps) {
  if (this.props.match.params.artistId !== newProps.match.params.artistId) {
    this.props.fetchSingleArtist(newProps.match.params.artistId);
  }
}

//so that artist state does not accumulate 
componentWillUnmount(){
  this.props.clearArtists();
}

  render(){
    const artist = this.props.artist;
    const album = this.props.album;
    //puts artist's album keys into an array
    // const albums =this.props.artist.albums;
    let content;
    if (artist) {
      content =
        <div>

          <ul>
            {Object.values(album).map((album,idx) => <ArtistShowItem key={idx} album={album} />)}
          </ul>

        </div>;
    }
    return(
      <div>
        {content}
      </div>
    );
  }
}
//
// <ul className="artist-albums">
//   {
//     albums.map(id => (
//       <li>{id}</li>
//     ))
//   }
// </ul>



// <ul>
//   {this.props.albums.map(album =><li>{album}</li>)}
// </ul>

export default ArtistShow;
