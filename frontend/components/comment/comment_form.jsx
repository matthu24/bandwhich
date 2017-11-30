import React from 'react';
import CommentItem from './comment_item';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.deleteButton=this.deleteButton.bind(this);
    this.state = {body:""};
  }

  componentDidMount() {
    this.props.fetchAllComments(this.props.artist.id);
  }
  //this is necessary for handleSubmit to clear form for some reason...
  componentWillReceiveProps(newProps) {
    this.setState({body:newProps.comment});
  }

  update(field) {
    return (e) => {
      this.setState({body:e.target.value} );
    };
  }

  //create singlecomment takes the comment object => {body: "sdfd"} which is what the local state is set as

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSingleComment(this.state,this.props.artist.id);
    const form = document.getElementById("comment-form");
    form.value = "";
  }

  // deleteButton(comment) {
  //   if(this.props.currentUser.username === comment.comment_author){
  //
  //     return(
  //       <button onClick = {() => this.props.deleteSingleComment(comment.id)}>Delete</button>
  //     );
  //   }
  // }


  render () {
    const { comments,currentUser,artist} = this.props;
    // if (comments.length ===0) {
    //   return null;
    // }
    return (
      <div>


        <div className="leave-comment">Leave a comment:</div>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea
              id="comment-form"
              className="comment-form"
              onChange={this.update('body')}
              value={this.state.body} />
          </label>

          <br></br>
          <input className="comment-submit" type="submit" />
        </form>

        <div className="comments-list">
          <ul>
          {
            comments.map((comment,idx) =>
              <CommentItem
                key={idx}
                comment={comment}
                artist={artist}
                deleteComment={this.props.deleteSingleComment}
                currentUser={currentUser}/>
            )
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default CommentForm;





// (comment.artist_id === artist.id) ?
// (<li key={id} className="comment-body">
//   {comment.body}
//   <br/>
//   {this.deleteButton(comment)}
//   <div className="comment-author">
//     Posted by {comment.comment_author}
//   </div>
// </li>) : (<div></div>)







// {(comment.user_id === currentUser.id) ?
// (<button className="delete-form" onClick={() =>this.props.deleteSingleComment(comment.id)}>Delete</button>) :
// (<div></div>)}
