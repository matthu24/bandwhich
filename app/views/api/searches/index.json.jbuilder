json.searchResults do
    json.array! @artists.each do |artist|
      json.set! :type, 'artist'
      json.partial! 'api/artists/artist', artist: artist
    end

    json.array! @albums.each do |album|
      json.set! :type, 'album'
      json.partial! 'api/albums/album', album: album
    end

    json.array! @tracks.each do |track|
      json.set! :type, 'track'
      json.partial! 'api/tracks/track', track: track
    end
end
