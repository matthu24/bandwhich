import React from 'react';
// import AlbumShowContainer from './album_show_container';
import { Link, Route } from 'react-router-dom';
import AlbumShowItem from '../album/album_show_item';
import TrackShowContainer from '../track/track_show_container';
import SongPlayer from '../track/song_player';
import CommentFormContainer from '../comment/comment_form_container';



class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.playMusic=this.playMusic.bind(this);
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

  playMusic(){
      this.props.changePlayStatus();
  }

  render(){
    const artist = this.props.artist;
    const album = this.props.album;
    const tracks = this.props.tracks;

    let mainPlayIcon;
    if (this.props.playStatus) {
      mainPlayIcon =
      <i onClick={this.playMusic} className="fa fa-pause-circle"></i>;
    } else{
      //this means play status is false, nothing is playing
      
      mainPlayIcon =
      <i onClick={this.playMusic} className="fa fa-play-circle"></i>;
    }

    let content;
    if (artist) {
      content =
      <div className="artist-page">
        <div className="artist-box">

          <div className = 'artist-box-left'>
            {Object.values(album).map((album1,idx) => <AlbumShowItem key={idx} album={album1} artist={artist}/>)}
            <CommentFormContainer artist={artist} />
          </div>

          <ol className= "artist-box-right" >

            {<SongPlayer playing={this.props.playStatus} audio={this.props.currentTrack.audio_file_name}/>}

            <div className="music-player">
              <div>
              <div className="main-play-icon">{mainPlayIcon}</div>
              Now playing: <br></br> {this.props.currentTrack.title}
            </div>
              <img className='sound-wave' src="https://s3-us-west-1.amazonaws.com/fullstackfiles/Soundwave.png" />
            </div>

              <p className = "footnote1"> Digital album</p>
              <p className = "footnote2">Streaming + Download</p>
              {Object.values(tracks).map((track,idx) => <TrackShowContainer key={idx} track={track}/>)}
          </ol>

          <div className="artist-box-far-right">
            <img className='artist-avatar' src= {artist.image_file_name}/>
            <div className="artist-bio">
              <div>{artist.name}</div>
              <p>{artist.genre}</p>

            </div>
          </div>

        </div>
      </div>;
    }
    return(
      <div className = "full-album-page">
        {content}
      </div>
    );
  }
}



// <div id='bars'>
// <div class='bar'></div>
// <div class='bar'></div>
// <div class='bar'></div>
// <div class='bar'></div>
// <div class='bar'></div>
// <div class='bar'></div>
// <div class='bar'></div>
// <div class='bar'></div>
// <div class='bar'></div>
// <div class='bar'></div>
// </div>


export default ArtistShow;
