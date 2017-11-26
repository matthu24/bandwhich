@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :artist_id, :album_id, :title, :track_num, :audio_file_name
  end
end
