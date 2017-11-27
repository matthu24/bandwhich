@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :artist_id, :title, :image_file_name
  end
end

#D
