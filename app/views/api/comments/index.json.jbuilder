@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :body, :artist_id, :user_id
    json.comment_author comment.user.username
    # json.comment_author :artist_id
  end
end
