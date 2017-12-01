# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## Overview 

Bandwhich is a music app developed for users to discover music by local independant singer-songwriters.  It is written with a Rails back-end and React-redux front-end and uses Bandcamp (bandcamp.com) as a design inspiration.  All music and images are original content from myself and friends, and are hosted using AWS S3 Simple Storage.  The audio playback relies on React Howler.  Other technologies used include Postgresql database, jquery, Jbuilder, vanilla Javascript and react-router. Here is a link to the live site: https://bandwhich.herokuapp.com/#/.

## Feature highlights 

### User Authentication 

A simple Rails authentication pattern was implemented for this app.  Users can sign up for an account, and can log in using the same password credentials. Demo login is also available so that signup isn't necessary.

### Music Streaming 

Users can navigate artist pages to view albums and tracks using the discover page.  Each track is individually playable; or users can start from the beginning of the album using the main play button at the top!  Tracks can pause and restart where they left off, as the current song is saved to the state of the app.

<img height="200px" width="350px" src="https://s3-us-west-1.amazonaws.com/fullstackfiles/ReadMeScreenshot3.png"/>


### Comments

Users can leave comments/reviews on artist pages.  Deleting comments are only available to the user that authored the comment.

## Challenges 

### Song Selection and Play

<img height="200px" width="350px" src="https://s3-us-west-1.amazonaws.com/fullstackfiles/ReadMeScreenshot1.png"/>

A bit of interesting logic was required to pull off a seamless streaming and song selection experience for the user.  

Two things need to exist in the state shape in order for streaming music to work properly. The first is a boolean play status: true meaning a song is playing and false meaning it is on pause. The second is a current track.  Each time an artist is first shown, the first song on the artist's album is automatically loaded into the state's current track, and the play status also defaults to false.  At this point, each individual track's play button will trigger a change in the play status, as well as the current track (however, clicking on a track will not change the current track state if the track is already the current one).  Once a track starts playing (the play status has changed to true), the play status does not change if other tracks are played subsequently, i.e. the play status continues to be true as you click on different tracks. Only when you click on a track twice in a row does the play status render false.  Below is a snippet of the logic described above. 

```javascript
  playMusic(){
    this.props.changeCurrentTrack(this.props.track);
    if (this.props.playStatus === false || 
      this.props.currentTrack.audio_file_name ===this.props.track.audio_file_name ) {
      this.props.changePlayStatus();
    }
  }
```

The CSS used for play and pause also relied on these two state attributes.  If the play status is true, and the track matches the current track name, then a pause circle is rendered for that particular track; otherwise, a play button renders as the default button.

```javascript
render () {
    if (this.props.playStatus === true && this.props.currentTrack.audio_file_name ===this.props.track.audio_file_name){
      return (
        <li>
          <div className='song-titles' >
            <i onClick={this.playMusic} className="fa fa-pause-circle"></i>
            {this.props.track.title}
          </div>
        </li>
      );
    } else{
      return (
        <li>
          <div className='song-titles' >
            <i onClick={this.playMusic} className="fa fa-play-circle"></i>
            {this.props.track.title}
          </div>
        </li>
      );
    }

```


### Comments



## Future Directions

### Search 

### Playlists






