import React from 'react';
// import AlbumShowContainer from './album_show_container';
import { Link, Route } from 'react-router-dom';
import AlbumShowItem from '../album/album_show_item';
import TrackShowItems from '../track/track_show_items';
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
    const tracks = this.props.tracks;
    //puts artist's album keys into an array
    // const albums =this.props.artist.albums;
    let content;
    if (artist) {
      content =
        <div>

          <ul className="Album-show">
            {Object.values(album).map((album,idx) => <AlbumShowItem key={idx} album={album} />)}
            {Object.values(tracks).map((track,idx) => <TrackShowItems key={idx} track={track}/>)}

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
