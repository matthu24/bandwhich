json.partial! "/api/artists/artist", artist: @artist
albums = @artist.albums

#need this for the albums reducer when it responds to a receiveArtist action
json.albums do
  if @artist.albums
    @artist.albums.each do |album|
      json.set! album.id do
        json.extract! album, :artist_id,:title,:year,:image_file_name
      end
    end
  end
end

#likewise 
tracks = @artist.tracks
json.tracks do
  if @artist.tracks
    @artist.tracks.each do |track|
      json.set! track.id do
        json.extract! track, :id, :artist_id, :album_id, :title, :track_num, :audio_file_name
      end
    end
  end
end
