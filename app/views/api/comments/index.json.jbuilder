@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :body, :artist_id, :user_id
  end
end
