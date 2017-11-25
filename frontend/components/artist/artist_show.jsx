import React from 'react';
import AlbumShowContainer from './album_show_container';
import { Link, Route } from 'react-router-dom';
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

  render(){
    const artist = this.props.artist;
    return(
      <div>

      </div>
    );
  }
}


export default ArtistShow;
