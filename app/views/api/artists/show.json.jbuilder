json.partial! "/api/artists/artist", artist: @artist
albums = @artist.albums
json.albums do
  if @artist.albums
    @artist.albums.each do |album|
      json.set! album.id do
        json.extract! album, :artist_id,:title,:year,:image_file_name
      end
    end
  end
end
