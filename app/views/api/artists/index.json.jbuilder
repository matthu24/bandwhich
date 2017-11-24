@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :name, :genre, :image_file_name
  end
end
