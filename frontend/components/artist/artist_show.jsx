import React from 'react';
// import AlbumShowContainer from './album_show_container';
import { Link, Route } from 'react-router-dom';
import AlbumShowItem from '../album/album_show_item';
import TrackShowContainer from '../track/track_show_container';
import SongPlayer from '../track/song_player';




class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  //need this to get all my artist info (albums,tracks)
  componentDidMount(){
    this.props.fetchSingleArtist(this.props.match.params.artistId);
  }

  //I might only need this if my artist index page was still rendering
  //even after clicking on an artist show
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.artistId !== newProps.match.params.artistId) {
      this.props.fetchSingleArtist(newProps.match.params.artistId);
    }
  }

//so that artist state does not accumulate
  componentWillUnmount(){
    this.props.clearArtists();
    this.props.clearCurrentTrack();
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
      <div className="artist-page">
        <div className="artist-box">
          <div className = 'artist-box-left' >
            {Object.values(album).map((album1,idx) => <AlbumShowItem key={idx} album={album1} artist={artist}/>)}
          </div>
          <ol className= "artist-box-right" >
              <p className = "footnote1"> Digital album</p>
              <p className = "footnote2">Streaming + Download</p>
              {Object.values(tracks).map((track,idx) => <TrackShowContainer key={idx} track={track}/>)}
          </ol>
          {<SongPlayer playing={this.props.playStatus} audio={this.props.currentTrack.audio_file_name}/>}

          <div className="artist-box-far-right">
            <img className='artist-image' src= {artist.image_file_name}/>
            <div className="artist-bio">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
            </div>
          </div>

        </div>
      </div>
    }
    return(
      <div>
        {content}
      </div>
    );
  }
}


export default ArtistShow;
