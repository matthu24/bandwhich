json.extract! @comment, :id, :body, :user_id, :artist_id
json.comment_author @comment.user.username
