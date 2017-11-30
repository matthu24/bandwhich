
import React from 'react';
import { Link } from 'react-router-dom';

const CommentItem = ({comment, artist, keyidx, currentUser, deleteComment}) => (
  (comment.artist_id === artist.id) ?
  (<li className="comment-body">
    {comment.body}
    <br/>

    <div className="comment-author">
      Posted by {comment.comment_author}
    </div>
    {
    (comment.user_id === currentUser.id) ?
    (<button className="delete-form" onClick={()=>deleteComment(comment.id)}>Delete</button>) :
    (<div></div>)
    }
  </li>) : (<div></div>)
);

  // {this.deleteButton(comment)}

  // <button onClick={deleteEvent(event.id)}>Delete</button>

export default CommentItem;
