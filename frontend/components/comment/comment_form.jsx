import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.match.params.commentId) {
  //     this.props.fetchPost(this.props.match.params.commentId);
  //   }
  // }
  //
  // componentWillReceiveProps(newProps) {
  //   this.setState(newProps.comment);
  // }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSingleComment(this.state.comment);
  }

  render () {

    return (
      <div>
        <div>Leave a comment:</div>

        <form onSubmit={this.handleSubmit}>

          <label>
            <textarea
              className="comment-form"
              onChange={this.update('body')} />
          </label>

          <input className="comment-submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default CommentForm;
