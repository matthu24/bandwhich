import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {body:""};
  }

  componentDidMount() {
    this.props.fetchAllComments(this.props.artist.id);
  }
  //
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

  render () {
    const { comments,currentUser,artist} = this.props;
    return (
      <div>
        <div>Leave a comment:</div>

        <form onSubmit={this.handleSubmit}>

          <label>
            <textarea
              id="comment-form"
              className="comment-form"
              onChange={this.update('body')}
              value={this.state.body} />
          </label>

          <input className="comment-submit" type="submit" />
        </form>

        <div className="comments-list">
          <ul>
          {
            comments.map((comment,id) =>
              (comment.artist_id === artist.id) ?
              (<li key={id} className="comment-body">
                {comment.body}
                <br/>
                <div className="comment-author">
                  Posted by {comment.comment_author}
                </div>
              </li>) : (<div></div>)
          )
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default CommentForm;
