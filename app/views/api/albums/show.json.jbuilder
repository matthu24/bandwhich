json.partial! "/api/albums/album", album: @album
tracks = @album.tracks
json.tracks do
  if @album.tracks
    @album.tracks.each do |track|
      json.set! track.id do
        json.extract! track, :album_id,:title,:year,:image_file_name
      end
    end
  end
end
